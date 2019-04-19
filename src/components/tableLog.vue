<template>
  <el-table
    :data="tableLogData"
    stripe
    style="width: 100%"
    :row-class-name = "changeName"
    @row-click = "clickChange"
    height="240">
    <el-table-column
      fixed
      prop="bankName"
      label="银行名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="requireNub"
      label="需求数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="visitLog"
      label="拜访日志"
      width="500">
    </el-table-column>
    <el-table-column
      prop="hostGuest"
      label="主客名称"
      width="120">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "tableLog",
      data () {
          return {
            tableLogData: [],
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
          }
        }
      },
      created() {
          this.getTableScoreDate()
      },
      mounted() {
      },
      methods: {
        getTableScoreDate() {
          this.$http.get('http://localhost:3000/tableLogData')
            .then((res) => {
              // console.log(res.data)
              this.tableLogData = res.data
            })
        },
        changeName(row){
          if(this.bankName === ''){
            return
          }else{
            if(row.row.bankName !== this.bankName){
              return "gray"
            }
          }
        },
        clickChange(row){
          // console.log(row.bankName)
          localStorage.setItem("bankName",row.bankName)
          // console.log(this.$store.state.bankName)
          return  this.$store.commit("changeBankName", row.bankName)
        }
      }
    }
</script>

<style>
  .gray{
    color: #d3d4d6;
  }
  tr:hover{
    cursor: pointer;
  }
</style>
