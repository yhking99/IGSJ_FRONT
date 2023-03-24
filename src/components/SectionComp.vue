<template>
  <div class="section">
    <div class="section-menu" style="">
        <h5>{{title}}</h5>
    </div>
    <div class="section-content"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
  .section {
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(1, 100%);
    width: 100%;
    height: 400px;
    gap: 0;
    grid-template-areas:
      "a b b b b b b b" ;
    border-bottom: 1px solid darkgrey;
  }
  .section-menu {
    grid-area: a;
  }
  .section-content {
    grid-area: b;
  }
</style>

