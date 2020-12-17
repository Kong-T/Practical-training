### 进度总结和待解决
数据库已导入3.0版本
1. 前后端交互  
- 登录：正常连通
- 教师端：  
guide_grade.html正常连通  
Tnotice.html正常连通  
topicRelease.html正常连通  
notice.html：正常连通
report_grade.html:正常连通
TBord:肖和左在研究  
teacher_center:正常连通 我的问答未写 界面仍需调整（固定元素和回顶部）  
发布联系方式怎么写
- 学生端：  
未测试   
- 管理员端：  
teacher_info:正常连通 但有一个小bug 当修改密码点击取消时 也会传数据到后端并且弹出succeess的弹窗。   
topic_admin.html: 正常连通 考虑历史功能的加入
Rteam.html:  需讨论梳理逻辑 利用修改加定位
Rchoose.html:  js在重写


2. 后端  
- 教师端：
 addGuidegrade.java报错 因此无法把传回的新指导成绩传入数据库   
 addReplyInfo.java报错  
 
- 学生端：  
选题界面：数据库插入有问题
- 管理员端：  

3. 前端
- 学生端：
选题界面：做好了做好了！！


### 待解决问题
1. 后台解析以下格式
```
{"teamid":["teamID0","teamID1","teamID2","teamID3"],"grade":["","","121",""]}
```
解决方法：接收数据时利用Map<Object,Arraylist>来接收   
2. guide_grade报错  
错误为"parsererror"错误  
出现这个错误是因为后端返回的数据类型和前端请求中dataType的要求类型不一致导致的  
解决方法：将后端返回改为json  
tip:利用error函数返回报错data 并解析报错头

### js代码
1. 后台返回复杂数据
- 第一种使用字符串拼接
```
var str = "";
for (var i = 0; i < window.length; i++) {
    str = str + "{\""+ teamID[i] + "\":" + data[i] + ",\"" + str0[i]  + "\":" + document.getElementById(str0[i]).value + "},";
    str = str + "{"+ teamID[i] + ":" + data[i] + "," + str0[i]  + ":" + document.getElementById(str0[i]).value + "},";
}
var guideGrade = "[" + str.substring(0,str.length-1) + "]";//转为json

```
- 第二种直接生成数组
```
var zz = new Array();
zz = zz.concat(document.getElementById(teamID[i]).innerText,document.getElementById(str0[i]).value);
```
- 第三种：生成二维数组
```
var grade={
          "teamid":new Array(),
          "grade":new Array()
        };

for (var i = 0; i < window.length; i++) {
    grade.teamid[i]="teamID"+i;
    grade.grade[i]=document.getElementById(str0[i]).value;
}
```
上面三种在ajax中传输给后端时，均需要利用JSON.stringify,后端利用String获取。


```

 <div class="form-group">
                    <select id = "selectID" class="selectpicker show-tick" title="请选择一项" data-live-search="true" data-size="5">
                      <option>A</option>
                      <option>B</option>

                    </select>
                  </div>

          str += "<tr><td>" + j + "</td><td id=\"" + Topic_titleID + "\">" + data.Topic_title[i] + "</td><td id=\"" + Topic_detailsID + "\">" + data.Topic_details[i] + "</td><td id=\"" + TutorID + "\">" + data.Tutor[i] + "</td><td><div class=\"form-group\"> <select id=\"" + selectID + "\" class=\"selectpicker show-tick\" title=\"请选择一项\" data-live-search=\"true\" data-size=\"5\"> <option id = \"" + yesID + "\" >A</option><option id=\"" + denyID + "\">B</option></select></div></td></tr>"

```

```
 $(document).ready(function() {
    //绑定下拉框change事件，当下来框改变时调用 SelectChange()方法
    $("#selectID").change(function() { SelectChange(); }); 
    })
    function SelectChange() {
    //获取下拉框选中项的text属性值
    var selectText = $("#selectID").find("option:selected").text();
    console.log(selectText);
    alert(selectText);
    //获取下拉框选中项的value属性值
   
   
}
```
```
可以使用的动态点击
    $(function () {
      $(document).click(function (e) {
        re = e.target.id;
        console.log("函数内" + re);
        delete_topic(re)
      });
    })

```
```
  //管理员操作(动态无法使用)
      //设置不能同时选择是和否
      // $(function () {
      //   $('table').on('click', 'input', function () {
      //     // console.log($('this').html);
      //     console.log("ta")
      //     var now = this;
      //     $('input').each(function (i, e) {
      //       console.log(i,e)
      //       if (now !== e) {
      //         $(e).attr('checked', false);
      //         console.log(this)
      //       }
      //     })
      //   });
      // })
```

#### 下拉框

