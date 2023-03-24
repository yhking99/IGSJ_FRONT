<template>
  <div class="contents">
    <Sections title="실시간 랭킹"/>
    <Sections title="스타일"/>
    <Sections title="스페셜"/>
    <Sections title="쇼핑 이슈"/>
    <Sections title="구매 후기"/>
    <Sections title="주요 브랜드"/>
    <Sections title="공지사항"/>
  </div>
</template>

<script>
import Sections from "../components/SectionComp.vue"

export default {
  components: {Sections},
  data () {
    return {

    }
  },
  created(){
    this.$store.commit('setUrl', window.location.href)
  }
}
</script>


<style scoped>
  .contents {
    display:block;
  }
</style>
