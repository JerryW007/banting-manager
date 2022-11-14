<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.content" placeholder="配置名称" style="width: 200px; margin-right: 10px" class="filter-item" @keyup.enter.native="handleFilter"/>
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
        @click="handleCreate"
      >
        添加
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="success"
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
        label="问卷ID"
        prop="id"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="问卷名称"
        prop="name"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="关联病种" align="center">        
          <template slot-scope="{ row }">
            <span>{{ row.disease_id }}</span>
          </template>        
      </el-table-column>
      <el-table-column label="关联表单" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.form_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="配置" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" @click="showUpdate(row.id)">修改</el-button>
      </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
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
      downloadLoading: false
    };
  },
  created() {
    this.getList();
  },
  watch:{
  
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
    handleCreate(){

    },
    handleDownload(){
      
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    }
  },
};
</script>
