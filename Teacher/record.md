### 进度总结和待解决
数据库已导入3.0版本
1. 前后端交互  
- 登录：正常连通
- 教师端：  
guide_grade.html正常连通  
Tnotice.html正常连通  
topicRelease.html正常连通  
notice.html：正常连通 初步判断是解析url的错误 具体需再研究  
report_grade.html:新代码未看到  
TBord:肖和左在研究  
teacher_center:未测试  
- 学生端：  
未测试   
- 管理员端：  
teacher_info:正常连通 但有一个小bug 当修改密码点击取消时 也会传数据到后端并且弹出succeess的弹窗。   
topic_admin.html: 正常连通 考虑历史功能的加入
Rteam.html:  需讨论梳理逻辑
Rchoose.html:  js在重写


2. 后端  
- 教师端：
 addGuidegrade.java报错 因此无法把传回的新指导成绩传入数据库
- 学生端：  
仅有两个后端,其中一个貌似是登录的 另一个需学习mybatis和jpa 代码逻辑尚未完全理清  
- 管理员端：  



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