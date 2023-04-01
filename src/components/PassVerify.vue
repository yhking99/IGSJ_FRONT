<template>
<div class = "container">
    <form class = "form-horizontal">
        <div class = "form-group">
			<div class = "col-sm-offset-2 col-sm-4">
				<h2 align = "center">비밀번호 입력</h2>
			</div>
		</div>
        <div class = "form-group">
			<label for = "id" class = "col-sm-3 control-label">아이디</label>
			<div class = "col-sm-2">
				<input type = "text" class = "form-control" id = "id" v-model = "userId" onkeyup="this.value=this.value.replace(/[^a-zA-Z][^0-9]/g,'');" maxlength = "20" readonly/>
			</div>
		</div>
        <div class = "form-group">
		<label for = "pwd" class = "col-sm-3 control-label">비밀번호</label>
			<div class = "col-sm-2">
				<input type = "password" class = "form-control" id = "pwd" v-model = "userPwd" maxlength = "20" placeholder = "비밀번호 입력"/>
			</div>
		</div>
        <div class="user-update">
            <button type="submit" id="update-btn" @click = "enterEdit()">확인</button>
        </div>
        <div class="user-withdrawal">
                <button type="button" id="withdrawal-btn" name="withdrawal-btn" @click = "goHome()">메인페이지</button>
        </div>
        </form> 
    </div>
</template>

<script>
 export default {
    data () {
        return {
            // memberDTO : 
            // {
            // userId : ''
            // },
            // userPwd : ''
            memberDTO : {},
            userId:'',
            userPwd:''
        }
    },
    created() {  //lifecycle hook - vue.js
        this.enter(this.$store.state.userInfo.userId)
    },
    methods: {
        goHome(){
            location.href = 'http://localhost:8080/'
        },
        enter(userId) {
            this.$axios.get(this.$serverUrl + "/member/memberProfile/" + userId
            ).then((res) => {
                    console.log(res.data)
                    this.memberDTO = res.data
                    this.userId = this.memberDTO.userId
                }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
        	        alert('회원 정보 조회 불가')
                }
            })
        },
         enterEdit() {
            this.$axios.post(this.$serverUrl + "/member/passVerify", {
                userId: this.userId,
                userPwd:this.userPwd
            }).then((res) => {
                console.log(res.data)
                if(res.data == 1) {
                    alert("비밀번호 인증 성공")
                    // location.href = "http://localhost:8080/"
                    this.$router.push({name:'MyPage'})
                } else if(res.data == 0) {
                    alert("비밀번호 인증 실패")
                }
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
        	    alert('회원 비밀번호 검증 실패')
                }
            })
        }
    }
}


</script>