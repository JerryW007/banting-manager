<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.content" placeholder="翻译" style="width: 200px; margin-right: 10px" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button v-waves class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        搜索
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="success"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        添加
      </el-button>
      <!-- <el-button
        v-waves
        :loading="uploading"
        class="filter-item"
        type="primary"
        icon="el-icon-upload"
        @click="handleUpload"
      >
        上传
      </el-button> -->
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="warning"
        icon="el-icon-download"
        @click="handleDownload"
      >
        导出
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
      @sort-change="sortChange"
    >
      <el-table-column
        label="列名"
        prop="id"
        sortable="custom"
        align="center"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="termID计数" align="center">        
          <template slot-scope="{ row }">
            <span>{{ row.count }}</span>
          </template>        
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zh_cn }}</span>
        </template>
      </el-table-column>
      <el-table-column label="完成的队列" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.disease_ids }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" @click="showUpdate(row.content)">修改</el-button>
      </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
    <create-dialog :visible.sync="dialogCreateVisible" :open="dialogCreateVisible" v-if="dialogCreateVisible" />
    <update-dialog :visible.sync="dialogUpdateVisible" :open="dialogUpdateVisible" :content="currentContent" v-if="dialogUpdateVisible" />
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
    "create-dialog": () => import("./components/create_validation"),
    "update-dialog": () => import("./components/update"),
    "download-dialog": () => import("@/views/public/download_dialog")
  },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        content: undefined,
        sort: "+id",
      },
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" },
      ],
      dialogCreateVisible: false,
      dialogUpdateVisible: false,
      dialogDownloadVisible: false,
      currentContent:'',
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
      uploading: false,
      diseaseSelectType:'select',
      diseaseSelectTitle:'下载的队列',
      downTitle:'导出配置',
      dataSource:'validation'
    };
  },
  created() {
    this.getList();
  },
  watch:{
    dialogUpdateVisible:function(){
      this.getList()
    }
  },
  methods: {
    getList() {
      this.listLoading = true;
      questions.getAllQuestions(this.listQuery).then((response) => {
        const body = response.body;
        this.list = body.result;
        this.total = body.total;
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "操作Success",
        type: "success",
      });
      row.status = status;
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },
    showUpdate(content) {
      this.currentContent = content
      this.dialogUpdateVisible = true;
    },
    handleCreate() {
      this.dialogCreateVisible = true
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleUpload(){
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
