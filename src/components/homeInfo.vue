<template>
  <div id = "home">
    <el-row>
<!--      地图组件-->
      <el-col :span="14"><mapBank></mapBank></el-col>
      <el-col :span="10"><div class="grid-content bg-purple-light">
<!--        年度业绩表格组件-->
        <tableScore></tableScore>
<!--        拜访日志表格-->
        <tableLog></tableLog>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="5"><div class="grid-content bg-purple" style = "height: 200px">
<!--        所有银行名称组件-->
        <allBank></allBank>
      </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light" style = "height: 200px">
<!--        拜访日志组件-->
        <visitLog></visitLog>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple" style = "height: 200px">
<!--        需求数组件-->
        <allBankEcharts></allBankEcharts>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light" style = "height: 200px">
<!--        月活组件-->
        <monthEcharts></monthEcharts>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple" style = "height: 200px">
<!--            周活组件-->
        <weekEcharts></weekEcharts>
      </div></el-col>
    </el-row>
  </div>
</template>
<script>
  import mapBank from './mapBank'
  import tableScore from  './tableScore'
  import tableLog from  './tableLog'
  import allBank from  './allBank'
  import visitLog from  './visitLog'
  import allBankEcharts from  './allBankEcharts'
  import monthEcharts from  './monthEcharts'
  import weekEcharts from  './weekEcharts'
  export default {
    name: 'App',
    components: {mapBank, tableScore, tableLog, allBank, visitLog, allBankEcharts, monthEcharts, weekEcharts},
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #home .el-table td, .el-table th{
    padding: 0!important;
  }
  #home .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    font-size: 12px;
  }
  #home th,tr, td{
    padding: 0!important;
    margin: 0!important;
  }
  #home .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    padding: 5px;
  }
  #home .bankname>button{
    border: none;
    outline: none;
    background: transparent;
    font-size: 20px;
    text-align: center;
  }
  #home .bankname>button:hover{
    cursor: pointer;
  }
  /*#home .bankname>button:first-child{*/
  /*  color: orangered;*/
  /*  transform: rotate(-20deg) translate(10px,10px);*/
  /*}*/
  /*#home .bankname>button:nth-child(2){*/
  /*  color: #3a8ee6;*/
  /*  transform: rotate(-50deg) translate(10px,20px);*/
  /*}*/
  /*#home .bankname>button:nth-child(3){*/
  /*  color: #ccc;*/
  /*  transform: rotate(-30deg) translate(30px,50px);*/
  /*}*/
  /*#home .bankname>button:nth-child(4){*/
  /*  color: #5daf34;*/
  /*  transform: rotate(20deg) translate(10px,40px);*/
  /*}*/
  /*#home .bankname>button:last-child{*/
  /*  color: yellow;*/
  /*  transform: rotate(10deg) translate(10px,50px);*/
  /*}*/
  #home .tipTitle {
    font-size:  14px;
    color: #c1c1c1;
  }
</style>
