<template>
  <div id = "home">
      <!--      地图组件-->
      <el-col :span="24"><mapBank></mapBank></el-col>
      <!--        年度业绩表格组件-->
      <el-col :span="24"><tableScore></tableScore></el-col>
      <!--        拜访日志表格-->
      <el-col :span="24"><tableLog></tableLog></el-col>
      <!--        所有银行名称组件-->
      <el-col :span="24"><allBank></allBank></el-col>
      <!--        拜访日志组件-->
      <el-col :span="24"><visitLog></visitLog></el-col>
      <!--        需求数组件-->
      <el-col :span="24"><allBankEcharts></allBankEcharts></el-col>
      <!--        月活组件-->
      <el-col :span="24"><monthEcharts></monthEcharts></el-col>
      <!--            周活组件-->
      <el-col :span="24"><weekEcharts></weekEcharts></el-col>
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

