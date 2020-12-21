var wdata;
window.onload = function () {
    console.log("111")

    // 请求后端数据
    $.ajax({
        url: "http://localhost:8080/Ad_time_all",
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
//数据展示
function showdata(a){
    var str;
    //先动态生成列表内容
    for(i =0;i<wdata.returnIteam.length;i++){
        var printid = "edit"+i;
        var k = 1*i+1;
        str+="<tr><th scope='col'>"+k+"</th>"//生成序号
        //生成信息
        for(j =0;j<wdata.returnIteam[i].length;j++){
            str += " <td scope='col'>"+wdata.returnIteam[i][j]+"</td>"
        }
        //编辑span触发模态框
        str += "<td> <a><span type='button' data-toggle='modal' data-target='#edit' class='glyphicon glyphicon glyphicon-edit' id='"+
        printid+"'></span></a></td></tr>"
    }
    $("#tbody").html(str)
}
//修改模态框事件
function edit(){
        //选择时间和地点
        var i = 0;
        var team_now;
        $(document).on('click', "span[id^='edit']", function (e) {
            btn_now = e.target.id;
            flag = 1;
            console.log("函数内" + btn_now);
            console.log(btn_now)
            i = btn_now.substr(4, btn_now.length)
            console.log("当前小组"+i)
            var flagname = btn_now.substr(0, btn_now.length - 1)
            team_now = wdata.Already[i][0]
            console.log(wdata)
            console.log("对小组进行edit"+team_now)
            console.log(flagname)
        })


    //模态框确定按钮
        $("#btn_add").click(function () {

            //获取输入的新成员的姓名学号
            console.log("111")
            var time = $("#Addname").val();//模态框
            var place  = $("#Addid").val();//模态框
            console.log(time, place)
            
            $('#edit').modal('hide');//关闭模态框
    
            //传回time，place，组号
            // $.ajax({
            //     type: "POST",
            //     url: "http://localhost:8080/Ad_time_1",
            //     data: JSON.stringify({ "time": time, "place": place, "teamid": team_now }), //将JSON对象转为字符串
            //     dataType: "JSON",
            //     contentType: "application/json",
            //     async: 'true',
            //     success: function () {
            //         alert("success");
            //     },
            //     error: function () {
            //         //请求出错处理
            //         console.log("error");
            //     },
            // })
        })
    
}

//搜索事件
function search(){

}