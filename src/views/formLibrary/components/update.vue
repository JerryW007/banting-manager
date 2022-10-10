<template>
  <el-dialog
    :visible.sync="open"
    title="修改表单信息"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 15px">
      <disease-select v-model="disease_id" :tagType="diseaseSelectType" style ="margin-right:20px" :title="diseaseSelectTitle"/>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">排序:</span>
      <el-input v-model="row.project_term_id" style="margin-left: 78px;width:29%" >{{row.project_term_id}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">表单级别:</span>
      <el-input v-model="row.form_level" style="margin-left: 50px;width:29%" >{{row.form_level}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">父级表单:</span>
      <el-input v-model="row.parent_form_id" style="margin-left: 50px;width:29%" >{{row.parent_form_id}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">表单类型:</span>
      <el-input v-model="row.type" style="margin-left: 50px;width:29%" >{{row.type}}</el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="updateRelation">保存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import questions from "@/api/question";
import diseaseSelect from '@/views/public/disease_select'
export default {
  components:{
    diseaseSelect
  },
  data() {
    return {
      diseaseSelectTitle:'操作的队列',
      diseaseSelectType:'radio',
      refresh: true,
      disease_id: "AML",
      listLoading: false,
      info:{
        table_name:'',
        table_column:'',
        permissible_value:[],
        condition:'',
        comment:'',
        order:''
      },
      table_options: [],
      column_options: [],
      term_options: [],
    };
  },
  props: {
    open: Boolean,
    row: Object,
  },
  created() {
    this.getTableOptions();
    this.getColumnOptions();
    this.getTermOptions();
  },
  watch: {
    disease_id: function(newValue, oldValue) {
      this.getList()
    }
  },
  methods: {
    handlerClose() {
      this.$emit("update:visible", false);      
    },
    updateRelation() {
      this.row.permissible_value  = this.row.permissible_value.join() 
      this.listLoading = true;
      questions.updateRelation(this.row).then((response) => {
        setTimeout(() => {
          this.listLoading = false;
          this.$emit("update:visible", false);
        }, 1 * 200);
      });
    },
    getTableOptions() {
      this.listLoading = true;
      questions
        .tableOptions({ disease_id: this.disease_id })
        .then((response) => {
          const body = response.body;
          this.table_options = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    getTermOptions() {
      if (this.column_name == '') {
        return;
      }
      questions
        .questionTerms({
          disease_id: this.disease_id,
          content: this.row.table_column,
        })
        .then((response) => {
          const body = response.body;
          let term_options = [];
          for (let index in body.result) {
            term_options.push({
              value: body.result[index].term_id,
              label: body.result[index].zh_cn,
            });
          }
          this.term_options = term_options;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    getColumnOptions() {
      this.listLoading = true;
      questions
        .columnOptions({
          disease_id: this.disease_id,
          tableName: this.row.table_name,
        })
        .then((response) => {
          const body = response.body;
          this.column_options = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    }
  },
};
</script>
