<template>
  <div>
    <div class = "tipTitle">
      周活（按银行名称）
    </div>
    <div id="weekE" style = "height: 180px;width: 100%"></div>
  </div>
</template>

<script>
  export default {
    name: "weekEcharts",
    data(){
      return{
        weekRequireData: [],
        bankName: ''
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
          this.weekRequireData.forEach((item) => {
            // console.log(item.name)
            if(newBankName === item.name){
              // console.log(item)
              item.selected = true
            }else{
              item.selected = false
            }
          })
          // console.log(this.weekRequireData)
          // 重新渲染echarts 饼状图
          this.weekEcharts()
        }
      }
    },
    methods:{
      getWeekRequireData(){
        this.$http.get("http://localhost:3000/weekEchartData")
          .then((res) => {
            this.weekRequireData = res.data
            this.weekEcharts()
          })
      },
      weekEcharts() {
        let that = this
        let weekE = echarts.init(document.getElementById("weekE"))
        let option = {
          tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          label: {
            normal: {
              show: false,
              // position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          series : [
            {
              type: 'pie',
              radius: ['50%', '80%'],
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: this.weekRequireData,
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
        weekE.setOption(option)
        weekE.on("click",function (params) {
          // console.log(params.name)
          localStorage.setItem("bankName",params.name)
          return  that.$store.commit("changeBankName", params.name)
        })
      }
    },
    created() {
    },
    mounted(){
      this.getWeekRequireData()
    }
  }
</script>

<style scoped>

</style>

