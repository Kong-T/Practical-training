function submit() {
  var name = $("#exampleFormControlInput1").val();                     //选题名
  var intro = $("#Textarea1").val();

   console.log(intro);                    //选题简介
  console.log("上传的通知题目" + name);
  console.log("上传的详细信息" + intro);
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/Ad_notice_edit",
    data: JSON.stringify({ "name": name, "intro": intro }), //将JSON对象转为字符串
    dataType: "JSON",
    contentType: "application/json",
    async: 'true',

    beforeSend: function (XMLHttpRequest, settings) {
      //ShowLoading();
      // console.log($.ajax.data);
    },
    success: function (data) {
      if (data == true) {
        alert("选题上传成功");
      }
    },
    error: function () {
      //请求出错处理
      console.log("选题上传失败");

    },

  })

}