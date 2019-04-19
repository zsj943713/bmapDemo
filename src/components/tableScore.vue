<template>
  <div>
    <el-table
      :data="tableScoreData"
      stripe
      height="200"
      border
      :row-class-name = "changeName"
      @row-click = "clickChange"
      style="width: 100%">
      <el-table-column
        prop="bankName"
        label="银行名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="负责人"
        width="80">
      </el-table-column>
      <el-table-column
        prop="number"
        label="理财师人数"
        width="80">
      </el-table-column>
      <el-table-column
        prop="annualAchieve"
        label="年度业绩"
        width="100">
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">总计</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">321312312311231</div></el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "tableScore",
        data () {
          return {
            tableScoreData: [],
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
          // console.log('watch start……');
          // console.log(this.$store.state.bankName, "+++++++++")
          // console.log(oldBankName)
          // console.log(newBankName)
          if(oldBankName !== newBankName){
            // 监视银行是否发生变化
            // console.log(oldBankName + "旧的")
            // console.log(newBankName + "新的")
            // console.log(this.changeName)
            this.bankName = newBankName
            // console.log(this.bankName)
          }
        }
    },
      created (){
          this.getTableScoreDate()
      },
      mounted () {

      },
      methods: {
        getTableScoreDate() {
          this.$http.get('http://localhost:3000/tableScoreData')
            .then((res) => {
                // console.log(res.data)
              this.tableScoreData = res.data
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
      },
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
