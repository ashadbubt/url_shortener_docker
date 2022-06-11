"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UrlShortened_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UrlShortened.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UrlShortened.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UrlShortener",
  data: function data() {
    return {
      links: [],
      errorStatus: false,
      errorMessage: '',
      longUrl: null
    };
  },
  methods: {
    resetForm: function resetForm() {
      this.errorStatus = false;
      this.longUrl = null;
    },
    checkForm: function checkForm() {
      if (!this.longUrl) {
        this.errorStatus = true;
        this.errorMessage = "URL required.";
        return false;
      }

      if (!this.isValidURL(this.longUrl)) {
        this.errorStatus = true;
        this.errorMessage = "Invalid URL";
        return false;
      }

      if (this.longUrl) return true;
    },
    isValidURL: function isValidURL(string) {
      var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return res !== null;
    },
    submitCreateURL: function submitCreateURL() {
      if (this.checkForm()) {
        this.createURL();
      }
    },
    createURL: function createURL() {
      var _this = this;

      var submitData = {
        longUrl: this.longUrl
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.CURRENT_API + "url_shortener", submitData).then(function (_ref) {
        var data = _ref.data;

        _this.resetForm();

        var orgData = {
          longUrl: data.data.long_url,
          shortUrl: _this.CURRENT_URL + data.data.short_url,
          idUrlDetails: data.data.id_url_details
        };

        _this.links.push(orgData);
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        console.log(response);
        _this.errorStatus = true;
        _this.errorMessage = response.data.data;
      });
    },
    copyToUrl: function copyToUrl(id) {
      var r = document.createRange();
      r.selectNode(document.getElementById(id));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/UrlShortened.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/UrlShortened.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UrlShortened_vue_vue_type_template_id_34098240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlShortened.vue?vue&type=template&id=34098240& */ "./resources/js/components/UrlShortened.vue?vue&type=template&id=34098240&");
/* harmony import */ var _UrlShortened_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlShortened.vue?vue&type=script&lang=js& */ "./resources/js/components/UrlShortened.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UrlShortened_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UrlShortened_vue_vue_type_template_id_34098240___WEBPACK_IMPORTED_MODULE_0__.render,
  _UrlShortened_vue_vue_type_template_id_34098240___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UrlShortened.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UrlShortened.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/UrlShortened.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlShortened_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrlShortened.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UrlShortened.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlShortened_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UrlShortened.vue?vue&type=template&id=34098240&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UrlShortened.vue?vue&type=template&id=34098240& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlShortened_vue_vue_type_template_id_34098240___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlShortened_vue_vue_type_template_id_34098240___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlShortened_vue_vue_type_template_id_34098240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrlShortened.vue?vue&type=template&id=34098240& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UrlShortened.vue?vue&type=template&id=34098240&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UrlShortened.vue?vue&type=template&id=34098240&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UrlShortened.vue?vue&type=template&id=34098240& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submitCreateURL()
        }
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            { staticClass: "container" },
            [
              _c("h1", [_vm._v("Paste the URL to be shortened")]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.longUrl,
                      expression: "longUrl"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "longUrl",
                    id: "longUrl",
                    placeholder: "Enter the link here"
                  },
                  domProps: { value: _vm.longUrl },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.longUrl = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _vm.errorStatus
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-danger",
                      attrs: { role: "alert" }
                    },
                    [_vm._v(_vm._s(_vm.errorMessage))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.links.slice().reverse(), function(link) {
                return _c("div", [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(link.longUrl))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: link.shortUrl,
                              expression: "link.shortUrl"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: link.idUrlDetails },
                          domProps: { value: link.shortUrl },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(link, "shortUrl", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.copyToUrl(link.idUrlDetails)
                                }
                              }
                            },
                            [_vm._v("Copy")]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              }),
              _vm._v(" "),
              _c("div")
            ],
            2
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Shorten URL")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);