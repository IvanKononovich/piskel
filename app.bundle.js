!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(s).concat([o]).join("\n")}var r;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"images/83a9a6f135533c2db0f7c411ec7d025d.png"},function(t,e,n){n(18),t.exports=n(4)},function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(16)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(e=t.exports=n(0)(!1)).i(n(6),""),e.i(n(7),""),e.i(n(8),""),e.i(n(9),""),e.i(n(10),""),e.i(n(11),""),e.i(n(12),""),e.i(n(13),""),e.i(n(14),""),e.i(n(15),""),e.push([t.i,"html,\nbody {\n    padding: 0;\n    margin: 0;\n}\nbody {\n    overflow: hidden;\n}\n.content-wrapper {\n    display: flex;\n    justify-content: space-around;\n}\n.column {\n    min-width: 155px;\n    max-width: 155px;\n    box-sizing: border-box;\n    margin-top: 60px;\n    border: 1px solid #000000;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    position: fixed;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 50vh;\n}\n.column_left {\n    flex-wrap: nowrap;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    left: 175px;\n}\n.column__row {\n    width: 100%;\n    height: 100px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    border-top: 1px solid #000000;\n}\n::-webkit-scrollbar {\n    height: 10px;\n    width: 6px;\n    background: #fff;\n}\n \n::-webkit-scrollbar-thumb {\n    background: #616161;\n    -webkit-border-radius: 1ex;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n \n::-webkit-scrollbar-corner {\n    background: #fff;\n}\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".color-palette-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n.color-palette-container__input {\n    z-index: 0;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n}\n.color-palette-container__input_primary {\n    top: 40%;\n    left: 40%;\n}\n.color-palette-container__input_secondary {\n    top: 60%;\n    left: 60%;\n}\n.color-palette-container__input_active {\n    z-index: 1;\n}\n",""])},function(t,e,n){e=t.exports=n(0)(!1);var i=n(1)(n(2));e.push([t.i,".resize-canvas {\n    cursor: pointer;\n    transition: right 0.3s;\n    position: fixed;\n    right: 0;\n    top: 300px;\n    width: 46px;\n    height: 46px;\n    background: #000000 url("+i+") no-repeat -138px -182px;\n}\n.resize-canvas:hover {\n    background-color: #444444;\n}\n.resize-canvas_open {\n    right: 200px;\n}\n.resize-canvas_open:hover {\n    background-color: #000000;\n}\n.resize-canvas__content {\n    transition: width 0.3s;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    background-color: #000000;\n    width: 0;\n}\n.resize-canvas__content_open {\n    width: 200px;\n}\n.resize-canvas__row {\n    font-family: sans-serif;\n    padding: 10px;\n    display: flex;\n    justify-content: flex-start;\n}\n.resize-canvas__input {\n    outline: none;\n    border: 1px solid #ffffff;\n    background-color: #444444;\n    color: #ffffff;\n    line-height: 25px;\n    text-align: center;\n    padding: 0 3px;\n    margin-right: 10px;\n    height: 25px;\n    width: 50px;\n}\n.resize-canvas__text {\n    width: 50px;\n    color: #ffffff;\n    line-height: 25px;\n}\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".resize-tool {\n    min-width: 153px;\n    height: 50px;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #000000;\n    font-family: sans-serif;\n    text-align: center;\n}\n.resize-tool__text {\n    color: #d3c5c5;\n    line-height: 25px; \n}\n.resize-tool__button-container {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n.resize-tool__button-size {\n    transition: 0.3s;\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n    background-color: #000000;\n    color: #ffffff;\n    text-align: center;\n    line-height: 20px;\n}\n.resize-tool__button-size:hover {\n    background-color: #444444;\n}\n.resize-tool__button-size_active {\n    outline: 3px solid #ffbf35;\n}\n",""])},function(t,e,n){e=t.exports=n(0)(!1);var i=n(1)(n(2));e.push([t.i,".instrument-item {\n    height: 46px;\n    width: 46px;\n    margin: 0 auto;\n    padding-top: 10px;\n    z-index: 1;\n}\n.instrument-item:hover {\n    z-index: 5;\n}\n.instrument-item__img {\n    transition: background-color 0.3s;\n    cursor: pointer;\n    position: relative;\n    width: 46px ;\n    height: 46px;\n    background-color: #000000;\n    background-image: url("+i+");\n    background-repeat: no-repeat;\n}\n.instrument-item__img:hover {\n    background-color: #535353;\n}\n.instrument-item__img_active {\n    outline: 3px solid #ffbf35;\n}\n.instrument-item__shortcut-button {\n    color: #ffbf35;\n}\n\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".instrument-item__img_pen {\r\n    background-position: -182px -92px;\r\n}\r\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".instrument-item__img_eraser {\r\n    background-position: -46px -228px;\r\n}\r\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".instrument-item__img_pipette {\n    background-position: -274px 0px;\n}\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".instrument-item__img_bucket {\r\n    background-position: -228px -92px;\r\n}\r\n",""])},function(t,e,n){e=t.exports=n(0)(!1);var i=n(1)(n(2));e.push([t.i,".frame {\n    cursor: pointer;\n    width: 130px;\n    min-height: 130px;\n    border: 3px solid #000000;\n    margin: 0 auto;\n    margin-top: 10px;\n    position: relative;\n}\n.frame_sample {\n    display: none;\n}\n.frame_active {\n    border-color: #ffd700;\n}\n.frame:hover {\n    border-color: #444444;\n}\n.frame:hover .frame__button {\n    display: block;\n}\n.frame_active:hover {\n    border-color: #ffd700;\n}\n.frame__text {\n    z-index: 1;\n    position: relative;\n    cursor: default;\n    font-family: sans-serif;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    line-height: 30px;\n    background-color: #ffd700;\n    color: #000000\n}\n.frame__button {\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    display: none;\n    width: 30px;\n    height: 30px;\n    background-color: #64646499;\n    background-image: url("+i+");\n    position: absolute;\n    right: 0;\n}\n.frame__button:hover {\n    background-color: #535353;\n}\n.frame__button_pos_top {\n    top: 0;\n    background-position: -274px -106px;\n}\n.frame__button_pos_bottom {\n    bottom: 0; \n    background-position: -274px -76px;\n}\n.frame__canvas {\n    z-index: 0;\n    width: 130px;\n    height: 130px;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.button-create-frame {\n    cursor: pointer;\n    font-family: sans-serif;\n    text-align: center;\n    line-height: 25px;\n    padding: 0 10px;\n    margin: 20px auto;\n    width: 100px;\n    border: 1px solid #000000;\n    background-color: #000000;\n    color: #ffffff;\n}\n.button-create-frame:hover {\n    background-color: #535353;\n    border-color: #ffd700;\n}\n",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".main-canvas {\r\n    display: block;\r\n}\r\n",""])},function(t,e,n){var i,o,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,l=0,h=[],u=n(17);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(b(i.parts[r],e))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(b(i.parts[r],e));s[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],i={},o=0;o<t.length;o++){var s=t[o],r=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}function p(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return g(e,t.attrs),p(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,o,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var r=l++;n=c||(c=v(e)),i=C.bind(null,n,r,!1),o=C.bind(null,n,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),p(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||s)&&(i=u(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return d(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var r=n[o];(a=s[r.id]).refs--,i.push(a)}t&&d(f(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var x,S=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function C(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=S(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e);var i=new class{constructor(){this.colorPrimary=document.querySelector(".color-palette-container__input_primary"),this.colorPrimaryColor=this.colorPrimary.value,this.colorSecondary=document.querySelector(".color-palette-container__input_secondary"),this.changeColor=this.changeColor.bind(this),this.colorPrimary.addEventListener("change",t=>{const e=t.target;Promise.resolve().then(()=>{this.changeColor(e.value)})})}changeColor(t){this.colorSecondary.value=this.colorPrimaryColor,this.colorPrimary.value=t,this.colorPrimaryColor=this.colorPrimary.value}};class o{constructor(t,e,n){this.mainCanvas=n,this.listSectors=e,this.listSectorsState=[],this.frameSample=document.querySelector(".frame_sample"),this.buttonCreateFrame=document.querySelector(".button-create-frame"),this.frameContent=this.frameSample.cloneNode(!0),this.frameContent.classList.remove("frame_sample"),this.frameCanvas=this.frameContent.querySelector(".frame__canvas"),this.frameCanvas.width=window.innerHeight,this.frameCanvas.height=window.innerHeight,this.frameContent.dataset.frameNumber=t,this.frameNumberText=this.frameContent.querySelector(".frame__text"),this.frameNumberText.innerHTML=t,this.frameSample.parentNode.insertBefore(this.frameContent,this.buttonCreateFrame),this.changeActiveState=this.changeActiveState.bind(this),this.frameContent.addEventListener("click",this.changeActiveState),this.state="not active"}changeActiveState(){const{activeFrame:t}=this.mainCanvas;t!==this&&(this.mainCanvas.activeFrame.changeState("not active"),this.changeState("active"))}makeChangesSectors(){this.listSectorsState.forEach(t=>{const e=this.listSectors[t.indexRow][t.indexColumn];e.color=t.color,this.mainCanvas.drawingElements(e)})}savingStateSectors(){this.listSectorsState=[],this.listSectors.forEach(t=>{t.forEach(t=>{this.listSectorsState.push({indexRow:t.indexRow,indexColumn:t.indexColumn,color:t.color})})})}changeState(t){this.state=t,"active"===this.state?(this.makeChangesSectors(),this.frameContent.classList.add("frame_active")):(this.savingStateSectors(),this.makeChangesSectors(),this.drawingAllElements(),this.frameContent.classList.remove("frame_active"))}drawingAllElements(){this.listSectors.forEach(t=>{t.forEach(t=>{this.drawingElements(t)})})}drawingElements(t){const e=this.frameCanvas.getContext("2d");e.beginPath(),e.fillStyle=t.color,e.rect(t.x,t.y,t.w,t.h),e.fill()}}var s=new class{constructor(t,e){this.canvas=document.querySelector(".main-canvas"),this.canvas.width=window.innerHeight,this.canvas.height=window.innerHeight,this.quantitySectorsX=t,this.quantitySectorsY=e,this.totalQuantitySectors=0,this.defaultColor="#c7c7c7",this.listSectors=[],this.listFrames=[],this.activeFrame=null,this.buttonCreateFrame=null,this.lastClickCoordinates=null,this.createFrame=this.createFrame.bind(this),Promise.resolve().then(()=>{this.createFrame(),this.findActiveFrame(),this.buttonCreateFrame=this.listFrames[0].buttonCreateFrame,this.buttonCreateFrame.addEventListener("click",this.createFrame)})}createFrame(){this.activeFrame&&this.activeFrame.changeState("not active");const t=new o(this.listFrames.length+1,this.listSectors,this);t.changeState("active"),t.drawingAllElements(),this.listFrames.push(t),this.findActiveFrame(),this.drawingAllElementsColor(this.defaultColor)}drawingAllElementsColor(t){this.listSectors.forEach(e=>{e.forEach(e=>{const n=e;n.color=t,this.drawingElements(n)})})}drawingAllElements(){this.listSectors.forEach(t=>{t.forEach(t=>{this.drawingElements(t)})})}plots(){this.listSectors=[[]],this.totalQuantitySectors=this.quantitySectorsX*this.quantitySectorsY;let t=0,e=0;const n=Math.round(this.canvas.width/this.quantitySectorsX),i=Math.round(this.canvas.height/this.quantitySectorsY);this.canvas.width=this.quantitySectorsX*n,this.canvas.height=this.quantitySectorsY*i;for(let o=0;o<this.quantitySectorsX*this.quantitySectorsY;o+=1)this.listSectors[Math.floor(e/i)].push({neighbors:[],x:t,y:e,w:n,h:i,color:this.defaultColor,indexRow:Math.floor(e/i),indexColumn:Math.floor(t/n)}),(t+=n)>=this.canvas.width&&(t=0,e+=i,this.listSectors.push([]));this.listSectors.pop(),this.drawingAllElements(),this.identifyingNeighbors()}identifyingNeighbors(){this.listSectors.forEach((t,e)=>{t.forEach((n,i)=>{let o=null,s=null,r=null,a=null;e>0&&(s=this.listSectors[e-1][i]),i>0&&(o=this.listSectors[e][i-1]),i+1<t.length&&(r=this.listSectors[e][i+1]),e+1<this.listSectors.length&&(a=this.listSectors[e+1][i]);const c=n;c.neighbors.push(o,r,s,a),c.neighbors=c.neighbors.filter(t=>t||!1)})})}changeNumberSections(){const t=[];this.listSectors.forEach((e,n)=>{e.forEach((e,i)=>{e.color!==this.defaultColor&&t.push({color:e.color,indexRow:n,indexColumn:i})})}),this.plots(),t.forEach(t=>{this.listSectors.length>t.indexRow&&this.listSectors[t.indexRow].length>t.indexColumn&&(this.listSectors[t.indexRow][t.indexColumn].color=t.color)}),this.drawingAllElements()}findActiveFrame(){this.listFrames.forEach(t=>{"active"===t.state&&(this.activeFrame=t)})}drawingElements(t){const e=this.canvas.getContext("2d");e.beginPath(),e.fillStyle=t.color,e.rect(t.x,t.y,t.w,t.h),e.fill(),this.findActiveFrame(),this.activeFrame&&this.activeFrame.drawingElements(t)}}(0,0);var r=new class{constructor(){this.resizeButton=document.querySelector(".resize-canvas"),this.resizeContent=this.resizeButton.querySelector(".resize-canvas__content"),this.changeViewContent=this.changeViewContent.bind(this),this.changeSizeCanvas=this.changeSizeCanvas.bind(this),this.inputsSize=this.resizeContent.querySelectorAll(".resize-canvas__input"),this.inputSizeX=null,this.inputSizeY=null,[...this.inputsSize].forEach(t=>{t.classList.contains("resize-canvas__input_x")?this.inputSizeX=t:this.inputSizeY=t,t.addEventListener("keyup",this.changeSizeCanvas)}),s.quantitySectorsX=this.inputSizeX.value,s.quantitySectorsY=this.inputSizeY.value,s.plots(),this.resizeButton.addEventListener("click",this.changeViewContent)}changeViewContent(t){t.target.classList.contains("resize-canvas")&&(this.resizeButton.classList.toggle("resize-canvas_open"),this.resizeContent.classList.toggle("resize-canvas__content_open"))}changeSizeCanvas(t){const e=t.target;e.value=e.value.replace(/\D+/gi,""),+e.value<e.dataset.min&&(e.value=e.dataset.min),+e.value>e.dataset.max&&(e.value=e.dataset.max),s.quantitySectorsX=this.inputSizeX.value,s.quantitySectorsY=this.inputSizeY.value,+s.quantitySectorsX===s.listSectors[0].length&&+s.quantitySectorsY===s.listSectors.length||s.changeNumberSections()}};var a=new class{constructor(){this.activeButton=document.querySelector(".resize-tool__button-size_active"),this.size=this.activeButton.dataset.size,this.changeStateButton=this.changeStateButton.bind(this),document.addEventListener("click",this.changeStateButton)}changeStateButton(t){const e=t.target;e.classList.contains("resize-tool__button-size")&&(this.activeButton.classList.remove("resize-tool__button-size_active"),e.classList.add("resize-tool__button-size_active"),this.activeButton=e,this.size=this.activeButton.dataset.size)}};class c{constructor(t){this.mainCanvas=s,this.mainCanvasContent=this.mainCanvas.canvas,this.state=!1,this.mouseButtonNumber=0,this.sizeTool=a.size,this.permissionUseArea=!0,this.typeEvent=null,this.colorPallete=i,this.colorPrimary=i.colorPrimary,this.colorSecondary=i.colorSecondary,this.toolCSSClass=t,this.toolButton=document.querySelector(`.${this.toolCSSClass}`),this.lastClickCoordinates=null,this.stateChange=this.stateChange.bind(this),this.subscribeEvents=this.subscribeEvents.bind(this),this.unsubscribeEvents=this.unsubscribeEvents.bind(this),this.useActiveTool=this.useActiveTool.bind(this),this.mainCanvasContent.addEventListener("mousedown",this.subscribeEvents),this.mainCanvasContent.addEventListener("mouseout",()=>{this.lastClickCoordinates=null}),this.mainCanvasContent.addEventListener("contextmenu",t=>{t.preventDefault()}),document.addEventListener("click",this.stateChange)}static findAllPointsLine(t,e,n,i){const o=[],s=Math.max(Math.abs(t-n),Math.abs(e-i));for(let r=0;r<s;r+=1){const a=r/s;o.push({x:a*(n-t)+t,y:a*(i-e)+e})}return o}crossingSectorCheck(t,e){const n=Math.floor(this.mainCanvasContent.width/this.mainCanvas.quantitySectorsX),i=Math.floor(this.mainCanvasContent.height/this.mainCanvas.quantitySectorsY),o=Math.floor(t/n),s=Math.floor(e/i);return this.mainCanvas.listSectors[s][o]}applicationToolAreaSector(t){const e=t.indexRow-Math.floor(this.sizeTool/2),n=t.indexRow+Math.ceil(this.sizeTool/2),i=t.indexColumn-Math.floor(this.sizeTool/2),o=t.indexColumn+Math.ceil(this.sizeTool/2),{listSectors:s}=this.mainCanvas,r=[];for(let t=e;t<n;t+=1)for(let e=i;e<o;e+=1){const n=t<s.length&&t>=0,i=e<s[0].length&&e>=0;n&&i&&r.push(s[t][e])}return r}applicationToolSector(t,e){this.sizeTool=a.size;let n=[this.crossingSectorCheck(t,e)];n[0]&&(this.sizeTool>1&&this.permissionUseArea&&(n=this.applicationToolAreaSector(...n)),this.use&&(this.colorPrimary=i.colorPrimary,this.colorSecondary=i.colorSecondary,n.forEach(t=>{this.use(t),this.mainCanvas.drawingElements(t)})))}useActiveTool(t){this.typeEvent=t.type;const e=t.pageX-this.mainCanvasContent.getBoundingClientRect().left,n=t.pageY-this.mainCanvasContent.getBoundingClientRect().top;if(this.lastClickCoordinates){const t=this.lastClickCoordinates.x,i=this.lastClickCoordinates.y;c.findAllPointsLine(t,i,e,n).forEach(t=>{this.applicationToolSector(t.x,t.y)})}else this.applicationToolSector(e,n);this.lastClickCoordinates={x:e,y:n}}unsubscribeEvents(t){this.lastClickCoordinates=null,this.useActiveTool(t),this.mainCanvasContent.removeEventListener("mousemove",this.useActiveTool),document.removeEventListener("mouseup",this.unsubscribeEvents),this.lastClickCoordinates=null}subscribeEvents(t){this.mouseButtonNumber=t.button,this.state&&(this.useActiveTool(t),this.mainCanvasContent.addEventListener("mousemove",this.useActiveTool),document.addEventListener("mouseup",this.unsubscribeEvents))}stateChange(t){const e=t.target;e.classList.contains("instrument-item__img")&&(e.classList.contains(this.toolCSSClass)?(this.state=!0,this.toolButton.classList.add("instrument-item__img_active")):(this.state=!1,this.toolButton.classList.remove("instrument-item__img_active")))}}var l=new class extends c{use(t){const e=t;let n=this.colorPrimary.value;this.mouseButtonNumber>0&&(n=this.colorSecondary.value),e.color=n}}("instrument-item__img_pen");var h=new class extends c{use(t){t.color=this.mainCanvas.defaultColor}}("instrument-item__img_eraser");var u=new class extends c{constructor(){super("instrument-item__img_pipette"),this.permissionUseArea=!1}use(t){if("mouseup"===this.typeEvent){const e=t,{color:n}=e;this.colorPallete.changeColor(n)}}}("instrument-item__img_pipette");var d=new class extends c{constructor(){super("instrument-item__img_bucket"),this.permissionUseArea=!1}use(t){"mouseup"===this.typeEvent&&(this.findingNeighborsWithSameColor=this.findingNeighborsWithSameColor.bind(this),this.chengSectorColor=this.chengSectorColor.bind(this),this.listNeighbors=[],this.checkedSectors=0,this.startingSector=t,this.sectorColor=this.startingSector.color,this.color=this.colorPrimary.value,this.mouseButtonNumber>0&&(this.color=this.colorSecondary.value),this.findingNeighborsWithSameColor(this.startingSector))}chengSectorColor(t){const e=t;e.color===this.sectorColor&&(e.color=this.color,this.mainCanvas.drawingElements(e),this.listNeighbors.push(e))}findingNeighborsWithSameColor(t){for(this.listNeighbors.push(...t.neighbors),this.listNeighbors=this.listNeighbors.filter(t=>t.color===this.sectorColor);this.listNeighbors.length>0;){if(this.checkedSectors>this.mainCanvas.totalQuantitySectors){this.listNeighbors=[];break}this.checkedSectors+=1,this.listNeighbors.shift().neighbors.forEach(this.chengSectorColor)}this.startingSector.color=this.color,this.mainCanvas.drawingElements(t)}}("instrument-item__img_bucket");console.log(l,h,i,d,r,u)}]);
//# sourceMappingURL=app.bundle.js.map