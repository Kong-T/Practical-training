
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

    //后端数据
    var Leader_id = new Array("41811023", "41899202", "83672732", "73682628", "71528238", "73547383", "83645173", "83745283")
    var Leader_name = new Array("山鹑男", "王元浩", "何娟", "谭贺娟", "金锐丽", "周炫怡", "时间分", "小三角")
    var Topic = new Array("实训辅助管理系统", "实训辅助管理系统", "超图系统", "超图系统", "超图系统", "超图系统", "超图系统", "超图系统")
    var Alltopic = new Array("实训辅助管理系统", "数字货币资讯管理", "超图系统", "航空订票系统")





    // //生成所有选题的下拉列表，并添加到模态框
    var topic_content = ""
    var topic_select = ""
    for (var i = 0; i < Alltopic.length; i++) {
        topic_content += "<option value=\"" + Alltopic[i] + "\">" + Alltopic[i] + "</option>"
    }
    topic_select = "<select id=\"basic\" class=\"selectpicker show-tick form-control\"><option></option> " + topic_content + "</select> ";
    $("#topic_new").append(topic_select);
// topic_new:调整后的选题对应的div

    //查找部分
    var topicFind = ""
    topicFind = "<select id=\"topicFind\"><option></option> " + topic_content + "</select> ";
    $(".find2").append(topicFind);
    var find = document.getElementById("find_btn")                                                                                                                          
    find.addEventListener("click", findtop)
    function findtop() {
        var topic_find = ""
        topic_find = $('#topicFind option:selected').text();
        console.log(topic_find)

        var table = document.getElementById('col');//获取table 
        var rowsLength = table.rows.length;//表格总共有多少行  
        var searchCol_topic = 0;//要搜索的哪一列，这里是第一列，从0开始数起  
        for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环（从0数起）  
            //取得table的行 并读取第一列的值是多少
            var searchTopic = table.rows[i].cells[searchCol_topic].innerHTML;//取得table行，列的值 
            if (searchTopic.match(topic_find)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
                table.rows[i].style.display = '';//显示行操作，  
            } else {
                table.rows[i].style.display = 'none';//隐藏行操作  
            }
        }
        // for ()
    }





    // 展示数据
    var str = "";//定义用于拼接的字符串
    // for (var i = 0; i <scrip data.length; i++) {
    //     console.log(data.length);
    //     console.log(i);
    //     console.log(data[i]);
    for (var i in Leader_id) {
        // var TeamID = "Team_id[" + i + "]";
        // for (var j in Leader_id) {
        var LeaderID = "Leader_id" + i;
        // for (var k in Leader_name) {
        var LeaderNameID = "LeaderName_id" + i;
        // for (var l in Topic) {
        var TopicID = "Topic_id" + i;
        // for (var m in Tutor) {
        var TutorID = "Tutor_id" + i;
        str += "<tr><td class=\"topic\" id=\"TopicID" 
        + i + "\">" + Topic[i] 
        + "</td><td id=\"LeaderID" + i + "\">" 
        + Leader_id[i] 
        + "</td><td id=\"LeaderNameID" + i + "\">" + Leader_name[i] 
        + "<td><button type=\"button\" class=\"edit\" id=\"btn" + i + "\" data-toggle=\"modal\" data-target=\"#myModal\">编辑</button></td></tr>"
    }
    console.log("123");
    console.log(str);
    $("tbody").append(str);






    //给每个编辑按钮绑定事件
    var re = ""//re存放当前按钮的ID
    var topID = ""//存放当前按钮对应的topicID
    var leaderNameID = ""//存放当前按钮对应的组长姓名ID
    $(function () {

        $(".edit").click(function (e) {
            console.log("123")
            re = e.target.id;
            console.log(re);
            console.log(re.substr(re.length - 1, 1))//获取当前被点击的按钮的编号
            topID = "TopicID" + re.substr(re.length - 1, 1)
            console.log(topID)
            var topicValue_now = document.getElementById(topID).innerHTML
            console.log(topicValue_now)
            leaderNameID = "LeaderNameID" + re.substr(re.length - 1, 1)
            var LeaderName_now = document.getElementById(leaderNameID).innerHTML
            $("#topic_now").val(topicValue_now)
            $("#leader_name").val(LeaderName_now)
        });
    })





    //读取模态框中select中的新值
    var newTopic = ""
    $("select").change(function () {
        newTopic = $(this)
            .find("option:selected")
            .text();
    })
    //为模态框中的button绑定事件 新值覆盖原值
    // var bt = document.getElementById("change")
    $("#change").click(function () {
        console.log(newTopic, topID)
        var topicChange = document.getElementById(topID)
        topicChange.innerHTML = newTopic;
        $('#myModal').modal('hide');//关闭模态框



        // bt.addEventListener("click", function () {



        //向后台传递数据
        var leaderID = ""
        leaderID = "LeaderID" + re.substr(re.length - 1, 1)
        var ID = document.getElementById(leaderID).innerHTML//获取组长学号
        console.log(newTopic, ID)
        // $.ajax({
        //     type: "POST",
        //     url: "http://localhost:8080/AdTeacherInfo_1",
        //     data: JSON.stringify({ "Topic": Topic, "Leader_id": ID }), //将JSON对象转为字符串
        //     dataType: "JSON",
        //     contentType: "application/json",
        //     async: 'true',
        //     beforeSend: function (XMLHttpRequest, settings) {
        //         //ShowLoading();
        //         // console.log($.ajax.data);
        //     },
        //     success: function () {
        //         alert("success");
        //     },
        //     error: function () {
        //         //请求出错处理
        //         console.log("error");

        //     },
    })
}





