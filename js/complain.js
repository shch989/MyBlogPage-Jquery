// 현재시간 실시간 등록
$(document).ready(function () { 
  startDate(); 
}); 

function startDate() { 
  date = setInterval(function () { 
      let dateString = ""; 

      let newDate = new Date(); 

      dateString += newDate.getFullYear() + "/"; 
      dateString += ("0" + (newDate.getMonth() + 1)).slice(-2) + "/";
      dateString += ("0" + newDate.getDate()).slice(-2) + " "; 
      dateString += ("0" + newDate.getHours()).slice(-2) + ":"; 
      dateString += ("0" + newDate.getMinutes()).slice(-2) + ":"; 
      dateString += ("0" + newDate.getSeconds()).slice(-2);

      $("#nowtime").text(dateString); 
  }, 1000); 
} 

// 체크박스 클릭시 텍스트 내용 완료로 변경
$(document).ready(function(){
  $('#chkAll').change(function(){
      if($('#chkAll').is(":checked")) {
          $('.clear').text("완료")
      }
  })
})

$ (function() {
  $("#datepicker").datepicker();
});