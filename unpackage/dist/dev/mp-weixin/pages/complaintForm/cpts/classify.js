"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      name: "",
      placeholder: "请选择",
      type: "center",
      msgType: "success",
      messageText: "这是一条成功提示",
      value: ""
    };
  },
  methods: {
    change() {
    },
    toggle(type) {
      this.type = type;
      this.$refs.popup.open(type);
    }
  }
};
if (!Array) {
  const _component_uni_easyinput = common_vendor.resolveComponent("uni-easyinput");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_uni_easyinput + _component_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toggle("bottom")),
    b: common_vendor.o(($event) => $data.name = $event),
    c: common_vendor.p({
      inputBorder: false,
      placeholder: $data.placeholder,
      modelValue: $data.name
    }),
    d: common_vendor.sr("popup", "2375e920-1"),
    e: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhaoxiaoran/Documents/xcx/pages/complaintForm/cpts/classify.vue"]]);
wx.createComponent(Component);
