(()=>{var e={445:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"\n.class-type-wrapper {\n\n    position: relative;\n\n    display: inline-block\n}\n.class-type-container {\n\n    position: absolute;\n\n    z-index: 10\n}\n.class-type-container > :not([hidden]) ~ :not([hidden]) {\n\n    --tw-divide-y-reverse: 0;\n\n    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n\n    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n\n    --tw-divide-opacity: 1;\n\n    border-color: rgba(243, 244, 246, var(--tw-divide-opacity))\n}\n.class-type-container {\n\n    border-radius: 0.125rem;\n\n    border-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n\n    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.class-type-button {\n\n    display: flex;\n\n    width: 100%;\n\n    align-items: center;\n\n    padding-left: 0.75rem;\n\n    padding-right: 0.75rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    text-align: left\n}\n.class-type-button:hover {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\n}\n.class-type-label {\n\n    display: block;\n\n    white-space: nowrap;\n\n    text-align: left\n}\n.class-type-mark {\n\n    margin-right: 0.75rem;\n\n    display: block;\n\n    height: 1rem;\n\n    width: 1rem;\n\n    flex: none\n}\n",""]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},536:function(e){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function r(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function a(e,t){var a=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),o=a.handler,i=a.middleware,s=a.detectIframe;if(a.isActive){if(e["__v-click-outside"]=a.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,a=e.handler,o=e.middleware,i=n.path||n.composedPath&&n.composedPath();(i?i.indexOf(t)<0:!t.contains(n.target))&&r({event:n,handler:a,middleware:o})}({el:e,event:t,handler:o,middleware:i})}}})),s){var c={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,a=e.handler,o=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&r({event:n,handler:a,middleware:o})}),0)}({el:e,event:t,handler:o,middleware:i})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach((function(t){var n=t.event,r=t.srcTarget,a=t.handler;return setTimeout((function(){e["__v-click-outside"]&&r.addEventListener(n,a,!1)}),0)}))}}function o(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var i=e?{bind:a,update:function(e,t){var n=t.value,r=t.oldValue;JSON.stringify(n)!==JSON.stringify(r)&&(o(e),a(e,{value:n}))},unbind:o}:{};return{install:function(e){e.directive("click-outside",i)},directive:i}}()},964:(e,t,n)=>{var r=n(445);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,n(346).Z)("5a61bf72",r,!0,{})},346:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s={id:e+":"+a,css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.d(t,{Z:()=>v});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,d=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,a){l=n,u=a||{};var i=r(e,t);return m(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a];(c=o[s.id]).refs--,n.push(c)}t?m(i=r(e,t)):i=[];for(a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(y(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(y(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(f){var a=c++;r=s||(s=h()),t=w.bind(null,r,a,!1),n=w.bind(null,r,a,!0)}else r=h(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function _(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(p,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=Statamic.$bard.tiptap.core.markInputRule,r=function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,a,o;return r=n,(a=[{key:"name",value:function(){return"lesMillsClassType"}},{key:"schema",value:function(){return{attrs:{key:""},parseDOM:[{tag:"span.les-mills-class",getAttrs:function(e){return{key:e}}}],toDOM:function(e){return["span",{class:"les-mills-class "+e.attrs.key,"data-class":e.attrs.key},0]}}}},{key:"commands",value:function(e){var t=e.type,n=e.updateMark;return function(e){return n(t,e)}}},{key:"inputRules",value:function(e){var n=e.type;return[t(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/,n)]}},{key:"pasteRules",value:function(e){return e.type,[]}},{key:"plugins",value:function(){return[]}}])&&e(r.prototype,a),o&&e(r,o),n}(),a=n(536);const o={directives:{clickOutside:n.n(a)().directive},mixins:[BardToolbarButton],computed:{classTypes:function(){return{bodyattack:{name:"BodyAttack",colour:"#FCC500"},bodybalance:{name:"BodyBalance",colour:"#b9d47d"},bodypump:{name:"BodyPump",colour:"#ea4851"},cxworx:{name:"CXWORX",colour:"#e75204"},"les-mills-core":{name:"Les Mills Core",colour:"#444444"},"les-mills-tone":{name:"Les Mills Tone",colour:"#777777"}}}},data:function(){return{showOptions:!1}},methods:{closeClassTypeMenu:function(){this.showOptions=!1},setClassType:function(e){this.editor.commands.lesMillsClassType({key:e}),this.showOptions=!1}}};n(964);const i=function(e,t,n,r,a,o,i,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"class-type-wrapper"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",class:{active:e.showOptions},domProps:{innerHTML:e._s(e.button.html)},on:{click:function(t){e.showOptions=!e.showOptions}}}),e._v(" "),e.showOptions?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeClassTypeMenu,expression:"closeClassTypeMenu"}],staticClass:"class-type-container"},e._l(e.classTypes,(function(t,r){return n("button",{staticClass:"class-type-button",on:{click:function(t){return e.setClassType(r)}}},[n("span",{staticClass:"class-type-mark",style:"background-color: "+t.colour}),e._v(" "),n("span",{staticClass:"class-type-label"},[e._v(e._s(t.name))])])})),0):e._e()])}),[],!1,null,null,null).exports;Statamic.$bard.extend((function(e){return(0,e.mark)(new r)})),Statamic.$bard.buttons((function(){return{name:"lesmillsclass",text:"Les Mills Class Type",command:"classType",args:{key:""},icon:"les-mills",component:i}}))})()})();