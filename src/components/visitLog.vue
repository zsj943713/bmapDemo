<template>
  <div class = "visitLog">
    <div class = "tipTitle">
      拜访日志
    </div>
    <div v-for = "item in visitLog" class = "visitNmae" v-if="bankName === item.bankName && bankName !== ''"  @click="changeName(item.bankName)">{{item.visitLog}}</div>
    <div v-for = "item in visitLog" class = "visitNmae" v-if="bankName === ''"  @click="changeName(item.bankName)">{{item.visitLog}}</div>
  </div>
</template>
<script>
    export default {
        name: "visitLog",
      data() {
          return  {
            visitLog: [],
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
            this.bankName = newBankName
          }
        }
      },
      created() {
          this.getVisitLogData()
      },
      mounted() {
      },
      methods: {
          getVisitLogData (){
            this.$http.get('http://localhost:3000/tableLogData')
              .then((res) => {
                // console.log(res.data)
                this.visitLog = res.data
                // console.log(this.visitLog)
              })
          },
        changeName(bankName){
          // console.log(bankName)
          localStorage.setItem("bankName",bankName)
          return  this.$store.commit("changeBankName", bankName)
        }
      }
    }
</script>

<style>
  .visitLog  .visitNmae{
    color: #8c939d;
    font-size: 12px;
  }
  .visitNmae:hover{
    cursor: pointer;
  }

</style>
