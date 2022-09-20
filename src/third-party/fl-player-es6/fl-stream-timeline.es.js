/*! ******************************************************************************* 
   Package Name: fl-stream-timeline
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
import{createLogger as t,LoggerLevel as e,UtilFactory as n,createError as s,ErrorCodes as i}from"fl-foundation";import{StreamTimelineEvent as r,Action as o,PLAYBACK_STATES as a}from"fl-player-interface";class h{constructor(n,s,i){this.streamMetadataConfiguration=n,this.eventStore=s,this.isSubscribed=!1,this.logger_=i||t(e.OFF,"FL_STREAM_TIMELINE")}get configuration(){return this.streamMetadataConfiguration}get gameInfo(){return this.eventStore.gameInfo}async subscribeToEventStore(){this.isSubscribed=!0;const t=await this.eventStore.subscribeToGameMetadata(this.streamMetadataConfiguration.leagueName,this.streamMetadataConfiguration.gameId);return void 0!==t?t:this.eventStore.subscribeToEvents(this.streamMetadataConfiguration.leagueName,this.streamMetadataConfiguration.gameId,"plays")}setup(){return this.isSubscribed?(this.logger_.warn("StreamTimelineManager is already setup. Ignoring duplicate setup."),Promise.resolve(void 0)):this.subscribeToEventStore()}exists(){return this.eventStore.exists(this.streamMetadataConfiguration.leagueName,this.streamMetadataConfiguration.gameId)}shutdown(){this.eventStore&&(this.eventStore.unsubscribeFromGameMetadata(),this.eventStore.unsubscribeFromEvents(),this.isSubscribed=!1)}updatePlayer(t){this.eventStore.updatePlayer(t)}}var c;!function(t){t.ADDED="added",t.MODIFIED="modified",t.DELETED="deleted",t.UNKNOWN="unknown"}(c||(c={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class d extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(g,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new d(s,o,n)}}const g=/\{\$([^}]+)}/g;function p(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(m(n)&&m(r)){if(!p(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function m(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t){return t&&t._delegate?t._delegate:t}class v{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new u;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,"[DEFAULT]"===s?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class E{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new w(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(b||(b={}));const T={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},I=b.INFO,S={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},A=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=S[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class C{constructor(t){this.name=t,this._logLevel=I,this._logHandler=A,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?T[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const N="@firebase/app",_=new C("@firebase/app"),k={[N]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},R=new Map,L=new Map;function O(t,e){try{t.container.addComponent(e)}catch(n){_.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function M(t){const e=t.name;if(L.has(e))return _.debug(`There were multiple attempts to register component ${e}.`),!1;L.set(e,t);for(const e of R.values())O(e,t);return!0}function F(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new v("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e,n){var s;let i=null!==(s=k[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void _.warn(t.join(" "))}M(new v(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;U="",M(new v("platform-logger",(t=>new D(t)),"PRIVATE")),V(N,"0.7.11",U),V(N,"0.7.11","esm2017"),V("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
V("firebase","9.6.1","app");var q,B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},j=j||{},H=B||self;function z(){}function $(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function G(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var K="closure_uid_"+(1e9*Math.random()>>>0),W=0;function Q(t,e,n){return t.call.apply(t.bind,arguments)}function X(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Y(t,e,n){return(Y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Q:X).apply(null,arguments)}function J(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Z(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function tt(){this.s=this.s,this.o=this.o}var et={};tt.prototype.s=!1,tt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,K)&&t[K]||(t[K]=++W)}(this);delete et[t]}},tt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},st=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function it(t){return Array.prototype.concat.apply([],arguments)}function rt(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ot(t){return/^[\s\xa0]*$/.test(t)}var at,ht=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ct(t,e){return-1!=t.indexOf(e)}function ut(t,e){return t<e?-1:t>e?1:0}t:{var lt=H.navigator;if(lt){var dt=lt.userAgent;if(dt){at=dt;break t}}at=""}function ft(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function gt(t){const e={};for(const n in t)e[n]=t[n];return e}var pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mt(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<pt.length;e++)n=pt[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function yt(t){return yt[" "](t),t}yt[" "]=z;var vt,wt,Et=ct(at,"Opera"),bt=ct(at,"Trident")||ct(at,"MSIE"),Tt=ct(at,"Edge"),It=Tt||bt,St=ct(at,"Gecko")&&!(ct(at.toLowerCase(),"webkit")&&!ct(at,"Edge"))&&!(ct(at,"Trident")||ct(at,"MSIE"))&&!ct(at,"Edge"),At=ct(at.toLowerCase(),"webkit")&&!ct(at,"Edge");function Ct(){var t=H.document;return t?t.documentMode:void 0}t:{var Dt="",Nt=(wt=at,St?/rv:([^\);]+)(\)|;)/.exec(wt):Tt?/Edge\/([\d\.]+)/.exec(wt):bt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(wt):At?/WebKit\/(\S+)/.exec(wt):Et?/(?:Version)[ \/]?(\S+)/.exec(wt):void 0);if(Nt&&(Dt=Nt?Nt[1]:""),bt){var _t=Ct();if(null!=_t&&_t>parseFloat(Dt)){vt=String(_t);break t}}vt=Dt}var kt,Rt={};function Lt(){return function(t){var e=Rt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ht(String(vt)).split("."),n=ht("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ut(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ut(0==i[2].length,0==r[2].length)||ut(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(H.document&&bt){var Ot=Ct();kt=Ot||(parseInt(vt,10)||void 0)}else kt=void 0;var Mt=kt,Ft=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",z,e),H.removeEventListener("test",z,e)}catch(t){}return t}();function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Pt(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(St){t:{try{yt(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Vt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pt.Z.h.call(this)}}xt.prototype.h=function(){this.defaultPrevented=!0},Z(Pt,xt);var Vt={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),qt=0;function Bt(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++qt,this.ca=this.fa=!1}function jt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ht(t){this.src=t,this.g={},this.h=0}function zt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=nt(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(jt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $t(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Ht.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=$t(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Bt(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var Gt="closure_lm_"+(1e6*Math.random()|0),Kt={};function Wt(t,e,n,s,i){if(s&&s.once)return Xt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wt(t,e[r],n,s,i);return null}return n=se(n),t&&t[Ut]?t.N(e,n,G(s)?!!s.capture:!!s,i):Qt(t,e,n,!1,s,i)}function Qt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=G(i)?!!i.capture:!!i,a=ee(t);if(a||(t[Gt]=a=new Ht(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=te;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ft||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Zt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Xt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xt(t,e[r],n,s,i);return null}return n=se(n),t&&t[Ut]?t.O(e,n,G(s)?!!s.capture:!!s,i):Qt(t,e,n,!0,s,i)}function Yt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Yt(t,e[r],n,s,i);else s=G(s)?!!s.capture:!!s,n=se(n),t&&t[Ut]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$t(r=t.g[e],n,s,i))&&(jt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ee(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$t(e,n,s,i)),(n=-1<t?e[t]:null)&&Jt(n))}function Jt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Ut])zt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ee(e))?(zt(n,t),0==n.h&&(n.src=null,e[Gt]=null)):jt(t)}}}function Zt(t){return t in Kt?Kt[t]:Kt[t]="on"+t}function te(t,e){if(t.ca)t=!0;else{e=new Pt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Jt(t),t=n.call(s,e)}return t}function ee(t){return(t=t[Gt])instanceof Ht?t:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(t){return"function"==typeof t?t:(t[ne]||(t[ne]=function(e){return t.handleEvent(e)}),t[ne])}function ie(){tt.call(this),this.i=new Ht(this),this.P=this,this.I=null}function re(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;mt(e=new xt(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=oe(o,s,!0,e)&&i}if(i=oe(o=e.g=t,s,!0,e)&&i,i=oe(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=oe(o=e.g=n[r],s,!1,e)&&i}function oe(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&zt(t.i,o),i=!1!==a.call(h,s)&&i}}return i&&!s.defaultPrevented}Z(ie,tt),ie.prototype[Ut]=!0,ie.prototype.removeEventListener=function(t,e,n,s){Yt(this,t,e,n,s)},ie.prototype.M=function(){if(ie.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)jt(n[s]);delete e.g[t],e.h--}}this.I=null},ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var ae=H.JSON.stringify;function he(){var t=pe;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ce,ue=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new le),(t=>t.reset()));class le{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function de(t){H.setTimeout((()=>{throw t}),0)}function fe(t,e){ce||function(){var t=H.Promise.resolve(void 0);ce=function(){t.then(me)}}(),ge||(ce(),ge=!0),pe.add(t,e)}var ge=!1,pe=new class{constructor(){this.h=this.g=null}add(t,e){const n=ue.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function me(){for(var t;t=he();){try{t.h.call(t.g)}catch(t){de(t)}var e=ue;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ge=!1}function ye(t,e){ie.call(this),this.h=t||1,this.g=e||H,this.j=Y(this.kb,this),this.l=Date.now()}function ve(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function we(t,e,n){if("function"==typeof t)n&&(t=Y(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Y(t.handleEvent,t)}return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Ee(t){t.g=we((()=>{t.g=null,t.i&&(t.i=!1,Ee(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Z(ye,ie),(q=ye.prototype).da=!1,q.S=null,q.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),re(this,"tick"),this.da&&(ve(this),this.start()))}},q.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},q.M=function(){ye.Z.M.call(this),ve(this),delete this.g};class be extends tt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ee(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(t){tt.call(this),this.h=t,this.g={}}Z(Te,tt);var Ie=[];function Se(t,e,n,s){Array.isArray(n)||(n&&(Ie[0]=n.toString()),n=Ie);for(var i=0;i<n.length;i++){var r=Wt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ae(t){ft(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Jt(t)}),t),t.g={}}function Ce(){this.g=!0}function De(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return ae(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Te.prototype.M=function(){Te.Z.M.call(this),Ae(this)},Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ce.prototype.Aa=function(){this.g=!1},Ce.prototype.info=function(){};var Ne={},_e=null;function ke(){return _e=_e||new ie}function Re(t){xt.call(this,Ne.Ma,t)}function Le(t){const e=ke();re(e,new Re(e,t))}function Oe(t,e){xt.call(this,Ne.STAT_EVENT,t),this.stat=e}function Me(t){const e=ke();re(e,new Oe(e,t))}function Fe(t,e){xt.call(this,Ne.Na,t),this.size=e}function xe(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return H.setTimeout((function(){t()}),e)}Ne.Ma="serverreachability",Z(Re,xt),Ne.STAT_EVENT="statevent",Z(Oe,xt),Ne.Na="timingevent",Z(Fe,xt);var Pe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ve={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ue(){}function qe(t){return t.h||(t.h=t.i())}function Be(){}Ue.prototype.h=null;var je,He={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ze(){xt.call(this,"d")}function $e(){xt.call(this,"c")}function Ge(){}function Ke(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Te(this),this.P=Qe,t=It?125:void 0,this.W=new ye(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new We}function We(){this.i=null,this.g="",this.h=!1}Z(ze,xt),Z($e,xt),Z(Ge,Ue),Ge.prototype.g=function(){return new XMLHttpRequest},Ge.prototype.i=function(){return{}},je=new Ge;var Qe=45e3,Xe={},Ye={};function Je(t,e,n){t.K=1,t.v=Tn(mn(e)),t.s=n,t.U=!0,Ze(t,null)}function Ze(t,e){t.F=Date.now(),sn(t),t.A=mn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Fn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new We,t.g=Fs(t.l,n?e:null,!t.s),0<t.O&&(t.L=new be(Y(t.Ia,t,t.g),t.O)),Se(t.V,t.g,"readystatechange",t.gb),e=t.H?gt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Le(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function tn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function en(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=nn(t,n),s==Ye){4==e&&(t.o=4,Me(14),i=!1),De(t.j,t.m,null,"[Incomplete Response]");break}if(s==Xe){t.o=4,Me(15),De(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}De(t.j,t.m,s,null),cn(t,s)}tn(t)&&s!=Ye&&s!=Xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Me(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ds(e),e.L=!0,Me(11))):(De(t.j,t.m,n,"[Invalid Chunked Response]"),hn(t),an(t))}function nn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ye:(n=Number(e.substring(n,s)),isNaN(n)?Xe:(s+=1)+n>e.length?Ye:(e=e.substr(s,n),t.C=s+n,e))}function sn(t){t.Y=Date.now()+t.P,rn(t,t.P)}function rn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=xe(Y(t.eb,t),e)}function on(t){t.B&&(H.clearTimeout(t.B),t.B=null)}function an(t){0==t.l.G||t.I||ks(t.l,t)}function hn(t){on(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ve(t.W),Ae(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function cn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Bn(n.i,t)))if(n.I=t.N,!t.J&&Bn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;_s(n),vs(n)}Cs(n),Me(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=xe(Y(n.ab,n),6e3));if(1>=qn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Ls(n,11)}else if((t.J||n.g==t)&&_s(n),!ot(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(ct(t,"spdy")||ct(t,"quic")||ct(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(jn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,bn(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Ms(s,s.H?s.la:null,s.W),o.J){Hn(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(on(a),sn(a)),s.g=o}else As(s);0<n.l.length&&bs(n)}else"stop"!=c[0]&&"close"!=c[0]||Ls(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ls(n,7):ys(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}Le(4)}catch(t){}}function un(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if($(t)||"string"==typeof t)st(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if($(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if($(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function ln(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ln)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function dn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];fn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)fn(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(q=Ke.prototype).setTimeout=function(t){this.P=t},q.gb=function(t){t=t.target;const e=this.L;e&&3==ds(t)?e.l():this.Ia(t)},q.Ia=function(t){try{if(t==this.g)t:{const u=ds(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||It||this.g&&(this.h.h||this.g.ga()||fs(this.g)))){this.I||4!=u||7==e||Le(8==e||0>=l?3:2),on(this);var n=this.g.ba();this.N=n;e:if(tn(this)){var s=fs(this.g);t="";var i=s.length,r=4==ds(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){hn(this),an(this);var o="";break e}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ot(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Me(12),hn(this),an(this);break t}De(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cn(this,n)}this.U?(en(this,u,o),It&&this.i&&3==u&&(Se(this.V,this.W,"tick",this.fb),this.W.start())):(De(this.j,this.m,o,null),cn(this,o)),4==u&&hn(this),this.i&&!this.I&&(4==u?ks(this.l,this):(this.i=!1,sn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),hn(this),an(this)}}}catch(t){}},q.fb=function(){if(this.g){var t=ds(this.g),e=this.g.ga();this.C<e.length&&(on(this),en(this,t,e),this.i&&4!=t&&sn(this))}},q.cancel=function(){this.I=!0,hn(this)},q.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Le(3),Me(17)),hn(this),this.o=2,an(this)):rn(this,this.Y-t)},(q=ln.prototype).R=function(){dn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},q.T=function(){return dn(this),this.g.concat()},q.get=function(t,e){return fn(this.h,t)?this.h[t]:e},q.set=function(t,e){fn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},q.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var gn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof pn){this.g=void 0!==e?e:t.g,yn(this,t.j),this.s=t.s,vn(this,t.i),wn(this,t.m),this.l=t.l,e=t.h;var n=new Rn;n.i=e.i,e.g&&(n.g=new ln(e.g),n.h=e.h),En(this,n),this.o=t.o}else t&&(n=String(t).match(gn))?(this.g=!!e,yn(this,n[1]||"",!0),this.s=In(n[2]||""),vn(this,n[3]||"",!0),wn(this,n[4]),this.l=In(n[5]||"",!0),En(this,n[6]||"",!0),this.o=In(n[7]||"")):(this.g=!!e,this.h=new Rn(null,this.g))}function mn(t){return new pn(t)}function yn(t,e,n){t.j=n?In(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vn(t,e,n){t.i=n?In(e,!0):e}function wn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function En(t,e,n){e instanceof Rn?(t.h=e,function(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(On(this,e),Fn(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Sn(e,_n)),t.h=new Rn(e,t.g))}function bn(t,e,n){t.h.set(e,n)}function Tn(t){return bn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function In(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,An),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function An(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sn(e,Cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Sn(e,Cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Sn(n,"/"==n.charAt(0)?Nn:Dn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sn(n,kn)),t.join("")};var Cn=/[#\/\?@]/g,Dn=/[#\?:]/g,Nn=/[#\?]/g,_n=/[#\?@]/g,kn=/#/g;function Rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new ln,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function On(t,e){Ln(t),e=xn(t,e),fn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,fn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&dn(t)))}function Mn(t,e){return Ln(t),e=xn(t,e),fn(t.g.h,e)}function Fn(t,e,n){On(t,e),0<n.length&&(t.i=null,t.g.set(xn(t,e),rt(n)),t.h+=n.length)}function xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(q=Rn.prototype).add=function(t,e){Ln(this),this.i=null,t=xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},q.forEach=function(t,e){Ln(this),this.g.forEach((function(n,s){st(n,(function(n){t.call(e,n,s,this)}),this)}),this)},q.T=function(){Ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},q.R=function(t){Ln(this);var e=[];if("string"==typeof t)Mn(this,t)&&(e=it(e,this.g.get(xn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=it(e,t[n])}return e},q.set=function(t,e){return Ln(this),this.i=null,Mn(this,t=xn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},q.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},q.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Pn(t){this.l=t||Vn,H.PerformanceNavigationTiming?t=0<(t=H.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vn=10;function Un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function qn(t){return t.h?1:t.g?t.g.size:0}function Bn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function jn(t,e){t.g?t.g.add(e):t.h=e}function Hn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function zn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return rt(t.i)}function $n(){}function Gn(){this.g=new $n}function Kn(t,e,n){const s=n||"";try{un(t,(function(t,n){let i=t;G(t)&&(i=ae(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Wn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Qn(t){this.l=t.$b||null,this.j=t.ib||!1}function Xn(t,e){ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Yn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pn.prototype.cancel=function(){if(this.i=zn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},$n.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)},$n.prototype.parse=function(t){return H.JSON.parse(t,void 0)},Z(Qn,Ue),Qn.prototype.g=function(){return new Xn(this.l,this.j)},Qn.prototype.i=function(t){return function(){return t}}({}),Z(Xn,ie);var Yn=0;function Jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Zn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ts(t)}function ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(q=Xn.prototype).open=function(t,e){if(this.readyState!=Yn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ts(this)},q.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zn(this)),this.readyState=Yn},q.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==H.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},q.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zn(this):ts(this),3==this.readyState&&Jn(this)}},q.Ua=function(t){this.g&&(this.response=this.responseText=t,Zn(this))},q.Ta=function(t){this.g&&(this.response=t,Zn(this))},q.ha=function(){this.g&&Zn(this)},q.setRequestHeader=function(t,e){this.v.append(t,e)},q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var es=H.JSON.parse;function ns(t){ie.call(this),this.headers=new ln,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ss,this.K=this.L=!1}Z(ns,ie);var ss="",is=/^https?$/i,rs=["POST","PUT"];function os(t){return"content-type"==t.toLowerCase()}function as(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hs(t),us(t)}function hs(t){t.D||(t.D=!0,re(t,"complete"),re(t,"error"))}function cs(t){if(t.h&&void 0!==j&&(!t.C[1]||4!=ds(t)||2!=t.ba()))if(t.v&&4==ds(t))we(t.Fa,0,t);else if(re(t,"readystatechange"),4==ds(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(gn)[1]||null;if(!i&&H.self&&H.self.location){var r=H.self.location.protocol;i=r.substr(0,r.length-1)}s=!is.test(i?i.toLowerCase():"")}n=s}if(n)re(t,"complete"),re(t,"success");else{t.m=6;try{var o=2<ds(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",hs(t)}}finally{us(t)}}}function us(t,e){if(t.g){ls(t);const n=t.g,s=t.C[0]?z:null;t.g=null,t.C=null,e||re(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function ls(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function ds(t){return t.g?t.g.readyState:0}function fs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ss:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function gs(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return ft(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):bn(t,e,n))}function ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ms(t){this.za=0,this.l=[],this.h=new Ce,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ps("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ps("baseRetryDelayMs",5e3,t),this.$a=ps("retryDelaySeedMs",1e4,t),this.Ya=ps("forwardChannelMaxRetries",2,t),this.ra=ps("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Pn(t&&t.concurrentRequestLimit),this.Ca=new Gn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ys(t){if(ws(t),3==t.G){var e=t.V++,n=mn(t.F);bn(n,"SID",t.J),bn(n,"RID",e),bn(n,"TYPE","terminate"),Is(t,n),(e=new Ke(t,t.h,e,void 0)).K=2,e.v=Tn(mn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&((new Image).src=e.v,n=!0),n||(e.g=Fs(e.l,null),e.g.ea(e.v)),e.F=Date.now(),sn(e)}Os(t)}function vs(t){t.g&&(Ds(t),t.g.cancel(),t.g=null)}function ws(t){vs(t),t.u&&(H.clearTimeout(t.u),t.u=null),_s(t),t.i.cancel(),t.m&&("number"==typeof t.m&&H.clearTimeout(t.m),t.m=null)}function Es(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&bs(t)}function bs(t){Un(t.i)||t.m||(t.m=!0,fe(t.Ha,t),t.C=0)}function Ts(t,e){var n;n=e?e.m:t.V++;const s=mn(t.F);bn(s,"SID",t.J),bn(s,"RID",n),bn(s,"AID",t.U),Is(t,s),t.o&&t.s&&gs(s,t.o,t.s),n=new Ke(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ss(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),jn(t.i,n),Je(n,s,e)}function Is(t,e){t.j&&un({},(function(t,n){bn(e,n,t)}))}function Ss(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Y(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Kn(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function As(t){t.g||t.u||(t.Y=1,fe(t.Ga,t),t.A=0)}function Cs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=xe(Y(t.Ga,t),Rs(t,t.A)),t.A++,!0)}function Ds(t){null!=t.B&&(H.clearTimeout(t.B),t.B=null)}function Ns(t){t.g=new Ke(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=mn(t.oa);bn(e,"RID","rpc"),bn(e,"SID",t.J),bn(e,"CI",t.N?"0":"1"),bn(e,"AID",t.U),Is(t,e),bn(e,"TYPE","xmlhttp"),t.o&&t.s&&gs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tn(mn(e)),n.s=null,n.U=!0,Ze(n,t)}function _s(t){null!=t.v&&(H.clearTimeout(t.v),t.v=null)}function ks(t,e){var n=null;if(t.g==e){_s(t),Ds(t),t.g=null;var s=2}else{if(!Bn(t.i,e))return;n=e.D,Hn(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;re(s=ke(),new Fe(s,n,e,i)),bs(t)}else As(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(qn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=xe(Y(t.Ha,t,e),Rs(t,t.C)),t.C++,0)))}(t,e)||2==s&&Cs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ls(t,5);break;case 4:Ls(t,10);break;case 3:Ls(t,6);break;default:Ls(t,2)}}function Rs(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ls(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Y(t.jb,t);n||(n=new pn("//www.google.com/images/cleardot.gif"),H.location&&"http"==H.location.protocol||yn(n,"https"),Tn(n)),function(t,e){const n=new Ce;if(H.Image){const s=new Image;s.onload=J(Wn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=J(Wn,n,s,"TestLoadImage: error",!1,e),s.onabort=J(Wn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=J(Wn,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Me(2);t.G=0,t.j&&t.j.va(e),Os(t),ws(t)}function Os(t){t.G=0,t.I=-1,t.j&&(0==zn(t.i).length&&0==t.l.length||(t.i.i.length=0,rt(t.l),t.l.length=0),t.j.ua())}function Ms(t,e,n){let s=function(t){return t instanceof pn?mn(t):new pn(t,void 0)}(n);if(""!=s.i)e&&vn(s,e+"."+s.i),wn(s,s.m);else{const t=H.location;s=function(t,e,n,s){var i=new pn(null,void 0);return t&&yn(i,t),e&&vn(i,e),n&&wn(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ft(t.aa,(function(t,e){bn(s,e,t)})),e=t.D,n=t.sa,e&&n&&bn(s,e,n),bn(s,"VER",t.ma),Is(t,s),s}function Fs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ns(new Qn({ib:!0})):new ns(t.qa)).L=t.H,e}function xs(){}function Ps(){if(bt&&!(10<=Number(Mt)))throw Error("Environmental error: no available transport.")}function Vs(t,e){ie.call(this),this.g=new ms(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ot(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ot(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Bs(this)}function Us(t){ze.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function qs(){$e.call(this),this.status=1}function Bs(t){this.g=t}(q=ns.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():je.g(),this.C=this.u?qe(this.u):qe(je),this.g.onreadystatechange=Y(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void as(this,t)}t=n||"";const i=new ln(this.headers);s&&un(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=os;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=H.FormData&&t instanceof H.FormData,!(0<=nt(rs,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ls(this),0<this.B&&((this.K=function(t){return bt&&Lt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.pa,this)):this.A=we(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){as(this,t)}},q.pa=function(){void 0!==j&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,re(this,"timeout"),this.abort(8))},q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,re(this,"complete"),re(this,"abort"),us(this))},q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),us(this,!0)),ns.Z.M.call(this)},q.Fa=function(){this.s||(this.F||this.v||this.l?cs(this):this.cb())},q.cb=function(){cs(this)},q.ba=function(){try{return 2<ds(this)?this.g.status:-1}catch(t){return-1}},q.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},q.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),es(e)}},q.Da=function(){return this.m},q.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(q=ms.prototype).ma=8,q.G=1,q.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},q.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ke(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=gt(r),mt(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ss(this,i,e),bn(n=mn(this.F),"RID",t),bn(n,"CVER",22),this.D&&bn(n,"X-HTTP-Session-Id",this.D),Is(this,n),this.o&&r&&gs(n,this.o,r),jn(this.i,i),this.Ra&&bn(n,"TYPE","init"),this.ja?(bn(n,"$req",e),bn(n,"SID","null"),i.$=!0,Je(i,n,null)):Je(i,n,e),this.G=2}}else 3==this.G&&(t?Ts(this,t):0==this.l.length||Un(this.i)||Ts(this))},q.Ga=function(){if(this.u=null,Ns(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=xe(Y(this.bb,this),t)}},q.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Me(10),vs(this),Ns(this))},q.ab=function(){null!=this.v&&(this.v=null,vs(this),Cs(this),Me(19))},q.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Me(2)):(this.h.info("Failed to ping google.com"),Me(1))},(q=xs.prototype).xa=function(){},q.wa=function(){},q.va=function(){},q.ua=function(){},q.Oa=function(){},Ps.prototype.g=function(t,e){return new Vs(t,e)},Z(Vs,ie),Vs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),fe(Y(t.hb,t,e))),Me(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ms(t,null,t.W),bs(t)},Vs.prototype.close=function(){ys(this.g)},Vs.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Es(this.g,e)}else this.v?((e={}).__data__=ae(t),Es(this.g,e)):Es(this.g,t)},Vs.prototype.M=function(){this.g.j=null,delete this.j,ys(this.g),delete this.g,Vs.Z.M.call(this)},Z(Us,ze),Z(qs,$e),Z(Bs,xs),Bs.prototype.xa=function(){re(this.g,"a")},Bs.prototype.wa=function(t){re(this.g,new Us(t))},Bs.prototype.va=function(t){re(this.g,new qs(t))},Bs.prototype.ua=function(){re(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,Vs.prototype.send=Vs.prototype.u,Vs.prototype.open=Vs.prototype.m,Vs.prototype.close=Vs.prototype.close,Pe.NO_ERROR=0,Pe.TIMEOUT=8,Pe.HTTP_ERROR=6,Ve.COMPLETE="complete",Be.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",ie.prototype.listen=ie.prototype.N,ns.prototype.listenOnce=ns.prototype.O,ns.prototype.getLastError=ns.prototype.La,ns.prototype.getLastErrorCode=ns.prototype.Da,ns.prototype.getStatus=ns.prototype.ba,ns.prototype.getResponseJson=ns.prototype.Qa,ns.prototype.getResponseText=ns.prototype.ga,ns.prototype.send=ns.prototype.ea;var js=Pe,Hs=Ve,zs=Ne,$s=10,Gs=11,Ks=Qn,Ws=Be,Qs=ns;const Xs="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ys.UNAUTHENTICATED=new Ys(null),Ys.GOOGLE_CREDENTIALS=new Ys("google-credentials-uid"),Ys.FIRST_PARTY=new Ys("first-party-uid"),Ys.MOCK_USER=new Ys("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Js="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new C("@firebase/firestore");function ti(){return Zs.logLevel}function ei(t,...e){if(Zs.logLevel<=b.DEBUG){const n=e.map(ii);Zs.debug(`Firestore (${Js}): ${t}`,...n)}}function ni(t,...e){if(Zs.logLevel<=b.ERROR){const n=e.map(ii);Zs.error(`Firestore (${Js}): ${t}`,...n)}}function si(t,...e){if(Zs.logLevel<=b.WARN){const n=e.map(ii);Zs.warn(`Firestore (${Js}): ${t}`,...n)}}function ii(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: `+t;throw ni(e),new Error(e)}function oi(t,e){t||ri()}function ai(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ci extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class di{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ys.UNAUTHENTICATED)))}shutdown(){}}class fi{constructor(t){this.t=t,this.currentUser=Ys.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ui,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{ei("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ei("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ui)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ei("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(oi("string"==typeof e.accessToken),new li(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return oi(null===t||"string"==typeof t),new Ys(t)}}class gi{constructor(t,e,n){this.type="FirstParty",this.user=Ys.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class pi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new gi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ys.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&ei("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{ei("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):ei("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(oi("string"==typeof t.token),new mi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.I=-1;class Ei{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=wi(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function bi(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ci(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ci(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ci(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ci(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ii.fromMillis(Date.now())}static fromDate(t){return Ii.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ii(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?bi(this.nanoseconds,t.nanoseconds):bi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Si(t)}static min(){return new Si(new Ii(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Di.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Di?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ni extends Di{construct(t,e,n){return new Ni(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ci(hi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ni(e)}static emptyPath(){return new Ni([])}}const _i=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ki extends Di{construct(t,e,n){return new ki(t,e,n)}static isValidIdentifier(t){return _i.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ki.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ki(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new ci(hi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new ci(hi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ci(hi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new ci(hi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ki(e)}static emptyPath(){return new ki([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ri(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ri(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return bi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ri.EMPTY_BYTE_STRING=new Ri("");const Li=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(oi(!!t),"string"==typeof t){let e=0;const n=Li.exec(t);if(oi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Mi(t.seconds),nanos:Mi(t.nanos)}}function Mi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Fi(t){return"string"==typeof t?Ri.fromBase64String(t):Ri.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pi(t){const e=t.mapValue.fields.__previous_value__;return xi(e)?Pi(e):e}function Vi(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ii(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return null==t}function qi(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.path=t}static fromPath(t){return new Bi(Ni.fromString(t))}static fromName(t){return new Bi(Ni.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ni.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ni.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bi(new Ni(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xi(t)?4:10:ri()}function Hi(t,e){const n=ji(t);if(n!==ji(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vi(t).isEqual(Vi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Oi(t.timestampValue),s=Oi(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Fi(t.bytesValue).isEqual(Fi(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Mi(t.geoPointValue.latitude)===Mi(e.geoPointValue.latitude)&&Mi(t.geoPointValue.longitude)===Mi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Mi(t.integerValue)===Mi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Mi(t.doubleValue),s=Mi(e.doubleValue);return n===s?qi(n)===qi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Hi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ai(n)!==Ai(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Hi(n[t],s[t])))return!1;return!0}(t,e);default:return ri()}}function zi(t,e){return void 0!==(t.values||[]).find((t=>Hi(t,e)))}function $i(t,e){const n=ji(t),s=ji(e);if(n!==s)return bi(n,s);switch(n){case 0:return 0;case 1:return bi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Mi(t.integerValue||t.doubleValue),s=Mi(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Gi(t.timestampValue,e.timestampValue);case 4:return Gi(Vi(t),Vi(e));case 5:return bi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Fi(t),s=Fi(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=bi(n[t],s[t]);if(0!==e)return e}return bi(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=bi(Mi(t.latitude),Mi(e.latitude));return 0!==n?n:bi(Mi(t.longitude),Mi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=$i(n[t],s[t]);if(e)return e}return bi(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=bi(s[t],r[t]);if(0!==e)return e;const o=$i(n[s[t]],i[r[t]]);if(0!==o)return o}return bi(s.length,r.length)}(t.mapValue,e.mapValue);default:throw ri()}}function Gi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return bi(t,e);const n=Oi(t),s=Oi(e),i=bi(n.seconds,s.seconds);return 0!==i?i:bi(n.nanos,s.nanos)}function Ki(t){return Wi(t)}function Wi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Oi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Bi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Wi(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Wi(t.fields[i])}`;return n+"}"}(t.mapValue):ri();var e,n}function Qi(t){return!!t&&"integerValue"in t}function Xi(t){return!!t&&"arrayValue"in t}function Yi(t){return!!t&&"nullValue"in t}function Ji(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=tr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.value=t}static empty(){return new er({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tr(e)}setAll(t){let e=ki.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=tr(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Zi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ci(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new er(tr(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new nr(t,0,Si.min(),er.empty(),0)}static newFoundDocument(t,e,n){return new nr(t,1,e,n,0)}static newNoDocument(t,e){return new nr(t,2,e,er.empty(),0)}static newUnknownDocument(t,e){return new nr(t,3,e,er.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=er.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=er.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new nr(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function ir(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sr(t,e,n,s,i,r,o)}function rr(t){const e=ai(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Ki(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=vr(e.startAt)),e.endAt&&(t+="|ub:",t+=vr(e.endAt)),e.R=t}return e.R}function or(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Er(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Hi(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tr(t.startAt,e.startAt)&&Tr(t.endAt,e.endAt)}function ar(t){return Bi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class hr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new cr(t,e,n):"array-contains"===e?new fr(t,n):"in"===e?new gr(t,n):"not-in"===e?new pr(t,n):"array-contains-any"===e?new mr(t,n):new hr(t,e,n)}static P(t,e,n){return"in"===e?new ur(t,n):new lr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v($i(e,this.value)):null!==e&&ji(this.value)===ji(e)&&this.v($i(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cr extends hr{constructor(t,e,n){super(t,e,n),this.key=Bi.fromName(n.referenceValue)}matches(t){const e=Bi.comparator(t.key,this.key);return this.v(e)}}class ur extends hr{constructor(t,e){super(t,"in",e),this.keys=dr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class lr extends hr{constructor(t,e){super(t,"not-in",e),this.keys=dr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Bi.fromName(t.referenceValue)))}class fr extends hr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xi(e)&&zi(e.arrayValue,this.value)}}class gr extends hr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zi(this.value.arrayValue,e)}}class pr extends hr{constructor(t,e){super(t,"not-in",e)}matches(t){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zi(this.value.arrayValue,e)}}class mr extends hr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zi(this.value.arrayValue,t)))}}class yr{constructor(t,e){this.position=t,this.before=e}}function vr(t){return`${t.before?"b":"a"}:${t.position.map((t=>Ki(t))).join(",")}`}class wr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Er(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function br(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Bi.comparator(Bi.fromName(o.referenceValue),n.key):$i(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function Tr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Sr(t){return new Ir(t)}function Ar(t){return!Ui(t.limit)&&"F"===t.limitType}function Cr(t){return!Ui(t.limit)&&"L"===t.limitType}function Dr(t){const e=ai(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new wr(t)),e.S.push(new wr(ki.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new wr(ki.keyField(),t))}}}return e.S}function Nr(t){const e=ai(t);if(!e.D)if("F"===e.limitType)e.D=ir(e.path,e.collectionGroup,Dr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Dr(e)){const e="desc"===n.dir?"asc":"desc";t.push(new wr(n.field,e))}const n=e.endAt?new yr(e.endAt.position,!e.endAt.before):null,s=e.startAt?new yr(e.startAt.position,!e.startAt.before):null;e.D=ir(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function _r(t,e){return or(Nr(t),Nr(e))&&t.limitType===e.limitType}function kr(t){return`${rr(Nr(t))}|lt:${t.limitType}`}function Rr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ki(e.value)}`;var e})).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+vr(t.startAt)),t.endAt&&(e+=", endAt: "+vr(t.endAt)),`Target(${e})`}(Nr(t))}; limitType=${t.limitType})`}function Lr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Bi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!br(t.startAt,Dr(t),e))&&(!t.endAt||!br(t.endAt,Dr(t),e))}(t,e)}function Or(t){return(e,n)=>{let s=!1;for(const i of Dr(t)){const t=Mr(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Mr(t,e,n){const s=t.field.isKeyField()?Bi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?$i(s,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ri()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this._=void 0}}function xr(t,e,n){return t instanceof Vr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ur?qr(t,e):t instanceof Br?jr(t,e):function(t,e){const n=function(t,e){return t instanceof Hr?Qi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),s=zr(n)+zr(t.N);return Qi(n)&&Qi(t.N)?function(t){return{integerValue:""+t}}(s):function(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(e)?"-0":e}}(t.k,s)}(t,e)}function Pr(t,e,n){return t instanceof Ur?qr(t,e):t instanceof Br?jr(t,e):n}class Vr extends Fr{}class Ur extends Fr{constructor(t){super(),this.elements=t}}function qr(t,e){const n=$r(e);for(const e of t.elements)n.some((t=>Hi(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Br extends Fr{constructor(t){super(),this.elements=t}}function jr(t,e){let n=$r(e);for(const e of t.elements)n=n.filter((t=>!Hi(t,e)));return{arrayValue:{values:n}}}class Hr extends Fr{constructor(t,e){super(),this.k=t,this.N=e}}function zr(t){return Mi(t.integerValue||t.doubleValue)}function $r(t){return Xi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Kr{}function Wr(t,e,n){t instanceof Jr?function(t,e,n){const s=t.value.clone(),i=eo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(t,e,n){if(!Gr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=eo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(to(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Qr(t,e,n){t instanceof Jr?function(t,e,n){if(!Gr(t.precondition,e))return;const s=t.value.clone(),i=no(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Yr(e),s).setHasLocalMutations()}(t,e,n):t instanceof Zr?function(t,e,n){if(!Gr(t.precondition,e))return;const s=no(t.fieldTransforms,n,e),i=e.data;i.setAll(to(t)),i.setAll(s),e.convertToFoundDocument(Yr(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Gr(t.precondition,e)&&e.convertToNoDocument(Si.min())}(t,e)}function Xr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ti(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ur&&e instanceof Ur||t instanceof Br&&e instanceof Br?Ti(t.elements,e.elements,Hi):t instanceof Hr&&e instanceof Hr?Hi(t.N,e.N):t instanceof Vr&&e instanceof Vr}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Yr(t){return t.isFoundDocument()?t.version:Si.min()}class Jr extends Kr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Zr extends Kr{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function to(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function eo(t,e,n){const s=new Map;oi(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Pr(o,a,n[i]))}return s}function no(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,xr(t,r,e))}return s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io,ro;function oo(t){if(void 0===t)return ni("GRPC error has no .code"),hi.UNKNOWN;switch(t){case io.OK:return hi.OK;case io.CANCELLED:return hi.CANCELLED;case io.UNKNOWN:return hi.UNKNOWN;case io.DEADLINE_EXCEEDED:return hi.DEADLINE_EXCEEDED;case io.RESOURCE_EXHAUSTED:return hi.RESOURCE_EXHAUSTED;case io.INTERNAL:return hi.INTERNAL;case io.UNAVAILABLE:return hi.UNAVAILABLE;case io.UNAUTHENTICATED:return hi.UNAUTHENTICATED;case io.INVALID_ARGUMENT:return hi.INVALID_ARGUMENT;case io.NOT_FOUND:return hi.NOT_FOUND;case io.ALREADY_EXISTS:return hi.ALREADY_EXISTS;case io.PERMISSION_DENIED:return hi.PERMISSION_DENIED;case io.FAILED_PRECONDITION:return hi.FAILED_PRECONDITION;case io.ABORTED:return hi.ABORTED;case io.OUT_OF_RANGE:return hi.OUT_OF_RANGE;case io.UNIMPLEMENTED:return hi.UNIMPLEMENTED;case io.DATA_LOSS:return hi.DATA_LOSS;default:return ri()}}(ro=io||(io={}))[ro.OK=0]="OK",ro[ro.CANCELLED=1]="CANCELLED",ro[ro.UNKNOWN=2]="UNKNOWN",ro[ro.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ro[ro.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ro[ro.NOT_FOUND=5]="NOT_FOUND",ro[ro.ALREADY_EXISTS=6]="ALREADY_EXISTS",ro[ro.PERMISSION_DENIED=7]="PERMISSION_DENIED",ro[ro.UNAUTHENTICATED=16]="UNAUTHENTICATED",ro[ro.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ro[ro.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ro[ro.ABORTED=10]="ABORTED",ro[ro.OUT_OF_RANGE=11]="OUT_OF_RANGE",ro[ro.UNIMPLEMENTED=12]="UNIMPLEMENTED",ro[ro.INTERNAL=13]="INTERNAL",ro[ro.UNAVAILABLE=14]="UNAVAILABLE",ro[ro.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(t,e){this.comparator=t,this.root=e||co.EMPTY}insert(t,e){return new ao(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,co.BLACK,null,null))}remove(t){return new ao(this.comparator,this.root.remove(t,this.comparator).copy(null,null,co.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ho(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ho(this.root,t,this.comparator,!1)}getReverseIterator(){return new ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ho(this.root,t,this.comparator,!0)}}class ho{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class co{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:co.RED,this.left=null!=s?s:co.EMPTY,this.right=null!=i?i:co.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new co(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return co.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return co.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,co.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,co.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}co.EMPTY=null,co.RED=!0,co.BLACK=!1,co.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,s,i){return this}insert(t,e,n){return new co(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(t){this.comparator=t,this.data=new ao(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(t){return new lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof uo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new uo(this.comparator);return e.data=t,e}}class lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new ao(Bi.comparator);function go(){return fo}const po=new ao(Bi.comparator);function mo(){return po}new ao(Bi.comparator);const yo=new uo(Bi.comparator);function vo(...t){let e=yo;for(const n of t)e=e.add(n);return e}const wo=new uo(bi);function Eo(){return wo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,To.createSynthesizedTargetChangeForCurrentChange(t,e)),new bo(Si.min(),n,Eo(),go(),vo())}}class To{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new To(Ri.EMPTY_BYTE_STRING,e,vo(),vo(),vo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.F=s}}class So{constructor(t,e){this.targetId=t,this.O=e}}class Ao{constructor(t,e,n=Ri.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Co{constructor(){this.M=0,this.L=_o(),this.B=Ri.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=vo(),e=vo(),n=vo();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ri()}})),new To(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=_o()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Do{constructor(t){this.et=t,this.nt=new Map,this.st=go(),this.it=No(),this.rt=new uo(bi)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:ri()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.O.count,s=this.wt(e);if(s){const t=s.target;if(ar(t))if(0===n){const n=new Bi(t.path);this.ct(e,n,nr.newNoDocument(n,Si.min()))}else oi(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&ar(i.target)){const e=new Bi(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.ct(s,e,nr.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}}));let n=vo();this.it.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new bo(t,e,this.rt,this.st,n);return this.st=go(),this.it=No(),this.rt=new uo(bi),s}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Co,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new uo(bi),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||ei("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Co),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function No(){return new ao(Bi.comparator)}function _o(){return new ao(Bi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={asc:"ASCENDING",desc:"DESCENDING"},Ro={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Lo{constructor(t,e){this.databaseId=t,this.C=e}}function Oo(t){return oi(!!t),Si.fromTimestamp(function(t){const e=Oi(t);return new Ii(e.seconds,e.nanos)}(t))}function Mo(t){const e=Ni.fromString(t);return oi(Yo(e)),e}function Fo(t,e){const n=Mo(e);if(n.get(1)!==t.databaseId.projectId)throw new ci(hi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ci(hi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Bi(Vo(n))}function xo(t,e){return function(t,e){return function(t){return new Ni(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function Po(t){return new Ni(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vo(t){return oi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Uo(t,e){return{documents:[xo(t,e.path)]}}function qo(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=xo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ji(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NAN"}};if(Yi(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ji(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NAN"}};if(Yi(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ko(t.field),op:Go(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ko(t.field),direction:$o(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||Ui(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ho(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ho(e.endAt)),n}function Bo(t){let e=function(t){const e=Mo(t);return 4===e.length?Ni.emptyPath():Vo(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){oi(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=jo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new wr(Wo(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ui(e)?null:e}(n.limit));let h=null;n.startAt&&(h=zo(n.startAt));let c=null;return n.endAt&&(c=zo(n.endAt)),function(t,e,n,s,i,r,o,a){return new Ir(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",h,c)}function jo(t){return t?void 0!==t.unaryFilter?[Xo(t)]:void 0!==t.fieldFilter?[Qo(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>jo(t))).reduce(((t,e)=>t.concat(e))):ri():[]}function Ho(t){return{before:t.before,values:t.position}}function zo(t){const e=!!t.before,n=t.values||[];return new yr(n,e)}function $o(t){return ko[t]}function Go(t){return Ro[t]}function Ko(t){return{fieldPath:t.canonicalString()}}function Wo(t){return ki.fromServerFormat(t.fieldPath)}function Qo(t){return hr.create(Wo(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xo(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wo(t.unaryFilter.field);return hr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wo(t.unaryFilter.field);return hr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wo(t.unaryFilter.field);return hr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wo(t.unaryFilter.field);return hr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}function Yo(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Jo(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Jo?e:Jo.resolve(e)}catch(t){return Jo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Jo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Jo.reject(e)}static resolve(t){return new Jo(((e,n)=>{e(t)}))}static reject(t){return new Jo(((e,n)=>{n(t)}))}static waitFor(t){return new Jo(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Jo.resolve(!1);for(const n of t)e=e.next((t=>t?Jo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function Zo(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Wr(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Qr(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Qr(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(Si.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vo())}isEqual(t){return this.batchId===t.batchId&&Ti(this.mutations,t.mutations,((t,e)=>Xr(t,e)))&&Ti(this.baseMutations,t.baseMutations,((t,e)=>Xr(t,e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e,n,s,i=Si.min(),r=Si.min(),o=Ri.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new ea(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t){this.Gt=t}}function sa(t){const e=Bo({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.zt=new ra}addToCollectionParentIndex(t,e){return this.zt.add(e),Jo.resolve()}getCollectionParents(t,e){return Jo.resolve(this.zt.getEntries(e))}}class ra{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new uo(Ni.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new uo(Ni.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new oa(0)}static re(){return new oa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){if(t.code!==hi.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ei("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){Ci(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Pn(t,e,n)))}Pn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Bi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new Bi(e)).next((t=>{let e=mo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const s=e.collectionGroup;let i=mo();return this.Jt.getCollectionParents(t,s).next((r=>Jo.forEach(r,(r=>{const o=function(t,e){return new Ir(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,s).next((t=>{s=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=s.get(n);null==i&&(i=nr.newInvalidDocument(n),s=s.insert(n,i)),Qr(e,i,t.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{Lr(e,n)||(s=s.remove(t))})),s)))}Nn(t,e,n){let s=vo();for(const t of e)for(const e of t.mutations)e instanceof Zr&&null===n.get(e.key)&&(s=s.add(e.key));let i=n;return this.Je.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=vo(),s=vo();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new ua(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Si.min())?this.Mn(t,e):this.On.vn(t,s).next((i=>{const r=this.Ln(e,i);return(Ar(e)||Cr(e))&&this.Bn(e.limitType,r,s,n)?this.Mn(t,e):(ti()<=b.DEBUG&&ei("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Rr(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new uo(Or(t));return e.forEach(((e,s)=>{Lr(t,s)&&(n=n.add(s))})),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mn(t,e){return ti()<=b.DEBUG&&ei("QueryEngine","Using full collection scan to execute query:",Rr(e)),this.On.getDocumentsMatchingQuery(t,e,Si.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new ao(bi),this.Kn=new ha((t=>rr(t)),or),this.jn=Si.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new ca(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function fa(t,e){const n=ai(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new ca(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=vo();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.An=s,n.Wn=i,n.Un.Fn(n.Wn),r}function ga(t){const e=ai(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function pa(t,e){const n=ai(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((e,r)=>{const a=i.get(r);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,r).next((()=>n.He.addMatchingKeys(t,e.addedDocuments,r))));const h=e.resumeToken;if(h.approximateByteSize()>0){const c=a.withResumeToken(h,s).withSequenceNumber(t.currentSequenceNumber);i=i.insert(r,c),function(t,e,n){return oi(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,c,e)&&o.push(n.He.updateTargetData(t,c))}}));let a=go();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=vo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=go();return n.forEach(((n,o)=>{const a=t.get(n),h=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(Si.min())?(e.removeEntry(n,h),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,h),r=r.insert(n,o)):ei("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual(Si.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Jo.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}async function ma(t,e,n){const s=ai(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Zo(t))throw t;ei("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function ya(t,e,n){const s=ai(t);let i=Si.min(),r=vo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=ai(t),i=s.Kn.get(n);return void 0!==i?Jo.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,Nr(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:Si.min(),n?r:vo()))).next((t=>({documents:t,zn:r})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Jo.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:Oo(n.createTime)}),Jo.resolve()}getNamedQuery(t,e){return Jo.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:sa(t.bundledQuery),readTime:Oo(t.readTime)}}(e)),Jo.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.ts=new uo(Ea.es),this.ns=new uo(Ea.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Ea(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new Ea(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Bi(new Ni([])),n=new Ea(e,t),s=new Ea(e,t+1),i=[];return this.ns.forEachInRange([n,s],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new Bi(new Ni([])),n=new Ea(e,t),s=new Ea(e,t+1);let i=vo();return this.ns.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ea(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ea{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return Bi.comparator(t.key,e.key)||bi(t.fs,e.fs)}static ss(t,e){return bi(t.fs,e.fs)||Bi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new uo(Ea.es)}checkEmpty(t){return Jo.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new ta(i,e,n,s);this.An.push(r);for(const e of s)this.ws=this.ws.add(new Ea(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Jo.resolve(r)}lookupMutationBatch(t,e){return Jo.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return Jo.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Jo.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Jo.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ea(e,0),s=new Ea(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],(t=>{const e=this._s(t.fs);i.push(e)})),Jo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new uo(bi);return e.forEach((t=>{const e=new Ea(t,0),s=new Ea(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],(t=>{n=n.add(t.fs)}))})),Jo.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Bi.isDocumentKey(i)||(i=i.child(""));const r=new Ea(new Bi(i),0);let o=new uo(bi);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)}),r),Jo.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){oi(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Jo.forEach(e.mutations,(s=>{const i=new Ea(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new Ea(e,0),s=this.ws.firstAfterOrEqual(n);return Jo.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Jo.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new ao(Bi.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.clone(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Jo.resolve(n?n.document.clone():nr.newInvalidDocument(e))}getEntries(t,e){let n=go();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():nr.newInvalidDocument(t))})),Jo.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=go();const i=new Bi(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Lr(e,i)&&(s=s.insert(i.key,i.clone()))}return Jo.resolve(s)}Es(t,e){return Jo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ia(this)}getSize(t){return Jo.resolve(this.size)}}class Ia extends class{constructor(){this.changes=new ha((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Si.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:nr.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Jo.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)})),Jo.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t){this.persistence=t,this.Is=new ha((t=>rr(t)),or),this.lastRemoteSnapshotVersion=Si.min(),this.highestTargetId=0,this.As=0,this.Rs=new wa,this.targetCount=0,this.Ps=oa.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Jo.resolve()}getLastRemoteSnapshotVersion(t){return Jo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Jo.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Jo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Jo.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new oa(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Jo.resolve()}updateTargetData(t,e){return this.ce(e),Jo.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Jo.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Jo.waitFor(i).next((()=>s))}getTargetCount(t){return Jo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Jo.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Jo.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Jo.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Jo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Jo.resolve(n)}containsKey(t,e){return Jo.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e){this.bs={},this.Be=new vi(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Sa(this),this.Jt=new ia,this.Je=function(t,e){return new Ta(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new na(e),this.Ye=new va(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new ba(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){ei("MemoryPersistence","Starting transaction:",t);const s=new Ca(this.Be.next());return this.referenceDelegate.Vs(),n(s).next((t=>this.referenceDelegate.Ss(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ds(t,e){return Jo.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Ca extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Da{constructor(t){this.persistence=t,this.Cs=new wa,this.Ns=null}static ks(t){return new Da(t)}get xs(){if(this.Ns)return this.Ns;throw ri()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Jo.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Jo.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Jo.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Jo.forEach(this.xs,(n=>{const s=Bi.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Jo.or([()=>Jo.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class Na{constructor(){this.activeTargetIds=Eo()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _a{constructor(){this.pi=new Na,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Na,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){ei("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){ei("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);ei("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then((t=>(ei("RestConnection","Received: ",t),t)),(e=>{throw si("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Js,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=La[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise(((i,r)=>{const o=new Qs;o.listenOnce(Hs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case js.NO_ERROR:const e=o.getResponseJson();ei("Connection","XHR received:",JSON.stringify(e)),i(e);break;case js.TIMEOUT:ei("Connection",'RPC "'+t+'" timed out'),r(new ci(hi.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const n=o.getStatus();if(ei("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(hi).indexOf(e)>=0?e:hi.UNKNOWN}(t.status);r(new ci(e,t.message))}else r(new ci(hi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ci(hi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{ei("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Ps,r=ke(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ks({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())||"object"==typeof navigator&&"ReactNative"===navigator.product||l().indexOf("Electron/")>=0||function(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||l().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");ei("Connection","Creating WebChannel: "+a,o);const h=i.createWebChannel(a,o);let c=!1,u=!1;const d=new Oa({Vi:t=>{u?ei("Connection","Not sending because WebChannel is closed:",t):(c||(ei("Connection","Opening WebChannel transport."),h.open(),c=!0),ei("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(h,Ws.EventType.OPEN,(()=>{u||ei("Connection","WebChannel transport opened.")})),f(h,Ws.EventType.CLOSE,(()=>{u||(u=!0,ei("Connection","WebChannel transport closed"),d.Fi())})),f(h,Ws.EventType.ERROR,(t=>{u||(u=!0,si("Connection","WebChannel transport errored:",t),d.Fi(new ci(hi.UNAVAILABLE,"The operation could not be completed")))})),f(h,Ws.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];oi(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){ei("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=io[t];if(void 0!==e)return oo(e)}(t),n=i.message;void 0===e&&(e=hi.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,d.Fi(new ci(e,n)),h.close()}else ei("Connection","WebChannel received:",n),d.Oi(n)}})),f(r,zs.STAT_EVENT,(t=>{t.stat===$s?ei("Connection","Detected buffering proxy"):t.stat===Gs&&ei("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.$i()}),0),d}}function Fa(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return new Lo(t,!0)}class Pa{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&ei("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends class{constructor(t,e,n,s,i,r,o,a){this.Oe=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Pa(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===hi.RESOURCE_EXHAUSTED?(ni(e.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===hi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new ci(hi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return ei("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget((()=>this.rr===t?e():(ei("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.C?(oi(void 0===e||"string"==typeof e),Ri.fromBase64String(e||"")):(oi(void 0===e||e instanceof Uint8Array),Ri.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?hi.UNKNOWN:oo(t.code);return new ci(e,t.message||"")}(o);n=new Ao(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Fo(t,s.document.name),r=Oo(s.document.updateTime),o=new er({mapValue:{fields:s.document.fields}}),a=nr.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new Io(h,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Fo(t,s.document),r=s.readTime?Oo(s.readTime):Si.min(),o=nr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Fo(t,s.document),r=s.removedTargetIds||[];n=new Io([],r,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new so(s),r=t.targetId;n=new So(r,i)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return Si.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Si.min():e.readTime?Oo(e.readTime):Si.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=Po(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=ar(s)?{documents:Uo(t,s)}:{query:qo(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.C?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(Si.min())>0&&(n.readTime=function(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ri()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Po(this.k),e.removeTarget=t,this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new ci(hi.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.Bi(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ci(hi.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.ji(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ci(hi.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class qa{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ni(e),this.Lr=!1):ei("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Xa(this)&&(ei("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ai(t);e.Gr.add(4),await Ha(e),e.Jr.set("Unknown"),e.Gr.delete(4),await ja(e)}(this))}))})),this.Jr=new qa(n,s)}}async function ja(t){if(Xa(t))for(const e of t.zr)await e(!0)}async function Ha(t){for(const e of t.zr)await e(!1)}function za(t,e){const n=ai(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Qa(n)?Wa(n):nh(n).lr()&&Ga(n,e))}function $a(t,e){const n=ai(t),s=nh(n);n.Wr.delete(e),s.lr()&&Ka(n,e),0===n.Wr.size&&(s.lr()?s._r():Xa(n)&&n.Jr.set("Unknown"))}function Ga(t,e){t.Yr.X(e.targetId),nh(t).br(e)}function Ka(t,e){t.Yr.X(e),nh(t).vr(e)}function Wa(t){t.Yr=new Do({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),nh(t).start(),t.Jr.Br()}function Qa(t){return Xa(t)&&!nh(t).hr()&&t.Wr.size>0}function Xa(t){return 0===ai(t).Gr.size}function Ya(t){t.Yr=void 0}async function Ja(t){t.Wr.forEach(((e,n)=>{Ga(t,e)}))}async function Za(t,e){Ya(t),Qa(t)?(t.Jr.Kr(e),Wa(t)):t.Jr.set("Unknown")}async function th(t,e,n){if(t.Jr.set("Online"),e instanceof Ao&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){ei("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await eh(t,n)}else if(e instanceof Io?t.Yr.ot(e):e instanceof So?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(Si.min()))try{const e=await ga(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Ri.EMPTY_BYTE_STRING,n.snapshotVersion)),Ka(t,e);const s=new ea(n.target,e,1,n.sequenceNumber);Ga(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ei("RemoteStore","Failed to raise snapshot:",e),await eh(t,e)}}async function eh(t,e,n){if(!Zo(e))throw e;t.Gr.add(1),await Ha(t),t.Jr.set("Offline"),n||(n=()=>ga(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ei("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await ja(t)}))}function nh(t){return t.Xr||(t.Xr=function(t,e,n){const s=ai(t);return s.Fr(),new Va(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:Ja.bind(null,t),Ni:Za.bind(null,t),Pr:th.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),Qa(t)?Wa(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ya(t))}))),t.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new sh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ci(hi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ih(t,e){if(ni("AsyncQueue",`${e}: ${t}`),Zo(t))return new ci(hi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Bi.comparator(e.key,n.key):(t,e)=>Bi.comparator(t.key,e.key),this.keyedMap=mo(),this.sortedSet=new ao(this.comparator)}static emptySet(t){return new rh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof rh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new rh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.eo=new ao(Bi.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):ri():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ah{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ah(t,e,rh.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_r(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.so=void 0,this.listeners=[]}}class ch{constructor(){this.queries=new ha((t=>kr(t)),_r),this.onlineState="Unknown",this.io=new Set}}async function uh(t,e){const n=ai(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new hh),i)try{r.so=await n.onListen(s)}catch(t){const n=ih(t,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&gh(n)}async function lh(t,e){const n=ai(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function dh(t,e){const n=ai(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(s=!0);i.so=t}}s&&gh(n)}function fh(t,e,n){const s=ai(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function gh(t){t.io.forEach((t=>{t.next()}))}class ph{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ah(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=ah.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t){this.key=t}}class yh{constructor(t){this.key=t}}class vh{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=vo(),this.mutatedKeys=vo(),this.Ao=Or(t),this.Ro=new rh(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new oh,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Ar(this.query)&&s.size===this.query.limit?s.last():null,h=Cr(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),u=Lr(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||h&&this.Ao(u,h)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Ar(this.query)||Cr(this.query))for(;r.size>this.query.limit;){const t=Ar(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new ah(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new oh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=vo(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new yh(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new mh(n))})),e}ko(t){this.To=t.zn,this.Io=vo();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return ah.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class wh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eh{constructor(t){this.key=t,this.$o=!1}}class bh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Fo={},this.Oo=new ha((t=>kr(t)),_r),this.Mo=new Map,this.Lo=new Set,this.Bo=new ao(Bi.comparator),this.Uo=new Map,this.qo=new wa,this.Ko={},this.jo=new Map,this.Qo=oa.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Th(t,e){const n=function(t){const e=ai(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ch.bind(null,e),e.Fo.Pr=dh.bind(null,e.eventManager),e.Fo.zo=fh.bind(null,e.eventManager),e}(t);let s,i;const r=n.Oo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=ai(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.He.getTargetData(t,e).next((i=>i?(s=i,Jo.resolve(s)):n.He.allocateTargetId(t).next((i=>(s=new ea(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,Nr(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.bo(n);i.Bn&&(i=await ya(t.localStore,e.query,!1).then((({documents:t})=>e.view.bo(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return _h(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await ya(t.localStore,e,!0),r=new vh(e,i.zn),o=r.bo(i.documents),a=To.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),h=r.applyChanges(o,t.isPrimaryClient,a);_h(t,n,h.Co);const c=new wh(e,n,r);return t.Oo.set(e,c),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),h.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&za(n.remoteStore,t)}return i}async function Ih(t,e){const n=ai(t),s=n.Oo.get(e),i=n.Mo.get(s.targetId);if(i.length>1)return n.Mo.set(s.targetId,i.filter((t=>!_r(t,e)))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ma(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),$a(n.remoteStore,s.targetId),Dh(n,s.targetId)})).catch(aa)):(Dh(n,s.targetId),await ma(n.localStore,s.targetId,!0))}async function Sh(t,e){const n=ai(t);try{const t=await pa(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Uo.get(e);s&&(oi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?oi(s.$o):t.removedDocuments.size>0&&(oi(s.$o),s.$o=!1))})),await Lh(n,t,e)}catch(t){await aa(t)}}function Ah(t,e,n){const s=ai(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Oo.forEach(((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ai(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(s=!0)})),s&&gh(n)}(s.eventManager,e),t.length&&s.Fo.Pr(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ch(t,e,n){const s=ai(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new ao(Bi.comparator);t=t.insert(r,nr.newNoDocument(r,Si.min()));const n=vo().add(r),i=new bo(Si.min(),new Map,new uo(bi),t,n);await Sh(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),Rh(s)}else await ma(s.localStore,e,!1).then((()=>Dh(s,e,n))).catch(aa)}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Mo.get(e))t.Oo.delete(s),n&&t.Fo.zo(s,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||Nh(t,e)}))}function Nh(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&($a(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Rh(t))}function _h(t,e,n){for(const s of n)s instanceof mh?(t.qo.addReference(s.key,e),kh(t,s)):s instanceof yh?(ei("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||Nh(t,s.key)):ri()}function kh(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(ei("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Rh(t))}function Rh(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Bi(Ni.fromString(e)),s=t.Qo.next();t.Uo.set(s,new Eh(n)),t.Bo=t.Bo.insert(n,s),za(t.remoteStore,new ea(Nr(Sr(n.path)),s,2,vi.I))}}async function Lh(t,e,n){const s=ai(t),i=[],r=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach(((t,a)=>{o.push(s.Go(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=ua.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Fo.Pr(i),await async function(t,e){const n=ai(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Jo.forEach(e,(e=>Jo.forEach(e.kn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Jo.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Zo(t))throw t;ei("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(e,i)}}}(s.localStore,r))}async function Oh(t,e){const n=ai(t);if(!n.currentUser.isEqual(e)){ei("SyncEngine","User change. New user:",e.toKey());const t=await fa(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new ci(hi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Lh(n,t.Gn)}}function Mh(t,e){const n=ai(t),s=n.Uo.get(e);if(s&&s.$o)return vo().add(s.key);{let t=vo();const s=n.Mo.get(e);if(!s)return t;for(const e of s){const s=n.Oo.get(e);t=t.unionWith(s.view.Po)}return t}}class Fh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=xa(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,s){return new da(t,e,n,s)}(this.persistence,new la,t.initialUser,this.k)}Yo(t){return new Aa(Da.ks,this.k)}Jo(t){return new _a}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ah(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Oh.bind(null,this.syncEngine),await async function(t,e){const n=ai(t);e?(n.Gr.delete(2),await ja(n)):e||(n.Gr.add(2),await Ha(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ch}createDatastore(t){const e=xa(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Ma(s));var s;return function(t,e,n,s){return new Ua(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Ah(this.syncEngine,t,0),r=Ra.bt()?new Ra:new ka,new Ba(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new bh(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ai(t);ei("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Ha(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ys.UNAUTHENTICATED,this.clientId=Ei.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ei("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ci(hi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ih(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Uh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(ei("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),ei("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await fa(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Fh)),t.offlineComponents}(t);ei("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>async function(t,e){const n=ai(t);n.asyncQueue.verifyOperationInProgress(),ei("RemoteStore","RemoteStore received new credentials");const s=Xa(n);n.Gr.add(3),await Ha(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await ja(n)}(e.remoteStore,t))),t.onlineComponents=e}async function qh(t){const e=await async function(t){return t.onlineComponents||(ei("FirestoreClient","Using default OnlineComponentProvider"),await Uh(t,new xh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=Th.bind(null,e.syncEngine),n.onUnlisten=Ih.bind(null,e.syncEngine),n}class Bh{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jh&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,n){if(!n)throw new ci(hi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $h(t){if(!Bi.isDocumentKey(t))throw new ci(hi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gh(t){if(Bi.isDocumentKey(t))throw new ci(hi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ci(hi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}(t);throw new ci(hi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ci(hi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ci(hi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new ci(hi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,t instanceof jh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ci(hi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jh(t.options.projectId)}(t))}get app(){if(!this._app)throw new ci(hi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ci(hi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new di;switch(t.type){case"gapi":const e=t.client;return oi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new pi(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ci(hi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Hh.get(t);e&&(ei("ComponentProvider","Removing Datastore"),Hh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xh(this.firestore,t,this._key)}}class Yh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yh(this.firestore,t,this._query)}}class Jh extends Yh{constructor(t,e,n){super(t,e,Sr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xh(this.firestore,null,new Bi(t))}withConverter(t){return new Jh(this.firestore,t,this._path)}}function Zh(t,e,...n){if(t=y(t),1===arguments.length&&(e=Ei.A()),zh("doc","path",e),t instanceof Qh){const s=Ni.fromString(e,...n);return $h(s),new Xh(t,null,new Bi(s))}{if(!(t instanceof Xh||t instanceof Jh))throw new ci(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ni.fromString(e,...n));return $h(s),new Xh(t.firestore,t instanceof Jh?t.converter:null,new Bi(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Pa(this,"async_queue_retry"),this.Ra=()=>{const t=Fa();t&&ei("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Fa();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Fa();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise((()=>{}));const e=new ui;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ga.push(t),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Zo(t))throw t;ei("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(t){const e=this.ma.then((()=>(this.Ea=!0,t().catch((t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ni("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ea=!1,t))))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const s=sh.createAndSchedule(this,t,e,n,(t=>this.Va(t)));return this.pa.push(s),s}Pa(){this.Ta&&ri()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then((()=>{this.pa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()}))}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}function ec(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class nc extends Qh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new tc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||oc(this),this._firestoreClient.terminate()}}function sc(t,e){const n=F(t,"firestore");if(n.isInitialized()){const t=n.getImmediate();if(p(n.getOptions(),e))return t;throw new ci(hi.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==e.cacheSizeBytes&&-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ci(hi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function ic(t=function(t="[DEFAULT]"){const e=R.get(t);if(!e)throw x.create("no-app",{appName:t});return e}()){return F(t,"firestore").getImmediate()}function rc(t){return t._firestoreClient||oc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oc(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Bh(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Vh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ci(hi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ki(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hc(Ri.fromBase64String(t))}catch(t){throw new ci(hi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new hc(Ri.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ci(hi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ci(hi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return bi(this._lat,t._lat)||bi(this._long,t._long)}}const uc=new RegExp("[~\\*/\\[\\]]");function lc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new ci(hi.INVALID_ARGUMENT,a+t+h)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dc{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new fc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(gc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class fc extends dc{data(){return super.data()}}function gc(t,e){return"string"==typeof e?function(t,e,n){if(e.search(uc)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ac(...e.split("."))._internalPath}catch(s){throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof ac?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mc extends dc{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(gc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class yc extends mc{data(t={}){return super.data(t)}}class vc{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new pc(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new yc(this._firestore,this._userDataWriter,n.key,n,new pc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ci(hi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new yc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new pc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new yc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new pc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:wc(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function wc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ec(t){t=Kh(t,Xh);const e=Kh(t.firestore,nc);return function(t,e,n={}){const s=new ui;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Ph({next:r=>{e.enqueueAndForget((()=>lh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new ci(hi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new ci(hi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new ph(Sr(n.path),r,{includeMetadataChanges:!0,wo:!0});return uh(t,o)}(await qh(t),t.asyncQueue,e,n,s))),s.promise}(rc(e),t._key).then((n=>Ic(e,t,n)))}class bc extends
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class{convertValue(t,e="none"){switch(ji(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Fi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){const n={};return Ci(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new cc(Mi(t.latitude),Mi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Pi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vi(t));default:return null}}convertTimestamp(t){const e=Oi(t);return new Ii(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ni.fromString(t);oi(Yo(n));const s=new jh(n.get(1),n.get(3)),i=new Bi(n.popFirst(5));return s.isEqual(e)||ni(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new hc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xh(this.firestore,null,e)}}function Tc(t,...e){var n,s,i;t=y(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ec(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ec(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let h,c,u;if(t instanceof Xh)c=Kh(t.firestore,nc),u=Sr(t._key.path),h={next:n=>{e[o]&&e[o](Ic(c,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Kh(t,Yh);c=Kh(n.firestore,nc),u=n._query;const s=new bc(c);h={next:t=>{e[o]&&e[o](new vc(c,s,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(Cr(t)&&0===t.explicitOrderBy.length)throw new ci(hi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,s){const i=new Ph(s),r=new ph(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>uh(await qh(t),r))),()=>{i.na(),t.asyncQueue.enqueueAndForget((async()=>lh(await qh(t),r)))}}(rc(c),u,a,h)}function Ic(t,e,n){const s=n.docs.get(e._key),i=new bc(t);return new mc(t,i,e._key,s,new pc(n.hasPendingWrites,n.fromCache),e.converter)}!function(t,e=!0){Js="9.6.1",M(new v("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new nc(s,new fi(t.getProvider("auth-internal")),new yi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),V(Xs,"3.4.1",t),V(Xs,"3.4.1","esm2017")}();class Sc{constructor(t,e,n){this.streamStartTime=void 0,this.nearestUpcomingEvent=void 0,this.upcomingEvents=void 0,this.player_=e,this.spoilerFlag_=t,this.logger_=n}eventMetadata(t){t.scheduledStart&&(this.streamStartTime=new Date(t.scheduledStart).getTime()/1e3),this.player_.send(r.GAME_INFO,o.NONE,t)}eventReceived(t,e,n){if(this.shouldDispatchImmediately(t,e))this.sendEvent(n,t);else switch(t){case c.ADDED:case c.MODIFIED:this.addToUpcomingEvents(e,n);break;case c.DELETED:this.removeFromUpcomingEventsFromDocumentId(e)}}updatePlayer(t){this.player_=t,this.addPeriodicTimeObserver()}shouldDispatchImmediately(t,e){if(this.spoilerFlag_)return!0;switch(t){case c.ADDED:{const t=this.getEpoch(e);return t>=0&&this.canSendEvent(t)}case c.MODIFIED:case c.DELETED:return!this.upcomingEvents||!this.upcomingEvents.has(e)}return!1}addPeriodicTimeObserver(){this.timeObserverToken||(this.timeObserverToken=setInterval((()=>{const t=this.fetchUnDispatchedEligibleEvents();t&&t.size>0&&this.sendEventsFromList(t)}),1e3))}removePeriodicTimeObserver(){this.timeObserverToken&&(clearInterval(this.timeObserverToken),this.timeObserverToken=void 0)}shouldDispatchFutureEvent(){return!!this.nearestUpcomingEvent&&this.canSendEvent(this.nearestUpcomingEvent)}fetchUnDispatchedEligibleEvents(){if(!this.shouldDispatchFutureEvent())return null;if(this.player_.playerState===a.IDLE)return this.removePeriodicTimeObserver(),null;const t=new Map;return this.upcomingEvents&&Array.from(this.upcomingEvents.keys()).forEach((e=>{var n;const s=this.getEpoch(e);this.canSendEvent(s)&&t.set(e,null===(n=this.upcomingEvents)||void 0===n?void 0:n.get(e))})),t}canSendEvent(t){return(this.player_.isLive?this.player_.currentEpochTime:this.getComputedEpoch(this.player_.currentTime))>=t}sendEventsFromList(t){t.forEach((t=>{this.sendEvent(t,c.ADDED)})),this.removeFromUpcomingEventsFromDocumentMap(t)}sendEvent(t,e){this.logger_.debug(`[STREAM_TIMELINE] Dispatching ${e} event`,t),this.player_.send(r.GAME_EVENT,o.NONE,this.composeMetadata(t,e))}addToUpcomingEvents(t,e){this.upcomingEvents||(this.upcomingEvents=new Map),this.upcomingEvents.set(t,e),this.updateNearestFutureEvent(t),this.addPeriodicTimeObserver()}removeFromUpcomingEventsFromDocumentId(t){var e,n;null===(e=this.upcomingEvents)||void 0===e||e.delete(t),0===(null===(n=this.upcomingEvents)||void 0===n?void 0:n.size)&&this.removePeriodicTimeObserver(),this.updateNearestFutureEventFromUnsentEvents()}removeFromUpcomingEventsFromDocumentMap(t){var e;Array.from(t.keys()).forEach((t=>{var e;null===(e=this.upcomingEvents)||void 0===e||e.delete(t)})),0===(null===(e=this.upcomingEvents)||void 0===e?void 0:e.size)&&this.removePeriodicTimeObserver(),this.updateNearestFutureEventFromUnsentEvents()}updateNearestFutureEvent(t){let e=this.getEpoch(t);e=isNaN(e)?void 0:e,this.nearestUpcomingEvent?e&&e<this.nearestUpcomingEvent&&(this.nearestUpcomingEvent=e):this.nearestUpcomingEvent=e}updateNearestFutureEventFromUnsentEvents(){this.nearestUpcomingEvent=void 0,this.upcomingEvents&&Array.from(this.upcomingEvents.keys()).forEach((t=>{this.updateNearestFutureEvent(t)}))}composeMetadata(t,e){return{eventMetadata:t,type:e}}getComputedEpoch(t){return this.streamStartTime?this.streamStartTime+t:t}getEpoch(t){return new Date(t).getTime()/1e3}}const Ac=Object.freeze({SESSION_INIT_FAILURE:1793});class Cc{constructor(r,o,a){this.configuration=r,this.gameInfo_=void 0,this.gameMetadataDeferred_=new n.Deferred,this.gameEventDeferred_=new n.Deferred,this.documentDeferred=new n.Deferred,this.eventInfoConverter={toFirestore:t=>t,fromFirestore:t=>t.data()},this.isDocumentExists=async(t,e)=>{if(this.db){const n=Zh(this.db,t,e);(await Ec(n)).exists()||this.documentDeferred.resolve(!1),this.documentDeferred.resolve(!0)}else this.logger.warn("Firestore not set"),this.documentDeferred.resolve(!1);return this.documentDeferred.promise},this.createSessionError=t=>s(Ac.SESSION_INIT_FAILURE|i.ERROR_CATEGORY_MASK_THIRDPARTY,t.message,void 0,JSON.stringify(t)),this.logger=a||t(e.OFF,"FL_STREAM_TIMELINE"),this.gameMetadataDeferred_=new n.Deferred,this.gameEventDeferred_=new n.Deferred,this.documentDeferred=new n.Deferred,this.eventDispatcher=new Sc(this.configuration.spoiler,o,this.logger),this.player_=o,this.initializeFirebase(),this.setupPlayerListeners()}get gameInfo(){return this.gameInfo_}publishEvent(t,e,n){var s;null===(s=this.eventDispatcher)||void 0===s||s.eventReceived(t,e,n)}publishGameInfo(t){var e;this.gameInfo_=t,null===(e=this.eventDispatcher)||void 0===e||e.eventMetadata(t)}initializeFirebase(){const t={experimentalAutoDetectLongPolling:!0,useFetchStreams:!1};try{this.firebaseApp=function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw x.create("bad-app-name",{appName:String(s)});const i=R.get(s);if(i){if(p(t,i.options)&&p(n,i.config))return i;throw x.create("duplicate-app",{appName:s})}const r=new E(s);for(const t of L.values())r.addComponent(t);const o=new P(t,n,r);return R.set(s,o),o}(this.configuration.firebaseConfig),this.configuration.firestoreSettings?sc(this.firebaseApp,this.configuration.firestoreSettings):sc(this.firebaseApp,t),this.db=ic(this.firebaseApp)}catch(t){this.db=void 0}this.db||this.logger.warn("Could not set Firestore")}unsubscribeFirebaseListeners(){this.unsubscribeFromEvents(),this.unsubscribeFromGameMetadata()}setupPlayerListeners(){this.player_&&this.player_.subscribe("error",(()=>{this.unsubscribeFirebaseListeners()}))}destroyPlayerListeners(){this.player_&&this.player_.unsubscribe("error")}exists(t,e){return this.isDocumentExists(t,e)}subscribeToEvents(t,e,n){return this.db?this.eventsUnsubscribe=Tc(function(t,...e){for(const n of e)t=n._apply(t);return t}(function(t,e,...n){if(t=y(t),zh("collection","path",e),t instanceof Qh){const s=Ni.fromString(e,...n);return Gh(s),new Jh(t,null,s)}{if(!(t instanceof Xh||t instanceof Jh))throw new ci(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ni.fromString(e,...n));return Gh(s),new Jh(t.firestore,null,s)}}(this.db,t,e,n)),(t=>{this.gameMetadataDeferred_.resolve(void 0),t.docChanges().forEach((t=>{this.logger.debug("Document changed",t.doc.data()),this.publishEvent(this.getChangeType(t.type),t.doc.id,t.doc.data())}))}),(t=>{this.logger.error("Error fetching documents for stream timeline events",t),this.gameMetadataDeferred_.reject(this.createSessionError(t))})):(this.logger.warn("Firestore not set"),this.gameMetadataDeferred_.resolve(void 0)),this.gameMetadataDeferred_.promise}subscribeToGameMetadata(t,e){return this.db?this.gameMetadataUnsubscribe=Tc(Zh(this.db,t,e).withConverter(this.eventInfoConverter),(t=>{const e=t.data();e?this.publishGameInfo(e):this.logger.warn("scheduledStart not available in metadata"),this.gameEventDeferred_.resolve(void 0)}),(t=>{this.logger.error("Error subscribing to game info",t),this.gameEventDeferred_.reject(this.createSessionError(t))})):(this.logger.warn("Firestore not set"),this.gameEventDeferred_.resolve(void 0)),this.gameEventDeferred_.promise}getChangeType(t){switch(t){case"added":return c.ADDED;case"modified":return c.MODIFIED;case"removed":return c.DELETED;default:return c.UNKNOWN}}unsubscribeFromEvents(){this.eventsUnsubscribe&&(this.eventsUnsubscribe(),this.eventsUnsubscribe=void 0)}unsubscribeFromGameMetadata(){this.gameMetadataUnsubscribe&&(this.gameMetadataUnsubscribe(),this.gameMetadataUnsubscribe=void 0)}updatePlayer(t){var e;this.destroyPlayerListeners(),this.player_=t,null===(e=this.eventDispatcher)||void 0===e||e.updatePlayer(t)}}function Dc(t,e,n){const s=new Cc(t,e,n);return new h(t,s,n)}const Nc="7.0.56";export{c as ChangeType,Dc as createStreamTimelineManager,Nc as version};

