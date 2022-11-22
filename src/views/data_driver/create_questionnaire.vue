<template>
  <div style="margin-left: 10px; margin-top: 10px">
    <div style="width: 100%; border:1px #DDDDDD solid;padding: 10px;border-radius: 5px;">
      <div style="margin-bottom: 10px;">
        <disease-select v-model="disease_id" :tagType="diseaseSelectType" style="margin-right:20px;float: left;width:80%" :title="diseaseSelectTitle" />
        <div style="display:inline-block">
          <span style="font-weight: bold">关联字段:</span>
          <el-select v-model="column.table_name" filterable placeholder="请选择表" style="margin-left: 26px; margin-right: 20px">
            <el-option v-for="item in table_options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="column.column_name" filterable placeholder="请选择列名" style="margin-left: 10px">
            <el-option v-for="item in column_options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" style="margin-left: 10px" @click="addQuestion">添加</el-button>
          <el-button type="success" icon="el-icon-refresh-left" style="margin-left:10px;" @click="generate">刷新</el-button>
          <el-button type="danger" @click="showQuestions">题目配置</el-button>
          <el-button type="warning" @click="showQuestionnaire">问卷配置</el-button>
        </div>
      </div>
      <div style="display: inline-block;margin-top:5px;">
        <div>
          <span style="font-weight: bold;">题目类型:</span>
          <el-radio v-model="question_type" label="sample" style="margin-left: 26px">简单</el-radio>
          <el-radio v-model="question_type" label="sub_question">分题类型</el-radio>
          <el-radio v-model="question_type" label="sub_group">分组类型</el-radio>
        </div>
        <div v-if="question_type == 'sub_group' || question_type == 'sub_question'" style="margin-top:10px;">
          <span style="font-weight: bold">依赖字段:</span>
          <el-select v-model="relation.table_name" filterable placeholder="请选择表" style="margin-left: 26px; margin-right: 20px">
            <el-option v-for="item in table_options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="relation.column_name" filterable placeholder="请选择列名" style="margin-left: 10px">
            <el-option v-for="item in column_options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <template v-if="question_type == 'sub_question'">
            <span style="font-weight: bold;margin-left:10px;">限定可选值:</span>
            <el-select v-model="relation.term_id" filterable placeholder="请选择可选值" style="margin-left: 10px">
              <el-option v-for="item in column_terms" :key="item.term_id" :label="item.zh_cn" :value="item.term_id">
              </el-option>
            </el-select>
          </template>
        </div>
      </div>
      <div style="display:inline-block;position:relative; left:100px;bottom:2%;">
        <el-drawer title="配置信息" :visible.sync="showStatus" style="width:33.5%;border: 1px grey solid; border-radius: 5px;" :with-header="false" size="100%" direction="ltr" :modal="false" :wrapperClosable="false">
          <pre style="margin-top:10px;height:100%;overflow-y: auto;height:100%;width:100%;position:absolute;">{{showInfo}}</pre>
        </el-drawer>
      </div>
    </div>
    <div style="display: flex;">
      <div :style="{
                'width': '30%',
                'min-height':windowHeight() + 'px',
                'margin-bottom':'2px',
                'margin-right': '10px',
                'border-right':'1px #FF44AA solid'}">
        <template v-if="questions.length > 0">
          <draggable class="wrapper" v-model="questions" style="margin-top:2px;margin-right:2px;">
            <div v-for="oneQuestion,index in questions" :key="index" style="border:1px #66CCFF solid;margin-bottom: 2px;border-radius: 5px;">
              <el-button type="danger" icon="el-icon-delete" circle style="float:right;margin-top: 4px;margin-right:5px;" size="mini" @click="deleteQuestion(index)"></el-button>
              <pre style="margin-left:10px;margin: 10px 5px;font-family:Verdana,Genva,Arial,sans-serif;">{{oneQuestion}}</pre>
            </div>
          </draggable>
        </template>
      </div>
      <div style="width: 70%; ">
        <template v-if="questions.length > 0">
          <div>
            <div v-for="qKey in question_configs.keys" :key="qKey" style="margin-right: 20px; margin-bottom: 10px">
              <question :question="question_configs.questions[qKey]" :questions="question_configs.questions" v-if="showMonitor(question_configs.questions[qKey])" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import questions from "@/api/question";
