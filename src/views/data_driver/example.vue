<template>
  <div>
    <div v-for='questionItem in questions' :key='questionItem.column_key' style=" margin-right:20px; margin-bottom:10px;">
      <question :question='questionItem' :questions="questions" v-if='showMonitor(questionItem)' />
    </div>
  </div>
</template>
<script>
import question from './components/question';
export default {
  components: {
    question,
  },
  data() {
    return {
      questions: {
        init_diagnose_date: {
          title: '确诊日期',
          column_value: '',
          column_key: 'init_diagnose_date',
          question_type: 'datetime',
        },
        reason: {
          title: '原因',
          column_value: '',
          column_key: 'reason',
          question_type: 'String',
        },
        mh_term_cd: {
          title: '既往史',
          column_value: '',
          column_key: 'mh_term_cd',
          question_type: 'list',
          options: [
            {
              term_id: '1',
              item_type: 'checkbox',
              zh_cn: 'AAA',
              check_status: false,
            },
            {
              term_id: '2',
              item_type: 'checkbox',
              zh_cn: 'CCC',
              check_status: false,
            },
            {
              term_id: '3',
              item_type: 'radio',
              zh_cn: '不知道AACC',
              check_status: false,
            },
          ],
        },
        category_cd: {
          show: [{ mh_term_cd: '1' }],
          title: '手术史',
          column_value: '',
          column_key: 'category_cd',
          question_type: 'list',
          options: [
            {
              term_id: '1',
              item_type: 'checkbox',
              zh_cn: '是',
              check_status: false,
              show:[{
                mh_term_cd: "2"
              }]
            },
            {
              term_id: '2',
              item_type: 'checkbox',
              zh_cn: '否',
              check_status: false,
            },
            {
              term_id: '3',
              item_type: 'radio',
              zh_cn: '不知道',
              check_status: false,
            },
            {
              term_id: '4',
              item_type: 'radio',
              zh_cn: '未设置',
              check_status: false,
            },
            {
              term_id: '5',
              item_type: 'radio',
              zh_cn: '其他',
              check_status: false,
              other_key: 'visit_reason_other',
            },
          ],
        },
      },
    };
  },
  created() {},
  watch: {},
  methods: {
    showMonitor(questionItem) {
      var match = true;
      if (!('show' in questionItem)) {
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
      }
      return false;
    },
  },
};
</script>
<style scoped>
</style>
