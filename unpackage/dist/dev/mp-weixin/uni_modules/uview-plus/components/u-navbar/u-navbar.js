"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uNavbar_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
require("../../libs/config/props.js");
require("../../libs/config/config.js");
require("../../libs/config/props/actionSheet.js");
require("../../libs/config/props/album.js");
require("../../libs/config/props/alert.js");
require("../../libs/config/props/avatar.js");
require("../../libs/config/props/avatarGroup.js");
require("../../libs/config/props/backtop.js");
require("../../libs/config/props/badge.js");
require("../../libs/config/props/button.js");
require("../../libs/config/props/calendar.js");
require("../../libs/config/props/carKeyboard.js");
require("../../libs/config/props/cell.js");
require("../../libs/config/props/cellGroup.js");
require("../../libs/config/props/checkbox.js");
require("../../libs/config/props/checkboxGroup.js");
require("../../libs/config/props/circleProgress.js");
require("../../libs/config/props/code.js");
require("../../libs/config/props/codeInput.js");
require("../../libs/config/props/col.js");
require("../../libs/config/props/collapse.js");
require("../../libs/config/props/collapseItem.js");
require("../../libs/config/props/columnNotice.js");
require("../../libs/config/props/countDown.js");
require("../../libs/config/props/countTo.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/divider.js");
require("../../libs/config/props/empty.js");
require("../../libs/config/props/form.js");
require("../../libs/config/props/formItem.js");
require("../../libs/config/props/gap.js");
require("../../libs/config/props/grid.js");
require("../../libs/config/props/gridItem.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/image.js");
require("../../libs/config/props/indexAnchor.js");
require("../../libs/config/props/indexList.js");
require("../../libs/config/props/input.js");
require("../../libs/config/props/keyboard.js");
require("../../libs/config/props/line.js");
require("../../libs/config/props/lineProgress.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/list.js");
require("../../libs/config/props/listItem.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/loadingPage.js");
require("../../libs/config/props/loadmore.js");
require("../../libs/config/props/modal.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
require("../../libs/config/props/noNetwork.js");
require("../../libs/config/props/noticeBar.js");
require("../../libs/config/props/notify.js");
require("../../libs/config/props/numberBox.js");
require("../../libs/config/props/numberKeyboard.js");
require("../../libs/config/props/overlay.js");
require("../../libs/config/props/parse.js");
require("../../libs/config/props/picker.js");
require("../../libs/config/props/popup.js");
require("../../libs/config/props/radio.js");
require("../../libs/config/props/radioGroup.js");
require("../../libs/config/props/rate.js");
require("../../libs/config/props/readMore.js");
require("../../libs/config/props/row.js");
require("../../libs/config/props/rowNotice.js");
require("../../libs/config/props/scrollList.js");
require("../../libs/config/props/search.js");
require("../../libs/config/props/section.js");
require("../../libs/config/props/skeleton.js");
require("../../libs/config/props/slider.js");
require("../../libs/config/props/statusBar.js");
require("../../libs/config/props/steps.js");
require("../../libs/config/props/stepsItem.js");
require("../../libs/config/props/sticky.js");
require("../../libs/config/props/subsection.js");
require("../../libs/config/props/swipeAction.js");
require("../../libs/config/props/swipeActionItem.js");
require("../../libs/config/props/swiper.js");
require("../../libs/config/props/swipterIndicator.js");
require("../../libs/config/props/switch.js");
require("../../libs/config/props/tabbar.js");
require("../../libs/config/props/tabbarItem.js");
require("../../libs/config/props/tabs.js");
require("../../libs/config/props/tag.js");
require("../../libs/config/props/text.js");
require("../../libs/config/props/textarea.js");
require("../../libs/config/props/toast.js");
require("../../libs/config/props/toolbar.js");
require("../../libs/config/props/tooltip.js");
require("../../libs/config/props/transition.js");
require("../../libs/config/props/upload.js");
const _sfc_main = {
  name: "u-navbar",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uNavbar_props.props],
  data() {
    return {};
  },
  emits: ["leftClick", "rightClick"],
  methods: {
    // 点击左侧区域
    leftClick() {
      this.$emit("leftClick");
      if (this.autoBack) {
        common_vendor.index.navigateBack();
      }
    },
    // 点击右侧区域
    rightClick() {
      this.$emit("rightClick");
    }
  }
};
if (!Array) {
  const _easycom_u_status_bar2 = common_vendor.resolveComponent("u-status-bar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_status_bar2 + _easycom_u_icon2)();
}
const _easycom_u_status_bar = () => "../u-status-bar/u-status-bar.js";
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_status_bar + _easycom_u_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.fixed && _ctx.placeholder
  }, _ctx.fixed && _ctx.placeholder ? {
    b: _ctx.$u.addUnit(_ctx.$u.getPx(_ctx.height) + _ctx.$u.sys().statusBarHeight, "px")
  } : {}, {
    c: _ctx.safeAreaInsetTop
  }, _ctx.safeAreaInsetTop ? {
    d: common_vendor.p({
      bgColor: _ctx.bgColor
    })
  } : {}, {
    e: _ctx.leftIcon
  }, _ctx.leftIcon ? {
    f: common_vendor.p({
      name: _ctx.leftIcon,
      size: _ctx.leftIconSize,
      color: _ctx.leftIconColor
    })
  } : {}, {
    g: _ctx.leftText
  }, _ctx.leftText ? {
    h: common_vendor.t(_ctx.leftText),
    i: _ctx.leftIconColor
  } : {}, {
    j: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args)),
    k: common_vendor.t(_ctx.title),
    l: common_vendor.s({
      width: _ctx.$u.addUnit(_ctx.titleWidth)
    }),
    m: common_vendor.s(_ctx.$u.addStyle(_ctx.titleStyle)),
    n: _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText
  }, _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? common_vendor.e({
    o: _ctx.rightIcon
  }, _ctx.rightIcon ? {
    p: common_vendor.p({
      name: _ctx.rightIcon,
      size: "20"
    })
  } : {}, {
    q: _ctx.rightText
  }, _ctx.rightText ? {
    r: common_vendor.t(_ctx.rightText)
  } : {}, {
    s: common_vendor.o((...args) => $options.rightClick && $options.rightClick(...args))
  }) : {}, {
    t: common_vendor.n(_ctx.border && "u-border-bottom"),
    v: _ctx.$u.addUnit(_ctx.height),
    w: _ctx.bgColor,
    x: common_vendor.n(_ctx.fixed && "u-navbar--fixed")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f631659b"], ["__file", "D:/九江小程序2/uni_modules/uview-plus/components/u-navbar/u-navbar.vue"]]);
wx.createComponent(Component);
