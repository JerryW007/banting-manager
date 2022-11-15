<template>
  <div>
    <div
      v-for="qKey in keys"
      :key="qKey"
      style="margin-right: 20px; margin-bottom: 10px"
    >
      <question
        :question="questions[qKey]"
        :questions="questions"
        v-if="qKey in questions && showMonitor(questions[qKey])"
      />
    </div>
  </div>
</template>
<script>
import question from "./components/question";
export default {
  components: {
    question,
  },
  data() {
    return {
      questions: {
        gender_cd: {
          question_type: "list",
          title: "性别",
          column_key: "gender_cd",
          column_value: "",
          options: [
            {
              term_id: "gender_cd_1",
              item_type: "radio",
              zh_cn: "男",
              check_status: false,
            },
            {
              term_id: "gender_cd_2",
              item_type: "radio",
              zh_cn: "女",
              check_status: false,
            },
            {
              term_id: "gender_cd_99",
              item_type: "radio",
              zh_cn: "其它",
              check_status: false,
            },
          ],
        },
        init_diagnosis_date: {
          question_type: "datetime",
          title: "该病首次确诊日期",
          column_key: "init_diagnosis_date",
          column_value: "",
        },
        mh_category_cd_1: {
          question_type: "list",
          title: "既往史项目名称",
          column_key: "mh_category_cd_1",
          column_value: "",
          options: [
            {
              term_id: "mh_term_cd_43",
              item_type: "checkbox",
              zh_cn: "化疗",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_52",
              item_type: "checkbox",
              zh_cn: "免疫治疗（ATG等）",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_45",
              item_type: "checkbox",
              zh_cn: "放疗",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_67",
              item_type: "checkbox",
              zh_cn: "靶向治疗（TKI、BTK抑制剂、BCL-2抑制剂等）",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_46",
              item_type: "checkbox",
              zh_cn: "CAR-T",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_68",
              item_type: "checkbox",
              zh_cn: "移植",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_48",
              item_type: "radio",
              zh_cn: "无",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_001",
              item_type: "radio",
              zh_cn: "未知",
              check_status: false,
              show: [],
            },
          ],
        },
        mh_sub_category_cd_1: {
          question_type: "list",
          title: "既往史项目名称",
          column_key: "mh_sub_category_cd_1",
          column_value: "",
          options: [
            {
              term_id: "mh_term_cd_53",
              item_type: "checkbox",
              zh_cn: "贫血",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_54",
              item_type: "checkbox",
              zh_cn: "出血倾向",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_55",
              item_type: "checkbox",
              zh_cn: "原因不明的发热",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_56",
              item_type: "checkbox",
              zh_cn: "黄疸",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_57",
              item_type: "checkbox",
              zh_cn: "淋巴结肿大",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_58",
              item_type: "checkbox",
              zh_cn: "肝/脾肿大",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_9",
              item_type: "checkbox",
              zh_cn: "口腔感染",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_13",
              item_type: "checkbox",
              zh_cn: "皮肤病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_4",
              item_type: "checkbox",
              zh_cn: "肝炎",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_5",
              item_type: "checkbox",
              zh_cn: "结核病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_6",
              item_type: "checkbox",
              zh_cn: "溃疡性结肠炎",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_7",
              item_type: "checkbox",
              zh_cn: "克罗恩病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_8",
              item_type: "checkbox",
              zh_cn: "精神病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_10",
              item_type: "checkbox",
              zh_cn: "肛周疾病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_11",
              item_type: "checkbox",
              zh_cn: "耳鼻喉疾病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_12",
              item_type: "checkbox",
              zh_cn: "眼部疾病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_1",
              item_type: "checkbox",
              zh_cn: "高血压",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_2",
              item_type: "checkbox",
              zh_cn: "糖尿病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_3",
              item_type: "checkbox",
              zh_cn: "冠心病",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_991",
              item_type: "checkbox",
              zh_cn: "其他既往疾病",
              check_status: false,
              show: [],
              other_key: "mh_term_other",
            },
            {
              term_id: "mh_term_cd_14",
              item_type: "radio",
              zh_cn: "无既往病史",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_002",
              item_type: "radio",
              zh_cn: "未知",
              check_status: false,
              show: [],
            },
          ],
        },
        mh_sub_category_cd_2: {
          question_type: "list",
          title: "既往史项目名称",
          column_key: "mh_sub_category_cd_2",
          column_value: "",
          options: [
            {
              term_id: "mh_term_cd_59",
              item_type: "checkbox",
              zh_cn: "肝脏手术",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_15",
              item_type: "checkbox",
              zh_cn: "切脾手术",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_992",
              item_type: "checkbox",
              zh_cn: "其它手术",
              check_status: false,
              show: [],
              other_key: "mh_term_other",
            },
            {
              term_id: "mh_term_cd_16",
              item_type: "radio",
              zh_cn: "无既往手术史",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_003",
              item_type: "radio",
              zh_cn: "未知",
              check_status: false,
              show: [],
            },
          ],
        },
        mh_sub_category_cd_4: {
          question_type: "list",
          title: "既往史项目名称",
          column_key: "mh_sub_category_cd_4",
          column_value: "",
          options: [
            {
              term_id: "mh_term_cd_17",
              item_type: "checkbox",
              zh_cn: "青霉素类",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_18",
              item_type: "checkbox",
              zh_cn: "头孢类",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_19",
              item_type: "checkbox",
              zh_cn: "磺胺类",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_20",
              item_type: "checkbox",
              zh_cn: "解热镇痛类（阿司匹林等）",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_21",
              item_type: "checkbox",
              zh_cn: "镇静类（苯巴比妥等）",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_22",
              item_type: "checkbox",
              zh_cn: "血清制剂",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_23",
              item_type: "checkbox",
              zh_cn: "中草药",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_994",
              item_type: "checkbox",
              zh_cn: "其它药物过敏",
              check_status: false,
              show: [],
              other_key: "mh_term_other",
            },
            {
              term_id: "mh_term_cd_24",
              item_type: "radio",
              zh_cn: "无药物过敏史",
              check_status: false,
              show: [],
            },
            {
              term_id: "mh_term_cd_005",
              item_type: "radio",
              zh_cn: "未知",
              check_status: false,
              show: [],
            },
          ],
        },
        mh_sub_category_cd_3: {
          question_type: "list",
          title: "既往史项目名称",
          column_key: "mh_sub_category_cd_3",
          column_value: "",
          options: [
            {
              term_id: "mh_term_cd_25",
              item_type: "checkbox",
              zh_cn: "膀胱癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_69",
              item_type: "checkbox",
              zh_cn: "急性髓系白血病（AML）",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_62",
              item_type: "checkbox",
              zh_cn: "慢性髓性白血病(CML)",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_61",
              item_type: "checkbox",
              zh_cn: "慢性淋巴细胞白血病(CLL)",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_70",
              item_type: "checkbox",
              zh_cn: "小淋巴细胞淋巴瘤（SLL）",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_63",
              item_type: "checkbox",
              zh_cn: "慢性粒单核细胞白血病（CMML）",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_64",
              item_type: "checkbox",
              zh_cn: "骨髓增殖性肿瘤（MPN）",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_65",
              item_type: "checkbox",
              zh_cn: "骨髓增生异常综合征（MDS）",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_66",
              item_type: "checkbox",
              zh_cn: "其他血液癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_26",
              item_type: "checkbox",
              zh_cn: "脑和脊髓癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_27",
              item_type: "checkbox",
              zh_cn: "乳腺癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_28",
              item_type: "checkbox",
              zh_cn: "乳腺原位癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_31",
              item_type: "checkbox",
              zh_cn: "结直肠癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_32",
              item_type: "checkbox",
              zh_cn: "肾癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_33",
              item_type: "checkbox",
              zh_cn: "肺癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_35",
              item_type: "checkbox",
              zh_cn: "胰腺癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_37",
              item_type: "checkbox",
              zh_cn: "皮肤黑色素瘤",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_38",
              item_type: "checkbox",
              zh_cn: "皮肤基底细胞癌或皮肤局部鳞状细胞癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_40",
              item_type: "checkbox",
              zh_cn: "甲状腺癌",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_34",
              item_type: "checkbox",
              zh_cn: "卵巢癌",
              check_status: false,
              show: [{ gender_cd: "gender_cd_2" }],
            },
            {
              term_id: "mh_term_cd_41",
              item_type: "checkbox",
              zh_cn: "子宫癌",
              check_status: false,
              show: [{ gender_cd: "gender_cd_2" }],
            },
            {
              term_id: "mh_term_cd_29",
              item_type: "checkbox",
              zh_cn: "子宫颈癌",
              check_status: false,
              show: [{ gender_cd: "gender_cd_2" }],
            },
            {
              term_id: "mh_term_cd_30",
              item_type: "checkbox",
              zh_cn: "子宫颈原位癌",
              check_status: false,
              show: [{ gender_cd: "gender_cd_2" }],
            },
            {
              term_id: "mh_term_cd_993",
              item_type: "checkbox",
              zh_cn: "其它恶性肿瘤",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
              other_key: "mh_term_other",
            },
            {
              term_id: "mh_term_cd_42",
              item_type: "radio",
              zh_cn: "无既往恶性肿瘤史",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_004",
              item_type: "radio",
              zh_cn: "未知",
              check_status: false,
              show: [
                { gender_cd: "gender_cd_2" },
                { gender_cd: "gender_cd_1" },
              ],
            },
            {
              term_id: "mh_term_cd_36",
              item_type: "checkbox",
              zh_cn: "前列腺癌",
              check_status: false,
              show: [{ gender_cd: "gender_cd_1" }],
            },
            {
              term_id: "mh_term_cd_39",
              item_type: "checkbox",
              zh_cn: "睾丸癌",
              check_status: false,
              show: [{ gender_cd: "gender_cd_1" }],
            },
          ],
        },
        condition_term_cd: {
          question_type: "list",
          title: "医学状态术语",
          column_key: "condition_term_cd",
          column_value: "",
          options: {
            condition_loc_cd_8: [
              {
                term_id: "condition_term_cd_99",
                item_type: "checkbox",
                zh_cn: "其它",
                check_status: false,
                show: [],
                other_key: "condition_term_other",
              },
              {
                term_id: "condition_term_cd_38",
                item_type: "radio",
                zh_cn: "无",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_6: [
              {
                term_id: "condition_term_cd_17",
                item_type: "checkbox",
                zh_cn: "糖尿病",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_1: [
              {
                term_id: "condition_term_cd_21",
                item_type: "checkbox",
                zh_cn: "心肌梗死",
                check_status: false,
                show: [],
              },
              {
                term_id: "condition_term_cd_1",
                item_type: "checkbox",
                zh_cn: "充血性心力衰竭",
                check_status: false,
                show: [],
              },
              {
                term_id: "condition_term_cd_39",
                item_type: "checkbox",
                zh_cn: "周围血管疾病",
                check_status: false,
                show: [],
              },
              {
                term_id: "condition_term_cd_24",
                item_type: "checkbox",
                zh_cn: "脑血管疾病",
                check_status: false,
                show: [],
              },
              {
                term_id: "condition_term_cd_45",
                item_type: "checkbox",
                zh_cn: "偏瘫",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_7: [
              {
                term_id: "condition_term_cd_40",
                item_type: "checkbox",
                zh_cn: "痴呆症",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_2: [
              {
                term_id: "condition_term_cd_41",
                item_type: "checkbox",
                zh_cn: "慢性肺部疾病",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_9: [
              {
                term_id: "condition_term_cd_42",
                item_type: "checkbox",
                zh_cn: "结缔组织疾病",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_4: [
              {
                term_id: "condition_term_cd_43",
                item_type: "checkbox",
                zh_cn: "溃疡病",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_3: [
              {
                term_id: "condition_term_cd_44",
                item_type: "checkbox",
                zh_cn: "肝脏疾病",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_5: [
              {
                term_id: "condition_term_cd_46",
                item_type: "checkbox",
                zh_cn: "中/重度肾脏疾病",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_12: [
              {
                term_id: "condition_term_cd_47",
                item_type: "checkbox",
                zh_cn: "肿瘤",
                check_status: false,
                show: [],
              },
              {
                term_id: "condition_term_cd_48",
                item_type: "checkbox",
                zh_cn: "淋巴瘤",
                check_status: false,
                show: [],
              },
              {
                term_id: "condition_term_cd_49",
                item_type: "checkbox",
                zh_cn: "转移性肿瘤",
                check_status: false,
                show: [],
              },
            ],
            condition_loc_cd_10: [
              {
                term_id: "condition_term_cd_50",
                item_type: "checkbox",
                zh_cn: "获得性免疫缺陷综合征",
                check_status: false,
                show: [],
              },
            ],
          },
        },
      },
      keys: [
        "gender_cd",
        "init_diagnosis_date",
        "mh_category_cd_1",
        "mh_sub_category_cd_1",
        "mh_sub_category_cd_2",
        "mh_sub_category_cd_4",
        "mh_sub_category_cd_3",
        "condition_term_cd",
      ],
    };
  },
  created() {},
  watch: {},
  methods: {
    showMonitor(questionItem) {
      let match = true;
      if (!("show" in questionItem) || questionItem.show.length == 0) {
        return true;
      }
      for (let show_conditions of questionItem.show) {
        for (let key of Object.keys(show_conditions)) {
          if (
            !(key in this.questions) ||
            !this.questions[key].column_value.includes(show_conditions[key])
          ) {
            match = false;
          }
        }
        if (match) {
          return true;
        }
        match = true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
</style>
