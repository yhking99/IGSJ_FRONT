<template>
  <div class="items">
    <p class="show_categories">
      <span>
        <router-link to="/">IGSJ 스토어</router-link>
      </span>
      <span>
        <router-link :to="{name: 'item', params: {cno: this.midLvCatArr[0].category_level}}">
          {{this.midLvCatArr[0].big_ctg}}
        </router-link>
      </span>
      <span v-if="this.midLvCatArr.length === 1">
        {{this.midLvCatArr[0].category_name}}
      </span>
    </p>
    <h4>{{this.midLvCatArr[0].big_ctg}}</h4>
    <div class="mid-level">
      <div class="midLvCat-name">중분류</div>
      <div class="midLvCat-total">
        <router-link :to="{name: 'item', params: {cno: this.midLvCatArr[0].category_level}}">전체</router-link>
      </div>
      <div class="midLvCat-detail">
        <ul>
          <li :key=i v-for="(ctg, i) in midLvCatArr">
            <router-link :to="{name: 'item', params: {cno: ctg.cno}}">
              {{ctg.category_name}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div><!-- 카테고리 내 상품들 --></div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      midLvCatArr: {}
    }
  },
  created(){
    this.$store.commit('setUrl', window.location.href)
    this.fn_CategoryDetails()
  },
  methods: {
    fn_CategoryDetails () {
      this.$axios.get(this.$serverUrl + '/category/items/' + window.location.href.slice(-3))
      .then((res) => {
        this.midLvCatArr = res.data
        console.log(this.midLvCatArr)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('error')
        }
      })
    }
  }
}
</script>

<style scoped>
  .items {
    display: block;
  }
  .show_categories {
    border-bottom: 1px solid darkgrey;
    padding: 6px 0;
    margin: 0;
  }
  .show_categories span {
    font-size: 12px;
    font-weight: bold;
  }
  .show_categories span::after {
    content: ' > ';
    font-weight: 100;
  }
  .show_categories span:first-child {
    margin-left: 10px;
  }
  .show_categories span:last-child::after {
    content: '';
  }
  .show_categories a {
    text-decoration: none;
    color: black;
  }
  .show_categories a:hover {
    text-decoration: underline;
  }
  h4 {
    font-weight:bold;
    border-bottom: 1px solid darkgrey;
    margin: 0;
    padding: 10px 8px;
  }
  .mid-level {
    display: flex;
    border-bottom: 1px solid darkgrey;
  }
  .mid-level div {
    height: 70px;
  }
  .midLvCat-name {
    font-size: 13px;
    font-weight: bold;
    width: 10%;
    padding-top: 10px;
    padding-left: 10px;
  }
  .midLvCat-total {
    width: 10%;
    padding-top: 10px;
    padding-left: 10px;
  }
  .midLvCat-total a {
    font-size: 12px;
    font-weight: bold;
    color: darkgrey;
    text-decoration: none;
    margin:0;
  }
  .midLvCat-total a:hover {
    text-decoration: underline;
    color: black;
  }
  .midLvCat-detail {
    width: 80%;
    padding-top: 10px;
    padding-left: 10px;
    display: flex;
  }
  .midLvCat-detail ul {
    width: 100%;
  }
  .midLvCat-detail li {
    list-style-type: none;
    float: left;
    width: 200px;
    margin: 0 auto;
  }
  .midLvCat-detail li a {
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    color: darkgrey;
  }
  .midLvCat-detail li a:hover {
    text-decoration: underline;
    color: black;
  }
</style>
