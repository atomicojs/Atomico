!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";var e="#text",t="host",n="@tag",r="@attrs",o="shadowDom",a="@create",i="@update",s="@created",c="@updated",u="@remove",f=[],l={},d={maxConcurrentTask:5e3};function p(e){return Array.isArray(e)}function v(e,t){var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function h(e,t){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];return g(e,t,n)}function y(e){var t=typeof e;return e&&"object"===t&&e.tag?e:{tag:"#text",children:"number"===t||"string"===t?""+e:""}}function g(e,t,n){t=t||{};var r,a,i,s,c=1,u={},l=!0,d=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);for(var o=e.length,a=!0;!t&&1===o&&p(e[0]);)o=(e=e[0]).length;if(!o)return f;for(var i=0;i<o;i++){var s=e[i];if(p(s))d(s,t+1,n),a=!1;else{if(s&&"object"===typeof s&&void 0!==s.key){if(r=r||{},s.key in r)throw new Error("Each key must be unique among children");r[s.key]=!0}else if(r)throw new Error("Each child must have a key");n.push(s)}}return a?e:n};for(var v in t){var h=t[v];switch(v){case"context":"object"==typeof h&&(i=h);continue;case"children":!1===h&&(l=!1),n=h;continue;case"innerHTML":case"textContent":case"contenteditable":l=!1;break;case"class":v="className";break;case o:s=h;break;case"key":v="data-key"}u[v]=h,c++}return u.children=a=d(n),{tag:e,key:void 0,size:c,props:u,children:a,useKeys:r,useContext:i,useChildren:l,useShadowDom:s}}function m(e,t){var n=(t[e]||{}).dispatch,r=t.childNodes,o=r.length;n&&n(u);for(var a=0;a<o;a++)m(e,r[a])}var w={};function k(e,t,n){var r=t,o=n;if("object"==typeof n)for(var a in o="",n)n[a]&&(w[a]||(w[a]=a.replace(/([^A-Z])([A-Z])/g,function(e,t,n){return t+"-"+n.toLowerCase()})),o+=w[a]+":"+n[a]+";");return r!==o&&(e.style.cssText=o),o}function b(e,t,n,r,o){if("o"===t[0]||"n"===t[1]){l[t]||(l[t]=t.slice(2).toLocaleLowerCase()),t=l[t],o[t]||(o[t]=[function(e){return o[t][1].call(e.target,e)}]);var a=o[t][0];n&&!r?(e.removeEventListener(t,a),delete o[t]):(!n&&r&&e.addEventListener(t,a),o[t][1]=r)}}var x={children:1};function C(e,t,n){e.removeAttribute(t&&"xlink"===n?"xlink:href":n)}var E,N,S,M,A,j,L=[],T=Promise.resolve();function z(){var e=L,t=e.length;L=[];for(var n=0;n<t;n++){var r=e[n];--r.lvl?r.fun(r.arg):(L.length>d.maxConcurrentTask&&r.lvl++,L.push(r))}L.length&&T.then(z)}function P(){if(!E)throw new Error("the hooks can only be called from an existing functional component in the diff queue");return E}function q(e){var t,n,r=P().component,o=N++;return r.hooks[o]||(n=!0,r.hooks[o]={}),(t=r.hooks[o]).reducer=e,n&&B(t,{type:a}),[t.state,function(e){return B(t,e)}]}function B(e,t){e.state=e.reducer(e.state,t)}function D(e,t){for(var n=e.length,r=0;r<n;r++){var o=e[r],a=o.hooks,i=a.length;t.type===u&&(o.remove=!0);for(var s=0;s<i;s++)B(a[s],t)}}function V(e,t){var n,r=[];function o(f,l,d){if(n){if("function"!=typeof(f=f||"").tag)return D(r.splice(d),{type:u}),n=Q(e,n,f,t,l,a),void(r.length&&(n[e].updateComponent=a));var p,v,h=r[d]||{};if(h.tag!==f.tag&&(p=!0,r[d]={lvl:1,size:1,tag:f.tag,hooks:[],props:{},context:{}},D(r.splice(d+1),{type:u}),v=!0),(h=r[d]).context!==f.useContext&&(h.context=f.useContext,l=Object.assign({},l,f.useContext),v=!0),!v&&(f.size!==h.size&&(v=!0),!v))for(var y in f.props)if(f.props[y]!==h.props[y]){v=!0;break}h.props=f.props,h.size=f.size,v&&!h.prevent&&function e(){if(h.remove)return n;E={component:h,context:l,next:function(){h.prevent||(h.prevent=!0,function(e,t,n){void 0===n&&(n=1);var r=L.length;L.push({fun:e,arg:t,lvl:n}),r||T.then(z)}(function(){h.prevent=!1,e()}))}},N=0,D([h],{type:i});var t=h.tag(h.props,l);E=!1,N=0,o(t,l,d+1),D([h],{type:p?s:c}),p=!1}()}}function a(e,t,r,a){switch(e){case i:return n=t,o(r,a,0),n;case u:n=!1,D(history,{type:e}),history=[]}}return a}function O(t,r){var o,a=document;return(o=t!==e?r?a.createElementNS("http://www.w3.org/2000/svg",t):a.createElement(t):a.createTextNode(""))[n]=t,o}function Q(t,a,s,c,u,f){s=y(s);var l=a&&a[t]||{},d=l.vnode;void 0===d&&(d={});var p=l.handlers;void 0===p&&(p={});var v=l.updateComponent;if(s===d)return a;var h=s.tag,g=s.props,w=s.children,E=s.useKeys,N=s.useChildren,S=s.useShadowDom;c=c||"svg"===h;var M=a,A="function"==typeof h;if(A&&!v&&(v=V(t,c)),function(e){if(e)return e[n]||(e[n]=e.nodeName.toLowerCase()),e[n]}(a)!==h&&"host"!==h&&!A){M=O(h,c),p={};var j=a&&a.parentNode;j&&j.replaceChild(M,a)}return v&&f!==v?v(i,M,s,u):(h!==e?(function(e,t,n,a,i){t=t||{};var s=e[r]||{};for(var c in t)x[c]||!(c in n)&&c in s&&(c in e?e[c]=null:C(e,i,c),delete s[c]);for(var u in n)if(!x[u]){var f=!0,l=n[u],d=typeof l,p=u in a?a[u]:s[u],v=typeof p;(l=null==l?void 0:l)!==p&&("ref"!==u?o===u&&"attachShadow"in e?(e.shadowRoot&&!l||!e.shadowRoot&&l)&&e.attachShadow({mode:l?"open":"closed"}):("function"===d||"function"===v?(b(e,u,p,l,a),f=!1):void 0!==l&&(u in e&&!i||i&&"style"===u)?"style"===u?l=k(e,p||e.style.cssText,l):e[u]=l:l?i?e.setAttributeNS(i&&"xlink"===u?"http://www.w3.org/1999/xlink":null,"xlink"===u?"xlink:href":u,l):e.setAttribute(u,l):(C(e,i,u),delete s[u],f=!1),f&&(s[u]=l)):l&&(l.current=e))}e[r]=s}(M,d.props,g,p,c),N&&d.children!==s.children&&function(t,n,r,o,a,i){for(var s={},c=n.childNodes,u=c.length,f=r.length,l=o?0:u>f?f:u;l<u;l++){var d=c[l],p=void 0,v=l;o&&(v=d.dataset.key)in o?s[v]=d:p=!0,d&&p&&(m(t,d),u--,l--,n.removeChild(d))}for(var h=0;h<f;h++){var g=y(r[h]),w=c[h+1],k=(o&&g.key,c[h]),b=o?s[g.key]:k;o&&b!==k&&n.insertBefore(b,k),"function"==typeof g.tag&&(b||(b=O(e),w?n.insertBefore(b,w):n.appendChild(b)));var x=Q(t,b,g,a,i);b||(w?n.insertBefore(x,w):n.appendChild(x))}}(t,S&&M.shadowRoot||M,w,E,c,u)):M.nodeValue!==w&&(M.nodeValue=w),M[t]={handlers:p,vnode:s,updateComponent:v},M)}function R(e,t){q(function(n,r){switch(r.type){case a:return{args:t};case i:case u:if(n.clear)(r.type===u||!t||!n.args||!v(t,n.args))&&n.clear();return Object.assign({},n,{args:t});case s:case c:var o=r.type===s||!t||!n.args||!v(t,n.args),f=n.clear;return o&&(f=e()),Object.assign({},n,{clear:f,args:t})}return n})}function F(e){return h("table",{class:"table table-striped latest-data"},h("tbody",null,e.dbs.map(function(e){return h("tr",null,h("td",{class:"dbname"},e.dbname),h("td",{class:"query-count"},h("span",{class:e.lastSample.countClassName},e.lastSample.nbQueries)),e.lastSample.topFiveQueries.map(function(e){return h("td",{class:"Query "+e.elapsedClassName},e.formatElapsed,h("div",{class:"popover left"},h("div",{class:"popover-content"},e.query),h("div",{class:"arrow"})))}))})))}function K(){return ENV.generateData().toArray()}perfMonitor.startFPSMonitor(),perfMonitor.startMemMonitor(),perfMonitor.initProfiler("view update"),S=h(function(){perfMonitor.startProfile("view update");var e=function(e){var t=P().next,n="useState/update",r=q(function(t,r){switch(r.type){case a:return"function"==typeof e?e():e;case n:var o=r.state;return"function"==typeof o?o(t):o}return t}),o=r[0],i=r[1];return[o,function(e){i({state:e,type:n}),t()}]}(K),t=e[0],n=e[1];return R(function(){!function e(){n(K()),setTimeout(e,ENV.timeout)}()},[]),R(function(){perfMonitor.endProfile("view update")}),h(F,{dbs:t})},null),M=document.getElementById("body"),void 0===j&&(j="@vn"),A||(S=y(S)).tag!==t&&(S=g(t,{},[S])),Q(j,M,S)});
//# sourceMappingURL=bundle.js.map
