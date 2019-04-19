<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><i class="el-icon-menu"></i>处理中心</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-setting"></i>万得主客</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(typeof key);
      if(key === "2"){
        this.$router.push('hostGuest')
      }else{
        this.$router.push('homeInfo')
      }
    }
  }
}
</script>

<style>
#app {
}
  *{
    padding: 0;
    margin: 0;
  }
</style>
