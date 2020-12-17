// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
        postTeam()
      }, false)
    })
  }, false)
}()

)

    function addMember() {
      var str = "";
      str =  "<div class='col-md-6 mb-3'><label for='cc-name'>学号</label><input type='text' class='form-control' id='cc-name'placeholder=''></div>" +
        "<div class='col-md-6 mb-3'><label for='cc-number'>名字</label><input type='text' class='form-control' id='cc-number' placeholder=''></div>"
      $("#example").append(str);
    }


    function postTeam() {
      console.log("111")
      var team = $("#form111").serializeArray();//将表单数据序列化
      console.log(team);
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/listTeam",
        data: JSON.stringify(team), //将序列化后的表单转换成json格式
        dataType: "JSON",
        contentType: "application/json",
        async: 'true',
        success: function (data) {
          console.log(data);
          alert("提交成功！");
        },
        error: function () {
          
          alert("提交失败！");
        }
      })


    }


