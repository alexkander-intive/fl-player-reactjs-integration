
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
const contentId = '306C8BAB-A230-4E60-A8D5-DA588056027F';

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
  // const response = await fetch(platformConfig.CONFIG_ENDPOINT, {
  //   headers: {
  //     "Authorization":
  //       "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzozZDQyNmRkYi1iY2I0LTRiOWQtODA1NS01Y2NjMzNjZDIzZjIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiZWRnZS1zZXJ2aWNlIl0sImNsaWVudF9pZCI6Imlvcy11aS1hcHAiLCJleHAiOjE2NjI0OTIwMjIsImV4dCI6e30sImlhdCI6MTY2MjQ4ODQyMiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmQyYy1zdGFnLnF1aWNrcGxheS5jb20vIiwianRpIjoiY2FlOTg5YmUtOWQwNy00YjYyLWFiN2YtYmM0MTcwNzJkYjU3IiwibmJmIjoxNjYyNDg4NDIyLCJzY3AiOlsib3BlbmlkIiwib2ZmbGluZSJdLCJzdWIiOiJpb3MtdWktYXBwIn0.enoCqm1FBpPX6x-XMB_6LC7o2zeebyMI9N2roYDNsXZ5RwygyYX9YT1ukBpsnHqwtkrZBplKyCOBvz6OWqf-eUirQi79Daiy89EUFUfAxIIYNjRN5CYsJM4vNeyEEp340cmzJw-fqhaWS6yNtPP-_6DJ2v_rQRFeo9oWWJ23NTZW4itVumz_UrTrF1bDYnMYXW_iLsfDzHV6y1FCIixEr-S6kMmG0_JTHuFimQ91kmqVrmVc5fJPp7lliXxoU3d5Qq4N6BdPhDHp5W4XaRP2keCkWRtRpY7Q3vctFAVAUurEJ8V9WT5KK6YszGC5Ut_878olkUQMeiB1EDVM_i0ZTLuNntpCz6zAmC8DuhR8WeSi6oOLaBeIw3fmb7bDmVoyyJ5eD2uWZAmdIQPdn01v2ycXfZ3dJ0t9vmVzeNGcREWR3DNocPIBVUxUc1j-I-j0yRcI2M08xndhykXVOtmJEFAGXuUeeuczevgKEDOx2EaOt24ey4cf8XSmZaaM2vV_ITIKp_tuC1znLj-6Y2CktKjRL4F8bqa2VHstb0RQOZTSHS4sSqh7mgY9ik9qNYlvXDY5cyq3QLZ1gm-QQ2qqKvIuVvDs0W0Bmv4opMwdq-4zyCq8yCEGOSxuYUBPAvbr6rv4FPXx4byWLgbv3v3mnv3BQjq5XyrHB28nvM7cvfw",
  //       "X-Authorization": "eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..9hSYO95ByEv-lFSE.Mw_fZqA2FD1CBKl8v9x61NeT9QtCPtbJx_RJJM_02bTa3NHNAdK50v0UXZdkth5NvWdounANo-JL5_BxrzEm1ncJwbKVNKw8i79fTPfCQrACQZBIT1Zy11ievx6mm0ehLK5VDEhe-wtMBs7hrQukHgB1T5ESRf1lui9b4b8mdDaQkKMReAhi0P3OOF1SxGYdQDyF_2bJNl2TuGRcgSZHwOMHZj3oKyvSmMI1m5QrbtA0jmyn9WhGvFueh5g3CWy0lsbn1VF0DjMDy8xw6Ff2KKhxxHJHgxKqP_VyI2vjlWMHnv8UP9AffT4xJmWZ04XAhkev32QtJxNwRbF6ZM1JdaPd0zzDIuXN68zG7gual3jG3SW2s-qysoVi0vSJ0YITdeMILSGRyYHaU8uEuvMw895WfVjbYLhHQLFbTAIEFlixE4D8NAw23vcpVlCyKBUNaKUMkfqB4OZFZP5-aFohX_yc_F_M4IPCOgCo84Lrz6Cv4WFzYXDen7gNlB8g521T6HjPAVRL3QKn1un5CNiZ6AbYeCsRsztb9WuFH-ZwE6LO2vvGDUhHbSYQFisqHb9Ie0ffwra_7Rl2q0jaHUZ7Ve9ezMi6XQUyo-n6U-yBQXBkzB6lBlQJVPooYQJfpDtyj2vKcfjrm0aoRIzcF8ktfnPPZRFhPgEpHkcTtyMY1IflqX4.S-Z_kit18pIbPFqATswTTA",
  //     }
  // });
  // const json = await response.json();
  // console.log(json)

  function getPlatformConfig() {
    return {
      clientID: platformConfig.CLIENT_ID,
      clientSecret: platformConfig.CLIENT_SECRET,
      xClientId: platformConfig.X_CLIENT_ID,
      authorizationEndPoint: platformConfig.AUTHORIZATION_ENDPOINT,    
    };
  }

  const platformAuthorizer = flPlatformAuthorizer.createPlatformAuthorizer(
    getPlatformConfig(),
    {
      fetchUserAuthorizationToken: () => {
        return { accessToken: "eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..9hSYO95ByEv-lFSE.Mw_fZqA2FD1CBKl8v9x61NeT9QtCPtbJx_RJJM_02bTa3NHNAdK50v0UXZdkth5NvWdounANo-JL5_BxrzEm1ncJwbKVNKw8i79fTPfCQrACQZBIT1Zy11ievx6mm0ehLK5VDEhe-wtMBs7hrQukHgB1T5ESRf1lui9b4b8mdDaQkKMReAhi0P3OOF1SxGYdQDyF_2bJNl2TuGRcgSZHwOMHZj3oKyvSmMI1m5QrbtA0jmyn9WhGvFueh5g3CWy0lsbn1VF0DjMDy8xw6Ff2KKhxxHJHgxKqP_VyI2vjlWMHnv8UP9AffT4xJmWZ04XAhkev32QtJxNwRbF6ZM1JdaPd0zzDIuXN68zG7gual3jG3SW2s-qysoVi0vSJ0YITdeMILSGRyYHaU8uEuvMw895WfVjbYLhHQLFbTAIEFlixE4D8NAw23vcpVlCyKBUNaKUMkfqB4OZFZP5-aFohX_yc_F_M4IPCOgCo84Lrz6Cv4WFzYXDen7gNlB8g521T6HjPAVRL3QKn1un5CNiZ6AbYeCsRsztb9WuFH-ZwE6LO2vvGDUhHbSYQFisqHb9Ie0ffwra_7Rl2q0jaHUZ7Ve9ezMi6XQUyo-n6U-yBQXBkzB6lBlQJVPooYQJfpDtyj2vKcfjrm0aoRIzcF8ktfnPPZRFhPgEpHkcTtyMY1IflqX4.S-Z_kit18pIbPFqATswTTA" };
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
      platformClient = flPlatformAuthorizer.createPlatformClient("firstlight-msg-staging-deviceId-001", "web");
    }

    const contentAuthconfiguration = {
    endPointUrl: platformConfig.CONTENT_AUTH_ENDPOINT,
    clientRegistrationEndPointUrl: platformConfig.CLIENT_REGISTERATION_ENDPOINT,
  };
  
  const contentAuthorizer = flContentAuthorization.createContentAuthorizer(
                                                      contentAuthconfiguration,
                                                      platformAuthorizer,
                                                      platformClient);

                                                      console.log(contentAuthorizer)
                                                      
  const asset = contentAuthorizer.authorizePlayback({
    mediaID: contentId,
    consumptionType: flContentAuthorization.ConsumptionType.LIVE,
    catalogType: 'channel',
    mediaType: flPlayerInterface.MediaType.DASH,
    drmScheme: flPlayerInterface.DrmScheme.WIDEVINE,
    playbackMode: flContentAuthorization.PlaybackMode.LIVE,
  });

  return asset;
  
}