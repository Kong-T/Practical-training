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

      },
        false)
      console.log("222")
      guideGraderelease()
    })
  }, false)
}()

)

window.onload = function () {
    var name = "guide_grade";
    $.ajax({
      url: "http://localhost:8080/Tguide",
      type: "post",
      data: name, //点击页面名guide_grade
      success: function (data) {
        /*这个方法里是ajax发送请求成功之后执行的代码*/
        // console.log(data);
        window.data = data;
        window.length = data.length;//获取一个全局变量 用于表示小组数量
        console.log(window.length);
        showData(data);//我们仅做数据展示
      },
      error: function (msg) {
        alert("ajax连接异常：" + msg);
        console.log("error");
      }
    })
}
function showData(data) {
    console.log("showdata调用全局变量" + window.length);
    console.log("showdata中的" + data);
    var str = "";//定义用于拼接的字符串
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      var gradeid = "gradeID" + i;
      var teamid = "teamID" + i;
      // str += "<tr><td>" + data[i] + "</td><td><input type=\"text\"  id=" +gradeid +" placeholder = \"请输入分数\"></td></tr>"
      str += "<tr><td><div id =\"" + teamid + "\">" + data[i]
        + "</div></td><td><input type=\"text\"" + " " + "id=" + "\"" + gradeid
        + "\"" + " " + "placeholder='           请输入分数   ' value='' required><div class='invalid-feedback'>指导成绩为为必填段</div></td></tr>"
      console.log(str);
    }
    $("#tbody1").html(str);

  }


  function guideGraderelease() {
    // 第三种数组的定义
    var grade = {
      "teamid": new Array(),
      "grade": new Array()
    };

    var str0 = new Array();
    var teamID = new Array();

    for (var i = 0; i < window.length; i++) {
      str0[i] = "gradeID" + i;                    //成绩id
      teamID[i] = "teamID" + i;   //小组ID

      // 第三种
      grade.teamid[i] = document.getElementById(teamID[i]).innerText;
      grade.grade[i] = document.getElementById(str0[i]).value;
    }
    // console.log("grade"+grade.teamid);

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/Tguide_1",
      data: JSON.stringify(grade),
      dataType: "JSON",
      contentType: "application/json",
      async: 'true',
      success: function (data) {
        console.log(data);
        alert("指导成绩上传成功");
      },
      error: function (data) {
        //请求出错处理
        console.log(data);
        console.log("指导成绩上传失败");

      },

    })

  }