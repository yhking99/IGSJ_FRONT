<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          전체
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/categories/item">OUTER</router-link><br>
          <router-link to="#">TOP</router-link><br>
          <router-link to="#">BOTTOM</router-link><br>
          <router-link to="#">ACC</router-link><br>
          <router-link to="#">SHOES</router-link>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          OUTER
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="#">가디건</router-link><br>
          <router-link to="#">코트</router-link><br>
          <router-link to="#">패딩</router-link><br>
          <router-link to="#">재킷</router-link>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          TOP
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="#">니트/스웨터</router-link><br>
          <router-link to="#">셔츠/블라우스</router-link><br>
          <router-link to="#">후드</router-link><br>
          <router-link to="#">맨투맨</router-link>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          BOTTOM
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="#">슬랙스</router-link><br>
          <router-link to="#">트레이닝</router-link><br>
          <router-link to="#">데님팬츠</router-link><br>
          <router-link to="#">스커트</router-link>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          ACC
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="#">귀걸이</router-link><br>
          <router-link to="#">목걸이</router-link><br>
          <router-link to="#">반지</router-link><br>
          <router-link to="#">벨트</router-link>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          SHOES
        </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="#">구두</router-link><br>
          <router-link to="#">운동화</router-link><br>
          <router-link to="#">샌들</router-link><br>
          <router-link to="#">슬리퍼</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  data () { 
    return {
      sampleData: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .accordion-button:hover {
    background: #f2f2f2;
  }
  .accordion-body a:hover {
    font-weight:bold;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>