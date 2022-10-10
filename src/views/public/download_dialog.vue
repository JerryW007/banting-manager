<template>
    <el-dialog
      :visible.sync="open"
      :title="content"
      width="30%"
      :before-close="handlerClose"
    >
      <disease-select v-model="disease_id" :tagType="diseaseSelectType" style ="margin-right:20px" :title="diseaseSelectTitle"/>
      <div>
        <!-- <span style="font-weight: bold">文件名:</span> -->
        <!-- <el-input v-model="file_name" placeholder="下载的文件名" style="width: 200px; margin-left: 40px" class="filter-item"/> -->
    </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handlerClose">取消</el-button>
        <el-button type="primary" @click="download">确定</el-button>
      </span>
    </el-dialog>
  </template>
  <script>
  import diseaseSelect from '@/views/public/disease_select'
  import questions from '@/api/question'
  export default {
    components:{
      diseaseSelect
    },
    data() {
      return {
        diseaseSelectTitle:'下载的队列',
        diseaseSelectType:'select',
        disease_id: "AML",
        file_name:'',
        download_data:[]
      };
    },
    props: {
      open: Boolean,
      content: String,
      dataSource: String
    },
    created() {
    },
    watch: {
     
    },
    mounted() {
    },
    methods: {
      handlerClose() {
        this.$emit("update:visible", false);      
      },
      async getData() {
        if (this.dataSource == 'validation') {
          await questions.downloadValidation({disease_id: this.disease_id}).then( response=> {
            const body = response.body;
            this.download_data = body.result;
          })
        }
        if (this.dataSource == 'relation') {
          await questions.downloadRelation({disease_id: this.disease_id}).then( response=> {
            const body = response.body;
            this.download_data = body.result;
          })
        }
      },
      async download() {
        await this.getData()
        if (this.download_data.length == 0) {
          alert('导出数据为空!')
          return;
        }
        const { export_json_to_excel } = require('@/vendor/Export2Excel');
        const tHeader = Object.keys(this.download_data[0]);
        const data = this.formatJson(tHeader, this.download_data);
        export_json_to_excel({
          header:tHeader,
          data,
          filename: this.file_name
        });
      },
      formatJson(filterVal, data) {
        return data.map((v) =>
          filterVal.map((j) => {
            if (j === "timestamp") {
              return parseTime(v[j]);
            } else {
              return v[j];
            }
          })
        );
      },
    },
  };
  </script>
  