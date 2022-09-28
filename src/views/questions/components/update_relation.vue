<template>
  <el-dialog
    :visible.sync="open"
    title="修改题目选项"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">操作的队列:</span>
      <el-radio v-model="row.disease_id" label="AML" style="margin-left: 10px" >AML</el-radio>
      <el-radio v-model="row.disease_id" label="MM">MM</el-radio>
      <el-radio v-model="row.disease_id" label="MDS">MDS</el-radio>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">排序:</span>
      <el-input v-model="row.order" style="margin-left: 50px;width:29%" >{{row.order}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">备注:</span>
      <el-input v-model="row.comment" style="margin-left: 50px;width:29%" >{{row.comment}}</el-input>
    </div>
    <div style="margin-bottom: 15px;">
      <span style="font-weight: bold">表名:</span>
      <el-select
        v-model="row.table_name"
        filterable
        placeholder="请选择"
        style="margin-left: 50px; margin-right: 20px"
      >
        <el-option
          v-for="item in table_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div style="margin-bottom: 15px;">
      <span style="font-weight: bold">列名:</span>
      <el-select
        v-model="row.table_column"
        filterable
        placeholder="请选择"
        style="margin-left: 50px; margin-right: 20px"
      >
        <el-option
          v-for="item in column_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div id="permissionTag">
      <span style="margin-right: 20px; margin-bottom: 15px; font-weight: bold;float: left;">可选值:</span>
      <div style="margin-bottom: 15px;margin-left: 80px;">
        <el-checkbox
          style="margin-bottom: 5px; align-self: center"
          align="left"
          v-for="item in term_options"
          v-bind:key="item.value"
          v-model="row.permissible_value"
          :label="item.value"
          >{{ item.label }}</el-checkbox
        > 
      </div>
    </div>   
    <div>
      <span style="margin-right: 20px; margin-bottom: 15px; font-weight: bold;float: left;">依赖值:</span>
      <el-input type="textarea" v-model="row.condition"></el-input>
    </div> 
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="updateRelation">保存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import questions from "@/api/question";

export default {
  data() {
    return {
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
