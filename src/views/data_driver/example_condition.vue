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
      keys: [
        "condition_loc_cd_1",
        "condition_loc_cd_2",
        "condition_loc_cd_3",
        "condition_loc_cd_4",
        "condition_loc_cd_5",
        "condition_loc_cd_6",
        "condition_loc_cd_7",
        "condition_term_cd",
        "mh_sub_category_cd_1",
        "mh_sub_category_cd_2",
        "mh_sub_category_cd_3",
        "mh_sub_category_cd_4",
      ],
      questions: {
        condition_term_cd: {
          question_type: "list",
          title: "医学状态术语",
          column_key: "condition_term_cd",
          column_value: "",
          options: {
            condition_loc_cd_8: [
              {
                term_id: "condition_term_cd_99",
                item_type: "radio",
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
