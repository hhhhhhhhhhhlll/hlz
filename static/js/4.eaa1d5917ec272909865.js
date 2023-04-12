webpackJsonp([4],{

/***/ "36kf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("qkKv"), __esModule: true };

/***/ }),

/***/ "p4v8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

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

// CONCATENATED MODULE: ./src/pages/platform/platform.js


// import "@/libs/ztree/js/jquery.ztree.core.js"







/* harmony default export */ var platform = ({
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

    var validatePass2 = function validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== _this.nodeinfoForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      datalist: '',
      total: 0,
      pagesize: 20,
      pageindex: 1,
      updatalistinfo: false,
      deletistinfomsg: false,
      suredeletistinfomsg: false,
      nodeinfoForm: '',
      role: '',
      deletid: '',
      activeName: 'first',
      rules: {
        name: [{
          required: true,
          message: '请输入菜单名称',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '请输入权限编码',
          trigger: 'blur'
        }]
      },
      getcodeinfodialog: false,
      codeForm: {
        name: '',
        code: ''
      },
      parentcode: '',
      roles: [{
        "label": "管理员角色",
        "value": 0
      }, {
        "label": "一般用户角色",
        "value": 2
      }, {
        "label": "审计角色",
        "value": 3
      }],
      ys1: 0,
      rolename: '',
      twodatalist: ''
    };
  },
  mounted: function mounted() {
    this.getSearchDatalist();
    this.chocked();
  },

  computed: {},
  methods: {
    handleClick: function handleClick(tab, event) {
      // console.log(tab, event);
    },

    // 初始化数据
    getSearchDatalist: function getSearchDatalist() {
      var _this2 = this;

      var formData = {
        pageindex: 1,
        pagesize: this.pagesize,
        pcode: 'sysmenu'
      };
      Object(service["n" /* getGlobalCode */])(formData, function (res) {
        _this2.total = res.count;
        _this2.datalist = res.data;
        _this2.datalist.map(function (x, index) {
          x.key = index + 1;
        });
      });
    },

    // 页码数改变
    handleCurrentChange: function handleCurrentChange(e) {
      var _this3 = this;

      this.pageindex = e;
      var formData = {
        pageindex: e,
        pagesize: this.pagesize
      };
      search(formData, function (res) {
        _this3.total = res.count;
        _this3.datalist = res.data;
        _this3.datalist.map(function (x, index) {
          x.key = index + 1;
        });
      });
    },
    handleSizeChange: function handleSizeChange(e) {
      this.pagesize = e;
    },
    cslistchange: function cslistchange(value) {
      this.nodeinfoForm.name = this.csname;
    },

    // 数据编辑时打开弹窗
    updatalist: function updatalist(rowInfo) {
      this.nodeinfoForm = JSON.parse(stringify_default()(rowInfo.data));
      this.updatalistinfo = true;
      this.role = this.nodeinfoForm.role;
      // console.log('this.nodeinfoForm.id :>> ', this.nodeinfoForm);
    },

    // 编辑、新增后保存信息
    handleSubmit: function handleSubmit() {
      var _this4 = this;

      this.$refs.nodeinfoForm.validate(function (valid) {
        if (valid) {
          _this4.updatalistinfo = false;
          var formData = new FormData();
          formData = {
            name: _this4.nodeinfoForm.name,
            code: _this4.nodeinfoForm.code,
            id: "0",
            parentcode: "sysmenu"
          };
          Object(service["B" /* saveGlobalcode */])(formData, function (res) {});
          setTimeout(function () {
            _this4.$nextTick(function () {
              _this4.getSearchDatalist();
            });
          }, 200);
        } else {
          _this4.updatalistinfo = true;
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
        name: ""
      };
    },

    //添加
    openDialog: function openDialog() {
      var _this5 = this;

      this.reset();
      this.$nextTick(function () {
        _this5.$refs["nodeinfoForm"].clearValidate();
      });
      this.updatalistinfo = true;
    },

    // 删除
    deletistinfo: function deletistinfo(rowInfo) {
      this.deletistinfomsg = true;
      this.deletid = rowInfo.data.id;
      this.nodeinfoForm = rowInfo.data;
      //   console.log('this.deletid :>> ', rowInfo);
    },

    // 确认删除
    Submitdeletistinfo: function Submitdeletistinfo() {
      var _this6 = this;

      this.deletistinfomsg = false;
      var formData = {
        tablename: "global_const_code",
        id: this.deletid
      };
      Object(service["f" /* deleteGlobalcode */])(formData, function (res) {});
      this.$nextTick(function () {
        _this6.getSearchDatalist();
      });
      this.getSearchDatalist();
    },
    getcodelist: function getcodelist(rowInfo) {
      var _this7 = this;

      console.log('rowInfo.data :>> ', rowInfo.data);
      this.parentcode = rowInfo.data.code;
      this.getcodeinfodialog = true;
      var code = rowInfo.data.code;
      console.log('rowInfo :>> ', rowInfo);
      var formData = {
        pageindex: 1,
        pagesize: this.pagesize,
        pcode: code
      };
      Object(service["n" /* getGlobalCode */])(formData, function (res) {
        // this.total = res.count
        _this7.twodatalist = res.data;
        if (_this7.twodatalist) {
          _this7.twodatalist.map(function (x, index) {
            x.key = index + 1;
          });
        }
      });
    },
    codesurelist: function codesurelist() {
      var _this8 = this;

      var formData = {
        name: this.codeForm.name,
        code: this.codeForm.code,
        id: '0',
        parentcode: this.parentcode
      };
      Object(service["B" /* saveGlobalcode */])(formData, function (res) {
        var formData = {
          pageindex: 1,
          pagesize: _this8.pagesize,
          pcode: _this8.parentcode
        };
        Object(service["n" /* getGlobalCode */])(formData, function (res) {
          // this.total = res.count
          _this8.twodatalist = res.data;
          if (_this8.twodatalist) {
            _this8.twodatalist.map(function (x, index) {
              x.key = index + 1;
            });
          }
        });
      });
    },
    codeinfohandleSubmit: function codeinfohandleSubmit() {
      this.getcodeinfodialog = false;
    },
    whole: function whole(index) {
      this.ys1 = index;
      this.chocked();
    },
    chocked: function chocked() {
      var _this9 = this;

      var formData = {
        roleid: this.ys1
      };
      Object(service["p" /* get_menu_tree */])(formData, function (res) {
        _this9.rolename = res.data;
      });
    },
    savechoice: function savechoice() {
      var _this10 = this;

      var list = '';
      this.rolename.map(function (item) {
        if (item.node) {
          item.node.map(function (i) {
            if (i.checked) {
              if (list != '') {
                list = list + ',' + i.id;
              } else {
                list = i.id;
              }
            }
          });
        }
        if (item.checked) {
          if (list != '') {
            list = list + ',' + item.id;
          } else {
            list = item.id;
          }
        }
      });
      var formData = {
        roleid: this.ys1,
        funcids: list
      };
      Object(service["C" /* saveRoleFunc */])(formData, function (res) {
        _this10.chocked();
      });
      this.suredeletistinfomsg = true;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/platform/platform.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var platform_platform = (platform);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7e31d72e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/platform/platform.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{staticClass:"platform",on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":"菜单管理","name":"first"}},[_c('div',[_c('div',{staticClass:"bg"},[_c('div',[_c('el-button',{staticClass:"input",on:{"click":_vm.openDialog}},[_vm._v("添加菜单")])],1),_vm._v(" "),_c('DxDataGrid',{staticClass:"main_table",staticStyle:{"height":"calc(248px  + 42vh)","width":"98%"},attrs:{"data-source":_vm.datalist,"allow-column-resizing":true,"show-column-lines":false,"auto-expand-all":false,"show-row-lines":true,"column-auto-width":true,"focused-row-enabled":true,"auto-navigate-to-focused-row":true,"width":"98%","key-expr":"key"},scopedSlots:_vm._u([{key:"caozuo",fn:function(ref){
var rowInfo = ref.data;
return [_c('div',{staticClass:"caozuo_btn"},[_c('span',{staticClass:"el-icon-edit caozuo_edit",attrs:{"title":"修改"},on:{"click":function($event){return _vm.updatalist(rowInfo)}}}),_vm._v(" "),_c('span',{staticClass:"el-icon-setting caozuo_edit",attrs:{"title":"编辑"},on:{"click":function($event){return _vm.getcodelist(rowInfo)}}}),_vm._v(" "),_c('span',{staticClass:"el-icon-delete caozuo_edit",attrs:{"title":"删除"},on:{"click":function($event){return _vm.deletistinfo(rowInfo)}}})])]}}])},[_c('DxColumn',{attrs:{"data-field":"id","alignment":"center","caption":"ID"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"name","alignment":"center","caption":"菜单名称"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"code","alignment":"center","caption":"权限编码"}}),_vm._v(" "),_c('DxColumn',{attrs:{"caption":"操作","alignment":"center","cell-template":"caozuo"}}),_vm._v(" "),_vm._v(" "),_c('DxScrolling',{attrs:{"use-native":"false"}})],1),_vm._v(" "),_c('el-pagination',{attrs:{"page-size":_vm.pagesize,"pager-count":5,"page-sizes":[10, 20, 30, 40],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"角色管理","name":"second"}},[_c('div',{staticClass:"role"},[_c('div',{staticClass:"choicerole"},[_c('div',{staticClass:"topname"},[_vm._v("请选择用户角色")]),_vm._v(" "),_c('div',_vm._l((_vm.roles),function(item,i){return _c('div',{key:i,staticClass:"roleitem",class:{ type: _vm.ys1 == item.value },on:{"click":function($event){return _vm.whole(item.value)}}},[_vm._v(" "+_vm._s(item.label)+" ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"rolemesssge"},[_vm._l((_vm.rolename),function(item,i){return _c('div',{key:i,staticClass:"multi-check-item"},[_c('el-checkbox',{attrs:{"label":item.name,"value":item.id,"checked":item.checked},model:{value:(item.checked),callback:function ($$v) {_vm.$set(item, "checked", $$v)},expression:"item.checked"}},[_c('span',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticStyle:{"position":"absolute","left":"700px"}},[_vm._v("菜单栏 ")])]),_vm._v(" "),_c('div',{staticClass:"multi-check-item1"},_vm._l((item.node || []),function(child,i1){return _c('el-checkbox',{key:i1,attrs:{"label":child.name,"value":item.id,"checked":child.checked},model:{value:(child.checked),callback:function ($$v) {_vm.$set(child, "checked", $$v)},expression:"child.checked"}},[_vm._v(" "+_vm._s(child.name)+" ")])}),1)],1)}),_vm._v(" "),_c('el-button',{staticClass:"msgsave",on:{"click":_vm.savechoice}},[_vm._v("保存权限")])],2)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"信息","visible":_vm.suredeletistinfomsg,"width":"30%","before-close":_vm.handleToggleDialog},on:{"update:visible":function($event){_vm.suredeletistinfomsg=$event}}},[_c('div',{staticClass:"dialog_form main_form"},[_c('span',[_vm._v("添加成功")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.suredeletistinfomsg = false}}},[_vm._v("确 定")])],1)])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"添加/修改","visible":_vm.updatalistinfo,"width":"70%","before-close":_vm.handleToggleDialog},on:{"update:visible":function($event){_vm.updatalistinfo=$event}}},[_c('div',{staticClass:"dialog_form main_form"},[_c('el-form',{ref:"nodeinfoForm",attrs:{"model":_vm.nodeinfoForm,"rules":_vm.rules,"size":"medium","label-width":"180px"}},[_c('el-form-item',{attrs:{"label":"菜单名称","prop":"name"}},[_c('el-input',{style:({ width: '100%' }),attrs:{"placeholder":"请输入菜单名称","clearable":""},model:{value:(_vm.nodeinfoForm.name),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "name", $$v)},expression:"nodeinfoForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"权限编码","prop":"code"}},[_c('el-input',{style:({ width: '100%' }),attrs:{"placeholder":"请输入权限编码","clearable":""},model:{value:(_vm.nodeinfoForm.code),callback:function ($$v) {_vm.$set(_vm.nodeinfoForm, "code", $$v)},expression:"nodeinfoForm.code"}})],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.updatalistinfo = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.handleSubmit('form')}}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"删除","visible":_vm.deletistinfomsg,"width":"30%","before-close":_vm.handleToggleDialog},on:{"update:visible":function($event){_vm.deletistinfomsg=$event}}},[_c('div',{staticClass:"dialog_form main_form"},[_c('span',[_vm._v("是否删除"+_vm._s(_vm.nodeinfoForm.name)+"的数据记录？")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.deletistinfomsg = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.Submitdeletistinfo('form')}}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑控制页功能","visible":_vm.getcodeinfodialog,"width":"70%","before-close":_vm.handleToggleDialog},on:{"update:visible":function($event){_vm.getcodeinfodialog=$event}}},[_c('div',{staticClass:"dialog_form main_form"},[_c('span',[_vm._v("请为菜单项"+_vm._s(_vm.nodeinfoForm.name)+"设置权限控制信息")]),_vm._v(" "),_c('el-form',{ref:"codeForm",attrs:{"model":_vm.codeForm,"rules":_vm.rules,"size":"medium","label-width":"180px"}},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"功能项名称","prop":"name"}},[_c('el-input',{style:({ width: '100%' }),attrs:{"placeholder":"请输入功能项名称","clearable":""},model:{value:(_vm.codeForm.name),callback:function ($$v) {_vm.$set(_vm.codeForm, "name", $$v)},expression:"codeForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"权限编码","prop":"code"}},[_c('el-input',{style:({ width: '100%' }),attrs:{"placeholder":"请输入权限编码","clearable":""},model:{value:(_vm.codeForm.code),callback:function ($$v) {_vm.$set(_vm.codeForm, "code", $$v)},expression:"codeForm.code"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-button',{staticClass:"save",on:{"click":_vm.codesurelist}},[_vm._v(" 保 存")])],1)],1)],1)],1),_vm._v(" "),_c('DxDataGrid',{staticClass:"main_table",staticStyle:{"height":"calc(42vh)","width":"100%"},attrs:{"data-source":_vm.twodatalist,"allow-column-resizing":true,"show-column-lines":false,"auto-expand-all":false,"show-row-lines":true,"column-auto-width":true,"focused-row-enabled":true,"auto-navigate-to-focused-row":true,"width":"100%","key-expr":"key"}},[_c('DxColumn',{attrs:{"data-field":"id","alignment":"center","caption":"ID"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"name","alignment":"center","caption":"功能项名称"}}),_vm._v(" "),_c('DxColumn',{attrs:{"data-field":"code","alignment":"center","caption":"权限编码"}}),_vm._v(" "),_c('DxScrolling',{attrs:{"use-native":"false"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.getcodeinfodialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.codeinfohandleSubmit('form')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_platform_platform = (esExports);
// CONCATENATED MODULE: ./src/pages/platform/platform.vue
function injectStyle (ssrContext) {
  __webpack_require__("36kf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e31d72e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  platform_platform,
  pages_platform_platform,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_platform_platform = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qkKv":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ })

});
//# sourceMappingURL=4.eaa1d5917ec272909865.js.map