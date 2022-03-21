function warSign() {
  let userId = document.querySelector('#signid').value
  let userPw = document.querySelector('#signpw').value
  
  // 아이디 유효성체크
  if(userId === "") {
    document.querySelector("#warId").innerHTML = '아이디를 입력해주세요'
  } else {
    document.querySelector("#warId").innerHTML = '사용할 수 있는 아이디입니다'
  }
  // 비밀번호 유효성체크
  if(userPw === "") {
    document.querySelector("#warPw").innerHTML = '비밀번호를 입력해주세요'
  } else {
    document.querySelector("#warPw").innerHTML = '사용할 수 있는 비밀번호입니다'
  }

  // 전화번호 유효성 체크
  let phoneNumber1 = document.querySelector('#signnumber').value;

  let regPhone = /^01([0|1])-?([0-9]{4})-?([0-9]{4})$/;
      if (regPhone.test(phoneNumber1) === true){
        document.querySelector("#warNumber").innerHTML = '정확한 전화번호가 입력되었습니다'
      } else {
        document.querySelector("#warNumber").innerHTML = '정확한 전화번호를 작성해주세요'
      }
  
  // 이메일 유효성체크
  let userEmail = document.querySelector('#signemail').value;

  if(userEmail === "") {
    document.querySelector("#warEmail").innerHTML = '이메일을 입력해주세요'
  } else {
    document.querySelector("#warEmail").innerHTML = '정상적으로 입력되었습니다'
  }

  // 회원명 유효성체크
  let userName = document.querySelector('#signname').value

  if(userName === "") {
    document.querySelector("#warName").innerHTML = '회원명을 입력해주세요'
  } else {
    document.querySelector("#warName").innerHTML = '정상적으로 입력되었습니다'
  }
}
