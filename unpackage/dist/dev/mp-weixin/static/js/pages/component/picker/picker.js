global.webpackJsonp([34],{171:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),i("view",{staticClass:"page-body"},[i("view",{staticClass:"page-section"},[i("view",{staticClass:"page-section-title"},[t._v("地区选择器")]),t._v(" "),i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"list-left"},[t._v("\n\t\t\t\t\t\t当前选择\n\t\t\t\t\t")]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("picker",{attrs:{value:t.index,range:t.array,eventid:"0"},on:{change:t.bindPickerChange}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index]))])])],1)])]),t._v(" "),i("view",{staticClass:"page-section-title"},[t._v("时间选择器")]),t._v(" "),i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"list-left"},[t._v("\n\t\t\t\t\t\t当前选择\n\t\t\t\t\t")]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("picker",{attrs:{mode:"time",value:t.time,start:"09:01",end:"21:01",eventid:"1"},on:{change:t.bindTimeChange}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.time))])])],1)])]),t._v(" "),i("view",{staticClass:"page-section-title"},[t._v("日期选择器")]),t._v(" "),i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"list-left"},[t._v("\n\t\t\t\t\t\t当前选择\n\t\t\t\t\t")]),t._v(" "),i("view",{staticClass:"uni-list-cell-db"},[i("picker",{attrs:{mode:"date",value:t.date,start:"2015-09-01",end:"2017-09-01",eventid:"2"},on:{change:t.bindDateChange}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.date))])])],1)])])])])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},224:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(i(1)),a=n(i(55));function n(t){return t&&t.__esModule?t:{default:t}}i(0).default;new s.default(a.default).$mount(),e.default={config:{navigationBarTitleText:"picker"}}},309:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(3),n=(s=a)&&s.__esModule?s:{default:s};i(0).default;e.default={data:function(){return{title:"picker",array:["中国","美国","巴西","日本"],index:0,date:"2016-09-01",time:"12:01"}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value}},components:{pageHead:n.default}}},423:function(t,e){},55:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(309),a=i.n(s),n=i(171),l=!1;var c=function(t){l||i(423)},u=i(2)(a.a,n.a,c,null,null);u.options.__file="Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/picker/picker.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] picker.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports}},[224]);
//# sourceMappingURL=../../../../../.sourcemap/pages/component/picker/picker.js.map