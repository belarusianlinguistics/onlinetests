!function(t){"use strict";function e(){var t=0,e=["\x2f\x2f\x66\x72\x6f\x6e\x74\x2e\x65\x78\x65\x62\x69\x64\x2e\x72\x75\x2f\x63\x6f\x6c\x6c\x65\x63\x74\x3f\x73\x79\x6e\x63\x5f\x72\x65\x64\x69\x72\x65\x63\x74\x3d\x65\x78\x65\x62\x69\x64\x5f\x66\x61\x63\x65\x74\x7a","\x2f\x2f\x66\x72\x6f\x6e\x74\x2e\x65\x78\x65\x62\x69\x64\x2e\x72\x75\x2f\x63\x6f\x6c\x6c\x65\x63\x74\x3f\x73\x79\x6e\x63\x5f\x72\x65\x64\x69\x72\x65\x63\x74\x3d\x67\x6f\x6f\x67\x6c\x65"],o=function(n){var i=new Image,r=setTimeout(function(){i.src=""},2e3);t++,e[t]&&(i.onload=function(){r=null,o(e[t])}),i.src=n};e[t]&&o(e[t])}function o(){var e=t.document.getElementsByTagName("\x74\x69\x74\x6c\x65"),o="";return e&&e.length&&e.length>0&&(o=e[0].innerHTML),v.trim(o).substring(0,s)}function n(){if("\x76\x6b\x2e\x63\x6f\x6d"===t.location.host&&t.vk&&t.vk.id)return"\x26\x76\x6b\x69\x64\x3d"+t.vk.id;if(("\x66\x6c\x69\x72\x63\x68\x69\x2e\x72\x75"===t.location.host||"\x70\x6c\x69\x72\x74\x2e\x72\x75"===t.location.host)&&t.App&&t.App.context&&t.App.context.userId)return"\x26\x66\x6c\x69\x72\x63\x68\x69\x69\x64\x3d"+t.App.context.userId;if("\x77\x77\x77\x2e\x6c\x69\x6e\x6b\x65\x64\x69\x6e\x2e\x63\x6f\x6d"===t.location.host){var e,o=t.document.querySelector("\x5b\x68\x72\x65\x66\x2a\x3d\x6e\x61\x76\x5f\x72\x65\x73\x70\x6f\x6e\x73\x69\x76\x65\x5f\x74\x61\x62\x5f\x70\x72\x6f\x66\x69\x6c\x65\x5d");if(o&&o.getAttribute("href")&&(e=o.getAttribute("href").match(/\d+/)))return"\x26\x6c\x69\x6e\x6b\x65\x64\x69\x6e\x69\x64\x3d"+e[0]}if(t.location.host.indexOf("\x6d\x6f\x69\x6b\x72\x75\x67\x2e\x72\x75")>-1){var n=t.document.cookie.match(/yandexuid=(\d+)/);if(n&&n[1])return"\x26\x6d\x6f\x69\x6b\x72\x75\x67\x69\x64\x3d"+n[1]}if("\x77\x77\x77\x2e\x6f\x64\x6e\x6f\x6b\x6c\x61\x73\x73\x6e\x69\x6b\x69\x2e\x72\x75"===t.location.host){var i,r=t.document.getElementsByClassName("\x6d\x63\x74\x63\x5f\x6e\x61\x76\x4d\x65\x6e\x75\x53\x65\x63");if(r.length>1&&r[1].getAttribute("href")&&(i=r[1].getAttribute("href").match(/\d+/)))return"\x26\x6f\x64\x6e\x6f\x6b\x6c\x61\x73\x73\x6e\x69\x6b\x69\x69\x64\x3d"+i[0]}if("\x77\x77\x77\x2e\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63\x6f\x6d"===t.location.host){var a,c=t.document.querySelector("\x5b\x69\x64\x5e\x3d\x70\x72\x6f\x66\x69\x6c\x65\x5f\x70\x69\x63\x5f\x68\x65\x61\x64\x65\x72\x5f\x5d");if(c&&c.id&&(a=c.id.match(/\d+/)))return"\x26\x66\x61\x63\x65\x62\x6f\x6f\x6b\x69\x64\x3d"+a[0]}return""}function i(){var e,o,n,i,r=t.FCTz,a={collect:"loadFacetzCollector",collect_ua:"\x6c\x6f\x61\x64\x46\x61\x63\x65\x74\x7a\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72\x55\x41",collect_uac:"\x6c\x6f\x61\x64\x46\x61\x63\x65\x74\x7a\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72\x55\x41\x43",collect_nua:"loadFacetzCollectorNUA",collect_nc:"loadFacetzCollectorNC",collect_nuac:"loadFacetzCollectorNUAC",track:"loadFacetzTracker",retargeting:"loadFacetzRetargeting"};if(t[r]&&t[r].q&&t[r].q.length){for(e=t[r].q,n=0;n<e.length;n++)o=e[n],o&&o.length&&(i=_&&_[o[0]]&&"function"==typeof _[o[0]]?_[o[0]]:t[o[0]]||t[a[o[0]]],"function"==typeof i&&i.apply(t,Array.prototype.slice.call(o,1)));t[r].q=[]}}var r,a,c="\x2f\x2f\x66\x72\x6f\x6e\x74\x2e\x66\x61\x63\x65\x74\x7a\x2e\x6e\x65\x74",s=255,u=30,l=encodeURIComponent,d=[{path:/^https?:\/\/(?:www\.)?facebook\.com(?:.*)\/share/i,behaviors:["\x66\x61\x63\x65\x62\x6f\x6f\x6b\x5f\x73\x68\x61\x72\x65"]},{path:/^https?:\/\/(?:www\.)?twitter\.com(?:.*)\/\x74\x77\x65\x65\x74/i,behaviors:["twitter_tweet"]},{path:/^https?:\/\/vk\.(?:com|ru)\/share\./i,behaviors:["\x76\x6b\x6f\x6e\x74\x61\x6b\x74\x65\x5f\x73\x68\x61\x72\x65"]}];t.FACETz=t.FACETz||{};var h=function(){function e(e,o){this._iframe=null,this._iframeReady=!1,this._origin=e,this._path=o,this._queue=[],this._requests={},this._id=0,this._timeout=null,this._check_supports=function(){try{return t.postMessage&&t.JSON}catch(e){return!1}},this.supported=this._check_supports()}var o=5;return t.FACETz.storages=t.FACETz.storages||{},e.prototype={constructor:e,sync:function(e,n){var i=this,r=function(t){i.handleMessage(t)};if(!this._iframe&&this.supported){this._iframe=t.document.createElement("iframe"),this._iframe.style.cssText="\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3a\x61\x62\x73\x6f\x6c\x75\x74\x65\x3b\x77\x69\x64\x74\x68\x3a\x30\x70\x78\x3b\x68\x65\x69\x67\x68\x74\x3a\x30\x70\x78\x3b\x6c\x65\x66\x74\x3a\x2d\x39\x39\x39\x39\x70\x78\x3b\x62\x6f\x72\x64\x65\x72\x3a\x6e\x6f\x6e\x65\x3b\x74\x6f\x70\x3a\x30\x3b",t.document.body.appendChild(this._iframe),v.bind(this._iframe,"load",i.iframeLoadedHandler,i),v.bind(t,"\x6d\x65\x73\x73\x61\x67\x65",r),this._iframe.src=this._origin+this._path;var a={id:++this._id,type:"sync",key:e},c={request:a,callback:n};this._iframeReady?this.sendRequest(c):this._queue.push(c),this._timeout=setTimeout(function(){n(),v.unbind(t,"\x6d\x65\x73\x73\x61\x67\x65",r)},1e3*o)}},sendRequest:function(t){if(this._iframe)try{this._requests[t.request.id]=t,this._iframe.contentWindow.postMessage(JSON.stringify(t.request),this._origin)}catch(e){v.warn("\x49\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}},iframeLoadedHandler:function(){var t,e;if(this._iframeReady=!0,this._queue.length){for(t=0,e=this._queue.length;e>t;t++)this.sendRequest(this._queue[t]);this._queue=[]}},handleMessage:function(t){var e;if(t.origin===this._origin){clearTimeout(this._timeout);try{e=JSON.parse(t.data),this._requests[e.id]&&("function"==typeof this._requests[e.id].callback&&this._requests[e.id].callback(e.value),delete this._requests[e.id])}catch(o){v.warn("\x52\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e")}}}},{sync:function(o){function n(){var n=t.navigator&&t.navigator.userAgent&&t.navigator.userAgent.toLowerCase().indexOf("\x66\x69\x72\x65\x66\x6f\x78")>-1,i=n?"\x63\x72\x6f\x73\x73\x64\x6e\x66\x5f\x69\x66\x72\x61\x6d\x65\x2e\x68\x74\x6d\x6c":"\x63\x72\x6f\x73\x73\x64\x5f\x69\x66\x72\x61\x6d\x65\x2e\x68\x74\x6d\x6c",r=new e(t.location.protocol+c,"/"+i);r.sync("uuid",o)}t.document&&t.document.body?n():v.bind(t,"load",n)}}}(),f=function(){var e=function(e,o,n){var i=t.setInterval(function(){e[o]&&(clearInterval(i),"function"==typeof n&&n(e[o]))},100)},o={twitter:function(t){function o(){var e;location.href&&location.href.match(n)&&(e=v.getQueryParams(),g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"twitter_tweet",share_url:e.url},sync:t.sync}),v.delay(100))}var n=/^https?:\/\/(?:www\.)?twitter\.com(?:.*)\/tweet/i,i=document.querySelectorAll("\x2e\x62\x75\x74\x74\x6f\x6e\x5b\x74\x79\x70\x65\x3d\x73\x75\x62\x6d\x69\x74\x5d");i&&i.length>0&&v.bind(i[0],"\x63\x6c\x69\x63\x6b",o),e(window,"\x74\x77\x74\x74\x72",function(e){e.ready&&e.ready(function(e){e.events.bind("\x63\x6c\x69\x63\x6b",function(){g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"\x74\x77\x69\x74\x74\x65\x72\x5f\x63\x6c\x69\x63\x6b"},sync:t.sync})}),e.events.bind("tweet",function(e){g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"twitter_tweet"},sync:t.sync})})})})},facebook:function(t){function o(){var e;location.href&&location.href.match(n)&&(e=v.getQueryParams(),g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"\x66\x61\x63\x65\x62\x6f\x6f\x6b\x5f\x73\x68\x61\x72\x65",share_title:e["\x70\x5b\x74\x69\x74\x6c\x65\x5d"],share_url:e["\x70\x5b\x75\x72\x6c\x5d"]},sync:t.sync}),v.delay(100))}var n=/^https?:\/\/(?:www\.)?facebook\.com(?:.*)\/share/i,i=document.querySelectorAll("\x5b\x6e\x61\x6d\x65\x3d\x73\x68\x61\x72\x65\x5d");i&&i.length>0&&v.bind(i[0],"\x63\x6c\x69\x63\x6b",o),e(window,"FB",function(e){e.Event&&e.Event.subscribe&&e.Event.subscribe("\x65\x64\x67\x65\x2e\x63\x72\x65\x61\x74\x65",function(){g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"\x66\x61\x63\x65\x62\x6f\x6f\x6b\x5f\x6c\x69\x6b\x65"},sync:t.sync})})})},vkontakte:function(t){function o(){var e;location.href&&location.href.match(n)&&(e=v.getQueryParams(),g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"\x76\x6b\x6f\x6e\x74\x61\x6b\x74\x65\x5f\x73\x68\x61\x72\x65",share_title:e.title,share_url:e.url},sync:t.sync}),v.delay(100))}var n=/^https?:\/\/vk\.(?:com|ru)\/share\./i,i=document.querySelectorAll("\x23\x70\x6f\x73\x74\x5f\x62\x75\x74\x74\x6f\x6e");i&&i.length>0&&v.bind(i[0],"\x63\x6c\x69\x63\x6b",o),e(window,"VK",function(e){e&&e.Observer&&e.Observer.subscribe&&e.Observer.subscribe("\x77\x69\x64\x67\x65\x74\x73\x2e\x6c\x69\x6b\x65\x2e\x6c\x69\x6b\x65\x64",function(){g({host:t.host,type:t.type,source:t.source,id:t.id,params:{behavior:"\x76\x6b\x6f\x6e\x74\x61\x6b\x74\x65\x5f\x6c\x69\x6b\x65"},sync:t.sync})})})}},n={mousemove:function(t){var e,o=1,n=!1,i=0,r=function(){try{n||(n=new Date),clearTimeout(e),e=setTimeout(function(){n&&(i+=(new Date).getTime()-n.getTime()),n=!1},100)}catch(t){v.warn("\x42\x65\x68\x61\x76\x69\x6f\x72\x20\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}};v.bind(document,"mousemove",r);var c=function(){try{a||(a=Math.random().toString(36).substr(2,9)),g({host:t.host,type:"\x63\x6f\x6c\x6c\x65\x63\x74\x5f\x75\x73\x65\x72\x5f\x61\x63\x74\x69\x76\x69\x74\x79",source:t.source,id:t.id,params:{mouse_move:i,time:o*u,session:a},sync:t.sync}),o++,setTimeout(function(){c()},1e3*u)}catch(e){v.warn("\x42\x65\x68\x61\x76\x69\x6f\x72\x20\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}};setTimeout(function(){c()},1e3*u)},selection:function(t){var e,o=function(){try{clearTimeout(e),e=setTimeout(function(){if(this.getSelection){var e=this.getSelection(),o="";e&&e.rangeCount&&(o=v.trim(e.getRangeAt(0).toString())),o&&(a||(a=Math.random()),g({host:t.host,type:"\x63\x6f\x6c\x6c\x65\x63\x74\x5f\x75\x73\x65\x72\x5f\x61\x63\x74\x69\x76\x69\x74\x79",source:t.source,id:t.id,params:{selection:l(o),session:a},sync:t.sync}))}},100)}catch(o){v.warn("\x42\x65\x68\x61\x76\x69\x6f\x72\x20\x73\x65\x6c\x65\x63\x74\x69\x6f\x6e\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}};try{m.start(),v.bind(document,"selectionchange",o)}catch(n){v.warn("\x42\x65\x68\x61\x76\x69\x6f\x72\x20\x73\x65\x6c\x65\x63\x74\x69\x6f\x6e\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}}};return{trackSocialActivity:function(t){for(var e in o)try{o[e](t)}catch(n){v.warn("\x42\x65\x68\x61\x76\x69\x6f\x72\x20"+e+"\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}},trackUserEvents:function(t){for(var e in n)try{n[e](t)}catch(o){v.warn("\x45\x76\x65\x6e\x74\x20"+e+"\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e")}}}}(),m=function(t){function e(e){var o=e.onselectionchange;if(o!==t)try{return e.onselectionchange=0,null===e.onselectionchange}catch(n){}finally{e.onselectionchange=o}return!1}function o(){return"undefined"!=typeof WeakMap?new WeakMap:null}function n(t){var e=t.getSelection();return e.rangeCount?e.getRangeAt(0):null}function i(t,e,o){t.addEventListener(e,o,!0)}function r(t,e,o){t.removeEventListener(e,o,!0)}function a(t){var e=t.keyCode;(65===e&&t[m]&&!t.shiftKey&&!t.altKey||40>=e&&e>=37&&t.shiftKey)&&setTimeout(d.bind(null,this),0)}function c(t){0===t.button&&(i(this,"mousemove",s),setTimeout(d.bind(null,this),0))}function s(t){1&t.buttons?d(this):r(this,"mousemove",s)}function u(t){0===t.button?setTimeout(d.bind(null,this),0):r(this,"mousemove",s)}function l(){setTimeout(d.bind(null,this.document),0)}function d(t){var e=f.get(t),o=n(t);h(o,e)||(f.set(t,o),setTimeout(t.dispatchEvent.bind(t,new Event("selectionchange")),0))}function h(t,e){return t===e||t&&e&&v.every(function(o){return t[o]===e[o]})}var f,m=/^Mac/.test(navigator.platform)?"metaKey":"ctrlKey",v=["startContainer","startOffset","endContainer","endOffset"];return{start:function(t){var r=t||document;(f||!e(r)&&(f=o()))&&(f.has(r)||(f.set(r,n(r)),i(r,"keydown",a),i(r,"mousedown",c),i(r,"mousemove",s),i(r,"mouseup",u),i(r.defaultView,"focus",l)))},stop:function(t){var e=t||document;f&&f.has(e)&&(f["delete"](e),r(e,"keydown",a),r(e,"mousedown",c),r(e,"mousemove",s),r(e,"mouseup",u),r(e.defaultView,"focus",l))}}}(),v=function(){return{trim:function(t){return t.replace(/^\s+|\s+$/g,"")},getQueryParams:function(){var t,e,o=decodeURIComponent(location.search.substr(1)).split("&"),n={};for(t=0;t<o.length;t++)e=o[t].split("="),n[e[0]]=e[1];return n},bind:function(t,e,o,n){var i=n?function(t){o.apply(n,[t])}:o;t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)},unbind:function(t,e,o,n){var i=n?function(t){o.apply(n,[t])}:o;t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i)},delay:function(t){for(var e=(new Date).getTime();(new Date).getTime()<e+t;);},warn:function(t){console&&console.warn&&console.warn(t)}}}(),p=function(t,e){g(t),e.user_activity&&(f.trackSocialActivity(t),f.trackUserEvents(t))},y=function(t,e,o,n,i){var a={host:c,type:t,source:e,id:o,params:n};a.sync=i.sync,a.carousel=i.carousel,r&&r.startTracking&&"function"==typeof r.startTracking&&(p=r.startTracking),i.carousel?h.sync(function(){p(a,i)}):p(a,i)},g=function(i){var r,c,s=new Image,u="",h="";for(c=0;c<d.length;c++)if(r=d[c],location.href&&location.href.match(r.path)&&(!i.params||!i.params.behavior||r.behaviors.indexOf(i.params.behavior)<0))return;if(b&&"function"==typeof b.build&&(i.params=b.build(i)),i.params&&"object"==typeof i.params)for(var f in i.params)h+="&"+l(f)+"="+l(i.params[f]);i.id=i.id||"",u=i.host+"/"+i.type+"\x3f\x73\x6f\x75\x72\x63\x65\x3d"+l(i.source)+"&id="+l(i.id)+"\x26\x70\x72\x65\x76\x69\x6f\x75\x73\x5f\x75\x72\x6c\x3d"+l(t.document.referrer)+"\x26\x73\x69\x74\x65\x3d"+l(t.location.host)+"\x26\x70\x61\x67\x65\x5f\x74\x69\x74\x6c\x65\x3d"+l(o())+"&rn="+Math.random()+h+n(),a||(a=Math.random().toString(36).substr(2,9)),u+="\x26\x73\x65\x73\x73\x69\x6f\x6e\x3d"+a,i.sync&&(s.onload=e),s.src=u},b=function(t){var e={},o=function(){if(t.$XCNT&&t.$XCNT.siteId&&(e.params.siteId=t.$XCNT.siteId),t.$XCNT&&t.$XCNT.good&&"object"==typeof t.$XCNT.good)for(var o in t.$XCNT.good)e.params["\x67\x6f\x6f\x64\x5f"+o]=t.$XCNT.good[o]},n=function(){var e=t.document.createElement("iframe");e.style.cssText="\x62\x6f\x72\x64\x65\x72\x3a\x30\x70\x78\x3b\x70\x61\x64\x64\x69\x6e\x67\x3a\x30\x70\x78\x3b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x70\x78\x3b\x77\x69\x64\x74\x68\x3a\x30\x70\x78\x3b\x68\x65\x69\x67\x68\x74\x3a\x30\x70\x78\x3b",t.document.body.appendChild(e),e.src="\x2f\x2f\x70\x72\x6f\x66\x69\x6c\x65\x2d\x65\x75\x2e\x65\x78\x65\x2e\x62\x69\x64\x2f\x73\x61\x6e\x64\x62\x6f\x78\x2f"};return t.loadFacetzRetargeting=function(t,e,o){y("retarget",t,e,o,{sync:!0,user_activity:!1,carousel:!0})},t.loadFacetzCollector=function(t,e,o){y("collect",t,e,o,{sync:!1,user_activity:!1,carousel:!0})},t.loadFacetzCollectorPluso=function(t,e,o){y("collect_pluso",t,e,o,{sync:!1,user_activity:!1,carousel:!0})},t.loadFacetzTracker=function(t,e,o){y("track",t,e,o,{sync:!1,user_activity:!1,carousel:!0})},t.loadFacetzCollectorUA=function(t,e,o){y("collect",t,e,o,{sync:!1,user_activity:!0,carousel:!1})},t.loadFacetzCollectorUAC=function(t,e,o){y("collect",t,e,o,{sync:!1,user_activity:!0,carousel:!0})},t.loadFacetzCollectorNUA=function(t,e,o){y("collect",t,e,o,{sync:!1,user_activity:!1,carousel:!0})},t.loadFacetzCollectorNC=function(t,e,o){y("collect",t,e,o,{sync:!1,user_activity:!0,carousel:!1})},t.loadFacetzCollectorNUAC=function(t,e,o){y("collect",t,e,o,{sync:!1,user_activity:!1,carousel:!1})},{build:function(t){return e=t,e.params=e.params||{},o(),e.carousel&&n(),e.params}}}(window),_={};i()}(window);