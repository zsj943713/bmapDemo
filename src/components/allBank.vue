<template>
    <div>
      <div class = "tipTitle">
        所属银行
      </div>
      <div class = "bankname">
        <button v-for="item in AllBankData" v-if="item.bankName === bankName && bankName !== ''" @click="changeName(item.bankName)">{{item.bankName}}</button>
        <button v-for="item in AllBankData" v-if="bankName === ''" @click="changeName(item.bankName)">{{item.bankName}}</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "allBank",
        data(){
          return {
            AllBankData:[],
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
            this.bankName = newBankName
          }
        }
      },
      created() {
        this.getAllBankData()
      },
      mounted() {
      },
      methods: {
          getAllBankData(){
            this.$http.get("http://localhost:3000/allBankData")
              .then((res) => {
                // console.log(res.data)
                this.AllBankData = res.data
                // console.log(this.AllBankData)
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
  .bankname>button{
    display: block;
  }
</style>
