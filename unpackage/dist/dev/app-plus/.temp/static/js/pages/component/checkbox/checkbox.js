global.webpackJsonp([49],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('page-head', {\n    attrs: {\n      \"title\": _vm.title,\n      \"mpcomid\": '0'\n    }\n  }), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-body\"\n  }, [_c('view', {\n    staticClass: \"page-section page-section-gap\"\n  }, [_c('view', {\n    staticClass: \"page-section-title\"\n  }, [_vm._v(\"默认样式\")]), _vm._v(\" \"), _c('label', {\n    staticClass: \"checkbox\"\n  }, [_c('checkbox', {\n    attrs: {\n      \"value\": \"cb\",\n      \"checked\": \"true\"\n    }\n  }), _vm._v(\"选中\\n\\t\\t\\t\")], 1), _vm._v(\" \"), _c('label', {\n    staticClass: \"checkbox\"\n  }, [_c('checkbox', {\n    attrs: {\n      \"value\": \"cb\"\n    }\n  }), _vm._v(\"未选中\\n\\t\\t\\t\")], 1)], 1), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-section\"\n  }, [_c('view', {\n    staticClass: \"page-section-title\"\n  }, [_vm._v(\"推荐展示样式\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"uni-list\"\n  }, [_c('checkbox-group', {\n    attrs: {\n      \"bindchange\": \"checkboxChange\",\n      \"mpcomid\": '1'\n    }\n  }, _vm._l((_vm.items), function(item, index) {\n    return _c('label', {\n      key: item.value,\n      staticClass: \"uni-list-cell uni-list-cell-pd\"\n    }, [_c('view', [_c('checkbox', {\n      attrs: {\n        \"value\": item.value,\n        \"checked\": item.checked\n      }\n    })], 1), _vm._v(\" \"), _c('view', [_vm._v(_vm._s(item.name))])])\n  }))], 1)])])], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-6e32c89f\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-6e32c89f\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!/Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/checkbox/checkbox.vue\n// module id = 152\n// module chunks = 49\n\n");

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _checkbox = __webpack_require__(44);var _checkbox2 = _interopRequireDefault(_checkbox);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_checkbox2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"checkbox\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/checkbox/checkbox.js\n// module id = 221\n// module chunks = 49\n\n//# sourceURL=uni-app:///pages/component/checkbox/checkbox.js?f28d");

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: 'checkbox',\n\t\t\titems: [{\n\t\t\t\tvalue: 'USA',\n\t\t\t\tname: '美国' },\n\n\t\t\t{\n\t\t\t\tvalue: 'CHN',\n\t\t\t\tname: '中国',\n\t\t\t\tchecked: 'true' },\n\n\t\t\t{\n\t\t\t\tvalue: 'BRA',\n\t\t\t\tname: '巴西' },\n\n\t\t\t{\n\t\t\t\tvalue: 'JPN',\n\t\t\t\tname: '日本' },\n\n\t\t\t{\n\t\t\t\tvalue: 'ENG',\n\t\t\t\tname: '英国' },\n\n\t\t\t{\n\t\t\t\tvalue: 'FRA',\n\t\t\t\tname: '法国' }] };\n\n\n\n\t},\n\tmethods: {\n\t\tcheckboxChange: function checkboxChange(e) {\n\t\t\tvar items = this.items,\n\t\t\tvalues = e.target.value;\n\t\t\tfor (var i = 0, lenI = items.length; i < lenI; ++i) {\n\t\t\t\titems[i].checked = false;\n\t\t\t\tfor (var j = 0, lenJ = values.length; j < lenJ; ++j) {\n\t\t\t\t\tif (items[i].value == values[j]) {\n\t\t\t\t\t\titems[i].checked = true;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t} },\n\n\tcomponents: {\n\t\tpageHead: _pageHead2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-preset-stage-2\"],\"plugins\":[[\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!/Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/checkbox/checkbox.vue\n// module id = 310\n// module chunks = 49\n\n//# sourceURL=uni-app:///pages/component/checkbox/checkbox.vue?53ed");

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-6e32c89f\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!/Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/checkbox/checkbox.vue\n// module id = 416\n// module chunks = 49\n\n");

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(310);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_checkbox_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6e32c89f_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(152);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(416)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_checkbox_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6e32c89f_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_checkbox_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/checkbox/checkbox.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] checkbox.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-6e32c89f\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-6e32c89f\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/component/checkbox/checkbox.vue\n// module id = 44\n// module chunks = 49\n\n");

/***/ })

},[221]);