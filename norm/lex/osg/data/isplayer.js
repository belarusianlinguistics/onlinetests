(function(){var g=void 0,h=!0,i=null,j=!1,k,l=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return p.apply(i,arguments)}function q(a,b){var c=a.split("."),d=l;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==g?d[e]=b:d=d[e]?d[e]:d[e]={}}function r(a,b){function c(){}c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c};var s,t,v,w,da,ea;function x(){return l.navigator?l.navigator.userAgent:i}function y(){return l.navigator}w=v=t=s=j;var z;if(z=x()){var fa=y();s=0==z.lastIndexOf("Opera",0);t=!s&&(-1!=z.indexOf("MSIE")||-1!=z.indexOf("Trident"));v=!s&&-1!=z.indexOf("WebKit");w=!s&&!v&&!t&&"Gecko"==fa.product}var A=s,B=t,C=w,D=v,E,ga=y();E=ga&&ga.platform||"";da=-1!=E.indexOf("Mac");ea=-1!=E.indexOf("Win");var ha=!!y()&&-1!=(y().appVersion||"").indexOf("X11");
function ia(){var a=l.document;return a?a.documentMode:g}var F;a:{var G="",H;if(A&&l.opera)var I=l.opera.version,G="function"==typeof I?I():I;else if(C?H=/rv\:([^\);]+)(\)|;)/:B?H=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:D&&(H=/WebKit\/(\S+)/),H)var ja=H.exec(x()),G=ja?ja[1]:"";if(B){var ka=ia();if(ka>parseFloat(G)){F=String(ka);break a}}F=G}var la={};
function J(a){var b;if(!(b=la[a])){b=0;for(var c=String(F).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var u=c[f]||"",Na=d[f]||"",Oa=RegExp("(\\d*)(\\D*)","g"),Pa=RegExp("(\\d*)(\\D*)","g");do{var m=Oa.exec(u)||["","",""],n=Pa.exec(Na)||["","",""];if(0==m[0].length&&0==n[0].length)break;b=((0==m[1].length?0:parseInt(m[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==m[1].length?0:parseInt(m[1],
10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==m[2].length)<(0==n[2].length)?-1:(0==m[2].length)>(0==n[2].length)?1:0)||(m[2]<n[2]?-1:m[2]>n[2]?1:0)}while(0==b)}b=la[a]=0<=b}return b}var ma=l.document,na=!ma||!B?g:ia()||("CSS1Compat"==ma.compatMode?parseInt(F,10):5);function K(a,b){this.width=a;this.height=b}K.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};K.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!C&&!B||B&&B&&9<=na||C&&J("1.9.1");B&&J("9");function oa(a,b,c){var d=C&&(da||ha)&&J("1.9");a.style.left=L(b,d);a.style.top=L(c,d)}function L(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};function M(){var a=window.location.search.substr(1);if(!a)return{};for(var b={},a=a.split("&"),c=0;c<a.length;++c){var d=a[c].split("=");if(2==d.length){var e=decodeURIComponent(d[0].replace(/\+/g," ")),d=decodeURIComponent(d[1].replace(/\+/g," ")),e=e.toLowerCase();b[e]=d}}return b}function N(a){try{location.replace(a)}catch(b){}};var O,P,Q;Q=P=O=j;var R=x();R&&(-1!=R.indexOf("Firefox")?O=h:-1!=R.indexOf("Camino")||-1!=R.indexOf("iPhone")||-1!=R.indexOf("iPod")||(-1!=R.indexOf("iPad")?P=h:-1!=R.indexOf("Android")||-1!=R.indexOf("Chrome")||-1!=R.indexOf("Safari")&&(Q=h)));var pa=O,qa=P,ra=Q;var S=M().user_agent||x()||"",T=M().small_screen,sa=-1!=S.toLowerCase().indexOf("chrome"),ta=-1!=S.toLowerCase().indexOf("android"),U,ua=S.toLowerCase();U=-1!=ua.indexOf("android")||-1!=ua.indexOf("mobile")||-1!=ua.indexOf("touch")||T;var va=ta&&!sa&&!pa&&!A,wa=-1!=S.indexOf("ismobile");
if(!T){var xa=T?new K(document.documentElement.clientWidth,document.documentElement.clientHeight):screen.B!==g&&screen.C!==g?new K(160*screen.width/screen.B,160*screen.height/screen.C):va||ta&&wa?new K(screen.width/window.devicePixelRatio,screen.height/window.devicePixelRatio):!U&&pa||B?new K(screen.width*window.devicePixelRatio,screen.height*window.devicePixelRatio):new K(screen.width,screen.height);Math.min(xa.width,xa.height)};B&&J("9");!D||J("528");C&&J("1.9b")||B&&J("8")||A&&J("9.5")||D&&J("528");C&&!J("8")||B&&J("9");function V(a,b){this.r=window.swfobject;this.l=a;this.q=b}V.prototype.p="";V.prototype.load=function(a,b,c,d,e,f){if(this.r.hasFlashPlayerVersion("10.1.0")){a+=window.location.search;var u=p(this.z,this,a,b,c,d,e,f);this.q?this.q(function(){u()}):u()}else N(this.l)};V.prototype.load=V.prototype.load;
V.prototype.z=function(a,b,c,d,e,f){this.c&&(this.p="",this.c.innerHTML="");if("string"==typeof b)if(b=document.getElementById(b))this.c=b;else return;else this.c=b;this.c.style.position="absolute";oa(this.c,0,0);if(this.o=d===g||e===g)d=ya()||720,e=za()||540;this.p=c;b=document.createElement("div");b.setAttribute("id",c);this.c.appendChild(b);f===g&&(f="");f={id:c,resume:f};c={id:c,name:c,wmodefixed:"true",wmode:ra&&ea?"window":""};this.r.embedSWF(a,b.getAttribute("id"),d,e,"10.1.0",j,f,{allowscriptaccess:"sameDomain",
allowfullscreen:h,allowFullScreenInteractive:h,salign:"lt"},c,p(this.A,this))};V.prototype.A=function(a){this.f=a=a.ref;a.style.position="absolute";window.onresize=p(this.s,this);this.s()};
V.prototype.s=function(){var a=ya(),b=za(),c=this.c,d=a,e;if(d instanceof K)e=d.height,d=d.width;else{if(b==g)throw Error("missing height argument");e=b}c.style.width=L(d,h);c.style.height=L(e,h);this.o?(this.f.width=a+"px",this.f.height=b+"px"):(c=Math.max(0,Math.floor((a-this.f.width)/2)),d=Math.max(0,Math.floor((b-this.f.height)/2)),oa(this.f,c,d),this.c.style.overflow=a>=this.f.width&&b>=this.f.height?"hidden":"auto")};
function ya(){return window.innerWidth?window.innerWidth:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetWidth?document.documentElement.offsetWidth:document.body.offsetWidth}function za(){return window.innerHeight?window.innerHeight:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetHeight?document.documentElement.offsetHeight:document.body.offsetHeight};function W(a,b,c){this.v=a;this.w=b;this.l=c}W.prototype.load=function(a,b,c,d,e,f){d=window.swfobject.hasFlashPlayerVersion(d||"10.1.0");var u=Modernizr.inlinesvg;!d&&!u?N(U?this.w:this.l):!d||U&&u?(a=wa||0<location.hash.length,N((c&&qa&&!a?c:b)+location.search)):(b=M().resume,c=document.createElement("div"),document.body.appendChild(c),this.v.load(a,c,"flashmovie",e,f,b))};W.prototype.load=W.prototype.load;function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.k=g}function Ca(a,b){var c=[];Da(a,b,c);return c.join("")}
function Da(a,b,c){switch(typeof b){case "string":Ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==i){c.push("null");break}if("array"==aa(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Da(a,a.k?a.k.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ea(f,
c),c.push(":"),Da(a,a.k?a.k.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Fa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Ea(a,b){b.push('"',a.replace(Ga,function(a){if(a in Fa)return Fa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Fa[a]=e+b.toString(16)}),'"')};function Ha(){};function Ia(a){this.h=a;this.t=new Ba}k=Ia.prototype;k.h=i;k.t=i;k.set=function(a,b){b!==g?this.h.set(a,Ca(this.t,b)):this.h.remove(a)};k.get=function(a){a=this.h.get(a);if(a!==i)try{return Aa(a)}catch(b){throw"Storage: Invalid value was encountered";}};k.remove=function(a){this.h.remove(a)};function X(){}r(X,Ha);X.prototype.set=function(){};X.prototype.get=function(){return i};X.prototype.remove=function(){};function Y(){}r(Y,Ha);function Ja(a,b){this.i=a;this.j=b+"::"}r(Ja,Y);k=Ja.prototype;k.i=i;k.j="";k.set=function(a,b){this.i.set(this.j+a,b)};k.get=function(a){return this.i.get(this.j+a)};k.remove=function(a){this.i.remove(this.j+a)};function Z(a){this.e=a}r(Z,Y);Z.prototype.m=function(){if(!this.e)return j;try{return this.e.setItem("__sak","1"),this.e.removeItem("__sak"),h}catch(a){return j}};Z.prototype.set=function(a,b){try{this.e.setItem(a,b)}catch(c){if(0==this.e.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};Z.prototype.get=function(a){a=this.e.getItem(a);if("string"!=typeof a&&a!==i)throw"Storage mechanism: Invalid value was encountered";return a};Z.prototype.remove=function(a){this.e.removeItem(a)};function Ka(){var a=i;try{a=window.localStorage||i}catch(b){}this.e=a}r(Ka,Z);function La(a,b){this.d={};this.a=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof La){Ma(a);d=a.a.concat();Ma(a);e=[];for(c=0;c<a.a.length;c++)e.push(a.d[a.a[c]])}else{var c=[],f=0;for(d in a)c[f++]=d;d=c;c=[];f=0;for(e in a)c[f++]=a[e];e=c}for(c=0;c<d.length;c++)this.set(d[c],e[c])}}k=La.prototype;k.g=0;k.u=0;
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.d,a)?(delete this.d[a],this.g--,this.u++,this.a.length>2*this.g&&Ma(this),h):j};function Ma(a){if(a.g!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.d,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.g!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.d,a)?this.d[a]:b};k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.d,a)||(this.g++,this.a.push(a),this.u++);this.d[a]=b};function Qa(a,b){if(B&&!(B&&9<=na)){$||($=new La);this.b=$.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),$.set(a,this.b));this.n=a;try{this.b.load(this.n)}catch(c){this.b=i}}}r(Qa,Y);var Ra={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},$=i;k=Qa.prototype;k.b=i;k.n=i;
function Sa(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Ra[a]})}k.m=function(){return!!this.b};k.set=function(a,b){this.b.setAttribute(Sa(a),b);Ta(this)};k.get=function(a){a=this.b.getAttribute(Sa(a));if("string"!=typeof a&&a!==i)throw"Storage mechanism: Invalid value was encountered";return a};k.remove=function(a){this.b.removeAttribute(Sa(a));Ta(this)};function Ta(a){try{a.b.save(a.n)}catch(b){throw"Storage mechanism: Quota exceeded";}};var Ua=i;function Va(){if(!Ua){var a;a=new Ka;if(!(a=a.m()?new Ja(a,"ispring"):i))a=new Qa("ispring"),a=a.m()?a:i;Ua=new Ia(a||new X)}return Ua};function Wa(a){V.call(this,"data/flash-required.html",a)}r(Wa,V);q("ispring.quiz.loader.FlashQuizLoader",Wa);q("ispring.quiz.flashapi.closeWindow",function(){try{va||(window.open("","_self",""),window.close())}catch(a){}return h});q("ispring.quiz.flashapi.loadState",function(a){a=Va().get(a);return a!==g?a:i});q("ispring.quiz.flashapi.saveState",function(a,b){var c=Va();try{c.set(a,b)}catch(d){}return h});function Xa(a){W.call(this,new Wa(a),"data/html5-unsupported.html","data/flash-required.html")}r(Xa,W);q("ispring.quiz.loader.CombinedQuizLoader",Xa);})();
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;window.Modernizr=function(a,b,c){function u(a){i.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l={svg:"http://www.w3.org/2000/svg"},m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==l.svg};for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return u(""),h=j=null,e._version=d,e}(this,this.document);