global.webpackJsonp([27],{231:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(s(1)),n=a(s(62));function a(e){return e&&e.__esModule?e:{default:e}}s(0).default;new i.default(n.default).$mount(),t.default={config:{navigationBarTitleText:"switch"}}},316:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=s(3),a=(i=n)&&i.__esModule?i:{default:i};s(0).default;t.default={data:function(){return{title:"switch"}},methods:{switch1Change:function(e){console.log("switch1 发生 change 事件，携带值为",e.target.value)},switch2Change:function(e){console.log("switch2 发生 change 事件，携带值为",e.target.value)}},components:{pageHead:a.default}}},348:function(e,t){},62:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(316),n=s.n(i),a=s(97),c=!1;var l=function(e){c||s(348)},o=s(2)(n.a,a.a,l,null,null);o.options.__file="Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/switch/switch.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] switch.vue: functional components are not supported with templates, they should use render functions."),t.default=o.exports},97:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[s("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),s("view",{staticClass:"page-body"},[s("view",{staticClass:"page-section page-section-gap"},[s("view",{staticClass:"page-section-title"},[e._v("默认样式")]),e._v(" "),s("view",{staticClass:"body-view"},[s("switch",{attrs:{checked:"",eventid:"0"},on:{change:e.switch1Change}}),e._v(" "),s("switch",{attrs:{eventid:"1"},on:{change:e.switch2Change}})])]),e._v(" "),e._m(0)])],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"page-section"},[t("view",{staticClass:"page-section-title"},[this._v("推荐展示样式")]),this._v(" "),t("view",{staticClass:"uni-list"},[t("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[t("view",{staticClass:"uni-list-cell-db"},[this._v("开启中")]),this._v(" "),t("switch",{attrs:{checked:""}})]),this._v(" "),t("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[t("view",{staticClass:"uni-list-cell-db"},[this._v("关闭")]),this._v(" "),t("switch")])])])}]};t.a=n}},[231]);
//# sourceMappingURL=../../../../../.sourcemap/pages/component/switch/switch.js.map