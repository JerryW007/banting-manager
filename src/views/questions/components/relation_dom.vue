<template>
  <div style="margin-bottom: 10px">
    <span style="font-weight: bold">依赖表:</span>
    <el-select
      v-model="current_table_name"
      filterable
      placeholder="请选择"
      style="margin-left: 25px; margin-right: 20px"
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
      v-model="current_column_name"
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
  </div>
</template>
<script>
import questions from "@/api/question";

export default {
  setup() {},
};
</script>
