webpackJsonp([10],{

/***/ "WRj+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("7t+N");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/ztree/js/jquery.ztree.core.min.js
var jquery_ztree_core_min = __webpack_require__("gkhj");
var jquery_ztree_core_min_default = /*#__PURE__*/__webpack_require__.n(jquery_ztree_core_min);

// EXTERNAL MODULE: ./node_modules/ztree/js/jquery.ztree.excheck.min.js
var jquery_ztree_excheck_min = __webpack_require__("+JnB");
var jquery_ztree_excheck_min_default = /*#__PURE__*/__webpack_require__.n(jquery_ztree_excheck_min);

// EXTERNAL MODULE: ./node_modules/ztree/css/metroStyle/metroStyle.css
var metroStyle = __webpack_require__("AX9F");
var metroStyle_default = /*#__PURE__*/__webpack_require__.n(metroStyle);

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

// CONCATENATED MODULE: ./src/pages/dattr/datte.js

// import "@/libs/ztree/js/jquery.ztree.core.js"







/* harmony default export */ var datte = ({
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
  props: {},
  created: function created() {
    Object(localization["a" /* loadMessages */])(zh_default.a);
    Object(localization["b" /* locale */])(navigator.language);
  },
  data: function data() {
    var _this = this;

    return {
      setting: {
        treeId: 'key',
        view: {
          showIcon: true, //是否显示 文件图标
          fontCss: {} // ztree的字体颜色
        },
        data: {
          key: {
            name: 'title'
          }
        },
        callback: {
          onClick: function onClick(event, treeId, treeNode) {
            _this.zTreeOnClick(event, treeId, treeNode); //点击生成树的点击事件
          }
          // onClick: this.zTreeOnClick
        }
      },
      zNodes: '',
      treenode: '',
      title: '',
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
  },
  mounted: function mounted() {
    this.getdeviceattrTree();
    this.getSearchDatalist();
  },

  computed: {},
  methods: {
    // ztree点击事件
    zTreeOnClick: function zTreeOnClick(event, treeId, treeNode) {
      var _this2 = this;

      this.title = treeNode.title;
      this.title = this.title + ' / ';
      console.log("object", treeNode.id);

      var formData = {
        typecode: treeNode.id
      };
      Object(service["s" /* mappingsearch */])(formData, function (res) {
        _this2.total = res.count;
        _this2.datalist = res.data;
        if (_this2.datalist) {
          _this2.datalist.map(function (x, index) {
            x.key = index + 1;
          });
        }
      });
    },

    // 获取ztree数据
    getdeviceattrTree: function getdeviceattrTree() {
      var _this3 = this;

      var formData = {
        type: ''
      };
      Object(service["i" /* deviceattrTree */])(formData, function (res) {
        _this3.treenode = res.data[0];
        _this3.zNodes = _this3.treenode;
        jquery_default.a.fn.zTree.init(jquery_default()("#treeDemo"), _this3.setting, _this3.zNodes).expandAll(true);
      });
    },

    // 初始化数据
    getSearchDatalist: function getSearchDatalist() {
      // var formData = {
      //   pageindex: 1,
      //   pagesize: this.pagesize
      // }
      // search(formData, res => {
      //   this.total = res.count
      //   this.datalist = res.data
      //   this.datalist.map((x, index) => {
      //     x.key = index + 1;
      //   });
      // });
    },

    // 页码数改变
    handleCurrentChange: function handleCurrentChange(e) {
      var _this4 = this;

      var formData = {
        pageindex: e,
        pagesize: this.pagesize
      };
      Object(service["D" /* search */])(formData, function (res) {
        _this4.total = res.count;
        _this4.datalist = res.data;
        _this4.datalist.map(function (x, index) {
          x.key = index + 1;
        });
      });
    },
    handleSizeChange: function handleSizeChange(e) {
      // console.log('当前多少页e :>> ', e);
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
      var _this5 = this;

      this.updatalistinfo = false;
      this.$refs.nodeinfoForm.validate(function (valid) {
        if (valid) {
          var formData = new FormData();
          for (var i in _this5.nodeinfoForm) {
            if (_this5.nodeinfoForm[i]) {
              formData.append(i, _this5.nodeinfoForm[i]);
            }
          }
          formData.append('id', _this5.nodeinfoForm.id);
          Object(service["G" /* searchsave */])(formData, function (res) {
            _this5.total = res.count;
            _this5.datalist = res.data;
            _this5.datalist.map(function (x, index) {
              x.key = index + 1;
            });
          });
          _this5.getSearchDatalist();
        }
      });
    },
    handleToggleDialog: function handleToggleDialog() {
      this.updatalistinfo = false;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/dattr/datte.vue
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
//
//
//
//
//


/* harmony default export */ var dattr_datte = (datte);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a731558e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/dattr/datte.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datte"},[_c('div',{staticClass:"ztree"},[_c('ul',{staticClass:"ztree",attrs:{"id":"treeDemo"},on:{"select":_vm.zTreeOnClick}})]),_vm._v(" "),_c('div',[_c('div',{staticClass:"bg"},[_c('div',{staticClass:"dattetitle"},[_c('span',[_vm._v(" "+_vm._s(_vm.title)+"字段映射设置 ")])]),_vm._v(" "),_c('DxDataGrid',{staticClass:"main_table",staticStyle:{"height":"calc(335px + 42vh)","width":"100%"},attrs:{"data-source":_vm.datalist,"allow-column-resizing":true,"show-column-lines":false,"auto-expand-all":false,"show-row-lines":true,"column-auto-width":true,"focused-row-enabled":true,"auto-navigate-to-focused-row":true,"width":"100%","key-expr":"key"},scopedSlots:_vm._u([{key:"caozuo",fn:function(ref){
var rowInfo = ref.data;
return [_c('div',{staticClass:"caozuo_btn"},[_c('span',{staticClass:"el-icon-edit caozuo_edit",attrs:{"title":"修改"},on:{"click":function($event){return _vm.updatalist(rowInfo)}}})])]}}])},[_c('DxColumn',{attrs:{"data-field":"id","alignment":"center","caption":"ID"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"desc","alignment":"center","caption":"目标字段（数据表字段"}}),_vm._v(" "),_c('DxColumn',{staticStyle:{"color":"#19BF83 !important"},attrs:{"data-field":"code","alignment":"center","caption":"源字段(接收数据属性)"}}),_vm._v(" "),_c('DxColumn',{attrs:{"width":200,"caption":"操作","alignment":"center","cell-template":"caozuo"}}),_vm._v(" "),_vm._v(" "),_c('DxScrolling',{attrs:{"use-native":"false"}})],1),_vm._v(" "),_c('el-pagination',{attrs:{"page-size":_vm.pagesize,"pager-count":5,"page-sizes":[10, 20, 30, 40],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改","visible":_vm.updatalistinfo,"width":"70%","before-close":_vm.handleToggleDialog},on:{"update:visible":function($event){_vm.updatalistinfo=$event}}},[_c('div',{staticClass:"dialog_form main_form"},[_c('el-form',{ref:"nodeinfoForm",attrs:{"rules":_vm.rules,"model":_vm.nodeinfoForm,"label-width":"180px"}},[_c('el-row',[_c('el-form-item',{attrs:{"label":"设备类型编码","prop":"code"}},[_c('el-input',{attrs:{"placeholder":"请输入设备类型编码"},model:{value:(_vm.nodeinfoForm.code),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "code", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"nodeinfoForm.code"}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-form-item',{attrs:{"label":"设备类型名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入设备类型名称"},model:{value:(_vm.nodeinfoForm.name),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "name", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"nodeinfoForm.name"}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-form-item',{attrs:{"label":"设备类型简称","prop":"shortname"}},[_c('el-input',{attrs:{"placeholder":"请输入设备类型简称"},model:{value:(_vm.nodeinfoForm.shortname),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "shortname", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"nodeinfoForm.shortname"}})],1)],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.updatalistinfo = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.handleSubmit('form')}}},[_vm._v("确 定")])],1)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_dattr_datte = (esExports);
// CONCATENATED MODULE: ./src/pages/dattr/datte.vue
function injectStyle (ssrContext) {
  __webpack_require__("dKMs")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a731558e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  dattr_datte,
  pages_dattr_datte,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_dattr_datte = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dKMs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=10.cbf3d742715474e9520c.js.map