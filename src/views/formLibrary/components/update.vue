<template>
  <el-dialog
    :visible.sync="open"
    title="修改表单信息"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 15px">
      <disease-select v-model="row.disease_id" :tagType="diseaseSelectType" style ="margin-right:20px" :title="diseaseSelectTitle"/>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">名称:</span>
      <el-input v-model="row.name" style="margin-left: 78px;width:29%" >{{row.name}}</el-input>
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
      <el-select
        v-model="row.parent_form_id"
        filterable
        clearable
        placeholder="请选择"
        style="margin-left: 50px; margin-right: 20px"
      >
        <el-option
          v-for="item in formList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">表单类型:</span>
      <el-radio v-model="row.type" label="default" style="margin-left: 50px">默认</el-radio>
      <el-radio v-model="row.type" label="project">项目</el-radio>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="updateFormLibrary">保存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import formLibrary from "@/api/formLibrary";
import diseaseSelect from '@/views/public/disease_select'
export default {
  components:{
    diseaseSelect
  },
  data() {
    return {
      diseaseSelectTitle:'关联的队列',
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
      formList:[]
    };
  },
  props: {
    open: Boolean,
    row: Object,
  },
  created() {
    this.allForm()
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
    updateFormLibrary() {
      this.listLoading = true;
      formLibrary.updateFormLibrary(this.row).then((response) => {
        setTimeout(() => {
          this.listLoading = false;
          this.$emit("update:visible", false);
        }, 1 * 200);
      });
    },
    allForm() {
      this.listLoading = true;
      formLibrary.getForms(this.data).then((response) => {
        const body = response.body
        this.formList = body.result
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    }
  },
};
</script>
