
    function addMember() {
        var str = "";
        str = "<div class='form-group col-md-6'><label for='inputPassword6'>教室</label><input id='inputPassword6' class='form-control mx-sm-3' aria-describedby='passwordHelpInline'></div>"
        +"<div class='form-group col-md-6'><label for='inputPassword6'>评委数量</label><input  id='inputPassword6' class='form-control mx-sm-3' aria-describedby='passwordHelpInline'></div>"
        $("#example").append(str);
      }
  
 function postTime(){
  console.log("postman触发")
  var info = $("#example").serializeArray();
  var time = $("#example111").serializeArray();
  var total=info+'&'+time;
  //将表单数据序列化
  console.log(total);
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/还没写",
    data: JSON.stringify(total), //将序列化后的表单转换成json格式
    dataType: "JSON",
    contentType: "application/json",
    async: 'true',
    success: function (data) {
      console.log(data);
      alert("提交成功！");
    },
    error: function () {
      console.log("333");
      alert("提交失败！");
    }
  })
 } 
      