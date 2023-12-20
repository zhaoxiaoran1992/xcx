"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabbarData: 1,
      industry: [
        {
          text: "工程建设领域",
          value: "0"
        },
        {
          text: "非工程建设领域",
          value: "1"
        }
      ],
      hobby: [
        {
          text: "同意使用须知:",
          value: 0
        }
      ],
      // 表单数据
      formData: {
        name: "0",
        hobbys: []
      },
      rules: {
        hobbys: {
          rules: [
            {
              format: "array"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value.length < 1) {
                  callback("请勾选使用须知");
                }
                return true;
              }
            }
          ]
        }
      }
    };
  },
  methods: {
    navigateTo(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    redirectTo(url) {
      common_vendor.index.redirectTo({
        url
      });
    },
    /**
     * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
     * @param {String} name 字段名称
     * @param {String} value 表单域的值
     */
    // binddata(name,value){
    // 通过 input 事件设置表单指定 name 的值
    //   this.$refs.form.setValue(name, value)
    // },
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
        common_vendor.index.navigateTo({
          url: "../complaintForm/complaintForm?name=" + this.formData.name
        });
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  }
};
if (!Array) {
  const _component_uni_data_checkbox = common_vendor.resolveComponent("uni-data-checkbox");
  const _component_uni_forms_item = common_vendor.resolveComponent("uni-forms-item");
  const _component_uni_forms = common_vendor.resolveComponent("uni-forms");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_component_uni_data_checkbox + _component_uni_forms_item + _component_uni_forms + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_tabbar_item + _easycom_u_tabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.formData.name,
      localdata: $data.industry,
      selectedColor: "#1abc39"
    }),
    b: common_vendor.p({
      name: "name"
    }),
    c: common_vendor.o(($event) => $data.formData.hobbys = $event),
    d: common_vendor.p({
      multiple: true,
      localdata: $data.hobby,
      selectedTextColor: "#000",
      modelValue: $data.formData.hobbys
    }),
    e: common_vendor.o(($event) => $options.navigateTo("../provision/provision")),
    f: common_vendor.p({
      name: "hobbys"
    }),
    g: common_vendor.sr("form", "e51f3a6e-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    j: common_vendor.o(($event) => $options.redirectTo("/pages/index/index")),
    k: common_vendor.p({
      text: "首页",
      icon: "home-fill"
    }),
    l: common_vendor.p({
      text: "我要投诉",
      icon: "chat-fill"
    }),
    m: common_vendor.p({
      value: $data.tabbarData,
      fixed: true,
      placeholder: true,
      safeAreaInsetBottom: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/九江小程序2/pages/complaint/complaint.vue"]]);
wx.createPage(MiniProgramPage);
