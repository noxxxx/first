global.webpackJsonp([32],{161:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-section page-section-gap"},[a("view",{staticClass:"page-section-title"},[e._v("默认样式")]),e._v(" "),a("label",{staticClass:"radio"},[a("radio",{attrs:{value:"r1",checked:"true"}}),e._v("选中\n\t\t\t")],1),e._v(" "),a("label",{staticClass:"radio"},[a("radio",{attrs:{value:"r2"}}),e._v("未选中\n\t\t\t")],1)],1),e._v(" "),a("view",{staticClass:"page-section"},[a("view",{staticClass:"page-section-title"},[e._v("推荐展示样式")]),e._v(" "),a("view",{staticClass:"uni-list"},[a("radio-group",{attrs:{bindchange:"radioChange",mpcomid:"1"}},e._l(e.items,function(t,i){return a("label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",[a("radio",{attrs:{value:t.value,checked:"true"}})],1),e._v(" "),a("view",[e._v(e._s(t.name))])])}))],1)])])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s},226:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(a(1)),s=n(a(57));function n(e){return e&&e.__esModule?e:{default:e}}a(0).default;new i.default(s.default).$mount(),t.default={config:{navigationBarTitleText:"radio"}}},311:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=a(3),n=(i=s)&&i.__esModule?i:{default:i};a(0).default;t.default={data:function(){return{title:"radio",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{radioChange:function(e){console.log("radio发生change事件，携带value值为：",e.target.value);for(var t=this.items,a=0,i=t.length;a<i;++a)t[a].checked=t[a].value==e.target.value;this.items=t}},components:{pageHead:n.default}}},413:function(e,t){},57:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(311),s=a.n(i),n=a(161),l=!1;var o=function(e){l||a(413)},r=a(2)(s.a,n.a,o,null,null);r.options.__file="Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/radio/radio.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] radio.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports}},[226]);
//# sourceMappingURL=../../../../../.sourcemap/pages/component/radio/radio.js.map