"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_radio2 + _easycom_u_radio_group2 + _easycom_u_form_item2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_button2 + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_radio = () => "../../uni_modules/uview-plus/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../uni_modules/uview-plus/components/u-radio-group/u-radio-group.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_checkbox = () => "../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_radio + _easycom_u_radio_group + _easycom_u_form_item + _easycom_u_checkbox + _easycom_u_checkbox_group + common_vendor.unref(uForm) + _easycom_u_button + _easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "complaint",
  setup(__props) {
    const tabbarData = common_vendor.ref(1);
    const uForm2 = common_vendor.ref();
    const userInfo = common_vendor.reactive({
      name: "0"
    });
    const rules = common_vendor.reactive({
      "userInfo.name": {
        type: "string",
        required: true,
        message: "请填写姓名",
        trigger: ["blur", "change"]
      },
      "userInfo.sex": {
        type: "string",
        max: 1,
        required: true,
        message: "请选择男或女",
        trigger: ["blur", "change"]
      }
    });
    const checkboxValue1 = common_vendor.ref([]);
    const redirectTo = (url) => {
      common_vendor.index.redirectTo({
        url
      });
    };
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    console.log("uni======>", common_vendor.index);
    const submit = () => {
      common_vendor.index.navigateTo({
        url: "../complaintForm/complaintForm?name=" + userInfo.name
      });
      uForm2.value.validate().then((res) => {
        common_vendor.index.$u.toast("校验通过");
        common_vendor.index.navigateTo({
          url: "../complaintForm/complaintForm?name=" + userInfo.name
        });
      }).catch((errors) => {
        common_vendor.index.$u.toast("校验失败");
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          shape: "circle",
          label: "工程建设领域",
          name: "0",
          labelSize: "12px"
        }),
        b: common_vendor.p({
          shape: "circle",
          label: "非工程建设领域",
          name: "1",
          labelSize: "12px"
        }),
        c: common_vendor.o(($event) => userInfo.name = $event),
        d: common_vendor.p({
          placement: "column",
          size: "14px",
          modelValue: userInfo.name
        }),
        e: common_vendor.sr("item1", "340cd930-1,340cd930-0"),
        f: common_vendor.p({
          prop: "userInfo.name",
          borderBottom: true
        }),
        g: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: "同意使用须知",
          name: "0"
        }),
        h: common_vendor.o(($event) => checkboxValue1.value = $event),
        i: common_vendor.p({
          placement: "column",
          modelValue: checkboxValue1.value
        }),
        j: common_vendor.o(($event) => navigateTo("../provision/provision")),
        k: common_vendor.sr("item1", "340cd930-5,340cd930-0"),
        l: common_vendor.p({
          prop: "userInfo.name",
          borderBottom: true
        }),
        m: common_vendor.sr(uForm2, "340cd930-0", {
          "k": "uForm"
        }),
        n: common_vendor.p({
          labelPosition: "left",
          model: userInfo,
          rules
        }),
        o: common_vendor.o(submit),
        p: common_vendor.o(($event) => redirectTo("/pages/index/index")),
        q: common_vendor.p({
          text: "首页",
          icon: "home-fill"
        }),
        r: common_vendor.p({
          text: "我要投诉",
          icon: "chat-fill"
        }),
        s: common_vendor.p({
          value: tabbarData.value,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhaoxiaoran/Documents/xcx/pages/complaint/complaint.vue"]]);
wx.createPage(MiniProgramPage);
