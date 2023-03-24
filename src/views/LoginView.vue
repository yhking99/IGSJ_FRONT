<template>
  <div class="main" style="width:1200px; margin:0 auto;">
    <h1>Login</h1>
    <input type="text">
    <input type="password">
  </div>
</template>

<script>
export default {
  data () { 
    return {
      sampleData: ''
    }
  },
  created(){
    this.$store.commit('setUrl', window.location.href)
  }
}
</script>

<style scoped>
  .main {
    display: block;
    height: 2000px;
  }
</style>
