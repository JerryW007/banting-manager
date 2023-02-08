<template>

    <div
      style="
        /* margin-bottom: 10px; */
        /* margin-top: 10px; */
        /* border: #a9a9a9 solid 1px; */
        border-radius: 6px;      
      "
    > <div v-if="index > 0 && relation_count[0] != index">
        <div style="margin-left:20px;">|</div>
        <div style="margin-left:15px;color:blue; font-weight:bold;cursor:default" @click="changeRelationType" >{{form_data.relation_type == '&' ? '且' : '或'}}</div>
        <div style="margin-left:20px;">|</div>
      </div>
      <span style="font-weight: bold">依赖表:</span>
      <el-select
        v-model="form_data.table_name"
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
        v-model="form_data.column_name"
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
        v-model="form_data.term_id"
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
      <el-radio v-model="form_data.option_relation_type" label="and" style="margin-right: 15px">且</el-radio>
      <el-radio v-model="form_data.option_relation_type" label="or" style="margin-right: 15px">或</el-radio>
      <el-button style="padding:6px;" type="danger" size="mini" icon="el-icon-delete" circle @click="deleteRelation(index)"></el-button>
    </div>
</template>
<script>
import questions from "@/api/question";

export default {
  setup() {},
  props: {
    disease_id: String,
    project_tag: String,
    index: Number,
    relation_count: Array
  },
  data() {
    return {
      form_data:{
        term_id: [],
        table_name: '',
        column_name: '',
        relation_type:'&',
        option_relation_type: 'and',
      },
      table_options: [],
      column_options: [],
      term_options: [],
    };
  },
  created() {
    this.getTableOptions();
  },
  watch: {
    'form_data.table_name': function (newValue, oldValue) {
      this.getColumnOptions();
      this.form_data.term_id = []
    },
    'form_data.column_name': function (newValue, oldValue) {
      this.getTermOptions();
      this.form_data.term_id = []
    },
    'form_data.term_id': function(new_list, old_list) {
      this.deliverData();
    },
  },
  methods: {
    deliverData() {
      this.$emit('addRelationData', this.index, this.form_data)
    },
    changeRelationType() {
      this.form_data.relation_type = this.form_data.relation_type == '&' ? '|' :'&'
    },
    deleteRelation(index) {
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
      if (this.column_name == '') {
        return;
      }
      questions
        .questionTerms({
          disease_id: this.disease_id,
          content: this.form_data.column_name,
          project_tag: this.project_tag
        })
        .then((response) => {
          const body = response.body;
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
          tableName: this.form_data.table_name,
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
