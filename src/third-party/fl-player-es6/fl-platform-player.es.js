/*! ******************************************************************************* 
   Package Name: fl-platform-player
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
export{BufferUtils,ExternalPlayer,PlayerErrorCodes,StringUtils,Uint8ArrayUtils,createComposablePlayer,createPlayerBuilder,createUVPPlayerBuilder,createWebMafPlayerBuilder}from"./fl-player.es";import{isError as e}from"./fl-foundation.es";async function r(r){try{const t=await r.ensureAuthorization();return e(t)?Promise.reject(t):{licenseRequestHandler:function(e){if(!e.headers&&"query"===e.authToken&&e.uris&&e.uris.length>0){const r=e.uris[0].indexOf("?")>=0?"&":"?";e.uris[0]+=`${r}authorization=${t.accessToken}`}else e.headers.Authorization=`Bearer ${t.accessToken}`},licenseResponseHandler:function(e){}}}catch(e){return Promise.reject(e)}}const t="7.0.56";export{r as getLicenseHandler,t as version};

