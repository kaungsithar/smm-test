(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e31fe5f4"],{"0b83":function(e,t,n){},"22d9":function(e,t,n){"use strict";var s=n("0b83"),i=n.n(s);i.a},"3f06":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"position-relative"},[e.loading?n("div",{staticClass:"overlay",class:{"white-transparent":e.white}},[n("spinner")],1):e._e(),e._t("default")],2)},i=[],r=n("cf21"),a={components:{Spinner:r["a"]},props:{loading:{default:!1},white:{type:Boolean,default:!1}}},o=a,u=(n("22d9"),n("2877")),c=Object(u["a"])(o,s,i,!1,null,"6cc85e67",null);t["a"]=c.exports},4622:function(e,t,n){"use strict";var s=n("fa4d"),i=n.n(s);i.a},"5b7e":function(e,t,n){
/*!
 * vue-simple-spinner v1.2.8 (https://github.com/dzwillia/vue-simple-spinner)
 * (c) 2017 David Z. Williams
 * Released under the MIT License.
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VueSimpleSpinner=void 0;var s=n(1),i=r(s);function r(e){return e&&e.__esModule?e:{default:e}}"undefined"!==typeof window&&window.Vue&&Vue.component("vue-simple-spinner",i.default),t.VueSimpleSpinner=i.default,t.default=i.default},function(e,t,n){n(2);var s=n(7)(n(8),n(9),null,null);e.exports=s.exports},function(e,t,n){var s=n(3);"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(5)("d89557e4",s,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".vue-simple-spinner{transition:all .3s linear}@keyframes vue-simple-spinner-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];"number"===typeof r&&(s[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"===typeof a[0]&&s[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var s="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(6),r={},a=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,u=0,c=!1,l=function(){},p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e){for(var t=0;t<e.length;t++){var n=e[t],s=r[n.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](n.parts[i]);for(;i<n.parts.length;i++)s.parts.push(h(n.parts[i]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(h(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:a}}}}function f(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var t,n,s=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(s){if(c)return l;s.parentNode.removeChild(s)}if(p){var i=u++;s=o||(o=f()),t=v.bind(null,s,i,!1),n=v.bind(null,s,i,!0)}else s=f(),t=g.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}e.exports=function(e,t,n){c=n;var s=i(e,t);return d(s),function(t){for(var n=[],a=0;a<s.length;a++){var o=s[a],u=r[o.id];u.refs--,n.push(u)}t?(s=i(e,t),d(s)):s=[];for(a=0;a<n.length;a++){u=n[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete r[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function g(e,t){var n=t.css,s=t.media,i=t.sourceMap;if(s&&e.setAttribute("media",s),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t){e.exports=function(e,t){for(var n=[],s={},i=0;i<t.length;i++){var r=t[i],a=r[0],o=r[1],u=r[2],c=r[3],l={id:e+":"+i,css:o,media:u,sourceMap:c};s[a]?s[a].parts.push(l):n.push(s[a]={id:a,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,s){var i,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,r=e.default);var o="function"===typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),s){var u=Object.create(o.computed||null);Object.keys(s).forEach((function(e){var t=s[e];u[e]=function(){return t}})),o.computed=u}return{esModule:i,exports:r,options:o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.default={name:"vue-simple-spinner",props:{size:{default:32},"line-size":{type:Number,default:3},"line-bg-color":{type:String,default:"#eee"},"line-fg-color":{type:String,default:"#2196f3"},speed:{type:Number,default:.8},spacing:{type:Number,default:4},message:{type:String,default:""},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#555"}},computed:{size_px:function(){switch(this.size){case"tiny":return 12;case"small":return 16;case"medium":return 32;case"large":return 48;case"big":return 64;case"huge":return 96;case"massive":return 128}return s(this.size)?this.size:32},line_size_px:function(){switch(this.size){case"tiny":return 1;case"small":return 2;case"medium":return 3;case"large":return 3;case"big":return 4;case"huge":return 4;case"massive":return 5}return s(this.lineSize)?this.lineSize:4},text_margin_top:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return s(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(.4*this.size_px),11),32)}return s(this.fontSize)?this.fontSize:13},spinner_style:function(){return{margin:"0 auto","border-radius":"100%",border:this.line_size_px+"px solid "+this.lineBgColor,"border-top":this.line_size_px+"px solid "+this.lineFgColor,width:this.size_px+"px",height:this.size_px+"px",animation:"vue-simple-spinner-spin "+this.speed+"s linear infinite"}},text_style:function(){return{"margin-top":this.text_margin_top+"px",color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":"center"}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"vue-simple-spinner",style:e.spinner_style}),e._v(" "),e.message.length>0?n("div",{staticClass:"vue-simple-spinner-text",style:e.text_style},[e._v(e._s(e.message))]):e._e()])},staticRenderFns:[]}}])["default"]}))},"89d7":function(e,t,n){},"9e43":function(e,t,n){"use strict";var s=n("89d7"),i=n.n(s);i.a},b991:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-3 d-flex flex-column"},[n("h5",{staticClass:"mt-3"},[e._v("Customer Journey")]),n("p",[e._v("You can use customer Journey to differentiate Answer Sets Steps.")]),n("v-popover",{attrs:{open:e.showAddPopover},on:{show:e.focusOnInput}},[n("button",{staticClass:"btn btn-block btn-primary",on:{click:function(t){e.showAddPopover=!0}}},[n("i",{staticClass:"las la-plus-circle"}),e._v(" Add Step ")]),n("template",{slot:"popover"},[n("form",{staticClass:"d-flex p-2 align-items-center",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.stepInput,expression:"stepInput"}],ref:"input",staticClass:"form-control mr-2",attrs:{disabled:e.loading,placeholder:"Step Name"},domProps:{value:e.stepInput},on:{input:function(t){t.target.composing||(e.stepInput=t.target.value)}}}),e.loading?n("spinner"):n("button",{staticClass:"btn btn-primary"},[e._v("Submit")])],1)])],2),n("loading-overlay",{staticClass:"flex-fill overflow-h",attrs:{loading:e.loadingOverlay}},e._l(e.list,(function(t){return n("div",{key:t.ID,staticClass:"step d-flex justify-content-between",on:{click:function(n){return e.showModal(t)}}},[n("span",[e._v(e._s(t.Name))]),n("i",{staticClass:"las la-ellipsis-v",attrs:{name:"more"}})])})),0),n("modal",{attrs:{name:"step",height:"auto",width:"400"}},[n("div",{staticClass:"p-2"},[e.modalLoading?n("spinner"):[n("h4",[e._v(" "+e._s(e.editInput)+" "),n("a",{staticClass:"float-right text-danger mr-2",attrs:{href:"#"},on:{click:e.confirmRemove}},[n("i",{staticClass:"lar la-trash-alt"})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.editInput,expression:"editInput"}],ref:"editInput",staticClass:"form-control",domProps:{value:e.editInput},on:{input:function(t){t.target.composing||(e.editInput=t.target.value)}}}),n("button",{staticClass:"btn btn-primary float-right my-2 btn-sm",on:{click:e.update}},[e._v("Update")]),n("div",{staticClass:"clearfix"})]],2)]),n("v-dialog")],1)},i=[],r=(n("4de4"),n("c740"),n("96cf"),n("89ba")),a=n("bc3a"),o=n.n(a),u=n("5b7e"),c=n.n(u),l=n("6bf2"),p=n("3f06"),d={components:{Spinner:c.a,LoadingOverlay:p["a"]},data:function(){return{list:[],stepInput:"",showAddPopover:!1,loading:!1,name:"",editInput:"",activeStep:{},modalLoading:!1,loadingOverlay:!1}},methods:{focusOnInput:function(){var e=this;setTimeout((function(){return e.$refs.input.focus()}),100)},showModal:function(e){var t=this;this.modalLoading=!1,this.activeStep=e,this.editInput=e.Name,this.$modal.show("step"),setTimeout((function(){t.$refs.editInput.focus()}),100)},stepNameAlreadyExist:function(){this.$modal.show("dialog",{text:'Journey name "'.concat(this.stepInput,'" already exist!'),buttons:[{title:"Close"}]})},submit:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.list.findIndex((function(e){return e.Name==s.stepInput})),!(this.stepInput&&t<0)){e.next=17;break}return this.loading=!0,e.prev=3,e.next=6,o.a.post("step/upsert",{Name:this.stepInput});case 6:n=e.sent,200==n.status&&(this.list.push({ID:n.data.ID,Name:n.data.Name}),this.stepInput="",this.showAddPopover=!1),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](3);case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:e.next=18;break;case 17:t>0&&this.stepInput&&(this.stepNameAlreadyExist(),this.stepInput="",this.showAddPopover=!1);case 18:case"end":return e.stop()}}),e,this,[[3,10,12,15]])})));function t(){return e.apply(this,arguments)}return t}(),stepNameAlreadyExistForEdit:function(){this.$modal.show("dialog",{text:'Journey name "'.concat(this.editInput,'" already exist!'),buttons:[{title:"Close"}]})},update:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.list.findIndex((function(e){return e.Name==s.editInput})),!(this.editInput&&this.editInput!=this.activeStep.Name&&t<0)){e.next=17;break}return this.modalLoading=!0,e.prev=3,e.next=6,o.a.post("step/upsert",{ID:this.activeStep.ID,Name:this.editInput});case 6:n=e.sent,200==n.status&&(t=this.list.findIndex((function(e){return e.ID==s.activeStep.ID})),this.list[t].Name=this.editInput,this.editInput="",this.$modal.hide("step")),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](3);case 12:return e.prev=12,this.modalLoading=!1,e.finish(12);case 15:e.next=18;break;case 17:this.editInput&&this.editInput!=this.activeStep.Name&&t>0&&this.stepNameAlreadyExistForEdit();case 18:case"end":return e.stop()}}),e,this,[[3,10,12,15]])})));function t(){return e.apply(this,arguments)}return t}(),confirmRemove:function(){var e=this;this.$modal.show("dialog",{text:"Are you sure to delete ".concat(this.activeStep.Name,"?"),buttons:[{title:"Close"},{title:"Delete",handler:function(){e.$modal.hide("dialog"),e.remove()}}]})},remove:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.modalLoading=!0,e.prev=1,e.next=4,o.a.delete("step?id=".concat(this.activeStep.ID));case 4:t=e.sent,200==t.status&&"success"==t.data.status&&(this.list=this.list.filter((function(e){return e.ID!=n.activeStep.ID})),this.$modal.hide("step")),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.modalLoading=!1;case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("good"),this.loadingOverlay=!0,e.next=5,o.a.get("steps",l["a"].getHeader());case 5:t=e.sent,200==t.status&&(this.list=t.data),console.log(this.list),this.loadingOverlay=!1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),l["a"].checkAPIResponse(e.t0.response);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()},f=d,h=(n("4622"),n("9e43"),n("2877")),m=Object(h["a"])(f,s,i,!1,null,"48f6650e",null);t["default"]=m.exports},fa4d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-e31fe5f4.f1442bcd.js.map