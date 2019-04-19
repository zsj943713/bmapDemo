<template>
    <div>
      <div class = "tipTitle">
        需求数（按所属银行）
      </div>
      <div id="allRequire" style = "height: 180px;width: 100%"></div>
    </div>
</template>

<script>
    export default {
      name: "allBankEcharts",
      data(){
        return {
          allRequireData: [],
          bing1: null
        }
      },
      computed: {
        listenstage() {
          return this.$store.state.bankName;
        }
      },
      watch: {
        listenstage: function(newBankName,oldBankName,){
          if(oldBankName !== newBankName){
            // 监视银行是否发生变化
            this.bankName = newBankName
            // console.log(this.allRequireData)
            this.allRequireData.forEach((item) => {
              // console.log(item.name)
              if(newBankName === item.name){
                // console.log(item)
                item.selected = true
              }else{
                item.selected = false
              }
            })
            // console.log(this.allRequireData)
            // 重新渲染echarts 饼状图
            this.echartALLRequire()
          }
        }
      },
      methods:{
        getAllrequireData() {
          this.$http.get("http://localhost:3000/allBankEchartsData")
            .then((res) => {
              // console.log(res.data)
              this.allRequireData = res.data
              this.echartALLRequire()
            })
        },
        echartALLRequire() {
           let that = this
           that.bing1 = echarts.init(document.getElementById("allRequire"))
           let option = {
            tooltip : {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)"
            },
            // legend: {
            //   data: this.legendData,
            // },
            series : [
              {
                type: 'pie',
                radius: ['50%', '80%'],
                center: ['50%', '50%'],
                selectedMode: 'single',
                silent: false,          //饼图不响应鼠标事件
                data:this.allRequireData,
                itemStyle: {
                  normal: {
                    label: {            //饼图图形上的文本标签
                      show: false,
                    },
                    labelLine: {
                      show: false   //隐藏标示线
                    }
                  },
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          that.bing1.setOption(option)
          that.bing1.on("click",function (params) {
            // console.log(params.name)
            localStorage.setItem("bankName",params.name)
            return  that.$store.commit("changeBankName", params.name)
          })
        }
      },
      created() {
      },
      mounted(){
        this.getAllrequireData()
      }
    }
</script>

<style scoped>

</style>
