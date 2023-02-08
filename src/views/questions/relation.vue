<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.content" placeholder="表名或者字段名" style="width: 200px; margin-right: 10px; float: left;" class="filter-item" @keyup.enter.native="handleFilter"/>
        <disease-select v-model="listQuery.disease_id" :tagType="diseaseSelectType" style ="float: left; margin-right:20px" :title="diseaseSelectTitle"/>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button
        v-waves
        :loading="upLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-upload"
        style="float: right;"
        @click="handleUpLoad"
      >
        上传
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        style="float: right;"
        icon="el-icon-download"
        @click="handleDownload"
      >
        导出
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px; float: right;"
        type="warning"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        添加
      </el-button> 
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        label="表名"
        prop="id"
        align="center"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.table_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="列名" align="center" >
        <template slot-scope="{ row }">
          <span>{{ row.table_column }}</span>
        </template>
      </el-table-column>
      <el-table-column label="排序" align="center" width="80px">
        <template slot-scope="{ row }">
          <span>{{ row.order }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" width="120px">
        <template slot-scope="{ row }">
          <span>{{ row.comment }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属疾病" align="center" width="80px">
        <template slot-scope="{ row }">
          <span>{{ row.disease_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属项目" align="center" width="80px">
        <template slot-scope="{ row }">
          <span>{{ row.project_tag }}</span>
        </template>
      </el-table-column>
      <el-table-column label="选项" align="center" width="80px" :show-overflow-tooltip="true">
        <template slot-scope="{ row }">
          <span>{{ row.permissible_value }}</span>
        </template>
      </el-table-column>
      <el-table-column label="依赖" align="center"  :show-overflow-tooltip="true">
        <template slot-scope="{ row }">
          <span>{{ row.condition }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" width="160px">
        <template slot-scope="{ row }">
          <span>{{ row.create_time.split(".")[0] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200px">
        <template slot-scope="{ row }">
          <el-button type="primary" @click="handleUpdate(row)">修改</el-button>
          <el-button type="danger" @click="handleDelete(row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="relationList"/>
    <create-relation-dialog :visible.sync="dialogCreateVisible" :open="dialogCreateVisible" v-if="dialogCreateVisible" />
    <update-relation-dialog :visible.sync="dialogUpdateVisible" :open="dialogUpdateVisible" v-if="dialogUpdateVisible" :row="currentRow" />
    <download-dialog :visible.sync="dialogDownloadVisible" :open="dialogDownloadVisible" :content="downTitle" :dataSource="dataSource" v-if="dialogDownloadVisible" />
  </div>
</template>

<script>
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import questions from "@/api/question";
import diseaseSelect from '@/views/public/disease_select'
export default {
  name: "questionList",
  components: {
    Pagination,
    diseaseSelect,
    "update-relation-dialog": () => import("./components/update_relation"),
    "create-relation-dialog": () => import("./components/create_relation"),
    "download-dialog": () => import("@/views/public/download_dialog")
  },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      diseaseSelectTitle:'选择的队列',
      diseaseSelectType:'select',
      listQuery: {
        page: 1,
        limit: 10,
        content: undefined,
        sort: "+id",
        disease_id:''
      },
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" },
      ],
      dialogCreateVisible: false,
      dialogUpdateVisible: false,
      dialogDownloadVisible: false,
      currentContent:'',
      currentRow:{},
      rules: {
        type: [
          { required: true, message: "type is required", trigger: "change" },
        ],
        timestamp: [
          {
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change",
          },
        ],
      },
      downloadLoading: false,
      upLoading: false,
      downTitle:'导出依赖',
      dataSource:'relation'
    };
  },
  created() {
    this.relationList();
  },
  watch:{
    dialogUpdateVisible:function(){
      this.relationList()
    },
    dialogCreateVisible:function(){
      this.relationList()
    }
  },
  methods: {
    relationList() {
      this.listLoading = true;
      questions.relationList(this.listQuery).then((response) => {
        const body = response.body;
        this.list = body.result;
        this.total = body.total;
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    },
    deleteRelation(id){
      this.listLoading = true;
      questions.deleteRelation({id:id}).then((response) => {
        this.$message({
            type: 'success:',
            message: '删除成功!'
          });
        this.listLoading = false;  
        this.relationList() 
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.relationList();
    },
    handleCreate(content) {
      this.currentContent = content
      this.dialogCreateVisible = true;
    },
    handleUpdate(row) {
      this.currentRow = row
      if (row.permissible_value != 'OPTION_OTHER') {
          let permissible_value = row.permissible_value.split(',')
          let permissible_list = []
          for (let i=0; i < permissible_value.length; i++) {
            if (permissible_value[i] == '') {
              continue;
            }
            if (permissible_value[i].includes('+')) {
              let sub_values = permissible_value[i].split('+')
              for (let j=0; j<sub_values.length; j++) {
                if (sub_values[j] == ''){
                  continue;
                }
                permissible_list.push(sub_values[j])
              }
            }else{
              permissible_list.push(permissible_value[i])
            }
          }
          row.permissible_value = permissible_list
      }
      this.dialogUpdateVisible = true;
    },
    handleDelete(row){
      this.$confirm('确认要删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteRelation(row.id)                  
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleUpLoad(){
      alert('该功能正在开发中...')
    },
    handleDownload() {
      this.dialogDownloadVisible = true;
    },
    formatJson(filterVal) {
      return this.list.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    getSortClass: function (key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    },
  },
};
</script>
