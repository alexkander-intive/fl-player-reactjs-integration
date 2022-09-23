export type EnviromentType = any;

export const environments: EnviromentType = {
  msgTveStaging: {
    NAME: "MSG TVE Staging",
    CONFIG_ENDPOINT: "https://config-service.msgcms-stag.quickplay.com/remote/config?flat=true",
    LIVE_CHANNEL_ENDPOINT: "https://live-data-store.msgcms-stag.quickplay.com/content/urn/resource/catalog",
    METADATA_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com/content/urn/resource/catalog",
    AUTHORIZATION_ENDPOINT: "https://auth.d2c-stag.quickplay.com/oauth2/token",
    CLIENT_REGISTERATION_ENDPOINT: "https://device-register-service.d2c-stag.quickplay.com/",
    CONTENT_AUTH_ENDPOINT: "https://playback-auth-service.d2c-stag.quickplay.com",
    BOOKMARK_ENDPOINT: "https://bookmark-service.d2c-stag.quickplay.com",
    STREAM_CONCURRENCY_ENDPOINT: "https://stream-service.d2c-stag.quickplay.com",
    FAVOURITE_ENDPOINT: "https://favorite-service.d2c-stag.quickplay.com",
    SEARCH_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com/content/search",
    LOOKUP_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com",
    LIVE_LOOKUP_ENDPOINT: "https://live-data-store.msgcms-stag.quickplay.com/content/lookup",
    LIVE_SEARCH_ENDPOINT: "https://live-metadata.msgcms-stag.quickplay.com/content/search",
    IMAGE_RESIZER_ENDPOINT: "https://image-resizer-cloud.msgcms-stag.quickplay.com/image",
    HEARTBEAT_ENDPOINT: "https://heartbeat-service.d2c-stag.quickplay.com",
    LICENSE_RENEW_ENDPOINT: "https://license-refresh.d2c-stag.quickplay.com",
    CLIENT_ID: "webclient-ui-app",
    CLIENT_SECRET: "806c6696-fffc-4667-91fb-08a77d55e072",
    X_CLIENT_ID: "msg-msggo-web",
    DEVICE_NAME: "web",
  },
  msgDtcStaging: {
    NAME: "MSG DTC Staging",
    CONFIG_ENDPOINT: "https://config-service.msgcms-stag.quickplay.com/remote/config?flat=true",
    LIVE_CHANNEL_ENDPOINT: "https://live-data-store.msgcms-stag.quickplay.com/content/urn/resource/catalog",
    METADATA_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com/content/urn/resource/catalog",
    AUTHORIZATION_ENDPOINT: "https://auth.d2c-stag.quickplay.com/oauth2/token",
    CLIENT_REGISTERATION_ENDPOINT: "https://device-register-service.d2c-stag.quickplay.com/",
    CONTENT_AUTH_ENDPOINT: "https://playback-auth-service.d2c-stag.quickplay.com",
    BOOKMARK_ENDPOINT: "https://bookmark-service.d2c-stag.quickplay.com",
    STREAM_CONCURRENCY_ENDPOINT: "https://stream-service.d2c-stag.quickplay.com",
    FAVOURITE_ENDPOINT: "https://favorite-service.d2c-stag.quickplay.com",
    SEARCH_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com/content/search",
    LOOKUP_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com",
    LIVE_LOOKUP_ENDPOINT: "https://live-data-store.msgcms-stag.quickplay.com/content/lookup",
    LIVE_SEARCH_ENDPOINT: "https://live-metadata.msgcms-stag.quickplay.com/content/search",
    IMAGE_RESIZER_ENDPOINT: "https://image-resizer-cloud.msgcms-stag.quickplay.com/image",
    HEARTBEAT_ENDPOINT: "https://heartbeat-service.d2c-stag.quickplay.com",
    LICENSE_RENEW_ENDPOINT: "https://license-refresh.d2c-stag.quickplay.com",
    CLIENT_ID: "webclient-ui-app",
    CLIENT_SECRET: "806c6696-fffc-4667-91fb-08a77d55e072",
    X_CLIENT_ID: "msg-msgdtc-web",
    DEVICE_NAME: "web",
  },
};

const defaultConfig = {
  DEVICE_NAME: "web",
  CLIENT_ID: "webclient-ui-app",
  CLIENT_SECRET: "806c6696-fffc-4667-91fb-08a77d55e072",
  X_CLIENT_ID: "msg-msgdtc-web",
};

let currentEnviromentName = "msgTveStaging";
let platformConfiguration: EnviromentType;

const updateConfiguration = (environmentConfig: string) => {
  platformConfiguration = Object.assign({}, defaultConfig, environmentConfig);
};

export const setEnvironment = function (value: string) {
  currentEnviromentName = value;
  if (environments[currentEnviromentName]) {
    updateConfiguration(environments[currentEnviromentName]);
    console.info(`enviroment setted: "${currentEnviromentName}"`)
  } else {
    console.warn(`enviroment "${currentEnviromentName}" is not defined`)
  }
};

export const getPlatformConfiguration = ()=> platformConfiguration;

export default getPlatformConfiguration;