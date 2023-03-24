<template>
  <div class="main" style="width:1200px; margin:0 auto;">
    <h1>Product</h1>
    <img :src="imgSrc">
  </div>
</template>

<script>
export default {
  data () { 
    return {
      imgSrc: require("../assets/item_infos.jpg")
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
