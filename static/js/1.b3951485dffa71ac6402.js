webpackJsonp([1],{

/***/ "LqM4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/bus.js
var bus = __webpack_require__("xipm");

// CONCATENATED MODULE: ./src/components/home/home.js


/* harmony default export */ var home = ({
  name: 'home',
  data: function data() {
    return {
      tagsList: [], //标签列表
      collapse: false //是否折叠
    };
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;

    // Bus.$on('collapse-content', msg => {
    //   this.collapse = msg;
    // });

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus["a" /* default */].$on('tags', function (msg) {
      var arr = [];
      for (var i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      _this.tagsList = arr;
    });
  },

  components: {
    cHeader: function cHeader() {
      return (//头部
        __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "hxP8"))
      );
    },
    cSidebar: function cSidebar() {
      return (//左侧菜单
        __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, "ivsI"))
      );
    },
    cTags: function cTags() {
      return (//标签
        __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, "VVZ0"))
      );
    }
  },
  methods: {}

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/home/home.vue
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


/* harmony default export */ var home_home = (home);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9c7974ae","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/home/home.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"header"},[_c('cHeader')],1),_vm._v(" "),_c('div',{staticClass:"main"},[_c('div',{staticClass:"sidebar"},[_c('cSidebar')],1),_vm._v(" "),_c('div',{staticClass:"main_body"},[_c('div',{staticClass:"main_tag"},[_c('cTags')],1),_vm._v(" "),_c('div',{staticClass:"main_content"},[_c('transition',{attrs:{"name":"move","mode":"out-in"}},[_c('keep-alive',{attrs:{"include":_vm.tagsList}},[_c('router-view')],1)],1)],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_home_home = (esExports);
// CONCATENATED MODULE: ./src/components/home/home.vue
function injectStyle (ssrContext) {
  __webpack_require__("hVaj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  home_home,
  components_home_home,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_home_home = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hVaj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=1.b3951485dffa71ac6402.js.map