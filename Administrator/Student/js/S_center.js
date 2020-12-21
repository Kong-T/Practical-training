window.onload = function () {
    var name = "stu_userCenter";//当前网页名
    $.ajax({
        url: "http://localhost:8080/studentCenter",
        type: "POST",
        data: {
            "data": name
        },
        contentType: "application/json",
        success: function (data) {
            /*这个方法里是ajax发送请求成功之后执行的代码*/
            // var data=JSON.parse(data);//解析JSON数据
            console.log(data)
            // for ( index = 0; index < data.studentInfo.length; index++) {
            //     const element = array[index];
            //     console.log(data.studentInfo[i]);
            // }
            console.log(data.data.studentInfo[0].studentId)
            // window.data = data;
            //  window.length = data.length;//获取一个全局变量 用于表示小组数量
            // console.log(window.length);
            showStudentData(data);//我们仅做数据展示
            showTeamData(data);
            showTopicData(data);
            showTeacherData(data);
            showReplyData(data);
            showGradeData(data);
        },
        error: function (msg) {
            // alert("ajax连接异常：" + msg);
            console.log("error");
            // showTeamData(data);

        }
    })

//展示个人简介的方法
function showStudentData(data) {
    var str = "";
    var sname = "";
    console.log(data);
    str = "<tr><td><span class='border rounded overflow-hidden flex-md-row mb-4 badge mb-auto'>组号:</span>" +
        "<span style='background-color:#adcceb; color:white' id='teaId' class='border rounded overflow-hidden flex-md-row mb-4 shadow-sm badge mb-auto'>"
        + data.data.studentInfo[0].teamId + "</span></td></tr>"
        + "<tr><td><span class='border rounded overflow-hidden flex-md-row mb-4 badge mb-auto'>指导老师:</span>" +
        "<span style='background-color:#adcceb; color:white' id='teaId' class='border rounded overflow-hidden flex-md-row mb-4 shadow-sm badge mb-auto'>"
        + data.data.subject[0].Tutor + "</span></td></tr>"
        + "<tr><td><span class='border rounded overflow-hidden flex-md-row mb-4 badge mb-auto'>备注信息:</span>" +
        "<span style='background-color:#adcceb; color:white' id='teaId' class='border rounded overflow-hidden flex-md-row mb-4 shadow-sm badge mb-auto'>"
        + data.data.studentInfo[0].contact + "</span></td></tr>"
    sname = data.data.studentInfo[0].studentName;
    $("#tab111").html(str);
    $("#stuName").html(sname);

}
//展示分组信息的界面
function showTeamData(data) {
    var str = "";
    str = "<thead class='thead-light'><tr><th scope='col'>" + data.data.team[0].teamId
        + "</th><th scope='col'>学号</th><th scope='col'>姓名</th></tr></thead><tbody><tr><td>组长</td><td>"
        + data.data.team[0].teamLeaderId + "</td><td>" + data.data.team[0].teamLeaderName
        + "</td></tr><tr><td>组员</td><td>" + data.data.team[0].teammate1Id + "</td><td>" + data.data.team[0].teammate1Name
        + "</td></tr><tr><td>组员</td><td>" + data.data.team[0].teammate2Id + "</td><td>" + data.data.team[0].teammate2Name
        + "</td></tr><tr><td>组员</td><td>" + data.data.team[0].teammate3Id + "</td><td>" + data.data.team[0].teammate3Name
        + "</td></tr><tr><td>组员</td><td>" + data.data.team[0].teammate4Id + "</td><td>" + data.data.team[0].teammate4Name
        + "</td></tr><tr><td>组员</td><td>" + data.data.team[0].teammate5Id + "</td><td>" + data.data.team[0].teammate5Name 
        + "</td></tr></tbody>";

    $("#tbo112").html(str);
}
//展示选题信息的界面
function showTopicData(data) {
    var str = "";
    var strr = "";
    str = data.data.subject[0].subjectName;

    str = data.data.subject[0].subjectDetails;

    $("#topicname").html(str);
    $("#topicde").html(strr);
}
//展示指导老师信息的界面
function showTeacherData(data) {
    var str = "";
    if (data.data.subject[0].Tutor == "周峰") {
        str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
            + "<img src='../image/Teacher_img/周峰.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
        $("#tab114").html(str);
    }
    else if (data.data.subject[0].Tutor == "王磊") {
        str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
            + "<img src='../image/Teacher_img/王磊.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
        $("#tab114").html(str);
    }
    else if (data.data.subject[0].Tutor == "李自力") {
        str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
            + "<img src='../image/Teacher_img/李自力.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
        $("#tab114").html(str);
    }

    else if (data.data.subject[0].Tutor == "韩延明") {
        str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
            + "<img src='../image/Teacher_img/韩延明.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
        $("#tab114").html(str);
    }
    else if (data.data.subject[0].Tutor == "李瑾坤") {
        str = "<tbody><tr class='firstRow'><td width='175px' height='175px' text-align='center' valign='top' style='padding: 5px 10px; border: 1px solid rgb(51, 51, 51); word-break: break-all;'><p style='text-align: center'>"
            + "<img src='../image/Teacher_img/李瑾坤.PNG' style='width: 100%px; height: 100%px;'></p></td></tr>";
        $("#tab114").html(str);
    }
    else if (data.data.subject[0].Tutor == "陈久强") {
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
    str = "<tr><td>" + data.data.reply[0].replyPlace + "</td><td>" + data.data.reply[0].replyTime + "</td><td>"
        + data.data.reply[0].Teacher1 + "</td><td>" + data.data.reply[0].Teacher2 + "</td><td>" + data.data.reply[0].Teacher3 + "</td></tr>";
    $("#tbo115").html(str);

}
//展示成绩信息的页面
function showGradeData(data) {
    var str = "";
    str = "<tr><td>" + data.data.finalGrade[0].guideGrade + "</td><td>" + data.data.finalGrade[0].replyGrade + "</td><td>"
        + data.data.finalGrade[0].teamGrade + "</td><tr>";
    $("#tbo116").html(str);
}
}