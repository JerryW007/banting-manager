<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.content" placeholder="表单ID" style="width: 200px; margin-right: 10px" class="filter-item" @keyup.enter.native="handleFilter"/>
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
        type="warning"
        icon="el-icon-edit"
        @click="showCreate"
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
      @sort-change="sortChange"
    >
      <el-table-column
        label="表单ID"
        prop="id"
        sortable="custom"
        align="center"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.project_term_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="表单名称" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="表单级别" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.form_level }}</span>
        </template>
      </el-table-column>
      <el-table-column label="关联队列" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.disease_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="父级ID" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.parent_form_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" @click="showUpdate(row)">修改</el-button>
      </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
    <create-dialog :visible.sync="dialogCreateVisible" :open="dialogCreateVisible" v-if="dialogCreateVisible" />
    <update-dialog :visible.sync="dialogUpdateVisible" :open="dialogUpdateVisible" :row="currentRow" v-if="dialogUpdateVisible" />
  </div>
</template>

<script>
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import formLibrary from "@/api/formLibrary";

export default {
  name: "formLibraryList",
  components: {
    Pagination,
    "update-dialog": () => import("./components/update"),
    "create-dialog": () => import("./components/create")
  },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: [],
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
      uploading: false,
    };
  },
  created() {
    this.getList();
  },
  watch:{
    dialogUpdateVisible:function() {
      this.getList()
    }
  },
  methods: {
    getList() {
      this.listLoading = true;
      formLibrary.formList(this.listQuery).then((response) => {
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
    showCreate() {
      this.dialogCreateVisible = true;
    },
    showUpdate(row) {
      this.currentRow = row
      this.dialogUpdateVisible = true;
    },
    handleUpload(){
      alert('该功能正在开发中...')
    },
    handleDownload() {
      alert('该功能正在开发中...')
      // this.downloadLoading = true;
      // import("@/vendor/Export2Excel").then((excel) => {
      //   const tHeader = ["timestamp", "title", "type", "importance", "status"];
      //   const filterVal = [
      //     "timestamp",
      //     "title",
      //     "type",
      //     "importance",
      //     "status",
      //   ];
      //   const data = this.formatJson(filterVal);
      //   excel.export_json_to_excel({
      //     header: tHeader,
      //     data,
      //     filename: "table-list",
      //   });
      //   this.downloadLoading = false;
      // });
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
