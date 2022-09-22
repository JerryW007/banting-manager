<template>
  <el-dialog
    width="75%"
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
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">排序:</span>
      <el-input
        style="width: 17.7%; margin-left: 50px"
        size="medium"
        v-model="order"
        placeholder="排序"
      />
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">备注:</span>
      <el-input
        style="width: 17.7%; margin-left: 50px"
        size="medium"
        v-model="comment"
        placeholder="备注"
      />
    </div>

    <div style="margin-bottom: 10px">
      <span style="font-weight: bold">表:</span>
      <el-select
        v-model="table_name"
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
      <span style="font-weight: bold;margin-left:25px;">列名:</span>
      <el-select
        v-model="column_name"
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
    <div style="margin-bottom: 15px;margin-top:15px;">
      <span style="font-weight: bold">依赖类型:</span>
      <el-radio v-model="relation_type" label="OPTION_RELATION" style="margin-left: 20px">选项依赖</el-radio>
      <el-radio v-model="relation_type" label="OPTION_OTHER">OTHER依赖</el-radio>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveRelations">保存</el-button>
    </span>
    <div id="permissionTag" v-if="column_terms.length > 0 && relation_type == 'OPTION_RELATION'">
      <span style="margin-right: 20px; margin-bottom: 15px; font-weight: bold;float: left;">可选值:</span>
      <div style="margin-bottom: 15px;margin-left: 80px;">
        <el-checkbox
          style="margin-bottom: 5px; align-self: center"
          align="left"
          v-for="item in column_terms"
          v-bind:key="item.term_id"
          v-model="permissible_value"
          :label="item.term_id"
          >{{ item.zh_cn }}</el-checkbox
        > 
      </div>
      <div style="margin-bottom: 5px"></div>     
    </div>
    <relation-dom :disease_id="disease_id" @addRelationData="addRelationData" @removeRelation="removeRelation" :index="n" :relation_count="relation_count" v-for="n in relation_count" :key="n"/>
  </el-dialog>
</template>
<script>
import questions from "@/api/question";

export default {
  components: {
    'relation-dom': () => import('./relation_dom'),
  },
  data() {
    return {
      refresh: true,
      disease_id: "AML",
      order: "",
      comment: "",
      relation_type: "",
      listLoading: false,
      column_terms: [],
      permissible_value: [],
      table_options: [],
      table_name: "",
      column_options: [],
      column_name: "",
      relation_count:[],
      relation_data:{},
    };
  },
  props: {
    open: Boolean,
  },
  created() {
    this.getTableOptions();
  },
  watch: {  
    table_name: function (newValue, oldValue) {
      this.getColumnOptions();
      this.column_options = []
      this.permissible_value = []
    },
    column_name: function (newValue, oldValue) {
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
      this.getQuestionTerms();
    },
    relation_type: function (newValue, oldValue) {
      if (newValue == "OPTION_RELATION") {
        this.getQuestionTerms();
      }else {
        this.permissible_value = []
      }
    },
  },
  mounted() {},
  methods: {
    addRelationData: function(index, relation_data){
      this.relation_data[index] = relation_data
    },
    addRelation() {
      this.relation_count.push(this.relation_count.length)
    },
    removeRelation(index) {
      for (let i in this.relation_count) {
        if (this.relation_count[i] == index) {
          this.relation_count.splice(i, 1)
        }
      }
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
    saveRelations() {
      const formData = {
        order: this.order,
        disease_id: this.disease_id,
        comment:this.comment,
        permissible_value: this.permissible_value,
        table_name: this.table_name,
        table_column: this.column_name,
        relations: this.relation_data,
      };
      this.listLoading = true;
      questions.saveRelations(formData).then((response) => {
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
    getQuestionTerms() {
      if (this.column_name == '') {
        return;
      }
      questions
        .questionTerms({
          disease_id: this.disease_id,
          content: this.column_name,
        })
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
          tableName: this.table_name,
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
