<template>
    <div class = "container">
	<form class = "form-horizontal">
		<div class = "form-group">
			<div class = "col-sm-offset-2 col-sm-4">
				<h2 align = "center">회원 가입</h2>
			</div>
		</div>
		<div class = "form-group">
			<label for = "id" class = "col-sm-3 control-label">아이디<label style = "color:red; font-size:15px;">(아이디는 영어만 입력 가능합니다.)</label></label>
			
			<div class = "col-sm-2">
				<input type = "text" class = "form-control" id = "id" v-model = "id" onkeyup="this.value=this.value.replace(/[^a-zA-Z][^0-9]/g,'');" maxlength = "20" placeholder = "아이디 입력"/>
			</div>
			<button type = "button" @click= "idCheck()">아이디 중복 확인</button>
			
		</div>
		<div class = "form-group">
		<label for = "pwd" class = "col-sm-3 control-label">비밀번호</label>
			<div class = "col-sm-2">
				<input type = "password" class = "form-control" id = "pwd" v-model = "pwd" maxlength = "20" placeholder = "비밀번호 입력"/>
			</div>
		</div>
		<div class = "form-group">
		<label for = "repwd" class = "col-sm-3 control-label">비밀번호 확인</label>
			<div class = "col-sm-2">
				<input type = "password" class = "form-control" id = "repwd" v-model = "repwd" maxlength = "20" placeholder = "비밀번호 확인"/>
			</div>
		</div>
		<div class = "form-group">
		<label for = "name" class = "col-sm-3 control-label">이름</label>
			<div class = "col-sm-2">
				<input type = "text" class = "form-control" id = "name" v-model = "name" maxlength = "20" placeholder = "이름 입력"/>
			</div>
		</div>
		<div class = "form-group">
		<label for = "name" class = "col-sm-3 control-label">생년월일</label>
			<div class = "col-sm-2">
				<input type = "date" class = "form-control" id = "birth" v-model = "birth" maxlength = "20" placeholder = "생년월일 입력"/>
			</div>
		</div>
		<div class = "form-group">
		<label for = "name" class = "col-sm-3 control-label">전화번호</label>
			<div class = "col-sm-2">
				<input type = "tel" class = "form-control" id = "phoneNumber" v-model = "phoneNumber" onkeyup="this.value=this.value.replace(/[^0-9]/gi,'');" maxlength = "20" placeholder = "'-'를 제외한 전화번호"/>
			</div>
		</div>
		<div class = "form-group">
		<label for = "email" class = "col-sm-3 control-label">이메일</label>
			<div class = "col-sm-5">
				<input type = "email" class = "form-control" id = "email" v-model = "email" maxlength = "100" placeholder = "이메일 입력"/>
			</div>
		</div>
		<div class = "form-group">
				<label for = "address">우편 번호</label>
				<div class = "col-sm-4">
					<input type = "text" class = "form-control" id = "zipcode" v-model = "postAddress"/>
					<input type = "button" class = "form-control btn btn-danger"  @click = "daumZipCode()" value = "우편번호 검색"/>
					<!-- 자바스크립트로 api 처리하자 -->
				</div>
			</div>
			<div class = "form-group">
				<label for = "address">주  소</label>
				<div class = "col-sm-4">
					<input type = "text" class = "form-control" id = "address_1" v-model = "address"/>
				</div>
			</div>
			<div class = "form-group">
				<label for = "address">상세 주소</label>
				<div class = "col-sm-4">
					<input type = "text" class = "form-control" id = "address_2" v-model = "detailAddress"/>
				</div>
			</div>
	
     	<div class="form-group">
            <button type="reset"  class="btn btn-warning">다시 입력</button>
            <button type="submit" id = "submit" class="btn btn-primary" @click = "submitForm()" disabled>회원 가입</button>
    </div>
	</form>
</div>
</template>

