<template>
  <el-dialog
    :visible.sync="open"
    title="添加表单信息"
    :before-close="handlerClose"
  >
    <div style="margin-bottom: 15px">
      <disease-select v-model="disease_id" :tagType="diseaseSelectType" style ="margin-right:20px" :title="diseaseSelectTitle"/>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">表单ID:</span>
      <el-input v-model="project_term_id" style="margin-left: 62px;width:29%" >{{project_term_id}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">表单名称:</span>
      <el-input v-model="name" style="margin-left: 50px;width:29%" >{{name}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">表单级别:</span>
      <el-input v-model="form_level" style="margin-left: 50px;width:29%" >{{form_level}}</el-input>
    </div>
    <div style="margin-bottom: 15px">
      <span style="font-weight: bold">父级表单:</span>
      <el-select
        v-model="parent_form_id"
        filterable
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
      <el-radio v-model="type" label="default" style="margin-left: 50px">默认</el-radio>
      <el-radio v-model="type" label="project">项目</el-radio>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveFormLibrary">保存</el-button>
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
      project_term_id:'',
      name:'',
      form_level: '',
      parent_form_id: '',
      type:'default',
      formList:[]
    };
  },
  props: {
    open: Boolean,
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
    saveFormLibrary() {
      this.listLoading = true;
      let formData = {
        project_term_id:this.project_term_id,
        name:this.name,
        form_level:this.form_level,
        parent_form_id:this.parent_form_id,
        type:this.type,
        disease_id:this.disease_id
      }
      formLibrary.saveFormLibrary(formData).then((response) => {
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
