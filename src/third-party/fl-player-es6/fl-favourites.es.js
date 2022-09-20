/*! ******************************************************************************* 
   Package Name: fl-favourites
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
import{createRequestBuilder as t}from"./fl-foundation.es";import{AuthorizationUtil as e}from"./fl-platform-authorizer.es";function r(r,u){function o(e){return t().url(r).path(e).get().build()}return{getFavourites:(o,n,a,i)=>async function(o,n,a,i){try{const c={};o&&(c.pageNumber=o),n&&(c.pageSize=n),a&&(c.sort=a),i&&(c.order=i);const s=t().url(r).path("/user/favorite/list").get().queryParameters(c).build();return function(t){const e=[];return t.data.forEach((t=>{const r={contentId:t.itemId,timestamp:t.ut};e.push(r)})),e}(await e.makeAuthorizedRequest(s,u))}catch(t){return Promise.reject(t)}}(o,n,a,i),getFavourite:t=>async function(t){try{const r=`/user/favorite/lookup/${t}`;return{contentId:(await e.makeAuthorizedRequest(o(r),u)).data.itemId}}catch(t){return Promise.reject(t)}}(t),putFavourite:o=>async function(o){try{const n=function(e){const u={itemId:e};return t().url(r).path("/user/favorite/create").put(u).build()}(o);return await e.makeAuthorizedRequest(n,u),Promise.resolve()}catch(t){return Promise.reject(t)}}(o),deleteFavourite:o=>async function(o){try{return await e.makeAuthorizedRequest(function(e){return t().url(r).path(`/user/favorite/delete/${e}`).delete("").build()}(o),u),Promise.resolve()}catch(t){return Promise.reject(t)}}(o),getFavouriteCount:()=>async function(){try{const t="/user/favorite/count";return(await e.makeAuthorizedRequest(o(t),u)).data}catch(t){return Promise.reject(t)}}()}}var u,o;!function(t){t[t.ASC=0]="ASC",t[t.DESC=1]="DESC"}(u||(u={})),function(t){t.TIMESTAMP="ut"}(o||(o={}));const n="7.0.56";export{o as SortBy,u as SortOrder,r as createFavouriteService,n as version};