import pApi from "@/api/python_api";
import diseaseSelect from "@/views/public/disease_select";
import question from "./components/question";
export default {
  data() {
    return {
      direction: "ltr",
      listLoading: false,
      diseaseSelectTitle: "操作的队列",
      diseaseSelectType: "radio",
      disease_id: "CML",
      question_type: "sample",
      column: {
        table_name: "",
        column_name: "",
      },
      relation: {
        table_name: "",
        column_name: "",
        term_id: "",
      },
      table_options: [],
      column_options: [],
      column_terms: [],
      questions: [
  "primary_diag_cd",
  "primary_sub_diag_cd"
],
      question_configs: {},
      showStatus: false,
      showInfo: "",
    };
  },
  components: {
    diseaseSelect,
    question,
    draggable,
  },
  created() {
    this.enterEvent();
    this.getTableOptions();
  },
  mounted() {},
  updated() {},
  watch: {
    disease_id: function () {
      // if (this.questions.length > 0) {
      //   this.$confirm("此操作将会清空已设置的问卷题目, 是否继续?", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   })
      //     .then(() => {
      //       this.questions = [];
      //       this.$message({
      //         type: "success",
      //         message: "删除成功!",
      //       });
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: "info",
      //         message: "已取消删除",
      //       });
      //     });
      // }
      this.getTableOptions();
    },
    "column.table_name": function () {
      this.getColumnOptions(this.column.table_name);
      this.column_options = [];
    },
    "relation.table_name": function () {
      this.getColumnOptions(this.relation.table_name);
      this.column_options = [];
    },
    "relation.column_name": function () {
      this.getQuestionTerms(this.relation.column_name);
    },
  },
  methods: {
    windowHeight() {
      return window.innerHeight - 190;
    },
    enterEvent() {
      document.onkeydown = (e) => {
        //事件对象兼容
        let e1 = e || window.event || arguments.callee.caller.arguments[0];
        //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
        //左
        if (e1 && e1.keyCode == 13) {
          this.addQuestion();
        }
      };
    },
    showQuestions() {
      if (this.questions.length == 0) {
        alert("请添加题目");
        return;
      }
      if (this.showInfo == this.questions) {
        this.showStatus = !this.showStatus;
      }
      this.showInfo = this.questions;
    },
    showQuestionnaire() {
      if (
        this.question_configs == "" ||
        this.question_configs == undefined ||
        Object.keys(this.question_configs).length == 0
      ) {
        alert("问卷配置为空");
        return;
      }
      if (this.showInfo == this.question_configs) {
        this.showStatus = !this.showStatus;
      }
      this.showInfo = this.question_configs;
    },
    generate() {
      // 生成问卷
      this.getQuestionConfig();
    },
    getQuestionConfig() {
      pApi
        .getQuestion({
          disease_id: this.disease_id,
          source_keys: this.questions,
        })
        .then((response) => {
          // 修改NaN类型数据,防止格式化失败
          let body = response.data;
          if (typeof body == 'string' && body.indexOf('NaN') != -1) {
            body = JSON.parse(body.replace(/NaN/g,"\"NaN\""))
          }
          this.question_configs = body;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    deleteQuestion(index) {
      this.questions.splice(index, 1);
    },
    addQuestion() {
      if (this.column.column_name == "") {
        alert("请先选择关联字段!");
        return;
      }
      if (this.question_type != "sample" && this.relation.column_name == "") {
        alert("请选择依赖字段!");
        return;
      }
      if (this.question_type == "sample") {
        this.questions.push(this.column.column_name);
      } else {
        let question = {
          column_key: this.column.column_name,
          relation_type: this.question_type,
          relation_key: this.relation.column_name,
        };
        if (
          this.question_type == "sub_question" &&
          this.relation.term_id != ""
        ) {
          question.relation_values = this.relation.term_id;
        }
        this.questions.push(question);
      }
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
    getQuestionTerms(column_name) {
      if (this.column_name == "") {
        return;
      }
      questions
        .questionTerms({
          disease_id: this.disease_id,
          content: column_name,
        })
        .then((response) => {
          const body = response.body;
          this.column_terms = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    getColumnOptions(table_name) {
      this.listLoading = true;
      questions
        .columnOptions({
          disease_id: this.disease_id,
          tableName: table_name,
        })
        .then((response) => {
          const body = response.body;
          this.column_options = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    showMonitor(questionItem) {
      let match = true;
      if (!("show" in questionItem) || questionItem.show.length == 0) {
        return true;
      }
      for (let show_conditions of questionItem.show) {
        for (let key of Object.keys(show_conditions)) {
          if (
            key in this.question_configs.questions &&
            "column_value" in this.question_configs.questions[key] &&
            !this.question_configs.questions[key].column_value.includes(
              show_conditions[key]
            )
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
/deep/ .el-drawer__header {
  margin-bottom: 10px !important;
  border-bottom: 1px grey solid !important;
  padding-bottom: 10px !important;
}
.el-input__inner {
  width: 220px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  height: 15px;
  /* margin-left: -2px; */
  padding-left: 10px;
  outline: medium;
}
</style>
  