global.webpackJsonp([76],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('page-head', {\n    attrs: {\n      \"title\": _vm.title,\n      \"mpcomid\": '0'\n    }\n  }), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-body\"\n  }, [_c('view', {\n    staticClass: \"page-section\"\n  }, [_c('view', {\n    staticClass: \"page-body-info\"\n  }, [_c('text', {\n    staticClass: \"page-body-text-small\"\n  }, [_vm._v(\"当前位置经纬度\")]), _vm._v(\" \"), (_vm.hasLocation === false) ? _c('block', [_c('text', {\n    staticClass: \"page-body-text\"\n  }, [_vm._v(\"未获取\")])]) : _vm._e(), _vm._v(\" \"), (_vm.hasLocation === true) ? _c('block', [_c('view', {\n    staticClass: \"page-body-text-location\"\n  }, [_c('text', [_vm._v(\"E: \" + _vm._s(_vm.location.longitude[0]) + \"°\" + _vm._s(_vm.location.longitude[1]) + \"′\")]), _vm._v(\" \"), _c('text', [_vm._v(\"N: \" + _vm._s(_vm.location.latitude[0]) + \"°\" + _vm._s(_vm.location.latitude[1]) + \"′\")])])]) : _vm._e()], 1), _vm._v(\" \"), _c('view', {\n    staticClass: \"btn-area\"\n  }, [_c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"eventid\": '0'\n    },\n    on: {\n      \"tap\": _vm.getLocation\n    }\n  }, [_vm._v(\"获取位置\")]), _vm._v(\" \"), _c('button', {\n    attrs: {\n      \"eventid\": '1'\n    },\n    on: {\n      \"tap\": _vm.clear\n    }\n  }, [_vm._v(\"清空\")])], 1)])])], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-73b498fc\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-73b498fc\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!/Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/get-location/get-location.vue\n// module id = 159\n// module chunks = 76\n\n");

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_get_location_vue__ = __webpack_require__(283);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_get_location_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_get_location_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_73b498fc_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_get_location_vue__ = __webpack_require__(159);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(423)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_get_location_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_73b498fc_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_get_location_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/get-location/get-location.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] get-location.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-73b498fc\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-73b498fc\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/get-location/get-location.vue\n// module id = 17\n// module chunks = 76\n\n");

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _getLocation = __webpack_require__(17);var _getLocation2 = _interopRequireDefault(_getLocation);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_getLocation2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"获取位置\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/get-location/get-location.js\n// module id = 194\n// module chunks = 76\n\n//# sourceURL=uni-app:///pages/API/get-location/get-location.js?d95a");

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\n\nvar util = __webpack_require__(4);\nvar formatLocation = util.formatLocation;exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: 'getLocation',\n\t\t\thasLocation: false,\n\t\t\tlocation: {} };\n\n\t},\n\tmethods: {\n\t\tgetLocation: function getLocation() {var _this = this;\n\t\t\tuni.getLocation({\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\t_this.hasLocation = true,\n\t\t\t\t\t_this.location = formatLocation(res.longitude, res.latitude);\n\t\t\t\t} });\n\n\t\t},\n\t\tclear: function clear() {\n\t\t\tthis.hasLocation = false;\n\t\t} },\n\n\tcomponents: {\n\t\tpageHead: _pageHead2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-preset-stage-2\"],\"plugins\":[[\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!/Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/get-location/get-location.vue\n// module id = 283\n// module chunks = 76\n\n//# sourceURL=uni-app:///pages/API/get-location/get-location.vue?e35e");

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-73b498fc\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!/Users/sac/Documents/workspace/Hbuilder/hbuilderx/first/pages/API/get-location/get-location.vue\n// module id = 423\n// module chunks = 76\n\n");

/***/ })

},[194]);