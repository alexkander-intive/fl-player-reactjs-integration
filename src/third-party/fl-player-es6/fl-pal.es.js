/*! ******************************************************************************* 
   Package Name: fl-pal
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
import{createError as e,ErrorCodes as o,createLogger as n,LoggerLevel as i,UtilFactory as t}from"fl-foundation";const r={adWillPlayMuted:!1,continuousPlayback:!1,iconsSupported:!1,playerType:"FL Player",videoHeight:480,videoWidth:640},a=Object.freeze({SESSION_INIT_FAILURE:1537});class s{constructor(t,r){this.createSessionError=(n,i)=>{const t=e(n,i);return e(a.SESSION_INIT_FAILURE|o.ERROR_CATEGORY_MASK_THIRDPARTY,i,t)},this.logger=r||n(i.OFF,"FL_PAL_SESSION"),this.nonceLoader=this.createNonceLoader(t),this.logger.log("PAL session created.")}async initialize(e){this.deferred_=new t.Deferred;const o=this.createNonceRequest(e);try{const e=await this.nonceLoader.loadNonceManager(o);this.logger.log("PAL session initialized."),this.nonceManager=e,this.deferred_.resolve(e.getNonce())}catch(e){const o=`PAL session initialization failed. ${e}`;this.logger.warn(o);const n=this.createSessionError(-1,o);this.deferred_.reject(n)}return this.deferred_.promise}sendAdClick(){this.nonceManager.sendAdClick()}sendAdTouch(e){this.nonceManager.sendAdTouch(e)}sendPlaybackStart(){this.nonceManager.sendPlaybackStart()}sendPlaybackEnd(){this.nonceManager.sendPlaybackEnd()}shutdown(){this.logger.log("PAL session destroyed."),this.nonceLoader=void 0,this.nonceManager=void 0}createNonceLoader(e){const o=new goog.pal.ConsentSettings;return o.allowStorage=e,new goog.pal.NonceLoader(o)}createNonceRequest(e){const o={...r,...e},n=new goog.pal.NonceRequest;return o.adWillAutoPlay&&(n.adWillAutoPlay=o.adWillAutoPlay),n.adWillPlayMuted=o.adWillPlayMuted,n.continuousPlayback=o.continuousPlayback,n.descriptionUrl=o.descriptionUrl,n.iconsSupported=o.iconsSupported,o.nonceLengthLimit&&(n.nonceLengthLimit=o.nonceLengthLimit),o.omidPartnerName&&(n.omidPartnerName=o.omidPartnerName),o.omidPartnerVersion&&(n.omidPartnerVersion=o.omidPartnerVersion),o.omidVersion&&(n.omidVersion=o.omidVersion),n.playerType=o.playerType,n.playerVersion=o.playerVersion,n.ppid=o.ppid,n.videoHeight=o.videoHeight,n.videoWidth=o.videoWidth,n}}function d(e,o){return new s(e,o)}const c="7.0.56";export{d as createPalSession,c as version};

