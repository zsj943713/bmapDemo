<template>
 <div class="grid-content bg-purple"><div id="container" ref="allmap" style = "width: 100%;height: 450px"></div></div>
</template>

<script>
    export default {
        name: "mapBank",
      data() {
          return{
            allPoints: [],
            point:[],
            option: {},
            bampChart: null
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
            this.point = [];
              // console.log(newBankName)
            // 数据已经发生了变化
            // console.log(this.point)
            //  从原接口拿数据进行比较
            this.allPoints.forEach((item) => {
              // console.log(item[2])
              if(item[2] === newBankName){
                this.point.push(item)
              }
            })
            this.option.series[0].data = this.point
            this.bampChart.setOption(this.option)
          }
        }
      },
      methods: {
        map(){
          let dom = document.getElementById("container");
          this.bampChart = echarts.init(dom);
          var app = {};
          let that = this;
          app.title = '热力图与百度地图扩展';
          that.$http.get('http://localhost:3000/mapBankData')
            .then((res) => {
              // 接口里所有的数据
              this.allPoints = res.data
              // 首次point 默认等于 接口里的所有数据
              this.point = this.allPoints
              // console.log(this.point)
               this.option = {
                animation: false,
                bmap: {
                  // center: [120.13066322374, 30.240018034923],
                  zoom: 5,
                  roam: true
                },
                tooltip : {
                  formatter: function(param) {
                    // console.log(param.data[3])
                    // console.log(param.data[2])
                    return param.data[3] + ":" + param.data[2]
                  }
                },
                series: [{
                  name: '银行分布',
                  type: 'effectScatter',
                  symbolSize: 8,
                  coordinateSystem: 'bmap',
                  data: that.point,
                  pointSize: 4,
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      shadowBlur: 1,
                      shadowColor: 'red',
                      color: 'green'
                    }
                  }
                }]
              }
              that.bampChart.setOption(that.option);
              if (!app.inNode) {
                // 添加百度地图插件
                var bmap = that.bampChart.getModel().getComponent('bmap').getBMap();
                bmap.addControl(new BMap.MapTypeControl());
              }
              ;
              if (that.option && typeof that.option === "object") {
                that.bampChart.setOption(that.option, true);
              }
              that.bampChart.on("click",function (params) {
                // console.log(params.data[2])
                localStorage.setItem("bankName",params.data[2])
                // console.log(localStorage.getItem("bankName"))
                // console.log(that.$store)
                return  that.$store.commit("changeBankName", params.data[2]);
                // this.$emit('headCallBack', params.data[2]); //第一个参数是父组件中v-on绑定的自定义回调方法，第二个参数为传递的参数
              })
              // myChart.on("click",this.sendMsg(params))
            })
        },
      },
      mounted() {
        this.map()
      }
    }
</script>

<style scoped>

</style>
