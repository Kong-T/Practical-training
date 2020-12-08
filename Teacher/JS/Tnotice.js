function requestNoticeData()
{
  var name="guide_grade";
    $.ajax({
        url: "http://localhost:8080/helloworld_war_exploded/list",
        type: "post",
        data:name, //点击页面名guide_grade
        success: function(data){
            /*这个方法里是ajax发送请求成功之后执行的代码*/
            showData(data);//我们仅做数据展示
        },
        error: function(msg){
            alert("ajax连接异常："+msg);
        }
    });
}
function showData(data)
  {
      var str = "";//定义用于拼接的字符串
      for (var i = 0; i < data.length; i++)
      {
          str = "<li>" + "<a href = *****?Notice_details="+data[i].Notice_details+">"+data[i].Notice_title + Notice_time + "</a></li>";
          $("#ol").append(str);
      }
  }