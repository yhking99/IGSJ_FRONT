export default {
  data() {
    return {

    };
  },
  created(){
    this.$store.commit('setUrl', window.location.href)
  },

}
