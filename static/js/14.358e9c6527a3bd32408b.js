webpackJsonp([14],{

/***/ "+NOe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/utils/service.js
var service = __webpack_require__("VxtT");

// EXTERNAL MODULE: ./node_modules/mqtt/lib/connect/index.js
var connect = __webpack_require__("Cg+j");
var connect_default = /*#__PURE__*/__webpack_require__.n(connect);

// CONCATENATED MODULE: ./src/pages/cableDuct/cableDuct.js



/* harmony default export */ var cableDuct = ({
  created: function created() {
    this.initMqtt();
  },

  components: {},
  data: function data() {
    return {
      radio: '1',
      radio2: '',
      isActive: 0,
      smokelist: '',
      oilpoollevellist: '',
      templlist: '',
      waterlist: '',
      oilpollutionlist: '',
      choice: '',
      waterlevelcheck: ''
    };
  },
  mounted: function mounted() {
    this.getsmokedata();
    this.initMqtt();
  },

  methods: {
    getsmokedata: function getsmokedata() {
      var _this2 = this;

      Object(service["H" /* smoke_check */])({}, function (res) {
        _this2.smokelist = res.data;
      });
      Object(service["y" /* oilpoollevel_check */])({}, function (res) {
        _this2.oilpoollevellist = res.data;
      });
      Object(service["N" /* temp_check */])({}, function (res) {
        _this2.templlist = res.data;
      });
      Object(service["S" /* waterimmersion_check */])({}, function (res) {
        _this2.waterlist = res.data;
      });
      Object(service["w" /* oilpollution_check */])({}, function (res) {
        _this2.oilpollutionlist = res.data[0];
        _this2.choice = _this2.oilpollutionlist.oilpollutionmonitoring;
      });
      Object(service["T" /* waterlevel_check */])({}, function (res) {
        _this2.waterlevelcheck = res.data;
        // console.log('this.waterlevelcheck :>> ', this.waterlevelcheck);
      });
    },
    initMqtt: function initMqtt(topic) {
      var mqttConfig = {
        port: 8083,
        keepalive: 60,
        clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
        // protocolId: 'MQTT',
        // protocolVersion: 4,
        // clean: true,
      };
      var TopicList = {
        "smoke_check": "topic/mqtt/smoke_check",
        "oilpoollevelmd_check": "topic/mqtt/oilpoollevelmd_check",
        "temp_check": "topic/mqtt/temp_check",
        "waterimmersion_check": "topic/mqtt/waterimmersion_check",
        "oilpollution_check": "topic/mqtt/oilpollution_check",
        "waterlevel_check": "topic/mqtt/waterlevel_check"
      };
      var _this = this;
      //建立连接，需要搭建消息中间件服务器的（我这里是后台）提供用户名或密码
      var cfg = assign_default()(mqttConfig, {
        // username: 'xxxx1',
        // password: 'xxx2',
      });
      // 在data中定义MQTT,以便断开连接
      // ws://xxxxx是连接地址，后台提供，wss是https连接
      _this.MQTT = connect_default.a.connect('ws://8.142.173.95:8083/mqtt', cfg);
      _this.MQTT.on('error', function (e) {
        _this.MQTT.end();
      });
      //建立连接后订阅主题
      _this.MQTT.on('connect', function () {
        // 订阅一个主题
        for (var k in TopicList) {
          var element = TopicList[k];
          _this.MQTT.subscribe(element, {
            qos: 1
          }, function (err) {
            if (!err) {
              // console.info(' ---- 订阅成功')
            } else {
                // console.warn('订阅失败')
              }
          });
        }
      });
      // 后台发送的消息
      _this.MQTT.on('message', function (top, message) {
        //发送过来的如果是对象你是需要解析的。
        var res = JSON.parse(message.toString());
        var TOP = top;
        console.log(top + ': ', res);
        //根据不同主题进行赋值操作
        switch (TOP) {
          case "topic/mqtt/oilpoollevelmd_check":
            var slist = res.data;
            _this.$nextTick(function () {
              _this.oilpoollevellist = slist;
            });
            break;
          case "topic/mqtt/temp_check":
            var slist = res.data;
            _this.$nextTick(function () {
              _this.templlist = slist;
            });
            break;
          case "topic/mqtt/waterimmersion_check":
            var slist = res.data;
            _this.$nextTick(function () {
              _this.waterlist = slist;
            });
            break;
          case "topic/mqtt/oilpollution_check":
            var slist = res.data[0].oilpollutionmonitoring;
            _this.$nextTick(function () {
              _this.choice = slist;
            });

            break;
          case "topic/mqtt/smoke_check":
            var slist = res.data;
            _this.$nextTick(function () {
              _this.smokelist = slist;
            });
            break;
          case "topic/mqtt/waterlevel_check":
            var slist = res.data;
            console.log('slist :>> ', slist);
            _this.$nextTick(function () {
              _this.waterlevelcheck = slist;
            });
            break;
        }
      });
      // 其他异常事件
      _this.MQTT.on('reconnect', function () {
        console.info('正在重连');
      });
      _this.MQTT.on('disconnect', function (error) {
        console.info('服务器断开:', error);
      });
      _this.MQTT.on('close', function () {
        _this.MQTT.end();
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.MQTT.end) this.MQTT.end();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/cableDuct/cableDuct.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var cableDuct_cableDuct = (cableDuct);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-133bb682","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/cableDuct/cableDuct.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cableDuct"},[_c('div',{staticClass:"cableDuct_item1"},[_c('div',{staticClass:"bg"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"total1"},[_c('div',{staticClass:"left1_item"},_vm._l((_vm.smokelist),function(item,i){return _c('div',{key:i},[_c('div',{staticClass:"left1_item_title",class:[item.smokeds == 1 ? 'otherActiveClass' : 'ActiveClass']},[_c('span',{staticClass:"cableDuct_img station-imgpostion img",class:[item.smokeds == 1 ? 'cableDucterror_img' : 'cableDuct_img']}),_vm._v(" "),_c('span',{staticClass:"itemtitle"},[_vm._v(_vm._s(item.device_name))])])])}),0)])]),_vm._v(" "),_c('div',{staticClass:"bg"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"total2"},[_c('div',{staticClass:"left1_item"},_vm._l((_vm.waterlist),function(item,i){return _c('div',{key:i},[_c('div',{staticClass:"left1_item_title",class:[item.waterimmersionms == 1 ? 'otherActiveClass' : 'ActiveClass']},[_c('span',{staticClass:"cableDuct_img station-imgpostion img",class:[item.waterimmersionms == 1 ? 'cableDucterror_img' : 'cableDuct_img']}),_vm._v(" "),_c('span',{staticClass:"itemtitle"},[_vm._v(_vm._s(item.device_name))])])])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"cableDuct_item2"},[_c('div',{staticClass:"bg"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"cableDuct_item2_title"},_vm._l((_vm.oilpoollevellist),function(item,i){return _c('div',{key:i},[_c('span',{},[_vm._v(_vm._s(item.device_name))]),_vm._v(" "),_c('span',{class:[item.oilpoollevel < 3500 ? 'ActiveClass' : 'otherActiveClass']},[_vm._v(_vm._s(item.oilpoollevel)+"mm")])])}),0)]),_vm._v(" "),_c('div',{staticClass:"bg"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"cableDuct_radio"},[_c('el-row',[_c('el-col',{staticClass:"df",attrs:{"span":8}},[_c('div',{staticClass:"station-imgpostion cimg",class:[_vm.choice.includes('有水') !== true ? 'checked' : 'unchecked']}),_vm._v(" "),_c('span',{class:[_vm.choice.includes('有水') !== true ? 'ActiveClass' : 'otherActiveClass']},[_vm._v("有水")])]),_vm._v(" "),_c('el-col',{staticClass:"df",attrs:{"span":8}},[_c('span',{staticClass:"station-imgpostion cimg",class:[_vm.choice.includes('有油') !== true ? 'checked' : 'unchecked']}),_vm._v(" "),_c('span',{class:[_vm.choice.includes('有油') !== true ? 'ActiveClass' : 'otherActiveClass']},[_vm._v("有油")])]),_vm._v(" "),_c('el-col',{staticClass:"df",attrs:{"span":8}},[_c('span',{staticClass:"station-imgpostion cimg",class:[_vm.choice.includes('高油') !== true ? 'checked' : 'unchecked']}),_vm._v(" "),_c('span',{class:[_vm.choice.includes('高油') !== true ? 'ActiveClass' : 'otherActiveClass']},[_vm._v("高油")])])],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"df",attrs:{"span":8}},[_c('span',{staticClass:"station-imgpostion cimg",class:[_vm.choice.includes('空气') !== true ? 'checked' : 'unchecked']}),_vm._v(" "),_c('span',{class:[_vm.choice.includes('空气') !== true ? 'ActiveClass' : 'otherActiveClass']},[_vm._v("空气")])]),_vm._v(" "),_c('el-col',{staticClass:"df",attrs:{"span":8}},[_c('span',{staticClass:"station-imgpostion cimg",class:[_vm.choice.includes('信号过高告警') !== true ? 'checked' : 'unchecked']}),_vm._v(" "),_c('span',{class:[_vm.choice.includes('信号过高告警') !== true ? 'ActiveClass' : 'otherActiveClass']},[_vm._v("信号过高告警")])]),_vm._v(" "),_c('el-col',{staticClass:"df",attrs:{"span":8}},[_c('span',{staticClass:"station-imgpostion cimg",class:[_vm.choice.includes('信号过低告警') !== true ? 'checked' : 'unchecked']}),_vm._v(" "),_c('span',{class:[_vm.choice.includes('信号过低告警') !== true ? 'ActiveClass' : 'otherActiveClass']},[_vm._v("信号过低告警")])])],1),_vm._v(" "),_c('el-row',[_vm._v("油污厚度: "),_c('span',{staticClass:"span_num"},[_vm._v(_vm._s(_vm.oilpollutionlist.reservoirthickness))]),_vm._v("mm")])],1)])]),_vm._v(" "),_c('div',{staticClass:"cableDuct_item3"},[_c('div',{staticClass:"bg"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"right"},_vm._l((_vm.templlist),function(item,i){return _c('div',{key:i,staticClass:"right_item"},[_c('div',[_vm._v(_vm._s(item.device_name))]),_vm._v(" "),_c('div',{staticClass:"temp"},[_vm._v(" 温度:"),_c('span',{staticClass:"ctemp",class:[item.temp < 70 ? 'ctemp' : 'otherActiveClass']},[_vm._v(_vm._s(item.temp)+"℃")]),_vm._v("\n                        湿度："),_c('span',{staticClass:"ctemp",class:[item.humidity < 99 ? 'ctemp' : 'otherActiveClass']},[_vm._v(_vm._s(item.humidity)+"%")])])])}),0)]),_vm._v(" "),_c('div',[_c('div',{staticClass:"bg"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"cableDuct_item2_title"},_vm._l((_vm.waterlevelcheck),function(item,i){return _c('div',{key:i},[_c('span',{},[_vm._v(_vm._s(item.device_name))]),_vm._v(" "),_c('span',{class:[item.waterlevel < 300 ? 'ActiveClass' : 'otherActiveClass']},[_vm._v(_vm._s(item.waterlevel)+"m")])])}),0)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('span'),_vm._v(" "),_c('div',{staticClass:"title_name"},[_vm._v("烟感监测")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('span'),_vm._v(" "),_c('div',{staticClass:"title_name"},[_vm._v("水浸监测")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('span'),_vm._v(" "),_c('div',{staticClass:"title_name"},[_vm._v("油池液位监测")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('span'),_vm._v(" "),_c('div',{staticClass:"title_name"},[_vm._v("油池油污监测")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('span'),_vm._v(" "),_c('div',{staticClass:"title_name"},[_vm._v("温湿度监测")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_c('span'),_vm._v(" "),_c('div',{staticClass:"title_name"},[_vm._v("水位监测")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_cableDuct_cableDuct = (esExports);
// CONCATENATED MODULE: ./src/pages/cableDuct/cableDuct.vue
function injectStyle (ssrContext) {
  __webpack_require__("g/X5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-133bb682"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  cableDuct_cableDuct,
  pages_cableDuct_cableDuct,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_cableDuct_cableDuct = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "g/X5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=14.358e9c6527a3bd32408b.js.map