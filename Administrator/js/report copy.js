window.onload = function () {


    // // 请求后端数据
    // $.ajax({
    //     url: "http://localhost:8080/",
    //     type: "post",
    //     data: name,
    //     success: function (data) {
    //         showData(data);//我们仅做数据展示
    //     },
    //     error: function (msg) {
    //         alert("ajax连接异常：" + msg);
    //         console.log("error");
    //     }
    // })

    //当后台没有数据，即data为null 展示暂无答辩安排
    if (data = null) {
        $("document").append("暂无答辩安排")
    }

    //假设的后端数据
    var team = new Array("TJ_01", "TJ_02", "TJ_03")
    var place = new Array("D501", "D502", "D503")
    var teacher = new Array("周峰", "王磊", "陈久强", "韩延明", "李瑾坤", "李自力", "谢志龙")
    console.log(teacher)
    console.log(teacher.length)


    var head = "<thead><tr><th>答辩时间</th><th>答辩场地</th><th>答辩小组</th><th>评分教师</th></tr></thead>";//定义用于拼接的字符串
    show.html(head);
    $("table").append(show);



    // 展示数据 方法很笨但是绝对没错！！！妈的！！！
    var str = "";
    var place_content = ""
    var teacher_content = ""

    //拼地点
    for (var k = 0; k < place.length; k++) {
        place_content += "<option value=\"" + place[k] + "\">" + place[k] + "</option>"//答辩场地下拉列表里的内容
    }
    var place = "<select class=\"R_place\"><option>选择教室</option>" + place_content + "</select>"
    console.log(place)

    //拼教师
    for (var j = 0; j < teacher.length; j++) {
        teacher_content += "<option>" + teacher[j] + "</option>"//下拉列表里的内容
    }
    var teacher = "<select>教师：<option></option>" + teacher_content + "</select>"
    console.log(teacher)

    // 拼时间拼小组 ✌合起来了！
    for (var i = 0; i < team.length; i++) {
        console.log(team.length)
        str += "<tr><td><input type=\"date\" id=\"date" + i + "\"/><input type=\"time\" id=\"time" + i + "\"/></td>" + "<td id=\"place" + i + "\"><td>" + place + "</td> " + "<td id = \"team" + i + "\" >" + team[i] + "</td > <td td id= \"teacher" + i + "\"> " + teacher + "</td></tr > "
    }
    console.log(str)
    var show = $("<tr></tr>")
    show.html(str);
    $("tbody").append(show);





    //时间框默认显示当前值
    var now = new Date(),
        year = now.getFullYear(),//当前年份
        month = now.getMonth() + 1,//当前月份
        date = now.getDate(),
        hour = now.getHours(),
        minute = now.getMinutes();
    console.log(month)
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + now.getDate();
    }
    var dateString = year + "-" + month + "-" + date
    var timeString = hour + ":" + minute;
    console.log(dateString)
    for (var i = 0; i < team.length; i++) {
        var date = document.getElementById("date" + i)
        date.value = dateString
        var time = document.getElementById("time" + i)
        time.value = timeString
    }






    //管理员操作
    //给按钮绑定事件
    var btn = document.getElementById("submit");
    btn.addEventListener("click", submit);

    function submit() {
        //获取设定的值
        var time = ""
        var placeValue = ""
        console.log("123")
        for (var i = 0; i < team.length; i++) {
            var dateValue = document.getElementById("date" + i).value;//获取date
            var timeValue = document.getElementById("time" + i).value;//获取date
            time = dateValue + " " + timeValue;
            console.log(time)

            var index = document.getElementById("place" + i);
            var index = document.getElementById("place" + i).selectedIndex;//获取当前选择项的索引
            // var value = $("td#place" + i.R_place).find("option:selected").val();
            console.log(index)

            // console.log(value)


        }
    }

    function change() {
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/",
            data: JSON.stringify({ "T_id": T_id, "T_pw": T_pw }), //将JSON对象转为字符串
            dataType: "JSON",
            contentType: "application/json",
            async: 'true',
            beforeSend: function (XMLHttpRequest, settings) {
                //ShowLoading();
                // console.log($.ajax.data);
            },
            success: function () {
                alert("success");
            },
            error: function () {
                //请求出错处理
                console.log("error");

            },

        })

    }
}







