<template>
  <el-dialog
    :visible.sync="open"
    title="修改题目选项"
    width="80%"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">全部:</span>
      <el-radio v-model="all_item_type" label="radio" style="margin-left: 52px">单选</el-radio>
      <el-radio v-model="all_item_type" label="checkbox">复选</el-radio>
    </div>
    <disease-select v-model="disease_id" :tagType="diseaseSelectType" style ="margin-right:20px" :title="diseaseSelectTitle"/>
    <div style="margin-bottom:15px;">
      <span style="font-weight: bold">所属项目:</span>
      <el-input v-model="project_tag" style="width: 20%;margin-left: 15px;">{{project_tag}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">可选值:</span>
      <el-select
        v-model="add_term_id"
        filterable
        clearable
        placeholder="请选择"
        style="margin-left: 40px; margin-right: 20px"
      >
        <el-option
          v-for="item in column_terms"
          :key="item.term_id"
          :label="item['zh-CN']"
          :value="item.term_id"
          :disabled="term_orders.indexOf(item.term_id) != -1"
        >
        </el-option>
      </el-select>
      <el-button type="primary" @click="addTermId()">添加</el-button>
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
      <el-table-column prop="zh-CN" label="翻译" />   
      <el-table-column prop="term_id" label="可选值" >
        <template slot-scope="{ row }">
          <div name="data-id" :data-id="row.term_id">{{row.term_id}}</div>
        </template>
      </el-table-column>
      <el-table-column  label="顺序" >
        <template slot-scope="{ row }">
          <el-input v-model="row.index" placeholder="顺序"/>
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
      <el-table-column label="操作" >
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
      all_item_type: "",
      project_tag: '',
      item_type: [],
      term_orders:[],
      list: [],
      column_terms:[],
      add_term_id:''
    };
  },
  props: {
    open: Boolean,
    content: "",
  },
  created() {
    this.getList();
    this.getQuestionTerms();
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
    disease_id: function(newValue, oldValue) {
      this.getList()
    },
    project_tag:function(newValue, oldValue) {
      this.getList()
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.rowDrop();
    // });
  },
  methods: {
    addTermId() {
      if (this.add_term_id == '') {
        return;
      }
      this.term_orders.push(this.add_term_id)
      for (let item of this.column_terms) {
        if (item.term_id == this.add_term_id) {
          this.list.push({content:item.content,term_id:this.add_term_id,'zh-CN':item['zh-CN']})
        }
      }
      this.add_term_id = ''
    },
    deleteRow(index, row){
      this.list.splice(index, 1)
      this.$nextTick(()=>{
        this.resetTermOrders()
      })
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
      const formData = {
        content: this.content,
        item_type: this.item_type,
        disease_id: this.disease_id,
        project_tag: this.project_tag,
        orders: this.list
      };   
      this.listLoading = true;
      questions.saveTermInfos(formData).then((response) => {
        setTimeout(() => {
          this.listLoading = false;
          this.$emit("update:visible", false);
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
      questions.questionTerms({content: this.content, disease_id: this.disease_id,project_tag: this.project_tag}).then((response) => {
        const body = response.body;
        this.list = body.result;
        let item_type = []
        let term_orders = []
        for (let index in this.list) {
          term_orders.push(this.list[index].term_id)
          if (this.list[index].item_type != undefined) {
            item_type.push(this.list[index].item_type +'.' + this.list[index].term_id)
          
          }
        }
        this.term_orders = term_orders
        this.item_type = item_type
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    },
    getQuestionTerms() {
      if (this.content == '') {
        return;
      }
      this.listLoading = true
      questions.questionTerms({
          // disease_id: this.disease_id,
          content: this.content,
        })
        .then((response) => {
          const body = response.body;
          this.column_terms = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
  },
};
</script>
