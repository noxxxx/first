global.webpackJsonp([60],{137:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),s("view",{staticClass:"page-body"},[s("view",{staticClass:"page-section"},[s("form",{attrs:{eventid:"0"},on:{submit:t.openLocation}},[s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("经度")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39742",name:"longitude"}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("纬度")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.909",name:"latitude"}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("位置名称")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[s("view",{staticClass:"uni-list-cell-left"},[s("view",{staticClass:"uni-label"},[t._v("详细位置")])]),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})])])]),t._v(" "),s("view",{staticClass:"btn-area"},[s("button",{attrs:{type:"primary",formType:"submit"}},[t._v("查看位置")])],1)])],1)])],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},198:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(s(1)),a=l(s(29));function l(t){return t&&t.__esModule?t:{default:t}}s(0).default;new i.default(a.default).$mount(),e.default={config:{navigationBarTitleText:"查看位置"}}},283:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s(3),l=(i=a)&&i.__esModule?i:{default:i};var n=s(0).default;e.default={data:function(){return{title:"openLocation"}},methods:{openLocation:function(t){console.log(t);var e=t.target.value;n.openLocation({longitude:Number(e.longitude),latitude:Number(e.latitude),name:e.name,address:e.address})}},components:{pageHead:l.default}}},29:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(283),a=s.n(i),l=s(137),n=!1;var u=function(t){n||s(389)},o=s(2)(a.a,l.a,u,null,null);o.options.__file="Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/open-location/open-location.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] open-location.vue: functional components are not supported with templates, they should use render functions."),e.default=o.exports},389:function(t,e){}},[198]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/open-location/open-location.js.map