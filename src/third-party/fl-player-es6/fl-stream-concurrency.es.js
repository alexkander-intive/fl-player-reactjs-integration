/*! ******************************************************************************* 
   Package Name: fl-stream-concurrency
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
import{PLAYBACK_STATES as e}from"./fl-player-interface.es";import{createRequestBuilder as r,AsyncUtil as t}from"./fl-foundation.es";import{AuthorizationUtil as c}from"./fl-platform-authorizer.es";function a(e,a,n){const o=n&&n.maxRetries;return{putStreamForDeviceId:n=>async function(n){try{const i={deviceId:n},s=r().url(e).path("/user/stream/create").put(i).headers({accept:"application/json"}).build();return t.retryOnNetworkFailure((()=>c.makeAuthorizedRequest(s,a)),o),Promise.resolve()}catch(e){return Promise.reject(e)}}(n),deleteStreamForDeviceId:n=>async function(n){try{const i={deviceId:n},s=r().url(e).path(`/user/stream/delete/${n}`).delete(i).headers({accept:"application/json"}).build();return t.retryOnNetworkFailure((()=>c.makeAuthorizedRequest(s,a)),o),Promise.resolve()}catch(e){return Promise.reject(e)}}(n)}}function n(r,t,c,n=a(t.endPointUrl,c)){let o;const i=t.syncIntervalMS||3e3,s=n;let u=!1;function l(){clearInterval(o),o=void 0}return{get streamConcurrencyService(){return s},get deviceId(){return r},processPlayerStateChange(t){switch(t.playerState){case e.STARTED:!function(e){if(o)return;o=setInterval((()=>{!function(e){s.putStreamForDeviceId(r).catch((r=>{e.abort(r),l()}))}(e)}),i)}(t),u=!1;break;case e.PAUSED:case e.IDLE:u||(s.deleteStreamForDeviceId(r).catch((e=>{})),u=!0),l()}}}}const o="7.0.56";export{n as createStreamConcurrencyResolver,a as createStreamConcurrencyService,o as version};

