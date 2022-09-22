<template>

    <div
      style="
        margin-bottom: 10px;
        margin-top: 10px;
        /* border: #a9a9a9 solid 1px; */
        padding: 5px 5px;
        border-radius: 6px;      
      "
    >
      <span style="font-weight: bold">依赖表:</span>
      <el-select
        v-model="table_name"
        filterable
        placeholder="请选择"
        style="margin-left: 35px; margin-right: 20px"
      >
        <el-option
          v-for="item in table_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span style="font-weight: bold">依赖字段:</span>
      <el-select
        v-model="column_name"
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
      <span style="font-weight: bold; margin-left: 10px">依赖选项:</span>
      <el-select
        v-model="term_id"
        filterable
        multiple
        placeholder="请选择"
        style="margin-left: 10px"
      >
        <el-option
          v-for="item in term_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span style="font-weight: bold; margin-left: 15px; margin-right: 10px">关系:</span>
      <el-radio v-model="relation_type" label="and" style="margin-right: 15px">且</el-radio>
      <el-radio v-model="relation_type" label="or" style="margin-right: 15px">或</el-radio>
      <el-button style="padding:6px;" type="danger" size="mini" icon="el-icon-delete" circle @click="deleteRelation(index)"></el-button>
    </div>
</template>
<script>
import questions from "@/api/question";

export default {
  setup() {},
  props: {
    disease_id: String,
    index: Number,
  },
  data() {
    return {
      term_id: '',
      table_name: '',
      column_name: '',
      relation_type: '',
      table_options: [],
      column_options: [],
      term_options: [],
    };
  },
  created() {
    this.getTableOptions();
  },
  watch: {
    table_name: function (newValue, oldValue) {
      this.getColumnOptions();
    },
    column_name: function (newValue, oldValue) {
      this.getTermOptions();
    },
  },
  methods: {
    deleteRelation(index) {
      console.log('child remove relation', index)
      this.$emit('removeRelation', index)
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
    getTermOptions() {
      if (this.column_name.length == 0) {
        return;
      }
      questions
        .questionTerms({
          disease_id: this.disease_id,
          content: this.column_name,
        })
        .then((response) => {
          const body = response.body;
          console.log(body.result);
          let term_options = [];
          for (let index in body.result) {
            term_options.push({
              value: body.result[index].term_id,
              label: body.result[index].zh_cn,
            });
          }
          this.term_options = term_options;
          setTimeout(() => {
            this.listLoading = false;
          }, 1 * 200);
        });
    },
    getColumnOptions() {
      this.listLoading = true;
      questions
        .columnOptions({
          disease_id: this.disease_id,
          tableName: this.table_name,
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
