(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-773c0ba9"],{"0b2b":function(t,e,o){},"1ab0":function(t,e,o){"use strict";var n=o("5493"),a=o.n(n);a.a},5493:function(t,e,o){},"6e8e":function(t,e,o){},"8f86":function(t,e,o){"use strict";var n=o("0b2b"),a=o.n(n);a.a},b0c0:function(t,e,o){var n=o("83ab"),a=o("9bf2").f,r=Function.prototype,i=r.toString,s=/^\s*function ([^ (]*)/,c="name";!n||c in r||a(r,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},f4dd:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"d-flex flex-column",attrs:{id:"nav"}},[o("div",{staticClass:"nav-content"},t._l(t.upperRouteRoleFiltered,(function(e,n){return o("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:e.tooltip,expression:"upper.tooltip",modifiers:{right:!0}}],key:"upperitem_"+n,staticClass:"nav-item nav-content--item",attrs:{to:e.path}},[e.icon?o("i",{class:t.checkCurrentRoute(e.path)?e.icon+"logo activeClass":e.icon+"logo"}):o("i",{class:t.checkCurrentRoute(e.path)?"logo activeClass":"logo"},[o("dashboard-icon")],1)])})),1),o("div",{staticClass:"nav-footer"},t._l(t.lowerRouteRoleFiltered,(function(e,n){return o("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.tooltip,expression:"lower.tooltip"}],key:"loweritem_"+n,attrs:{event:"",to:e.path},nativeOn:{click:function(o){return o.preventDefault(),t.updateRoute(e.path)}}},[o("i",{class:t.checkCurrentRoute(e.path)?e.icon+"logo activeClass":e.icon+"logo"})])})),1)]),o("div",{attrs:{id:"nav--helper"}}),o("modal",{attrs:{name:"release",height:"auto",width:"400"}},[o("div",{staticClass:"d-flex justify-content-center"},[o("span",{staticStyle:{"font-size":"80px",color:"#2bc0f2"}},[o("i",{staticClass:"la la-power-off",staticStyle:{"font-weight":"600"}})])]),o("div",{staticClass:"d-flex justify-content-around align-items-center"},[o("span",{staticStyle:{color:"red","font-size":"30px"}},[o("i",{staticClass:"las la-exclamation-triangle",staticStyle:{"font-weight":"bold"}})]),o("span",{staticStyle:{"letter-spacing":"-0.5px","font-weight":"600",color:"gray"}},[t._v("All customers you have taken will be release.")])]),o("div",{staticClass:"d-flex justify-content-end align-items-center p-2"},[o("a",{staticClass:"mr-2",staticStyle:{color:"red","font-weight":"600","letter-spacing":"-0.5px"},attrs:{href:"/logout"}},[t._v("Just Log me out")]),o("button",{staticClass:"btn btn-primary px-2 d-flex align-items-center",on:{click:t.releaseLogout}},[t.loggingOut?o("span",[t._v("Releasing")]):o("span",[t._v("Releae & LogOut")]),t.loggingOut?o("div",{staticClass:"spinner-border text-light ml-2",staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()])])])],1)},a=[],r=(o("a4d3"),o("4de4"),o("4160"),o("caad"),o("b0c0"),o("e439"),o("dbb4"),o("b64b"),o("2532"),o("159b"),o("2fa7")),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{id:"Layer_5","enable-background":"new 0 0 64 64",height:"512",viewBox:"0 0 64 64",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[o("g",[o("path",{attrs:{d:"m57 34.53v-19.61c3.387-.488 6-3.401 6-6.92 0-3.859-3.14-7-7-7s-7 3.141-7 7h-48v40h30.051c.52 8.356 7.465 15 15.949 15 8.822 0 16-7.178 16-16 0-5.039-2.347-9.535-6-12.47zm-1-31.53c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm-53 7h46.295c.239.798.619 1.533 1.107 2.185l-6.116 6.116c-.392-.188-.824-.301-1.286-.301s-.894.113-1.285.301l-2.015-2.015c.187-.392.3-.824.3-1.286 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .462.113.894.301 1.285l-5.015 5.015c-.392-.187-.824-.3-1.286-.3-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.462-.113-.894-.301-1.285l5.015-5.015c.392.187.824.3 1.286.3s.894-.113 1.285-.301l2.015 2.015c-.187.392-.3.824-.3 1.286 0 1.654 1.346 3 3 3s3-1.346 3-3c0-.462-.113-.894-.301-1.285l6.117-6.116c.915.686 2.001 1.151 3.184 1.322v18.245c-2.357-1.369-5.084-2.166-8-2.166-4.78 0-9.066 2.118-12 5.453v-4.453h-6v12h2.292c-.124.653-.199 1.322-.241 2h-28.051zm40 10c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1zm-7-5c0-.552.449-1 1-1s1 .448 1 1-.449 1-1 1-1-.448-1-1zm-7 9c0 .552-.449 1-1 1s-1-.448-1-1 .449-1 1-1 1 .448 1 1zm18 31c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-14-15.729c-.479.864-.875 1.777-1.189 2.729h-.811v-8h2zm13-6.22v4c-5.046.504-9 4.773-9 9.949 0 1.463.324 2.85.891 4.104l-3.469 2.003c-.902-1.848-1.422-3.916-1.422-6.107 0-7.382 5.747-13.433 13-13.949zm1 27.949c-4.814 0-9.068-2.443-11.588-6.155l3.483-2.011c1.818 2.518 4.769 4.166 8.105 4.166s6.287-1.648 8.105-4.166l3.483 2.011c-2.52 3.712-6.774 6.155-11.588 6.155zm12.578-7.893-3.469-2.003c.567-1.254.891-2.641.891-4.104 0-5.176-3.954-9.446-9-9.949v-4c7.253.516 13 6.567 13 13.949 0 2.191-.52 4.259-1.422 6.107z"}}),o("path",{attrs:{d:"m47 41c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"}}),o("path",{attrs:{d:"m5 12h2v2h-2z"}}),o("path",{attrs:{d:"m9 12h14v2h-14z"}}),o("path",{attrs:{d:"m5 16h2v2h-2z"}}),o("path",{attrs:{d:"m9 16h14v2h-14z"}}),o("path",{attrs:{d:"m5 20h2v2h-2z"}}),o("path",{attrs:{d:"m9 20h14v2h-14z"}}),o("path",{attrs:{d:"m5 24h2v2h-2z"}}),o("path",{attrs:{d:"m9 24h14v2h-14z"}}),o("path",{attrs:{d:"m5 44h6v-10h-6zm2-8h2v6h-2z"}}),o("path",{attrs:{d:"m13 44h6v-8h-6zm2-6h2v4h-2z"}}),o("path",{attrs:{d:"m21 44h6v-16h-6zm2-14h2v12h-2z"}})])])},s=[],c=o("2877"),l={},u=Object(c["a"])(l,i,s,!1,null,null,null),h=u.exports,p=(o("6e8e"),o("2f62")),d=o("bc3a"),f=o.n(d);function m(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?m(o,!0).forEach((function(e){Object(r["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):m(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var g={components:{DashboardIcon:h},data:function(){return{loggingOut:!1,upperRoute:[{path:"/dashboard",tooltip:"Dashboard",icon:"las la-chalkboard ",role:"Admin,Team"},{path:"/conversations",icon:"las la-comments ",tooltip:"Conversations"}],lowerRoute:[{path:"/settings",icon:"las la-cog ",tooltip:"Settings",role:"Admin,Team"},{path:"/logout",icon:"la la-power-off ",tooltip:"Log Out"}]}},computed:v({},Object(p["b"])(["admin"]),{channel:function(){return this.$store.state.channel},upperRouteRoleFiltered:function(){var t=this;return this.upperRoute.filter((function(e){return!e.role||e.role.includes(t.admin.role)}))},lowerRouteRoleFiltered:function(){var t=this;return this.lowerRoute.filter((function(e){return!e.role||e.role.includes(t.admin.role)}))}}),methods:{checkCurrentRoute:function(t){return t===this.$router.currentRoute.path},updateRoute:function(t){"/logout"==t&&"Admin"!=this.admin.role?this.$modal.show("release"):"/logout"==t?location.href=t:this.$router.push(t)},releaseLogout:function(){var t=this;this.loggingOut=!0,f.a.post("release",{channelId:this.channel.id,channelName:this.channel.name}).then((function(t){200==t.status&&(location.href="/logout")})).catch((function(e){t.loggingOut=!1}))}}},b=g,w=(o("1ab0"),o("8f86"),Object(c["a"])(b,n,a,!1,null,"4e0db2e2",null));e["a"]=w.exports}}]);
//# sourceMappingURL=chunk-773c0ba9.fc590519.js.map