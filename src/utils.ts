
import getPlatformConfiguration from './platformConfiguration';
import * as flPlayerInterface from './third-party/fl-player-es6/fl-player-interface.es';
import * as flPlatformAuthorizer from './third-party/fl-player-es6/fl-platform-authorizer.es';
import * as flContentAuthorization from './third-party/fl-player-es6/fl-content-authorization.es';

type PlatformClient = {
  /**
   * Unique identifier of the client or device.
   */
  id: string;

  /**
   * Name of the client or device.
   */
  name: string;
}

const platformClientDataKeyStorage = 'client-name';
const contentId = 'CDC4A7D8-8CEE-4147-9F88-273F9FEB90A3';

const savePlatformClient = (client: PlatformClient) => {
  localStorage.setItem(platformClientDataKeyStorage, JSON.stringify(client))
};

const getCachedPlatformClient = () =>{
  const rawPlatformClient = localStorage.getItem(platformClientDataKeyStorage)
  if (rawPlatformClient) {
    return JSON.stringify(rawPlatformClient) as any as PlatformClient;
  }
  return null;
}

export const getAsset = ()=>{
  const platformConfig = getPlatformConfiguration();

  function getPlatformConfig() {
    return {
      clientID: platformConfig.CLIENT_ID,
      clientSecret: platformConfig.CLIENT_SECRET,
      xClientId: platformConfig.X_CLIENT_ID,
      authorizationEndPoint: platformConfig.AUTHORIZATION_ENDPOINT,
    };
  }

  console.log('platformConfig', platformConfig);

  const platformAuthorizer = flPlatformAuthorizer.createPlatformAuthorizer(
    getPlatformConfig(),
    {
      fetchUserAuthorizationToken: () => {
        return { accessToken: '' };
      },
    },
  );

  let platformClient;

  const cachedPlatformClient = getCachedPlatformClient();
  const hasCachedPlatformClient = !!cachedPlatformClient;

  if (hasCachedPlatformClient) {
    const platformClient = flPlatformAuthorizer.createPlatformClient(
      cachedPlatformClient.id,
      cachedPlatformClient.name,
    );
    savePlatformClient(platformClient);
  } else {
    platformClient = flPlatformAuthorizer.createPlatformClient();
  }

  const contentAuthconfiguration = {
    endPointUrl: platformConfig.CONTENT_AUTH_ENDPOINT,
    clientRegistrationEndPointUrl: platformConfig.CLIENT_REGISTERATION_ENDPOINT,
  };
  
  const contentAuthorizer = flContentAuthorization.createContentAuthorizer(
                                                      contentAuthconfiguration,
                                                      platformAuthorizer,
                                                      platformClient);

  const asset = contentAuthorizer.authorizePlayback({
    mediaID: contentId,
    consumptionType: flContentAuthorization.ConsumptionType.VOD,
    catalogType: 'movie',
    mediaType: flPlayerInterface.MediaType.DASH,
    drmScheme: flPlayerInterface.DrmScheme.WIDEVINE,
  });

  return asset;
  
}