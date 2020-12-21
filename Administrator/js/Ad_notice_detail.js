window.onload = function () {

    //获取 上一个搜索页面传来的参数
    var Url = window.location.href;
    var Data = Url.split("=");        //截取 url中的“=”,获得“=”后面的参数
    var Notice_title = decodeURI(Data[1]);   //decodeURI解码
    console.log("Dta"+Data, "TITLE"+Notice_title)
    $("#title").html(Notice_title);

    $.ajax({
        url: "http://localhost:8080/All_getnotice_1",
        type: "post",
        data: JSON.stringify(Notice_title),//向后端传title
        success: function (data) {
            /*这个方法里是ajax发送请求成功之后执行的代码*/
            console.log("from 后端");
            console.log(data.detail);
            console.log(data.time);

            showData(data);//我们仅做数据展示
        },
        error: function (msg) {
            // alert("" + msg);
            console.log("error");
        }
    })
    function showData(data) {


        // var str = "<ul><h2>" + Notice_title + "</h2><p>" + data.detail + "</p><h5>发布时间：" + data.time + "</h5></ul>"
        // console.log(str);
        $("#detail").html(data.detail);
        $("#time").html(data.time);

    }
}

