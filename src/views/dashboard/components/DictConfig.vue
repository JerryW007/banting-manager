<template>
    <div>
        <div class="card-panel-text">字段配置统计</div>
        <div id="dc" :style="{ height: height, width: width }" />
    </div>
</template>
  
  <script>
import echarts from "echarts";
import questions from '@/api/question'
export default {
  data() {
    return {
      height: "400px",
      width: "100%",
      xAxisData:[],
      yValidationData: [],
      yRelationData: []
    };
  },  
  created() {
    this.getValidationData();
    setTimeout(() => {
        this.getRelationData();
    },200)
    
    
  },
  mounted() {
    setTimeout(() => {
        var chartDom = document.getElementById("dc");
        var myChart = echarts.init(chartDom);
        myChart.setOption(this.setOption(this.xAxisData, this.yValidationData, this.yRelationData));
    }, 400)
  },
  methods: {
    setOption(xAxisData, yValidationData, yRelationData) {
        let option = {
            xAxis: {
                data: xAxisData,
                type: "category",
                axisLabel:{
                    show:true,
                    interval: 0
                }
            },
            yAxis: {
                type: "value",
            },
            legend:{
                show:true,
                data:['字段配置','依赖配置']
            },
            series: [
                {
                    name:'字段配置',
                    data: yValidationData,
                    type: "bar",
                    showBackground: true,
                    backgroundStyle: {
                        color: "rgba(130, 180, 180, 0.2)",
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示数值
                                position: 'top', //数值在上方显示
                                textStyle: {  //数值样式
                                    color: '#00DBFF',   //字体颜色
                                    fontSize: 14  //字体大小
                                }
                            }
                        }
                    }
                },
                {
                    name:'依赖配置',
                    data: yRelationData,
                    type: "bar",
                    showBackground: true,
                    backgroundStyle: {
                        color: "rgba(130, 10, 180, 0.2)",
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示数值
                                position: 'top', //数值在上方显示
                                textStyle: {  //数值样式
                                    color: '#D1DBF00',   //字体颜色
                                    fontSize: 14  //字体大小
                                }
                            }
                        }
                    }
                },
            ],
        }
        return option
    },
    getValidationData() {
        questions.validationStat().then((response) => {
            const body = response.body;
            let list = body.result;
            let xd = []
            let yd = []
            for (let item of list) {
                xd.push(item.disease_id)
                yd.push(item.count)
            }
            this.xAxisData = xd
            this.yValidationData = yd
        });
    },
    getRelationData() {
        questions.relationStat().then((response) => {
            const body = response.body;
            let list = body.result;
            let xd = []
            let yd = []
            for (let item of list) {
                xd.push(item.disease_id)
                yd.push(item.count)
            }
            this.xAxisData = xd
            this.yRelationData = yd
        });
    },
  },
};
</script>
<style lang="scss" scoped>
    .card-panel-text {
        font-weight: bold;
        text-align: center;
        margin: 10px;
        margin-left: 20px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 25px;
        margin-bottom: 12px;
    }
</style>
  