global.webpackJsonp([52],{206:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(a(1)),s=n(a(37));function n(t){return t&&t.__esModule?t:{default:t}}a(0).default;new o.default(s.default).$mount(),e.default={config:{navigationBarTitleText:"消息提示框"}}},291:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=a(3),n=(o=s)&&o.__esModule?o:{default:o};var i=a(0).default;e.default={data:function(){return{title:"toast"}},methods:{toast1Tap:function(){i.showToast({title:"默认"})},toast2Tap:function(){i.showToast({title:"duration 3000",duration:3e3})},toast3Tap:function(){i.showToast({title:"loading",icon:"loading",duration:5e3})},toast4Tap:function(){i.showToast({title:"logo",image:"../../../static/uni@2x.png"})},hideToast:function(){i.hideToast()}},components:{pageHead:n.default}}},343:function(t,e){},37:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(291),s=a.n(o),n=a(92),i=!1;var u=function(t){i||a(343)},l=a(2)(s.a,n.a,u,null,null);l.options.__file="Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/toast/toast.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] toast.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},92:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"btn-area"},[a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"0"},on:{tap:t.toast1Tap}},[t._v("点击弹出默认toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"1"},on:{tap:t.toast2Tap}},[t._v("点击弹出设置duration的toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"2"},on:{tap:t.toast3Tap}},[t._v("点击弹出显示loading的toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"3"},on:{tap:t.toast4Tap}},[t._v("点击弹出显示自定义图片的toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"4"},on:{tap:t.hideToast}},[t._v("点击隐藏toast")])],1)])])],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s}},[206]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/toast/toast.js.map