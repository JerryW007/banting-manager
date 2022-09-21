<template>
  <el-dialog
    :visible.sync="open"
    title="修改题目选项"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 10px">
      <span style="font-weight: bold">全部:</span>
      <el-radio v-model="all_item_type" label="radio" style="margin-left: 10px">单选</el-radio>
      <el-radio v-model="all_item_type" label="checkbox">复选</el-radio>
    </div>
    <div style="margin-bottom: 10px">
      <span style="font-weight: bold">操作的队列:</span>
      <el-radio v-model="disease_id" label="AML" style="margin-left: 10px" >AML</el-radio>
      <el-radio v-model="disease_id" label="MM">MM</el-radio>
      <el-radio v-model="disease_id" label="MDS">MDS</el-radio>
    </div>
    <el-table
      id="qu"
      :data="list"
      border
      row-key="getRowKey"
      fit
      v-loading="listLoading"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="content" label="字段名" />  
      <el-table-column prop="zh_cn" label="翻译" />   
      <el-table-column prop="term_id" label="可选值" >
        <template slot-scope="{ row }">
          <div name="data-id" :data-id="row.term_id">{{row.term_id}}</div>
        </template>
      </el-table-column>
   
      <el-table-column label="可选值类型" width="200px">
        <template slot-scope="{ row }">
          <el-checkbox v-model="item_type" :label="'radio.' + row.term_id"
            >单选框</el-checkbox
          >
          <el-checkbox v-model="item_type" :label="'checkbox.' + row.term_id"
            >复选框</el-checkbox
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="warning" @click="deleteRow(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveTermInfos">保存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import questions from "@/api/question";
import Sortable from "sortablejs";

export default {
  data() {
    return {
      refresh: true,
      disease_id: "AML",
      listLoading: false,
      all_item_type: "",
      item_type: [],
      term_orders:[],
      list: [],
    };
  },
  props: {
    open: Boolean,
    content: "",
  },
  created() {
    this.getList();
  },
  watch: {
    item_type: function (new_list, old_list) {
      if (new_list.length > 1) {
        const newAdd = new_list[new_list.length - 1];
        const deleteItem = newAdd.indexOf("radio.") >= 0 ? "checkbox." + newAdd.substring(6, newAdd.length) : "radio." + newAdd.substring(9, newAdd.length);
        let deleteIndex = -1;
        for (let index in new_list) {
          if (new_list[index] == deleteItem) {
            deleteIndex = index;
          }
        }
        if (deleteIndex >= 0) {
          new_list.splice(deleteIndex, 1);
        }
        this.item_type = new_list;
      }
    },
    all_item_type: function (newValue, oldValue) {
      const new_item_type = [];
      for (let index in this.list) {
        new_item_type.push(newValue + "." + this.list[index].term_id);
        this.item_type = new_item_type;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.rowDrop();
    });
  },
  methods: {
    deleteRow(index, row){
      this.list.splice(index,1)
      this.resetTermOrders()
    },
    resetTermOrders() {
      const elementList = document.getElementsByName('data-id')
      this.term_orders = []
      for (let i=0;i<elementList.length;i++) {
        this.term_orders.push(elementList[i].innerText)
      }
    },
    getRowKey(row){
      return row.term_id
    },
    handlerClose() {
      this.$emit("update:visible", false);
    },
    saveTermInfos() {
      let term_orders = [];
      for (let index in this.list) {
        term_orders.push(this.list[index].term_id);
      }
      this.term_orders = term_orders  
      const formData = {
        content: this.content,
        item_type: this.item_type,
        disease_id: this.disease_id,
        term_orders: this.term_orders
      };   
      this.listLoading = true;
      questions.saveTermInfos(formData).then((response) => {
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    },
    rowDrop() {
      const tbody = document.querySelector("#qu tbody");
      const _this = this;
      const ops = {
        animation: 200,
        dataIdAttr: 'data-id',
        onEnd: function(evt) {
          _this.resetTermOrders()
        },
      }
      Sortable.create(tbody, ops);
    },
    getList() {
      this.listLoading = true;
      questions.questionTerms({content: this.content}).then((response) => {
        const body = response.body;
        this.list = body.result;
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    },
  },
};
</script>