````

 str += "<tr><td>" + j + "</td><td id=\"" + Topic_titleID + "\">" +
            data.Topic_title[i] + "</td><td id=\"" + Topic_detailsID + "\">" +
            data.Topic_details[i] + "</td><td id=\"" + TutorID + "\">" + data.Tutor[i] +
            "</td><td><div class=\"form-group\"><select id= \"" +selectID +"\"class=\"selectpicker show-tick\" title=\"请选择一项\" data-live-search=\"true\" data-size=\"5\"> <option>请选择</option><option id = \"" + yesID +
            "\" >是</option><option id=\"" + denyID + "\">否</option></select></div></td></tr>"
          //  console.log(str);

$(function () {
      $(document).click(function (e) {
        re = e.target.id;
        console.log("函数内" + re);
        var x=document.getElementById(re)
        var index = x.selectedIndex;
        console.log(x)
        console.log(index)
				console.log("value"+re.options[index].id);
				//拿到选中的option的text
        
        console.log("text"+re.options[index]);
```
<!-- 导航 -->
```
 <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <!-- <div class="col-4 pt-1">
        <a class="text-muted" href="#">实训</a>
      </div> -->
      <div class="col-4">
        <a class="blog-header-logo text-dark">实训</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="text-muted" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img"
            viewBox="0 0 24 24" focusable="false">
            <title>Search</title>
            <circle cx="10.5" cy="10.5" r="7.5" />
            <path d="M21 21l-5.2-5.2" />
          </svg>
        </a>
        <a class="btn btn-sm btn-outline-secondary" href="Stu_userCenter.html">我的</a>
      </div>
    </div>
  </header>

  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <a class="p-2 text-muted" href="notice1.html">通知公告</a>
      <a class="p-2 text-muted" href="Board.html">留言板</a>
      <a class="p-2 text-muted" href="teamfill.html">填报小组</a>
      <a class="p-2 text-muted" href="Topic_Choose.html">填报选题</a>
      <!-- <a class="p-2 text-muted" href="#">Business</a>
      <a class="p-2 text-muted" href="#">Politics</a>
      <a class="p-2 text-muted" href="#">Opinion</a>
      <a class="p-2 text-muted" href="#">Science</a>
      <a class="p-2 text-muted" href="#">Health</a>
      <a class="p-2 text-muted" href="#">Style</a>
      <a class="p-2 text-muted" href="#">Travel</a> -->
    </nav>
  </div>

```
<!-- 新导航栏 -->
```
<nav style="opacity: 0.6;background-color:#6aacc3;color: black;" class="navbar navbar-expand-md navbar-dark fixed-top ">
    <a class="navbar-brand" style="color:black;font-family: YouYuan;" href="#">实  训</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">通 知 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">选 题</a>
        </li>
        <li class="nav-item">
          <a class=" nav-link" href="#" tabindex="-1" aria-disabled="true">分 组</a>
        </li>
      </ul>
      <div class="form-inline mt-2 mt-md-0">
        <!-- <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"> -->
        <a style="opacity: 0.95;color:white;" class="btn btn-outline-primary my-2  my-sm-0" type="submit">我的</a>
      </div>
    </div>
  </nav>
```
```

  <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/navbar-fixed/">

  <!-- Bootstrap core CSS -->
  <link href="../assets/dist/css/bootstrap.css" rel="stylesheet">

 <style>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="generator" content="Jekyll v4.0.1">
  <title>Fixed top navbar example · Bootstrap</title>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style>
  <link href="navbar-top-fixed.css" rel="stylesheet">

```


```
var topicID = "topicID" +i;
var btn = "btn"+i;
"<div class=\"card \"> <div class=\"card-header\"><h4 class=\"my-0 font-weight-normal  text-center \" >"+ data.subject[i].tutor+"</h4></div>
 <div class=\"card-body\"><h5 class=\"card-title\"id = \" "+topicID+"\" >"+data.subject[i].subjectTitle+"</h5>
<p class=\"card-text\">"+ data.subject[i].details+"</p>
 <button type=\"button\" onclick = \"SentData()\" class=\"btn btn-outline-primary text-center\" id =\"+ btn+"\">填报</button>

          </div>
        </div>"

          str += "<div class='col-sm-6 col-md-4'><div class='caption'><img src='../image/Topic_img/实训题目.png' alt='...' style='width:100%; height:200px;'><h3>"
          + data.subject[i].subjectTitle + "</h3><p>指导教师：" + data.subject[i].tutor
          + "</p><p><a href='#' class='btn btn-primary' role='button'id='" + Topicid + "' onclick='SentData()'>填报选题</a></p></div></div>"

  str += "<div class=\"card \"><div class=\"card-header\">

"

```

<!-- 学生端选题侧边导航栏 -->
```
<div class="col-md-3 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">组队信息</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">小组数量</h6>
          </div>
          <span class="text-muted">12</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">当前人数</h6>
          </div>
          <span class="text-muted">70</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">实训总人数</h6>
          </div>
          <span class="text-muted">70</span>
        </li>       
      </ul>
    </div>
```