<template>
  <div style="margin-left: 10px; margin-top: 10px">
    <div style="margin-bottom: 10px" v-if="
        (!('as_sub_option' in question) && isShow) ||
        ('as_sub_option' in question && !question.as_sub_option && isShow)
      ">
      {{ question.title }}
    </div>
    <div :id="question.column_key">
      <template v-if="question.question_type == 'list'">
        <template v-if="typeOf(question.options) == '[object Array]'">
          <template v-for="item in question.options">
            <el-checkbox v-model="item.check_status" v-if="item.item_type == 'checkbox' && optionMonitor(item)" :label="item.term_id" :key="item.term_id" :style="{
                'margin-bottom': '10px',
                display: question.as_sub_option ? 'block' : 'inner-block',
              }" @change="changeOption(item)">
              {{ item.zh_cn }}
              <template v-if="'other_key' in item">
                <input :key="item.term_id" type="text" name="signal" class="el-input__inner" v-model="item[item.other_key]" />
              </template>
            </el-checkbox>
            <el-radio v-model="item.check_status" v-if="item.item_type == 'radio' && optionMonitor(item)" :label="item.term_id" :key="item.term_id" :style="{
                'margin-bottom': '10px',
                display: question.as_sub_option ? 'block' : 'inner-block',
              }" @change="changeOption(item)">{{ item.zh_cn }}
              <template v-if="'other_key' in item">
                <input :key="item.term_id" type="text" name="signal" class="el-input__inner" v-model="item[item.other_key]" />
              </template>
            </el-radio>
          </template>
        </template>
        <template v-if="typeOf(question.options) == '[object Object]'">
          <div v-for="(groupOptions, key) in question.options" :key="key">
            <div style="margin-bottom: 10px">
              {{ key }}
            </div>
            <template v-for="item in groupOptions">
              <el-checkbox v-model="item.check_status" v-if="item.item_type == 'checkbox' && optionMonitor(item)" :label="item.term_id" :key="item.term_id" :style="{
                  'margin-bottom': '10px',
                  display: question.as_sub_option ? 'block' : 'inner-block',
                }" @change="changeOption(item)">
                {{ item.zh_cn }}
                <template v-if="'other_key' in item">
                  <input :key="item.term_id" type="text" name="signal" class="el-input__inner" v-model="item[item.other_key]" />
                </template>
              </el-checkbox>
              <el-radio v-model="item.check_status" v-if="item.item_type == 'radio' && optionMonitor(item)" :label="item.term_id" :key="item.term_id" :style="{
                  'margin-bottom': '10px',
                  display: question.as_sub_option ? 'block' : 'inner-block',
                }" @change="changeOption(item)">{{ item.zh_cn }}
                <template v-if="'other_key' in item">
                  <input :key="item.term_id" type="text" name="signal" class="el-input__inner" v-model="item[item.other_key]" />
                </template>
              </el-radio>
            </template>
          </div>
        </template>
      </template>
      <template v-if="
          question.question_type == 'datetime' ||
          question.question_type == 'date'
        ">
        <el-date-picker v-model="question.column_value" type="date" placeholder="选择日期">
        </el-date-picker>
      </template>
      <template v-if="question.question_type == 'string'">
        <el-input v-model="question.column_value" style="width: 30%" placeholder="请输入内容"></el-input>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    question: {
      type: Object,
      default: {},
    },
    questions: {
      type: Object,
      default: {},
    },
  },
  created() {},
  mounted() {
    this.hasOption();
  },
  updated() {
    this.hasOption();
  },
  watch: {},
  methods: {
    typeOf(data) {
      return Object.prototype.toString.call(data);
    },
    hasOption() {
      let optionDom = document.getElementById(this.question.column_key);
      if (optionDom != undefined) {
        this.isShow = optionDom.childElementCount > 0;
      }
    },
    changeOption(option) {
      let isArray = this.question.options instanceof Array;
      if (option.item_type == "radio") {
        if (isArray) {
          for (let option_item of this.question.options) {
            if (option_item.term_id != option.term_id) {
              option_item.check_status = false;
            }
          }
        } else {
          for (let groupKey in this.question.options) {
            for (let option_item of this.question.options[groupKey]) {
              if (option_item.term_id != option.term_id) {
                option_item.check_status = false;
              }
            }
          }
        }
      } else {
        if (isArray) {
          for (let option_item of this.question.options) {
            if (
              option_item.term_id != option.term_id &&
              option_item.item_type == "radio"
            ) {
              option_item.check_status = false;
            }
          }
        } else {
          for (let groupKey in this.question.options) {
            for (let option_item of this.question.options[groupKey]) {
              if (
                option_item.term_id != option.term_id &&
                option_item.item_type == "radio"
              ) {
                option_item.check_status = false;
              }
            }
          }
        }
      }
      // 修改返回值
      let values = [];
      if (isArray) {
        for (let option_item of this.question.options) {
          if (option_item.check_status) {
            values.push(option_item.term_id);
          }
        }
      } else {
        for (let groupKey in this.question.options) {
          for (let option_item of this.question.options[groupKey]) {
            if (option_item.check_status) {
              values.push(option_item.term_id);
            }
          }
        }
      }
      this.question.column_value = values.join(",");
    },
    optionMonitor(option) {
      let match = true;
      if (!("show" in option) || option.show.length == 0) {
        return true;
      }
      for (let show_conditions of option.show) {
        for (let key of Object.keys(show_conditions)) {
          if (
            key in this.questions && 
            'column_value' in this.questions[key] &&
            !this.questions[key].column_value.includes(show_conditions[key])
          ) {
            match = false;
          }
        }
        if (match) {
          return true;
        }
        match = true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
.el-input__inner {
  width: 220px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  height: 15px;
  /* margin-left: -2px; */
  padding-left: 10px;
  outline: medium;
}
</style>
  