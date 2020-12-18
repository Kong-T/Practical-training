 //选题改成表格展示
 window.onload = function () {//此处使用嵌套json数组
    $.ajax({
      url: "http://localhost:8080/Tcenter",
      type: "post",
      success: function (data) {
        /*这个方法里是ajax发送请求成功之后执行的代码*/
        // console.log(data);
        //window.length  =data.length;
        //console.log(window.length);
        showData(data);//做数据展示
      },
      error: function (msg) {
        alert("ajax连接异常：" + msg);
        console.log("error");
      }
    })
    function showData(data) {
      showMyInfo(data.teacherInfo);//个人信息
      showTopic(data.myTopic);// 题目信息
      showDirectTeam(data.guideTeam);//指导团队信息
      showReply(data.replyInfo);//答辩信息      
    }

    //展示个人信息
    function showMyInfo(data) {
      $("#teaName").html(data[1]);
      $("#teaId").html(data[0]);
      $("#contect").html(data[2]);
      $("#tip").html(data[3]);
    }

    //展示题目信息
    function showTopic(data) {
      var str = "";//定义用于拼接的字符串
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        console.log(data.length)
        var j = i * 1 + 1;
        str += "<tr><th scope=\"row\">" + j + "</th><td>" + data[i][0] + "</td><td>" + data[i][1] + "</td><td>" + data[i][2] + "</td></tr>";
      }
      console.log(str);
      $("#topic_table").html(str);
    }

    //展示指导小组
    function showDirectTeam(data) {
      console.log("showDirectTeam中的" + data);
      var str = "";//定义用于拼接的字符串
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        console.log(data.length);
        var j = i * 1 + 1;
        str += "<tr><th scope=\"row\">" + j + "</th><td>" + data[i][1] + "</td><td>" + data[i][2] + "</td><td>" + data[i][3] + "</td><td>" + data[i][4] + "</td><td>" + data[i][5] + "</td><td>" + data[i][6] + "</td><td>" + data[i][7] + "</td></tr>";
      }
      console.log(str);
      $("#direct_table").html(str);
    }

    //展示答辩信息
    function showReply(data) {
      console.log("showDirectTeam中的" + data);
      var str = "";//定义用于拼接的字符串
      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        var j = i * 1 + 1;
        str += "<tr><th scope=\"row\">" + j + "</th><td>" + data[i][0] + "</td><td>" + data[i][1] + "</td><td>" + data[i][2] + "</td><td>" + data[i][3] + "</td><td>" + data[i][4] + "</td><td>" + data[i][5] + "</td></tr>";
      }
      console.log(str);
      $("#replyInfo_table").html(str);
    }

       //修改联系方式
       function changeCon(){
         console.log("111")
        var contect=document.getElementById("con").value;
        $("#contect").html("<input type=\"text\" id=\"contected\" placeholder=\""+contect+"\">");//将显示内容变为可编辑状态，
        $("change").html("<button id=\"changeContect\" type=\"button\" onclick=\"saveContect()\">保存</button>");//修改按钮变为保存按钮
      }
      //将编辑内容传输到后端，成功后刷新页面
      function saveContect(){
        var contect=document.getElementById("contected").value;//获取修改后的联系方式
        var con={
          "contect":contect
        }
        $.ajax({
          url: "http://localhost:8080/Tguide",
          type: "post",
          data:contect,
          success: location.reload(),//重新加载页面
          error: function (msg) {
              alert("修改联系方式失败：" + msg);
              console.log("error");
          }  
          })
      }
  }