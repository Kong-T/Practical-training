var wdata;
window.onload = function () {
    console.log("111")

    // 请求后端数据
    $.ajax({
        url: "http://localhost:8080/Ad_grade_all",
        type: "post",
        success: function (data) {
            console.log(data)
            console.log(data.returnIteam[1][1])
            wdata = data;
            showdata(data);//我们仅做数据展示
        },
        error: function (msg) {
            // alert("ajax连接异常：" + msg);
            console.log("error");
        }
    })
}

function showdata(a){
    var str;
    //先动态生成列表内容
    for(i =0;i<wdata.returnIteam.length;i++){
        var printid = "print"+i;
        var k = 1*i+1;
        str+="<tr><th scope='col'>"+k+"</th>"
        for(j =0;j<wdata.returnIteam[i].length;j++){
            str += " <td scope='col'>"+wdata.returnIteam[i][j]+"</td>"
        }
        //成绩界面传值小组id 即 teamid
        var searchUrl =encodeURI("PrintGrade.html?teamid="+wdata.returnIteam[i][0]);   //使用encodeURI编码
        // str += "<li>" + "<a href = \""+searchUrl+"\" target=\"_blank\">"+wdata.returnIteam[i][j] + wdata.returnIteam[i][j] + "</a></li>";
        str += "<td><a href='"+ searchUrl+"'><span type='button' class='glyphicon glyphicon glyphicon-print' id='"+printid +"'></span></a></td></tr>"
    }
    $("#tbody").html(str)

}