"use strict";(self.webpackChunkpretzeldata=self.webpackChunkpretzeldata||[]).push([[926],{3926:(t,e,n)=>{n.r(e),n.d(e,{revogr_clipboard:()=>i});var r=n(6308),o=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?n(t.value):o(t.value).then(i,u)}c((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},i=function(){function t(t){(0,r.r)(this,t),this.copyRegion=(0,r.c)(this,"copyRegion",3),this.pasteRegion=(0,r.c)(this,"pasteRegion",3)}return t.prototype.onPaste=function(t){var e=this.getData(t),n=!!(e.types.indexOf("text/html")>-1)&&this.canBeParsedAsHTML(e.getData("text/html")),r=n?e.getData("text/html"):e.getData("text"),o=n?this.htmlParse(r):this.textParse(r);this.pasteRegion.emit(o),t.preventDefault()},t.prototype.copyStarted=function(t){this.copyRegion.emit(this.getData(t)),t.preventDefault()},t.prototype.doCopy=function(t,e){return o(this,void 0,void 0,(function(){return a(this,(function(n){return t.setData("text/plain",e?this.parserCopy(e):""),[2]}))}))},t.prototype.parserCopy=function(t){return t.map((function(t){return t.join("\t")})).join("\n")},t.prototype.textParse=function(t){var e=[],n=t.split(/\r\n|\n|\r/);for(var r in n)e.push(n[r].split("\t"));return e},t.prototype.htmlParse=function(t){for(var e=[],n=document.createRange().createContextualFragment(t).querySelector("table"),r=0,o=Array.from(n.rows);r<o.length;r++){var a=o[r];e.push(Array.from(a.cells).map((function(t){return t.innerText})))}return e},t.prototype.canBeParsedAsHTML=function(t){return null!==document.createRange().createContextualFragment(t).querySelector("table")},t.prototype.getData=function(t){var e;return t.clipboardData||(null===(e=window)||void 0===e?void 0:e.clipboardData)},t}()}}]);
//# sourceMappingURL=926.1276d729.chunk.js.map