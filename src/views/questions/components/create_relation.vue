<template>
  <el-dialog
    :visible.sync="open"
    title="添加题目依赖"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">操作的队列:</span>
      <el-radio v-model="disease_id" label="AML" style="margin-left: 10px">AML</el-radio>
      <el-radio v-model="disease_id" label="MM">MM</el-radio>
      <el-radio v-model="disease_id" label="MDS">MDS</el-radio>
      <el-button type="primary" @click="addRelation">添加依赖</el-button>
    </div>
    <div style="margin-bottom:15px;">
      <span style="font-weight: bold;">排序:</span>
      <el-input style="width: 21.5%; margin-left: 50px;" size="medium" v-model="order" placeholder="排序" />
    </div>
    <div style="margin-bottom:15px;">
      <span style="font-weight: bold;">备注:</span>
      <el-input style="width: 21.5%; margin-left: 50px;" size="medium" v-model="comment" placeholder="备注" />
    </div>
    
    <div style="margin-bottom: 10px">
      <span style="font-weight: bold">表:</span>
      <el-select
        v-model="current_table_name"
        filterable
        placeholder="请选择"
        style="margin-left: 64px; margin-right: 20px"
      >
        <el-option
          v-for="item in table_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span style="font-weight: bold">列名:</span>
      <el-select
        v-model="current_column_name"
        filterable
        placeholder="请选择"
        style="margin-left: 10px"
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
    <div style="margin-bottom:15px;">
      <span style="font-weight: bold;">依赖类型:</span>
      <el-radio v-model="relation_type" label="OPTION_RELATION" style="margin-left: 10px">选项依赖</el-radio>
      <el-radio v-model="relation_type" label="OPTION_OTHER">OTHER依赖</el-radio>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveTermInfos">保存</el-button>
    </span>
    <div id="permissionTag" v-if="column_terms.length > 0 && relation_type == 'OPTION_RELATION'">
      <span style="margin-right:20px; margin-bottom:15px; font-weight: bold;">可选值:</span>
      <div style="margin-bottom:5px;"></div>
      <el-checkbox style="margin-bottom:5px; margin-left:45px; align-self:center;" align="left" v-for="item in column_terms" v-bind:key="item.term_id" v-model="permissible_value" :label="item.term_id">{{item.zh_cn}}</el-checkbox>
    </div>
  </el-dialog>
</template>
<script>
import questions from "@/api/question";
import { throwStatement } from "@babel/types";

export default {
  data() {
    return {
      refresh: true,
      disease_id: "AML",
      order:'',
      comment:'',
      relation_type:'', 
      listLoading: false,
      column_terms:[],
      permissible_value:[],
      table_options: [],
      current_table_name: "",
      column_options: [],
      current_column_name: "",
    };
  },
  props: {
    open: Boolean,
    content: "",
  },
  created() {
    this.getTableOptions();
  },
  watch: {
    current_table_name: function (newValue, oldValue) {
      this.getColumnOptions();
    },
    current_column_name: function(newValue, oldValue) {
      this.getQuestionTerms();
    },
    all_item_type: function (newValue, oldValue) {
      const new_item_type = [];
      for (let index in this.list) {
        new_item_type.push(newValue + "." + this.list[index].term_id);
        this.item_type = new_item_type;
      }
    },
    disease_id: function (newValue, oldValue) {
      this.getQuestionTerms()
    },
    relation_type: function (newValue, oldValue) {
      if (newValue == 'OPTION_RELATION') {
        this.getQuestionTerms()
      }else{
        let div = document.getElementById('permissionTag')
        div.innerHTML = ''
      }
    },
  },
  mounted() {},
  methods: {
    addRelation() {

    },
    deleteRow(index, row) {
      this.list.splice(index, 1);
      this.$nextTick(() => {
        this.resetTermOrders();
      });
    },
    getRowKey(row) {
      return row.term_id;
    },
    handlerClose() {
      this.$emit("update:visible", false);
    },
    saveTermInfos() {
      const formData = {
        content: this.content,
        item_type: this.item_type,
        disease_id: this.disease_id,
        term_orders: this.term_orders,
      };
      this.listLoading = true;
      questions.saveTermInfos(formData).then((response) => {
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
    getQuestionTerms(){
      questions
        .questionTerms({ disease_id: this.disease_id, content: this.current_column_name })
        .then((response) => {
          const body = response.body;
          this.column_terms = body.result;
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
          tableName: this.current_table_name,
        })
        .then((response) => {
          const body = response.body;
          this.column_options = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
  },
};
</script>
