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
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        添加
      </el-button>      
      <el-button
        v-waves
        :loading="upLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-upload"
        @click="handleUpLoad"
      >
        上传
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
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
    >
      <el-table-column
        label="表名"
        prop="id"
        sortable="custom"
        align="center"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.table_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="列名" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.table_column }}</span>
        </template>
      </el-table-column>
      <el-table-column label="排序" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.order }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.comment }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属疾病" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.disease_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="选项" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.permissible_value }}</span>
        </template>
      </el-table-column>
      <el-table-column label="依赖" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.condition }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.create_time }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" @click="showUpdate(row.content)">修改</el-button>
      </template>
      </el-table-column> -->
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="relationList"/>
    <create-relation-dialog :visible.sync="dialogUpdateVisible" :open="dialogUpdateVisible" v-if="dialogUpdateVisible" />
  </div>
</template>

<script>
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import questions from "@/api/question";

export default {
  name: "questionList",
  components: {
    Pagination,
    "create-relation-dialog": () => import("./components/create_relation")
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
      dialogUpdateVisible: false,
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
      upLoading: false,
    };
  },
  created() {
    this.relationList();
  },
  watch:{
    dialogUpdateVisible:function(){
      this.relationList()
    }
  },
  methods: {
    relationList() {
      this.listLoading = true;
      questions.relationList(this.listQuery).then((response) => {
        const body = response.body;
        console.log(body.result)
        this.list = body.result;
        this.total = body.total;
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 200);
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.relationList();
    },
    handleCreate(content) {
      this.currentContent = content
      this.dialogUpdateVisible = true;
    },
    handleUpLoad(){
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
