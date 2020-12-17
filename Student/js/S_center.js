
window.onload = function () {
    var name = "stu_userCenter";//当前网页名
    $.ajax({
        url: "http://localhost:8080/studentCenter",
        type: "POST",
        data: {
        "data":name
        },
        contentType:"application/json",
        success: function (data) {
            /*这个方法里是ajax发送请求成功之后执行的代码*/
           // var data=JSON.parse(data);//解析JSON数据
            console.log(data)
            // for ( index = 0; index < data.studentInfo.length; index++) {
            //     const element = array[index];
            //     console.log(data.studentInfo[i]);
            // }
            console.log(data.data.studentInfo[0].studentId)
          //  window.length = data.length;//获取一个全局变量 用于表示小组数量
           // console.log(window.length);
           showStudentData(data);//我们仅做数据展示
           showTeamData(data);
        //    showTopicData(data);
        //    showTeacherData(data);
           // showReplyData(data);
           // showGradeData(data);
        },
        error: function (msg) {
            // alert("ajax连接异常：" + msg);
            console.log("error");
            // showTeamData(data);

        }
    })
}
      //展示个人简介的方法
      function showStudentData(data) {
        var str = "";
        str = "<tr><td><span class='badge' style='margin-right:10px;'>姓名</span>" + data.data.studentInfo[0].studentName
            + "</td><td><span class='badge' style='margin-right:10px;''>组号</span>" + data.data.studentInfo[0].studentId
            + "</td><td><span class='badge'style='margin-right:10px;'>指导老师</span>"
            + data.data.studentInfo[0].teamId +
            "</td></tr>";
        $("#tab111").html(str);

    }
    //展示分组信息的界面
    function showTeamfData(data) {
        var str = "";
        for (var i = 0; i < data.data2.length; i++) {
            str = "<tr><td>" + data.data2[i].Team_id + "</td><td>"  + data.data2[i].Teammate_id + "</td><td>"
                + data.data2[i].Teammate_name + "</td></tr>";

        }
        $("#tbo112").html(str);
    }
    //展示选题信息的界面
    function showTopicData(data) {
        var str = "";
        str = "<thead><tr><th><p style='text-align: center'><span>" + data.data3[0].Subject_title
            + "</span></th><th style='text-align:center'>选题内容</th><th style='text-align:center'>指导老师</th></tr></thead><tbody><tr><td>"
            + data.data3[0].Details + "</td><td>" +data.data3[0].Tutor + "</td></tr>";

        $("#tab113").html(str);
    }
    //展示指导老师信息的界面
    function showTeacherData(data) {
        var str = "";
        if (data.data4[0].Teacher_name == "周峰") {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/周峰.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }
        else if (data.data4[0].Teacher_name == "王磊") {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/王磊.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }
        else if (data.data4[0].Teacher_name == "李自力") {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/李自力.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }

        else if (data.data4[0].Teacher_name == "韩延明") {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/韩延明.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }
        else if (data.data4[0].Teacher_name == "李瑾坤") {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/李瑾坤.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }
        else if (data.data4[0].Teacher_name== "陈久强") {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/陈久强.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }
        else {
            str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
                + "<img src='../image/Teacher_img/谢志龙.PNG' style='width: 100%px; height: 100%px;'><img src='../image/Teacher_img/陈斌.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
            $("#tab114").html(str);
        }
    }
    //展示答辩信息的界面
    function showReplyData(data) {
        var str = "";
        str = "<tr><td>" + data.data5[0].Team_id + "</td><td>" + data.data5[0].Reply_place + "</td><td>" + data.data5[0].Reply_time + "</td><td>"
            + data.data5[0].Teacher1_name + "</td><td>" + data.data5[0].Teacher2_name + "</td><td>" + data.data5[0].Teacher3_name + "</td></tr>";
        $("#tbo115").html(str);

    }
    //展示成绩信息的页面
    function showGradeData(data) {
        var str = "";
        str = "<tr><td>" + data.data6[0].Team_id + "</td><td>" + data.data6[0].Guide_grade + "</td><td>" + data.data6[0].Reply_grade + "</td><td>"
            + data.data6[0].Team_grade + "</td><tr>";
        $("#tbo116").html(str);
    }
