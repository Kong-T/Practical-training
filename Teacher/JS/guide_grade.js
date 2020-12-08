function requestData()
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
          str = "<tr><td>" + data[i].teamId + "</td><td><input type=\"text"+"id=\"gradeId\""+i+" "+"placeholder=\"请输入分数\"></td></tr>"
          $("#tbody").append(str);
      }
  }

  function guideGraderelease(data) {
     var teamID = $("#teamID"+i).val();                     //小组id
      var str0 = new Array();
      var gradeID = new Array();                  //小组分数
     var str;
     for(var i=0;i<data.length;i++){
       str0[i] = "#gradeID"+i;                    //小组id
      gradeID[i] = $(str0[i]).val();              //老师评分
         str = str + "{\"teamID\""+i+":"+"\"teamID\""+i+","+"\"gradeID\""+i+":"+gradeID[i]+"}，";
     }
     var guideGrade="["+str+"]";//转为json
     $.ajax({
         type:"POST",
         url:"http://localhost:8080/login",
         data:guideGrade,
         dataType:"JSON",
         contentType:"application/json",
         async:'true',

   beforeSend: function(XMLHttpRequest,settings){
   //ShowLoading();
   // console.log($.ajax.data);
     },
         success:function(data) {
          if(data.msg == true){
                   alert("指导成绩上传成功");}     
         },
         error: function(){
   //请求出错处理
         console.log("指导成绩上传失败");

  },

     })

  }