<script>
export default {
	data(){
		return { 
			userId : '',
			userPwd : '',
			userName : '',
			Email : '',
			phoneNumber : '',
			birth : '',
			postAddress : '',
			address : '',
			detailAddress : '',
		}
	},
	methods: {
		submitForm() {
		if(document.getElementById("id").value == "" || document.getElementById("id").value == null || document.getElementById("id").value.length < 4) {
			alert("아이디를 4자 이상 입력해주십시오.")
			document.getElementById("id").focus();
			return false
		}
		if(document.getElementById("pwd").value == "" || document.getElementById("pwd").value == null || document.getElementById("pwd").value.length < 4) {
			alert("비밀번호를 4자 이상 입력해주십시오.")
			document.getElementById("pwd").focus();
			return false
		}
		if(document.getElementById("pwd").value != document.getElementById("repwd").value) {
			alert("비밀번호와 비밀번호 확인 입력값이 다릅니다.")
			document.getElementById("repwd").focus();
			return false
		}
		if(document.getElementById("name").value == "" || document.getElementById("name").value == null || document.getElementById("name").value.length < 2) {
			alert("이름은 2자 이상 입력해주십시오.")
			document.getElementById("pwd").focus();
			return false
		}
		if(document.getElementById("birth").value == "" || document.getElementById("birth").value == null) {
			alert("생년월일을 입력해주십시오.")
			document.getElementById("pwd").focus();
			return false
		}
		if(document.getElementById("email").value == "" || document.getElementById("email").value == null) {
			alert("이메일을 입력해주십시오.")
			document.getElementById("email").focus();
			return false
		}
		if(document.getElementById("zipcode").value == "" || document.getElementById("zipcode").value == null) {
			alert("우편번호를 입력해주십시오.")
			document.getElementById("zipcode").focus();
			return false
		}
		if(document.getElementById("address_1").value == "" || document.getElementById("address_1").value == null) {
			alert("주소를 입력해주십시오.")
			document.getElementById("address_1").focus();
			return false
		}
		if(document.getElementById("address_2").value == "" || document.getElementById("address_2").value == null) {
			alert("상세주소를 입력해주십시오.")
			document.getElementById("address_2").focus();
			return false
		}
		this.$axios.post(this.$serverUrl + '/member/memberSignUp', {
			userId : this.id,
			userPwd : this.pwd,
			userName : this.name,
			userEmail : this.email, 
			userPhoneNumber : this.phoneNumber,
			userBirth : this.birth,
		}).then((res) => {
			console.log(res.data)
		}).catch((err) => {
			if (err.message.indexOf('Network Error') > -1) {
        	alert('Server Error. Access Later')
			}
		}),
		this.$axios.post(this.$serverUrl + '/address/memberAddressSignUp', {
			userId : this.id,
			postAddress : this.postAddress,
			address : this.address,
			detailAddress : this.detailAddress,
		}).then((res) => {
			console.log(res.data)
		}).catch((err) => {
			if (err.message.indexOf('Network Error') > -1) {
        	alert('Server Error. Access Later')
			}
		}),
		alert("회원가입이 완료되었습니다.");
		location.href = "http://localhost:8080/"
		},
		idCheck() {
			if(document.getElementById("id").value == "" || document.getElementById("id").value == null){
				alert("아이디칸을 채우고 중복확인을 부탁드립니다.")
				document.getElementById("id").focus()
			}
			this.$axios.post(this.$serverUrl + "/member/idCheck", {
				userId : this.id
			}).then((res) => {
				const result = res.data
				console.log(result)
				if(result == 1) {
					alert("이미 사용 중인 아이디입니다.다른 아이디를 입력하십시오.");
					document.getElementById("submit").setAttribute("disabled", false);
					document.getElementById("id").focus()
				} else if (result == 0 && document.getElementById("id").value != null && document.getElementById("id").value != ""){ 
					alert("사용 가능한 아이디입니다.");
					document.getElementById("submit").removeAttribute("disabled");
					document.getElementById("id").readOnly = true;
				}
				console.log(this.idCheck)
			}).catch((err) => {
				if (err.message.indexOf('Network Error') > -1) {
        		alert('회원가입 오류 다시 시도해주십시오.')
			}
		});
		},
		daumZipCode() {
			new window.daum.Postcode({
    			oncomplete: (data) => {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let fullRoadAddr = data.roadAddress; // 도로명 주소 변수
            let extraRoadAddr = ''; // 도로명 조합형 주소 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
              extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }
            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
            if(fullRoadAddr !== ''){
                fullRoadAddr += extraRoadAddr;
            }
					this.postAddress = data.zonecode; // 5자리의 새 우편번호
					this.address = fullRoadAddr; // 주소칸에 주소를 넣어준다. 
					document.getElementById('address_2').focus();
				}	
			}).open({  
			popupName:  'postcodePopup'
				
			});

		}
	}
}
</script>