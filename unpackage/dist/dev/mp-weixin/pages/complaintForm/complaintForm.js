"use strict";
const common_vendor = require("../../common/vendor.js");
const classify = () => "./cpts/classify.js";
const _sfc_main = {
  components: { classify },
  data() {
    return {
      dd: true,
      dayjs: common_vendor.dayjs,
      formData: {
        name: ""
      },
      dataTree: [
        {
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0",
          children: [
            {
              text: "2.1班",
              value: "2-1"
            },
            {
              text: "2.2班",
              value: "2-2"
            }
          ]
        },
        {
          text: "三年级",
          value: "3-0",
          disable: true
        }
      ],
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
    onchange(e) {
      console.log("onchange:", e);
    },
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  },
  onLoad: function(option) {
    console.log(option.name);
    this.dd = option.name == 0 ? true : false;
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _component_uni_data_picker = common_vendor.resolveComponent("uni-data-picker");
  const _component_uni_datetime_picker = common_vendor.resolveComponent("uni-datetime-picker");
  const _component_uni_group = common_vendor.resolveComponent("uni-group");
  const _component_classify = common_vendor.resolveComponent("classify");
  const _component_uni_file_picker = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_input2 + _easycom_u_form_item2 + _component_uni_data_picker + _component_uni_datetime_picker + _component_uni_group + _component_classify + _component_uni_file_picker + _easycom_u_form2)();
}
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.formData.name = $event),
    b: common_vendor.p({
      border: "none",
      placeholder: "请输入反映人姓名",
      clearable: true,
      modelValue: $data.formData.name
    }),
    c: common_vendor.p({
      label: "反映人姓名",
      required: true,
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.name = $event),
    e: common_vendor.p({
      type: "number",
      border: "none",
      placeholder: "请输入反映人联系方式",
      maxlength: "13",
      modelValue: $data.formData.name
    }),
    f: common_vendor.p({
      label: "反映人联系方式",
      required: true,
      name: "name"
    }),
    g: common_vendor.o(($event) => $data.formData.name = $event),
    h: common_vendor.p({
      type: "idcard",
      border: "none",
      placeholder: "请输入反映人身份证号",
      modelValue: $data.formData.name
    }),
    i: common_vendor.p({
      label: "反映人身份证号",
      required: true,
      name: "name"
    }),
    j: common_vendor.o($options.onchange),
    k: common_vendor.o(($event) => $data.formData.name = $event),
    l: common_vendor.p({
      border: "none",
      placeholder: "请选择事发地",
      ["popup-title"]: "请选择事发地",
      localdata: $data.dataTree,
      modelValue: $data.formData.name
    }),
    m: common_vendor.p({
      label: "事发地",
      required: true,
      name: "name"
    }),
    n: common_vendor.o(($event) => $data.formData.name = $event),
    o: common_vendor.p({
      solt: "default",
      border: "none",
      placeholder: "请选择事发时间",
      modelValue: $data.formData.name
    }),
    p: common_vendor.o($options.onchange),
    q: common_vendor.o(($event) => $data.formData.name = $event),
    r: common_vendor.p({
      type: "date",
      end: $data.dayjs().format("YYYY-MM-DD"),
      border: false,
      modelValue: $data.formData.name
    }),
    s: common_vendor.p({
      label: "事发时间",
      required: true,
      name: "name"
    }),
    t: common_vendor.o(($event) => $data.formData.name = $event),
    v: common_vendor.p({
      type: "digit",
      border: "none",
      placeholder: "请输入信访涉及人数",
      modelValue: $data.formData.name
    }),
    w: common_vendor.p({
      label: "信访涉及人数",
      required: true,
      name: "name"
    }),
    x: common_vendor.o(($event) => $data.formData.name = $event),
    y: common_vendor.p({
      border: "none",
      placeholder: "请输入投诉单位名称",
      modelValue: $data.formData.name
    }),
    z: common_vendor.p({
      label: "投诉单位名称",
      required: true,
      name: "name"
    }),
    A: common_vendor.o(($event) => $data.formData.name = $event),
    B: common_vendor.p({
      border: "none",
      placeholder: "请输入单位负责人姓名",
      modelValue: $data.formData.name
    }),
    C: common_vendor.p({
      label: "单位负责人姓名",
      required: true,
      name: "name"
    }),
    D: common_vendor.o(($event) => $data.formData.name = $event),
    E: common_vendor.p({
      border: "none",
      placeholder: "请输入单位负责人联系方式",
      maxlength: "13",
      modelValue: $data.formData.name
    }),
    F: common_vendor.p({
      label: "单位负责人联系方式",
      required: true,
      name: "name"
    }),
    G: common_vendor.o(($event) => $data.formData.name = $event),
    H: common_vendor.p({
      border: "none",
      placeholder: "请输入单位地址",
      modelValue: $data.formData.name
    }),
    I: common_vendor.p({
      label: "单位地址",
      required: true,
      name: "name"
    }),
    J: common_vendor.o($options.onchange),
    K: common_vendor.o(($event) => $data.formData.name = $event),
    L: common_vendor.p({
      border: "none",
      placeholder: "请选择单位行业分类",
      ["popup-title"]: "请选择单位行业分类",
      localdata: $data.dataTree,
      modelValue: $data.formData.name
    }),
    M: common_vendor.p({
      label: "单位行业分类",
      required: true,
      name: "name"
    }),
    N: $data.dd
  }, $data.dd ? {
    O: common_vendor.o($options.onchange),
    P: common_vendor.o(($event) => $data.formData.name = $event),
    Q: common_vendor.p({
      border: "none",
      placeholder: "请选择涉及项目名称",
      ["popup-title"]: "请选择涉及项目名称",
      localdata: $data.dataTree,
      modelValue: $data.formData.name
    }),
    R: common_vendor.p({
      label: "涉及项目名称",
      required: true,
      name: "name"
    }),
    S: common_vendor.o($options.onchange),
    T: common_vendor.o(($event) => $data.formData.name = $event),
    U: common_vendor.p({
      border: "none",
      placeholder: "请选择项目投资分类",
      ["popup-title"]: "请选择项目投资分类",
      localdata: $data.dataTree,
      modelValue: $data.formData.name
    }),
    V: common_vendor.p({
      label: "项目投资分类",
      required: true,
      name: "name"
    }),
    W: common_vendor.o($options.onchange),
    X: common_vendor.o(($event) => $data.formData.name = $event),
    Y: common_vendor.p({
      border: "none",
      placeholder: "请选择项目主管单位分类",
      ["popup-title"]: "请选择项目主管单位分类",
      localdata: $data.dataTree,
      modelValue: $data.formData.name
    }),
    Z: common_vendor.p({
      label: "项目主管单位分类",
      required: true,
      name: "name"
    }),
    aa: common_vendor.p({
      title: "工程建设领域额外填写项",
      ["margin-top"]: "20"
    })
  } : {}, {
    ab: $data.dd
  }, $data.dd ? {
    ac: common_vendor.p({
      label: "投诉分类",
      required: true,
      name: "name"
    }),
    ad: common_vendor.o(($event) => $data.formData.name = $event),
    ae: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "请输入基本情况摘要",
      modelValue: $data.formData.name
    }),
    af: common_vendor.p({
      label: "基本情况摘要",
      required: true,
      name: "name"
    }),
    ag: common_vendor.p({
      limit: "9",
      ["file-mediatype"]: "video",
      title: "最多选择9个视频"
    }),
    ah: common_vendor.p({
      label: "投诉附件",
      required: true,
      name: "name"
    }),
    ai: common_vendor.p({
      title: "投诉内容",
      ["margin-top"]: "20"
    })
  } : {}, {
    aj: common_vendor.sr("uForm", "03e1cdf8-0"),
    ak: common_vendor.p({
      labelPosition: "left",
      model: $data.formData,
      rules: $data.rules,
      labelWidth: "120px",
      borderBottom: true
    }),
    al: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhaoxiaoran/Documents/xcx/pages/complaintForm/complaintForm.vue"]]);
wx.createPage(MiniProgramPage);
