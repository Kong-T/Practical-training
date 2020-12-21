
window.onload = function () {
    var name = "report_grade";
    $.ajax({
      url: "http://localhost:8080/TReportGrade",
      type: "post",
      data: name, 
      success: function (data) {
        /*这个方法里是ajax发送请求成功之后执行的代码*/
        //console.log(data);
        window.data = data;
        console.log(data)
        window.length  =data.R_team.length;//获取一个全局变量 用于表示小组数量
        console.log(window.length);
        showData(data);//我们仅做数据展示
      },
      error: function (msg) {
        // alert("ajax连接异常：" + msg);
        console.log("error");
      }
    })
    function showData(data) {
      console.log("showdata调用全局变量"+window.length);
      console.log("showdata中的"+data);
      var str = "";//定义用于拼接的字符串
      for (var i = 0; i < window.length; i++) {
        var time ="time"+i;
        var place = "place" +i;
        var team = "team"+i;
        var grade ="gradeID"+i
        // str += "<tr><td>" + data[i] + "</td><td><input type=\"text\"  id=" +gradeid +" placeholder = \"请输入分数\"></td></tr>"
        str += "<tr><td><div style='text-align: center;' id = " + time + ">" + data.R_team[i] + "</div></td><td><div style='text-align: center;'  id = " + place + ">" + data.R_place[i] + "</div><td><div style='text-align: center;'  id = " + team + ">" + data.R_team[i] + "</div></td><td style='text-align: center;' ><input type=\"text\""+" "+"id="+"\""+grade+"\""+" "
        +"placeholder=' 请输入分数   ' style='text-align: center;'  value='' required><div class='invalid-feedback'>答辩成绩为为必填段</div></td></tr>"
        console.log(str);
      }
      $("#table1").html(str);

    }
  }

  function replyGraderelease() {
     // 第三种数组的定义
     var grade={
        "teamid":new Array(),
        "grade":new Array()
      };
     
    var str0 = new Array();
    var teamID = new Array();

    for (var i = 0; i <window.length; i++) {
      str0[i] = "gradeID" + i;                    //成绩id
      teamID[i] = "team"+i;   //小组ID

      // 第三种
      grade.teamid[i]=document.getElementById(teamID[i]).innerText;
      grade.grade[i]=document.getElementById(str0[i]).value;
    }
    console.log("grade"+grade.teamid);
 
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/TReportGrade_1",
      data: JSON.stringify(grade),
      dataType: "JSON",
      contentType: "application/json",
      async: 'true',
      success: function (data) {
        if (data.msg == true) {
          alert("答辩成绩上传成功");
        }
      },
      error: function () {
        //请求出错处理
        console.log("答辩成绩上传失败");

      },

    })

  }