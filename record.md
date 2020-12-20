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

 <div class='card'>
 <div class='card-header id='headingOne'>
 <h2 class='mb-0'>
导航按钮 
 <button class=' btn' type='button' data-toggle='collapse' data-target='#collapse0  aria-expanded='true' aria-controls='collapse0'>
 <thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead>
 <tbody><tr><th id='team0' scope='row'>TA_01</th></tr> </tbody>
 <thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead>
 <tbody ><tr><th id='leadername0' scope='row'>黄金龙</th></tr></tbody>
 <thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead>
 <tbody class=''><tr><th scope='row' id=leader0>41811063</th></tr></tbody>
 </button>
 导航图标
 <a style='float:right'>
 <button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'>
<span class='glyphicon glyphicon-plus' name='add' id='plus0'>
</span>
</button>

<button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'>
<span class='glyphicon glyphicon glyphicon-minus' id='minus0></span>
</button>

<button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'>
<span class='glyphicon glyphicon glyphicon-remove' id='remove0></span>
</button>
</a>
</h2>
</div>
<div id='collapse0' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>
<div class='text-center'>
<table class='table table-hover table-borderless' >
< thead><tr>
<th scope='col'>编号</th>
<th scope='col'>名字</th>
<th scope='col'>学号</th>
</tr>
<tbody id='menber0'><tr id='row0'><th scope='row'>1</th><td >雷有萍</td><td>41811048</td></tr><tr id='row0'><th scope='row'>1</th><td >张彤</td><td>41811049</td></tr><tr id='row0'><th scope='row'>1</th><td >张释之</td><td>41811047</td></tr><tr id='row0'><th scope='row'>1</th><td >张语嫣</td><td>41811036</td></tr></tbody></table ></div></div></div>




 <div class='card'>

 <div class='card-header id='heading0'>
 <h2 class='mb-0'>
 <button class=' btn' type='button' data-toggle='collapse' data-target='#collapse0'aria-expanded='true' aria-controls='collapse0'>
 <thead class='thead-light'>
 <tr>
 <th scope='col'>组号:</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th id='team0' scope='row'>TA_01</th>
 </tr>
 </tbody>
 <thead class='thead-light'>
 <tr>
 <th scope='col'>组长:</th>
 </tr>
 </thead>
 <tbody >
 <tr>
 <th id='leadername0' scope='row'>黄金龙</th></tr></tbody>
 <thead class='thead-light'>
 <tr>
 <th scope='col'>学号:</th>
 </tr></thead>
 <tbody class=''><tr><th scope='row' id=leader0>41811063</th></tr></tbody>
 </button>
 <a style='float:right'>
 <button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'>
 <span class='glyphicon glyphicon-plus' name='add' id='plus0'></span>
 </button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'>
 <span class='glyphicon glyphicon glyphicon-minus' id='minus0></span></button>
 <button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'>
 <span class='glyphicon glyphicon glyphicon-remove' id='remove0></span></button></a>
 </h2>
 </div>


 <div id='collapse0' class='collapse show' aria-labelledby='heading0' data-parent='#accordionExample'>
 <div class='text-center'>
 <table class='table table-hover table-borderless' >
 <thead>
 <tr><th scope='col'>编号</th>
 <th scope='col'>名字</th>
 <th scope='col'>学号</th>
 </tr>
 </thead>
 <tbody id='menber0'>
 <tr id='row0'>
 <th scope='row'>1</th>
 <td >雷有萍</td>
 <td>41811048</td></tr>
 <tr id='row0'><th scope='row'>1</th>
 <td >张彤</td>
 <td>41811049</td></tr>
 <tr id='row0'>
 <th scope='row'>1</th>
 <td >张释之</td>
 <td>41811047</td></tr>
 <tr id='row0'>
 <th scope='row'>1</th>
 <td >张语嫣</td>
 <td>41811036</td>
 </tr>
 </tbody>
 </table >
 </div>
 </div>
 </div>


  <div class='card'><div class='card-header id='heading0'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse0'aria-expanded='true' aria-controls='collapse0'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team0' scope='row'>TA_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername0' scope='row'>黄金龙</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader0>41811063</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus0'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus0></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove0></span></button></a></h2></div><div id='collapse0' class='collapse show' aria-labelledby='heading0' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber0'><tr id='row0'><th scope='row'>1</th><td >41811063</td><td>雷有萍</td></tr><tr id='row0'><th scope='row'>2</th><td >41811048</td><td>张彤</td></tr><tr id='row0'><th scope='row'>3</th><td >41811049</td><td>张释之</td></tr><tr id='row0'><th scope='row'>4</th><td >41811047</td><td>张语嫣</td></tr><tr id='row0'><th scope='row'>5</th><td >41811036</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading1'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse1'aria-expanded='true' aria-controls='collapse1'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team1' scope='row'>TA_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername1' scope='row'>黄文婧</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader1>41811081</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus1'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus1></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove1></span></button></a></h2></div><div id='collapse1' class='collapse show' aria-labelledby='heading1' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber1'><tr id='row0'><th scope='row'>1</th><td >41811081</td><td>赵寒月</td></tr><tr id='row0'><th scope='row'>2</th><td >41811078</td><td>张安琪</td></tr><tr id='row0'><th scope='row'>3</th><td >41811084</td><td>古再丽努尔·托合提</td></tr><tr id='row0'><th scope='row'>4</th><td >41811082</td><td>杨敏艺</td></tr><tr id='row0'><th scope='row'>5</th><td >41811090</td><td>齐瑞</td></tr><tr id='row0'><th scope='row'>6</th><td >41811080</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading2'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse2'aria-expanded='true' aria-controls='collapse2'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team2' scope='row'>TA_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername2' scope='row'>路彬</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader2>41811089</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus2'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus2></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove2></span></button></a></h2></div><div id='collapse2' class='collapse show' aria-labelledby='heading2' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber2'><tr id='row0'><th scope='row'>1</th><td >41811089</td><td>张杰</td></tr><tr id='row0'><th scope='row'>2</th><td >41811092</td><td>孔月月</td></tr><tr id='row0'><th scope='row'>3</th><td >41811088</td><td>陈灏西</td></tr><tr id='row0'><th scope='row'>4</th><td >41811086</td><td>郭志琬</td></tr><tr id='row0'><th scope='row'>5</th><td >41811091</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading3'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse3'aria-expanded='true' aria-controls='collapse3'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team3' scope='row'>TB_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername3' scope='row'>钱明杰</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader3>41810021</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus3'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus3></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove3></span></button></a></h2></div><div id='collapse3' class='collapse show' aria-labelledby='heading3' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber3'><tr id='row0'><th scope='row'>1</th><td >41810021</td><td>江松</td></tr><tr id='row0'><th scope='row'>2</th><td >41804509</td><td>黄承靖</td></tr><tr id='row0'><th scope='row'>3</th><td >41802069</td><td>宋星辰</td></tr><tr id='row0'><th scope='row'>4</th><td >41810005</td><td>代学臻</td></tr><tr id='row0'><th scope='row'>5</th><td >41811065</td><td>朱国冬</td></tr><tr id='row0'><th scope='row'>6</th><td >41811031</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading4'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse4'aria-expanded='true' aria-controls='collapse4'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team4' scope='row'>TB_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername4' scope='row'>王璐瑶</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader4>41811072</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus4'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus4></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove4></span></button></a></h2></div><div id='collapse4' class='collapse show' aria-labelledby='heading4' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber4'><tr id='row0'><th scope='row'>1</th><td >41811072</td><td>李璐</td></tr><tr id='row0'><th scope='row'>2</th><td >41811075</td><td>于淘</td></tr><tr id='row0'><th scope='row'>3</th><td >41811071</td><td>韦苏心睿</td></tr><tr id='row0'><th scope='row'>4</th><td >41811073</td><td>李清容</td></tr><tr id='row0'><th scope='row'>5</th><td >41811070</td><td>符魏佳</td></tr><tr id='row0'><th scope='row'>6</th><td >41811076</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading5'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse5'aria-expanded='true' aria-controls='collapse5'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team5' scope='row'>TC_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername5' scope='row'>李可旎</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader5>41810043</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus5'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus5></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove5></span></button></a></h2></div><div id='collapse5' class='collapse show' aria-labelledby='heading5' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber5'><tr id='row0'><th scope='row'>1</th><td >41810043</td><td>王晓洁</td></tr><tr id='row0'><th scope='row'>2</th><td >41810031</td><td>何睿文</td></tr><tr id='row0'><th scope='row'>3</th><td >41810045</td><td>柴静</td></tr><tr id='row0'><th scope='row'>4</th><td >41810046</td><td>刘庭裕</td></tr><tr id='row0'><th scope='row'>5</th><td >41810009</td><td>马孝坤</td></tr><tr id='row0'><th scope='row'>6</th><td >41810011</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading6'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse6'aria-expanded='true' aria-controls='collapse6'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team6' scope='row'>TC_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername6' scope='row'>杨国威</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader6>41810057</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus6'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus6></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove6></span></button></a></h2></div><div id='collapse6' class='collapse show' aria-labelledby='heading6' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber6'><tr id='row0'><th scope='row'>1</th><td >41810057</td><td>白云飞</td></tr><tr id='row0'><th scope='row'>2</th><td >41832007</td><td>李席卓</td></tr><tr id='row0'><th scope='row'>3</th><td >41810054</td><td>孙蕤</td></tr><tr id='row0'><th scope='row'>4</th><td >41810055</td><td>戚洋</td></tr><tr id='row0'><th scope='row'>5</th><td >41810056</td><td>宋维平</td></tr><tr id='row0'><th scope='row'>6</th><td >41810060</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading7'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse7'aria-expanded='true' aria-controls='collapse7'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team7' scope='row'>TC_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername7' scope='row'>辛明泽</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader7>41811061</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus7'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus7></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove7></span></button></a></h2></div><div id='collapse7' class='collapse show' aria-labelledby='heading7' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber7'><tr id='row0'><th scope='row'>1</th><td >41811061</td><td>赵霄</td></tr><tr id='row0'><th scope='row'>2</th><td >41811064</td><td>林昱辰</td></tr><tr id='row0'><th scope='row'>3</th><td >41811095</td><td>秦菲</td></tr><tr id='row0'><th scope='row'>4</th><td >41811094</td><td>许旭扬</td></tr><tr id='row0'><th scope='row'>5</th><td >41811051</td><td>刘杰琳</td></tr><tr id='row0'><th scope='row'>6</th><td >41811014</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading8'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse8'aria-expanded='true' aria-controls='collapse8'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team8' scope='row'>TC_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername8' scope='row'>张若愚</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader8>41812213</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus8'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus8></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove8></span></button></a></h2></div><div id='collapse8' class='collapse show' aria-labelledby='heading8' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber8'><tr id='row0'><th scope='row'>1</th><td >41812213</td><td>石海钒</td></tr><tr id='row0'><th scope='row'>2</th><td >41810062</td><td>陈泽信</td></tr><tr id='row0'><th scope='row'>3</th><td >41825004</td><td>陈蜜</td></tr><tr id='row0'><th scope='row'>4</th><td >41810082</td><td>谢伊迪古丽·阿卜杜力</td></tr><tr id='row0'><th scope='row'>5</th><td >41810079</td><td>朱子涵</td></tr><tr id='row0'><th scope='row'>6</th><td >41832057</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading9'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse9'aria-expanded='true' aria-controls='collapse9'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team9' scope='row'>TC_05</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername9' scope='row'>王婕</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader9>41823027</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus9'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus9></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove9></span></button></a></h2></div><div id='collapse9' class='collapse show' aria-labelledby='heading9' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber9'><tr id='row0'><th scope='row'>1</th><td >41823027</td><td>田盼盼</td></tr><tr id='row0'><th scope='row'>2</th><td >41811033</td><td>李艳</td></tr><tr id='row0'><th scope='row'>3</th><td >41811029</td><td>张慧童</td></tr><tr id='row0'><th scope='row'>4</th><td >41811034</td><td>汤子寒</td></tr><tr id='row0'><th scope='row'>5</th><td >41811028</td><td>蔺海楠</td></tr><tr id='row0'><th scope='row'>6</th><td >41811030</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading10'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse10'aria-expanded='true' aria-controls='collapse10'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team10' scope='row'>TD_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername10' scope='row'>杨小海</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader10>41810015</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus10'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus10></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove10></span></button></a></h2></div><div id='collapse10' class='collapse show' aria-labelledby='heading10' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber10'><tr id='row0'><th scope='row'>1</th><td >41810015</td><td>徐嘉璐</td></tr><tr id='row0'><th scope='row'>2</th><td >41810074</td><td>温立翔</td></tr><tr id='row0'><th scope='row'>3</th><td >41810059</td><td>江林</td></tr><tr id='row0'><th scope='row'>4</th><td >41810003</td><td>黄健峰</td></tr><tr id='row0'><th scope='row'>5</th><td >41805059</td><td>李琪</td></tr><tr id='row0'><th scope='row'>6</th><td >41810049</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading11'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse11'aria-expanded='true' aria-controls='collapse11'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team11' scope='row'>TD_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername11' scope='row'>陈文函</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader11>41810017</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus11'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus11></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove11></span></button></a></h2></div><div id='collapse11' class='collapse show' aria-labelledby='heading11' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber11'><tr id='row0'><th scope='row'>1</th><td >41810017</td><td>花聪可</td></tr><tr id='row0'><th scope='row'>2</th><td >41810078</td><td>彭浩亮</td></tr><tr id='row0'><th scope='row'>3</th><td >41810018</td><td>王秀才</td></tr><tr id='row0'><th scope='row'>4</th><td >41810019</td><td>严亦琛</td></tr><tr id='row0'><th scope='row'>5</th><td >41810020</td><td>梁梦真</td></tr><tr id='row0'><th scope='row'>6</th><td >41810008</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading12'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse12'aria-expanded='true' aria-controls='collapse12'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team12' scope='row'>TD_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername12' scope='row'>刘颖</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader12>41810030</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus12'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus12></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove12></span></button></a></h2></div><div id='collapse12' class='collapse show' aria-labelledby='heading12' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber12'><tr id='row0'><th scope='row'>1</th><td >41810030</td><td>陈文婧</td></tr><tr id='row0'><th scope='row'>2</th><td >41810027</td><td>刘婕</td></tr><tr id='row0'><th scope='row'>3</th><td >41810029</td><td>刘佳丽</td></tr><tr id='row0'><th scope='row'>4</th><td >41810035</td><td>郭悦</td></tr><tr id='row0'><th scope='row'>5</th><td >41810044</td><td>张欣悦</td></tr><tr id='row0'><th scope='row'>6</th><td >41810037</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading13'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse13'aria-expanded='true' aria-controls='collapse13'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team13' scope='row'>TD_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername13' scope='row'>詹友鹏</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader13>41810063</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus13'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus13></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove13></span></button></a></h2></div><div id='collapse13' class='collapse show' aria-labelledby='heading13' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber13'><tr id='row0'><th scope='row'>1</th><td >41810063</td><td>王俊松</td></tr><tr id='row0'><th scope='row'>2</th><td >41810050</td><td>陈学阳</td></tr><tr id='row0'><th scope='row'>3</th><td >41810051</td><td>邓文博</td></tr><tr id='row0'><th scope='row'>4</th><td >41810052</td><td>熊鑫</td></tr><tr id='row0'><th scope='row'>5</th><td >41810053</td><td>杨继凯</td></tr><tr id='row0'><th scope='row'>6</th><td >41810064</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading14'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse14'aria-expanded='true' aria-controls='collapse14'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team14' scope='row'>TE_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername14' scope='row'>何林</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader14>41823006</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus14'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus14></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove14></span></button></a></h2></div><div id='collapse14' class='collapse show' aria-labelledby='heading14' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber14'><tr id='row0'><th scope='row'>1</th><td >41823006</td><td>闵佳莉</td></tr><tr id='row0'><th scope='row'>2</th><td >41823042</td><td>王丽琰</td></tr><tr id='row0'><th scope='row'>3</th><td >41823044</td><td>肖本秀</td></tr><tr id='row0'><th scope='row'>4</th><td >41823043</td><td>周世荣</td></tr><tr id='row0'><th scope='row'>5</th><td >41823005</td><td>连馨琪</td></tr><tr id='row0'><th scope='row'>6</th><td >41823041</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading15'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse15'aria-expanded='true' aria-controls='collapse15'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team15' scope='row'>TE_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername15' scope='row'>刘鑫</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader15>41823007</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus15'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus15></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove15></span></button></a></h2></div><div id='collapse15' class='collapse show' aria-labelledby='heading15' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber15'><tr id='row0'><th scope='row'>1</th><td >41823007</td><td>陈思羽</td></tr><tr id='row0'><th scope='row'>2</th><td >41823033</td><td>张耘悦</td></tr><tr id='row0'><th scope='row'>3</th><td >41823038</td><td>刘雨葭</td></tr><tr id='row0'><th scope='row'>4</th><td >41823017</td><td>周国梁</td></tr><tr id='row0'><th scope='row'>5</th><td >41823053</td><td>李文欣</td></tr><tr id='row0'><th scope='row'>6</th><td >41823057</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading16'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse16'aria-expanded='true' aria-controls='collapse16'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team16' scope='row'>TE_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername16' scope='row'>刘俊卿</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader16>41823056</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus16'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus16></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove16></span></button></a></h2></div><div id='collapse16' class='collapse show' aria-labelledby='heading16' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber16'><tr id='row0'><th scope='row'>1</th><td >41823056</td><td>伍明轩</td></tr><tr id='row0'><th scope='row'>2</th><td >41823054</td><td>杨欣然</td></tr><tr id='row0'><th scope='row'>3</th><td >41823096</td><td>高雅</td></tr><tr id='row0'><th scope='row'>4</th><td >41823097</td><td>SEW</td></tr><tr id='row0'><th scope='row'>5</th><td >SOONSENG</td><td>51800008</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading17'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse17'aria-expanded='true' aria-controls='collapse17'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team17' scope='row'>TE_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername17' scope='row'>杜媛锐</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader17>41823093</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus17'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus17></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove17></span></button></a></h2></div><div id='collapse17' class='collapse show' aria-labelledby='heading17' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber17'><tr id='row0'><th scope='row'>1</th><td >41823093</td><td>郑语帆</td></tr><tr id='row0'><th scope='row'>2</th><td >41823063</td><td>徐壮壮</td></tr><tr id='row0'><th scope='row'>3</th><td >41823064</td><td>朱晓熹</td></tr><tr id='row0'><th scope='row'>4</th><td >41823092</td><td>肖璇</td></tr><tr id='row0'><th scope='row'>5</th><td >41823094</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading18'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse18'aria-expanded='true' aria-controls='collapse18'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team18' scope='row'>TJ_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername18' scope='row'>谭贺娟</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader18>41811022</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus18'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus18></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove18></span></button></a></h2></div><div id='collapse18' class='collapse show' aria-labelledby='heading18' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber18'><tr id='row0'><th scope='row'>1</th><td >41811022</td><td>周炫怡</td></tr><tr id='row0'><th scope='row'>2</th><td >41811023</td><td>左丹</td></tr><tr id='row0'><th scope='row'>3</th><td >41811079</td><td>车佳妮</td></tr><tr id='row0'><th scope='row'>4</th><td >41811032</td><td>肖云彤</td></tr><tr id='row0'><th scope='row'>5</th><td >41811040</td><td>金锐丽</td></tr><tr id='row0'><th scope='row'>6</th><td >41811041</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading19'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse19'aria-expanded='true' aria-controls='collapse19'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team19' scope='row'>TJ_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername19' scope='row'>项俊</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader19>41811013</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus19'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus19></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove19></span></button></a></h2></div><div id='collapse19' class='collapse show' aria-labelledby='heading19' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber19'><tr id='row0'><th scope='row'>1</th><td >41811013</td><td>李林洁</td></tr><tr id='row0'><th scope='row'>2</th><td >41825035</td><td>费婧靓</td></tr><tr id='row0'><th scope='row'>3</th><td >41829017</td><td>李德丽</td></tr><tr id='row0'><th scope='row'>4</th><td >41824031</td><td>申智汉</td></tr><tr id='row0'><th scope='row'>5</th><td >41829013</td><td>胡浩岚</td></tr><tr id='row0'><th scope='row'>6</th><td >41829020</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading20'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse20'aria-expanded='true' aria-controls='collapse20'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team20' scope='row'>TJ_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername20' scope='row'>王元浩</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader20>41811002</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus20'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus20></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove20></span></button></a></h2></div><div id='collapse20' class='collapse show' aria-labelledby='heading20' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber20'><tr id='row0'><th scope='row'>1</th><td >41811002</td><td>向宏宇</td></tr><tr id='row0'><th scope='row'>2</th><td >41811001</td><td>李舒旭</td></tr><tr id='row0'><th scope='row'>3</th><td >41811003</td><td>高骏宇</td></tr><tr id='row0'><th scope='row'>4</th><td >41811004</td><td>杨康</td></tr><tr id='row0'><th scope='row'>5</th><td >41811005</td><td>孙昊天</td></tr><tr id='row0'><th scope='row'>6</th><td >41811008</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading21'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse21'aria-expanded='true' aria-controls='collapse21'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team21' scope='row'>TJ_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername21' scope='row'>李妙妙</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader21>41810036</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus21'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus21></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove21></span></button></a></h2></div><div id='collapse21' class='collapse show' aria-labelledby='heading21' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber21'><tr id='row0'><th scope='row'>1</th><td >41810036</td><td>王潇潇</td></tr><tr id='row0'><th scope='row'>2</th><td >41810081</td><td>程迪</td></tr><tr id='row0'><th scope='row'>3</th><td >41810085</td><td>杨蕴琛</td></tr><tr id='row0'><th scope='row'>4</th><td >41810080</td><td>商春楠</td></tr><tr id='row0'><th scope='row'>5</th><td >41810093</td><td>宛亦然</td></tr><tr id='row0'><th scope='row'>6</th><td >41810065</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading22'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse22'aria-expanded='true' aria-controls='collapse22'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team22' scope='row'>TI_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername22' scope='row'>洪子逸</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader22>41811060</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus22'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus22></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove22></span></button></a></h2></div><div id='collapse22' class='collapse show' aria-labelledby='heading22' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber22'><tr id='row0'><th scope='row'>1</th><td >41811060</td><td>高一凡</td></tr><tr id='row0'><th scope='row'>2</th><td >41811052</td><td>陈显旺</td></tr><tr id='row0'><th scope='row'>3</th><td >41811054</td><td>朱昱全</td></tr><tr id='row0'><th scope='row'>4</th><td >41811055</td><td>杨轩昭</td></tr><tr id='row0'><th scope='row'>5</th><td >41811057</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading23'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse23'aria-expanded='true' aria-controls='collapse23'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team23' scope='row'>TI_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername23' scope='row'>王蔓玉</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader23>41810096</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus23'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus23></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove23></span></button></a></h2></div><div id='collapse23' class='collapse show' aria-labelledby='heading23' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber23'><tr id='row0'><th scope='row'>1</th><td >41810096</td><td>陈卓</td></tr><tr id='row0'><th scope='row'>2</th><td >41810026</td><td>黄瑞</td></tr><tr id='row0'><th scope='row'>3</th><td >41810087</td><td>齐艳丽</td></tr><tr id='row0'><th scope='row'>4</th><td >41810088</td><td>陆颖</td></tr><tr id='row0'><th scope='row'>5</th><td >41810090</td><td>林琬婷</td></tr><tr id='row0'><th scope='row'>6</th><td >41810098</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading24'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse24'aria-expanded='true' aria-controls='collapse24'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team24' scope='row'>TI_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername24' scope='row'>周芯竹</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader24>41810084</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus24'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus24></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove24></span></button></a></h2></div><div id='collapse24' class='collapse show' aria-labelledby='heading24' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber24'><tr id='row0'><th scope='row'>1</th><td >41810084</td><td>李欣怡</td></tr><tr id='row0'><th scope='row'>2</th><td >41810083</td><td>邓晶丽</td></tr><tr id='row0'><th scope='row'>3</th><td >41810086</td><td>张传慧</td></tr><tr id='row0'><th scope='row'>4</th><td >41810091</td><td>高艺英</td></tr><tr id='row0'><th scope='row'>5</th><td >41810092</td><td>王晶晶</td></tr><tr id='row0'><th scope='row'>6</th><td >41810094</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading25'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse25'aria-expanded='true' aria-controls='collapse25'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team25' scope='row'>TI_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername25' scope='row'>郭蕊寒</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader25>41810039</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus25'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus25></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove25></span></button></a></h2></div><div id='collapse25' class='collapse show' aria-labelledby='heading25' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber25'><tr id='row0'><th scope='row'>1</th><td >41810039</td><td>谢松鑫</td></tr><tr id='row0'><th scope='row'>2</th><td >41810061</td><td>朱亚男</td></tr><tr id='row0'><th scope='row'>3</th><td >41810040</td><td>陈佩英</td></tr><tr id='row0'><th scope='row'>4</th><td >41810042</td><td>张佳宜</td></tr><tr id='row0'><th scope='row'>5</th><td >41810041</td><td>石秋美</td></tr><tr id='row0'><th scope='row'>6</th><td >41810038</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading26'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse26'aria-expanded='true' aria-controls='collapse26'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team26' scope='row'>TH_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername26' scope='row'>柴舒晨</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader26>41810068</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus26'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus26></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove26></span></button></a></h2></div><div id='collapse26' class='collapse show' aria-labelledby='heading26' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber26'><tr id='row0'><th scope='row'>1</th><td >41810068</td><td>李东洋</td></tr><tr id='row0'><th scope='row'>2</th><td >41810067</td><td>牛杰</td></tr><tr id='row0'><th scope='row'>3</th><td >41810069</td><td>范喆</td></tr><tr id='row0'><th scope='row'>4</th><td >41810070</td><td>邓斌</td></tr><tr id='row0'><th scope='row'>5</th><td >41810071</td><td>殷怀盛</td></tr><tr id='row0'><th scope='row'>6</th><td >41810002</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading27'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse27'aria-expanded='true' aria-controls='collapse27'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team27' scope='row'>TG_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername27' scope='row'>薛童</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader27>41811069</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus27'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus27></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove27></span></button></a></h2></div><div id='collapse27' class='collapse show' aria-labelledby='heading27' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber27'><tr id='row0'><th scope='row'>1</th><td >41811069</td><td>文润润</td></tr><tr id='row0'><th scope='row'>2</th><td >41811096</td><td>肖彤</td></tr><tr id='row0'><th scope='row'>3</th><td >41811097</td><td>肖蔓琦</td></tr><tr id='row0'><th scope='row'>4</th><td >41812038</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading28'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse28'aria-expanded='true' aria-controls='collapse28'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team28' scope='row'>TG_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername28' scope='row'>付海阳</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader28>41811018</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus28'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus28></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove28></span></button></a></h2></div><div id='collapse28' class='collapse show' aria-labelledby='heading28' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber28'><tr id='row0'><th scope='row'>1</th><td >41811018</td><td>张深芳</td></tr><tr id='row0'><th scope='row'>2</th><td >41811045</td><td>何娜</td></tr><tr id='row0'><th scope='row'>3</th><td >41811035</td><td>李亚梅</td></tr><tr id='row0'><th scope='row'>4</th><td >41811038</td><td>王方</td></tr><tr id='row0'><th scope='row'>5</th><td >41811037</td><td>袁忠花</td></tr><tr id='row0'><th scope='row'>6</th><td >41811046</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading29'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse29'aria-expanded='true' aria-controls='collapse29'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team29' scope='row'>TG_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername29' scope='row'>戴宇霄</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader29>41811010</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus29'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus29></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove29></span></button></a></h2></div><div id='collapse29' class='collapse show' aria-labelledby='heading29' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber29'><tr id='row0'><th scope='row'>1</th><td >41811010</td><td>龙达敏</td></tr><tr id='row0'><th scope='row'>2</th><td >41824033</td><td>贾世迎</td></tr><tr id='row0'><th scope='row'>3</th><td >41811011</td><td>徐悦</td></tr><tr id='row0'><th scope='row'>4</th><td >41811042</td><td>古再力努尔·芒力科</td></tr><tr id='row0'><th scope='row'>5</th><td >41811039</td><td>李心蔚</td></tr><tr id='row0'><th scope='row'>6</th><td >41811026</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading30'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse30'aria-expanded='true' aria-controls='collapse30'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team30' scope='row'>TG_01</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername30' scope='row'>陈曦阳</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader30>41810022</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus30'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus30></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove30></span></button></a></h2></div><div id='collapse30' class='collapse show' aria-labelledby='heading30' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber30'><tr id='row0'><th scope='row'>1</th><td >41810022</td><td>杨宇轩</td></tr><tr id='row0'><th scope='row'>2</th><td >41810023</td><td>唐一川</td></tr><tr id='row0'><th scope='row'>3</th><td >41810024</td><td>黎鸿晟</td></tr><tr id='row0'><th scope='row'>4</th><td >41810016</td><td>严云希</td></tr><tr id='row0'><th scope='row'>5</th><td >41810048</td><td>周静然</td></tr><tr id='row0'><th scope='row'>6</th><td >41810047</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading31'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse31'aria-expanded='true' aria-controls='collapse31'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team31' scope='row'>TF_05</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername31' scope='row'>伍红梅</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader31>41823049</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus31'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus31></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove31></span></button></a></h2></div><div id='collapse31' class='collapse show' aria-labelledby='heading31' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber31'><tr id='row0'><th scope='row'>1</th><td >41823049</td><td>张颖</td></tr><tr id='row0'><th scope='row'>2</th><td >41823067</td><td>王馨偲</td></tr><tr id='row0'><th scope='row'>3</th><td >41823082</td><td>代卓然</td></tr><tr id='row0'><th scope='row'>4</th><td >41823083</td><td>邱杏颖</td></tr><tr id='row0'><th scope='row'>5</th><td >41823087</td><td>李柔萱</td></tr><tr id='row0'><th scope='row'>6</th><td >41823080</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading32'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse32'aria-expanded='true' aria-controls='collapse32'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team32' scope='row'>TF_04</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername32' scope='row'>余洁</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader32>41823046</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus32'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus32></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove32></span></button></a></h2></div><div id='collapse32' class='collapse show' aria-labelledby='heading32' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber32'><tr id='row0'><th scope='row'>1</th><td >41823046</td><td>梁雅雯</td></tr><tr id='row0'><th scope='row'>2</th><td >41823032</td><td>叶美辰</td></tr><tr id='row0'><th scope='row'>3</th><td >41823030</td><td>尹航</td></tr><tr id='row0'><th scope='row'>4</th><td >41823088</td><td>李庆芝</td></tr><tr id='row0'><th scope='row'>5</th><td >41823090</td><td>李晓越</td></tr><tr id='row0'><th scope='row'>6</th><td >41823066</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading33'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse33'aria-expanded='true' aria-controls='collapse33'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team33' scope='row'>TF_03</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername33' scope='row'>罗兰</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader33>41823025</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus33'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus33></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove33></span></button></a></h2></div><div id='collapse33' class='collapse show' aria-labelledby='heading33' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber33'><tr id='row0'><th scope='row'>1</th><td >41823025</td><td>卢婧然</td></tr><tr id='row0'><th scope='row'>2</th><td >41823026</td><td>徐浩</td></tr><tr id='row0'><th scope='row'>3</th><td >41823059</td><td>罗愈华</td></tr><tr id='row0'><th scope='row'>4</th><td >41823060</td><td>张根睿</td></tr><tr id='row0'><th scope='row'>5</th><td >41823058</td><td>董洋伶</td></tr><tr id='row0'><th scope='row'>6</th><td >41823077</td><td>undefined</td></tr></tbody></table ></div></div></div> <div class='card'><div class='card-header id='heading34'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='#collapse34'aria-expanded='true' aria-controls='collapse34'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='team34' scope='row'>TF_02</th></tr> </tbody><thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='leadername34' scope='row'>白宇豪</th></tr></tbody><thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class=''><tr><th scope='row' id=leader34>41823014</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'><span class='glyphicon glyphicon-plus' name='add' id='plus34'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='minus34></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='remove34></span></button></a></h2></div><div id='collapse34' class='collapse show' aria-labelledby='heading34' data-parent='#accordionExample'><div class='text-center'><table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='menber34'><tr id='row0'><th scope='row'>1</th><td >41823014</td><td>黄楷奇</td></tr><tr id='row0'><th scope='row'>2</th><td >41823001</td><td>王科鉴</td></tr><tr id='row0'><th scope='row'>3</th><td >41823013</td><td>李晓宇</td></tr><tr id='row0'><th scope='row'>4</th><td >41823016</td><td>王振宇</td></tr><tr id='row0'><th scope='row'>5</th><td >41823012</td><td>undefined</td></tr></tbody></table ></div></div></div>


  <tr><th scope='row'>1</th>
  <td>
  <a href='Ad_notice_info.html?Notice_title=%E7%AD%94%E8%BE%A9%E9%80%9A%E7%9F%A5'>答辩通知</a></td>
  < td > 2020-12-22</td >
  <td><input type='checkbox'></input></td>
  </tr>