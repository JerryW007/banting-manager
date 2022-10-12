<template>
  <div>
    <div style="margin-bottom: 15px" v-if="tagType == 'select'">
      <span style="font-weight: bold">{{ title }}:</span>
      <el-select
        v-model="self_disease_id"
        filterable
        clearable
        placeholder="请选择"
        style="margin-left: 10px"
      >
        <el-option
          v-for="item in diseaseOptions"
          :key="item.value"
          :label="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div v-if="tagType == 'radio'" style="margin-bottom:15px;">
      <span style="font-weight: bold;float:left;margin-right:10px;margin-bottom:10px;">{{ title }}:</span>
      <el-radio-group v-model="self_disease_id" style="margin-left:80px;display: block;">
        <el-radio
          v-for="item in diseaseOptions"
          :key="item.value"
          :label="item.value"
          style="margin-bottom:5px;"
          >{{ item.value }}</el-radio
        >
      </el-radio-group>
    </div>
    <div v-if="tagType == 'checkbox'" style="margin-bottom:15px;">
      <span style="font-weight: bold;float:left;margin-right:10px;margin-bottom:10px;">{{ title }}:</span>
      <el-checkbox-group v-model="self_disease_id" style="margin-left:80px;display: block;">
        <el-checkbox
          v-for="item in diseaseOptions"
          :key="item.value"
          :label="item.value"
          style="margin-bottom:5px;"
          >{{ item.value }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
// import diseaseInfo from "@/api/disease_info";
export default {
  name: "diseaseSelect",
  data() {
    return {
      self_disease_id: this.disease_id,
      diseaseOptions: [
        { value: "AA", label: "再生障碍性贫血" },
        { value: "ALL", label: "急性淋巴细胞白血病" },
        { value: "AML", label: "急性髓系白血病" },
        { value: "CML", label: "慢性髓性白血病" },
        { value: "SLL", label: "小淋巴细胞淋巴瘤" },
        { value: "CLL", label: "慢性淋巴细胞白血病" },
        { value: "DLBCL", label: "弥漫性大B细胞淋巴瘤" },
        { value: "HMP", label: "血友病" },
        { value: "Leukemia", label: "白血病" },
        { value: "MDS", label: "骨髓增生异常综合征" },
        { value: "MF", label: "骨髓纤维化" },
        { value: "MM", label: "多发性骨髓瘤" },
        { value: "NHL", label: "非霍奇金淋巴瘤" },
      ],
    };
  },
  props: {
    disease_id: {
      type: String,
      default: "AML",
    },
    title: {
      type: String,
      default: "选择队列",
    },
    tagType: {
      type: String,
      default: "select",
    },
  },
  model: {
    prop: "disease_id",
    event: "change",
  },
  created() {
    // this.getDiseaseOptions()
  },
  watch: {
    self_disease_id: function (newValue) {
      this.$emit("change", this.self_disease_id);
    },
  },
  methods: {
    // getDiseaseOptions(){
    //     diseaseInfo.getAllDiseaseInfo().then(response =>{
    //         const body = response.body;
    //         let disease_infos = body.result;
    //         for (const element of disease_infos) {
    //             this.diseaseOptions.push({value:element.disease_id,label: element.disease_id})
    //         }
    //         setTimeout(() => {
    //             this.listLoading = false;
    //             }, 1 * 200);
    //     });
    // },
  },
};
</script>
