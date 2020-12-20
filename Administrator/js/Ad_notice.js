var wdata;
window.onload = function(){
     // 请求后端数据
     $.ajax({
        url: "http://localhost:8080/All_getnotice",
        type: "post",
        success: function (data) {
            console.log(data)
            wdata = data;
            showdata(data);//我们仅做数据展示
        },
        error: function (msg) {
            // alert("ajax连接异常：" + msg);
            console.log("error");
        }
    })
}
function showdata(data) {
    var str ="";
    for (i = 0; i < data.title.length; i++) {
        var j = i * 1 + 1;
        var noticeID="notice"+i;
        var searchUrl = encodeURI("Ad_notice_info.html?Notice_title=" + data.title[i]);   //使用encodeURI编码
        str += "<tr><th scope='row'>" + j + "</th><td ><a href='" + searchUrl
            + "'>" + data.title[i] + "</a></td><td> " + data.time[i] + "</td ><td><input id='"+noticeID+" ' type='checkbox' onclick = 'del()'></input></td></tr>"
            console.log(str)

    }
    $("#tbody").html(str);
}
    var noticename = new Array();

    function del() {

        $(function () {
            $(document).on('click', "td", function (e) {
                re = e.target.id;
                console.log("函数内" + re);
                var temp = re.substr(re.length-1, re.length);//编号
                notice = wdata.title[temp]
                console.log(temp)
                console.log(temp, wdata.title[temp])
                noticename.push(notice);
            });
        })
    }

       //向后台传输noticetitle
    function submit() {
        console.log(noticename)
        $.ajax({
          type: "POST",
          url: "http://localhost:8080/Adnotice_del",
          data: JSON.stringify(noticename), //将JSON对象转为字符串
          dataType: "JSON",
          contentType: "application/json",
          async: 'true',
          beforeSend: function (XMLHttpRequest, settings) {
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
    
