<template>
  <el-dialog
    :visible.sync="open"
    title="添加题目配置"
    width="80%"
    :before-close="handlerClose"
  >
    <disease-select
      v-model="formData.disease_id"
      :tagType="diseaseSelectType"
      style="margin-right: 20px"
      :title="diseaseSelectTitle"
    />
    <div style="margin-bottom:15px;">
      <span style="font-weight: bold">所属项目:</span>
      <el-input v-model="formData.project_tag" style="width: 20%;margin-left: 15px;">{{formData.project_tag}}</el-input>
    </div>
    <div style="margin-bottom:15px;">
      <span style="font-weight: bold">配置表:</span>
      <el-select
        v-model="formData.table_name"
        filterable
        placeholder="请选择"
        style="margin-left: 28px; margin-right: 20px"
      >
        <el-option
          v-for="item in table_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span style="font-weight: bold">配置字段:</span>
      <el-select
        v-model="formData.content"
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
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">字段类型:</span>
      <el-radio v-model="formData.item_type" label="datetime" style="margin-left: 15px">日期类型</el-radio>
      <el-radio v-model="formData.item_type" label="string">字符串类型</el-radio>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">动态校验:</span>
      <el-radio v-model="formData.validate_type" label="dynamic" style="margin-left: 15px">是</el-radio>
      <el-radio v-model="formData.validate_type" label="static">否</el-radio>
    </div>
    <div style="margin-bottom: 15px" class="demo-input-suffix">
      <span style="font-weight: bold">值配置:</span>
      <el-input v-model="formData.start" style="margin-left: 30px;width: 10%;" placeholder="最小值"/>
      <span style="margin-left: 10px; margin-right: 10px;">-</span>
      <el-input v-model="formData.end" style="width: 10%;"  placeholder="最大值"/>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveTermInfos">保存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import questions from "@/api/question";
import diseaseSelect from "@/views/public/disease_select";
export default {
  components: {
    diseaseSelect,
  },
  data() {
    return {
      diseaseSelectTitle: "操作的队列",
      diseaseSelectType: "radio",
      refresh: true,
      formData:{
        disease_id: 'AML',
        table_name:'',
        content:'',
        item_type:'',
        validate_type:'',
        project_tag:'',        
        start:'',
        end:''
      },
      listLoading: false,
      table_options: [],
      column_options: [],
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
    'formData.table_name': function (newValue, oldValue) {
      this.getColumnOptions()
    },
  },
  mounted() {},
  methods: {
    handlerClose() {
      this.$emit("update:visible", false);      
    },
    saveTermInfos() {
      this.listLoading = true;
      questions.saveTermInfos(this.formData).then((response) => {
        setTimeout(() => {
          this.listLoading = false;
          this.$emit("update:visible", false);
        }, 1 * 200);
      });

    },
    getTableOptions() {
      this.listLoading = true;
      questions
        .tableOptions({ disease_id: this.formData.disease_id })
        .then((response) => {
          const body = response.body;
          this.table_options = body.result;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    getColumnOptions() {
      this.listLoading = true;
      questions.columnOptions({
          disease_id: this.formData.disease_id,
          tableName: this.formData.table_name,
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
