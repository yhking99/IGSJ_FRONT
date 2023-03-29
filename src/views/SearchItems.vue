<template>
  <div>
    <span>입력값(검색어)을 문장열로 받아서 서버로 전송, 아래 쿼리문 실행</span>
    <h1>SELECT * <br>FROM ProductDTO <br>WHERE product_name LIKE '%{입력값}%';</h1>
  </div>
</template>

<script>
export default { 
  data () { 
    return {
      
    }
  },
  methods: {}
}
</script>