webpackJsonp([13],{

/***/ "ELzi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SqTA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/utils/service.js
var service = __webpack_require__("VxtT");

// EXTERNAL MODULE: ./node_modules/devextreme-vue/data-grid.js
var data_grid = __webpack_require__("ZxHo");
var data_grid_default = /*#__PURE__*/__webpack_require__.n(data_grid);

// EXTERNAL MODULE: ./node_modules/devextreme/localization/messages/zh.json
var zh = __webpack_require__("DywH");
var zh_default = /*#__PURE__*/__webpack_require__.n(zh);

// EXTERNAL MODULE: ./node_modules/devextreme/esm/localization.js
var localization = __webpack_require__("CiZk");

// CONCATENATED MODULE: ./src/pages/dtype/dtype.js


var _created$components$d;






/* harmony default export */ var dtype = (_created$components$d = {
  created: function created() {
    Object(localization["a" /* loadMessages */])(zh_default.a);
    Object(localization["b" /* locale */])(navigator.language);
  },

  components: {
    DxSelection: data_grid["DxSelection"],
    DxDataGrid: data_grid["DxDataGrid"],
    DxColumn: data_grid["DxColumn"],
    DxFilterRow: data_grid["DxFilterRow"],
    DxPager: data_grid["DxPager"],
    DxFilterPanel: data_grid["DxFilterPanel"],
    DxPaging: data_grid["DxPaging"],
    DxHeaderFilter: data_grid["DxHeaderFilter"],
    DxScrolling: data_grid["DxScrolling"]
  },
  data: function data() {
    return {
      datalist: '',
      total: 0,
      pagesize: 20,
      updatalistinfo: false,
      nodeinfoForm: '',
      rules: {
        code: [{
          required: true,
          message: "请输入设备类型编码!"
        }],
        name: [{
          required: true,
          message: "请输入设备类型名称!"
        }]
      }
    };
  }
}, defineProperty_default()(_created$components$d, "created", function created() {}), defineProperty_default()(_created$components$d, "mounted", function mounted() {
  this.getSearchDatalist();
}), defineProperty_default()(_created$components$d, "methods", {
  // 初始化数据
  getSearchDatalist: function getSearchDatalist() {
    var _this = this;

    var formData = {
      pageindex: 1,
      pagesize: this.pagesize
    };
    Object(service["D" /* search */])(formData, function (res) {
      _this.total = res.count;
      _this.datalist = res.data;
      _this.datalist.map(function (x, index) {
        x.key = index + 1;
      });
    });
  },

  // 页码数改变
  handleCurrentChange: function handleCurrentChange(e) {
    var _this2 = this;

    var formData = {
      pageindex: e,
      pagesize: this.pagesize
    };
    Object(service["D" /* search */])(formData, function (res) {
      _this2.total = res.count;
      _this2.datalist = res.data;
      _this2.datalist.map(function (x, index) {
        x.key = index + 1;
      });
    });
  },
  handleSizeChange: function handleSizeChange(e) {
    console.log('当前多少页e :>> ', e);
    this.pagesize = e;
  },

  // 数据编辑时打开弹窗
  updatalist: function updatalist(rowInfo) {
    this.nodeinfoForm = rowInfo.data;
    // console.log('this.nodeinfoForm :>> ', this.nodeinfoForm);
    this.updatalistinfo = true;
  },

  // 编辑、新增后保存信息
  handleSubmit: function handleSubmit() {
    var _this3 = this;

    this.$refs.nodeinfoForm.validate(function (valid) {
      if (valid) {
        _this3.updatalistinfo = false;
        var formData = new FormData();
        for (var i in _this3.nodeinfoForm) {
          if (_this3.nodeinfoForm[i]) {
            formData.append(i, _this3.nodeinfoForm[i]);
          }
        }
        formData.append('id', _this3.nodeinfoForm.id);
        Object(service["G" /* searchsave */])(formData, function (res) {
          _this3.getSearchDatalist();
          // this.total = res.count
          // this.datalist = res.data
          // this.datalist.map((x, index) => {
          //   x.key = index + 1;
          // });
        });
        _this3.getSearchDatalist();
      } else {
        _this3.updatalistinfo = true;
      }
    });
  },
  handleToggleDialog: function handleToggleDialog() {
    this.updatalistinfo = false;
  },

  //添加时重置信息
  reset: function reset() {
    this.nodeinfoForm = {
      code: "",
      name: "",
      shortname: ""
    };
  },

  //添加
  openDialog: function openDialog() {
    var _this4 = this;

    this.reset();
    this.$nextTick(function () {
      _this4.$refs["nodeinfoForm"].clearValidate();
    });
    this.updatalistinfo = true;
  }
}), _created$components$d);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/dtype/dtype.vue
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


/* harmony default export */ var dtype_dtype = (dtype);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a15eead","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/dtype/dtype.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_c('div',{staticClass:"input"},[_c('el-button',{on:{"click":_vm.openDialog}},[_vm._v("添加设备类型")])],1),_vm._v(" "),_c('div',[_c('DxDataGrid',{staticClass:"main_table",staticStyle:{"height":"calc(330px  + 42vh)","width":"98%"},attrs:{"data-source":_vm.datalist,"allow-column-resizing":true,"show-column-lines":true,"auto-expand-all":false,"show-row-lines":true,"column-auto-width":true,"focused-row-enabled":true,"auto-navigate-to-focused-row":true,"width":"98%","key-expr":"key"},scopedSlots:_vm._u([{key:"caozuo",fn:function(ref){
var rowInfo = ref.data;
return [_c('div',{staticClass:"caozuo_btn"},[_c('span',{staticClass:"el-icon-edit caozuo_edit",attrs:{"title":"修改"},on:{"click":function($event){return _vm.updatalist(rowInfo)}}})])]}}])},[_c('DxColumn',{attrs:{"data-field":"id","alignment":"center","caption":"ID"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"code","alignment":"center","caption":"设备类型编码"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"name","alignment":"center","caption":"设备类型名称"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"shortname","alignment":"center","caption":"设备类型简称"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"createdate","alignment":"center","caption":"创建日期"}}),_vm._v(" "),_c('DxColumn',{attrs:{"width":210,"caption":"操作","alignment":"center","cell-template":"caozuo"}}),_vm._v(" "),_vm._v(" "),_c('DxScrolling',{attrs:{"use-native":"false"}})],1)],1),_vm._v(" "),_c('el-pagination',{attrs:{"page-size":_vm.pagesize,"pager-count":5,"page-sizes":[10, 20, 30, 40],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}}),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改","visible":_vm.updatalistinfo,"width":"70%","before-close":_vm.handleToggleDialog},on:{"update:visible":function($event){_vm.updatalistinfo=$event}}},[_c('div',{staticClass:"dialog_form main_form"},[_c('el-form',{ref:"nodeinfoForm",attrs:{"rules":_vm.rules,"model":_vm.nodeinfoForm,"label-width":"180px"}},[_c('el-row',[_c('el-form-item',{attrs:{"label":"设备类型编码","prop":"code"}},[_c('el-input',{attrs:{"placeholder":"请输入设备类型编码"},model:{value:(_vm.nodeinfoForm.code),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "code", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"nodeinfoForm.code"}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-form-item',{attrs:{"label":"设备类型名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入设备类型名称"},model:{value:(_vm.nodeinfoForm.name),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "name", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"nodeinfoForm.name"}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-form-item',{attrs:{"label":"设备类型简称","prop":"shortname"}},[_c('el-input',{attrs:{"placeholder":"请输入设备类型简称"},model:{value:(_vm.nodeinfoForm.shortname),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "shortname", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"nodeinfoForm.shortname"}})],1)],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.updatalistinfo = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.handleSubmit('form')}}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_dtype_dtype = (esExports);
// CONCATENATED MODULE: ./src/pages/dtype/dtype.vue
function injectStyle (ssrContext) {
  __webpack_require__("ELzi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a15eead"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  dtype_dtype,
  pages_dtype_dtype,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_dtype_dtype = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=13.3669700477dbe0718f69.js.map