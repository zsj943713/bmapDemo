import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { //这里的state必须是JSON，是一个对象
    bankName: '中国建设银行' //这是初始值
  },
  mutations: {//突变，罗列所有可能改变state的方法
    changeBankName(state, n) {
      state.bankName = n //直接改变了state中的值，而并不是返回了一个新的state
    }
  }
});
export default store;//用export default 封装代码，让外部可以引用
