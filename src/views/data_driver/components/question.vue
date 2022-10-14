<template>
  <div style="margin-left: 10px; margin-top: 10px">
    <div style="margin-bottom: 10px">
      {{ title }}
    </div>
    <template v-for="item in options">
      <el-checkbox
        v-model="check_result"
        v-if="item.item_type == 'checkbox'"
        :label="item.term_id"
        :key="item.term_id"
        @change="changeOption(item.term_id)"
        >{{ item.zh_cn }}</el-checkbox
      >
      <el-radio
        v-model="check_result"
        v-if="item.item_type == 'radio'"
        :label="item.term_id"
        :key="item.term_id"
        >{{ item.zh_cn }}</el-radio
      >
    </template>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      check_result: [],
    };
  },
  props: {
    title: {
      type: String,
      default: "题目",
    },
    column_name: {
      type: String,
      default: "result_cd",
    },
    options: {
      type: Array,
      default: function () {
        return [
          {
            term_id: "1",
            item_type: "checkbox",
            zh_cn: "是",
          },
          {
            term_id: "2",
            item_type: "checkbox",
            zh_cn: "否",
          },
          {
            term_id: "3",
            item_type: "radio",
            zh_cn: "不知道",
          },
          {
            term_id: "4",
            item_type: "radio",
            zh_cn: "未设置",
          },
          {
            term_id: "5",
            item_type: "radio",
            zh_cn: "其他",
          },
        ];
      },
    },
  },
  created() {},
  watch: {
    check_result: function (newValue, oldValue) {
        console.log(newValue)
    },
  },
  methods: {
    changeOption(term_id) {
      if (!Array.isArray(this.check_result)) {
        this.check_result = [term_id];
      }
    },
  },
};
</script>
  <style scoped>
</style>
  