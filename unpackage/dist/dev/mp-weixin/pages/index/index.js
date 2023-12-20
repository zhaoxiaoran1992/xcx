"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_text2 = common_vendor.resolveComponent("u-text");
  const _easycom_u_subsection2 = common_vendor.resolveComponent("u-subsection");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_icon2 + _easycom_u_navbar2 + _easycom_u_avatar2 + _easycom_u_button2 + _easycom_u_text2 + _easycom_u_subsection2 + _easycom_u_cell2 + _easycom_u_list_item2 + _easycom_u_list2 + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_avatar = () => "../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_text = () => "../../uni_modules/uview-plus/components/u-text/u-text.js";
const _easycom_u_subsection = () => "../../uni_modules/uview-plus/components/u-subsection/u-subsection.js";
const _easycom_u_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_list_item = () => "../../uni_modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../uni_modules/uview-plus/components/u-list/u-list.js";
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_navbar + _easycom_u_avatar + _easycom_u_button + _easycom_u_text + _easycom_u_subsection + _easycom_u_cell + _easycom_u_list_item + _easycom_u_list + _easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const tabbarData = common_vendor.ref(0);
    const curNow = common_vendor.ref(0);
    const scanLogin = () => {
      common_vendor.index.scanCode({
        success: async (res) => {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
        }
      });
    };
    const list = common_vendor.ref([
      {
        name: "已投诉"
      },
      {
        name: "处理中"
      },
      {
        name: "已处理"
      }
    ]);
    const sectionChange = (index) => {
      curNow.value = index;
    };
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    const redirectTo = (url) => {
      common_vendor.index.redirectTo({
        url
      });
    };
    const indexList = common_vendor.reactive([]);
    const urls = [
      "https://cdn.uviewui.com/uview/album/1.jpg",
      "https://cdn.uviewui.com/uview/album/2.jpg",
      "https://cdn.uviewui.com/uview/album/3.jpg",
      "https://cdn.uviewui.com/uview/album/4.jpg",
      "https://cdn.uviewui.com/uview/album/5.jpg",
      "https://cdn.uviewui.com/uview/album/6.jpg",
      "https://cdn.uviewui.com/uview/album/7.jpg",
      "https://cdn.uviewui.com/uview/album/8.jpg",
      "https://cdn.uviewui.com/uview/album/9.jpg",
      "https://cdn.uviewui.com/uview/album/10.jpg"
    ];
    const scrolltolower = () => {
      loadmore();
    };
    const loadmore = () => {
      for (let i = 0; i < 30; i++) {
        indexList.push({
          url: urls[common_vendor.index.$u.random(0, urls.length - 1)]
        });
      }
    };
    loadmore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(scanLogin),
        b: common_vendor.p({
          name: "scan",
          size: "20",
          bold: "true"
        }),
        c: common_vendor.p({
          title: "投诉维权",
          placeholder: "true"
        }),
        d: common_vendor.p({
          icon: "account-fill",
          fontSize: "30"
        }),
        e: common_vendor.o(($event) => redirectTo("/pages/complaint/complaint")),
        f: common_vendor.p({
          type: "primary",
          text: "点击去投诉",
          size: "mini",
          color: "green"
        }),
        g: common_vendor.p({
          text: "投诉维权指南"
        }),
        h: common_vendor.p({
          text: "去查看",
          color: "#c9c9c9",
          size: "12px"
        }),
        i: common_vendor.p({
          name: "arrow-right"
        }),
        j: common_vendor.o(($event) => navigateTo("/pages/guide/guide")),
        k: common_vendor.p({
          text: "有关部门公示"
        }),
        l: common_vendor.p({
          text: "去查看",
          color: "#c9c9c9",
          size: "12px"
        }),
        m: common_vendor.p({
          name: "arrow-right"
        }),
        n: common_vendor.o(($event) => navigateTo("/pages/department/department")),
        o: common_vendor.o(sectionChange),
        p: common_vendor.p({
          list: list.value,
          mode: "button",
          current: curNow.value
        }),
        q: common_vendor.f(indexList, (item, index, i0) => {
          return {
            a: "258cdf84-14-" + i0 + "," + ("258cdf84-13-" + i0),
            b: common_vendor.p({
              shape: "square",
              size: "35",
              src: item.url,
              customStyle: "margin: -3px 5px -3px 0"
            }),
            c: "258cdf84-13-" + i0 + "," + ("258cdf84-12-" + i0),
            d: common_vendor.p({
              title: `列表长度-${index + 1}`
            }),
            e: index,
            f: "258cdf84-12-" + i0 + ",258cdf84-11"
          };
        }),
        r: common_vendor.o(scrolltolower),
        s: common_vendor.p({
          text: "首页",
          icon: "home-fill"
        }),
        t: common_vendor.o(($event) => redirectTo("/pages/complaint/complaint")),
        v: common_vendor.p({
          text: "我要投诉",
          icon: "chat-fill"
        }),
        w: common_vendor.p({
          value: tabbarData.value,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhaoxiaoran/Documents/xcx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
