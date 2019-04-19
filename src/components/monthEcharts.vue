<template>
  <div>
    <div class = "tipTitle">
      月活（按银行名称）
    </div>
    <div id="monthE" style = "height: 180px;width: 100%"></div>
  </div>
</template>

<script>
    export default {
        name: "monthEcharts",
      data() {
          return {
            monthRequireData: [],
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
            this.monthRequireData.forEach((item) => {
              // console.log(item.name)
              if(newBankName === item.name){
                // console.log(item)
                item.selected = true
              }else{
                item.selected = false
              }
            })
            // console.log(this.monthRequireData)
            // 重新渲染echarts 饼状图
            this.monthEcharts()
          }
        }
      },
      methods:{
        getMonthRequireData(){
          this.$http.get("http://localhost:3000/monthEchartData")
            .then((res) => {
              // console.log(res.data)
              this.monthRequireData = res.data
              this.monthEcharts()
            })
        },
        monthEcharts() {
          let that = this
          let monthE = echarts.init(document.getElementById("monthE"))
          let option = {
            tooltip : {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)"
            },
            series : [
              {
                type: 'pie',
                radius: ['50%', '80%'],
                center: ['50%', '50%'],
                selectedMode: 'single',

                data: this.monthRequireData,
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
          monthE.setOption(option)
          monthE.on("click",function (params) {
            // console.log(params.name)
            localStorage.setItem("bankName",params.name)
            return  that.$store.commit("changeBankName", params.name)
          })
        }
      },
      created() {
      },
      mounted(){
          this.getMonthRequireData()
      }
    }
</script>

<style scoped>

</style>
