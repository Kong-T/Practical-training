
var wdata;

window.onload = function () {
    console.log("111")

    // 请求后端数据
    $.ajax({
        url: "http://localhost:8080/AdTeamInfo",
        type: "post",
        success: function (data) {
            console.log(data)
            wdata = data;
            console.log(data.Already[1][1])

            showData(data);//我们仅做数据展示
        },
        error: function (msg) {
            // alert("ajax连接异常：" + msg);
            console.log("error");
        }
    })
}

function showData(data) {

    console.log(data.Already[1][1])
    var str = ""
    var k = 1;
    for (i = 0; i < data.Already.length; i++) {

        //下拉框动态生成需要 collapse 写在data-target中
        var heading = "heading" + i;
        var collapseID = "#collapse" + i;
        var ariaID = "collapse" + i;//aria-controlsID
        var teamID = "team" + i;//组号ID
        var leadernameID = "leadername" + i;//组长名字ID
        var leaderID = "leader" + i;//组长ID
        var plusID = "plus" + i;//加号ID
        var plusbtnID = "plusbtn" + i;
        var minusID = "minus" + i;//减号ID
        var minusbtnID = "minusbtn" + i;//减号ID
        var removeID = "remove" + i;//移动ID
        var removebtnID = "removebtn" + i;//移动ID
        var menberID = "menber" + i;//成员下拉列表ID
        // var menber1ID = "menber/1ID"+i;//成员1id
        // var menber1ID = "menber1ID"+i;//成员1id

        str += " <div class='card'><div class='card-header id='" + heading + "'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='" + collapseID +
            "'aria-expanded='true' aria-controls='" + ariaID
            + "'><thead class='thead-light'><tr><th scope='col'>组号: </th></tr></thead><tbody><tr><th id='" + teamID
            + "' scope='row'>" + data.Already[i][0] + "</th></tr> </tbody>"
            + "<thead class='thead-light'><tr><th scope='col'>组长: </th></tr></thead><tbody ><tr><th id='" +
            leadernameID + "' scope='row'>" + data.Already[i][1] + "</th></tr></tbody>"
            + "<thead class='thead-light'><tr><th scope='col'> 学号: </th></tr></thead><tbody class='"
            + "'><tr><th scope='row' id=" + leaderID + ">" + data.Already[i][2] + "</th></tr></tbody></button><a style='float:right'><button type='button'onclick='add()' id='" + plusbtnID
            + "'class='btn btn-default' data-toggle='modal' data-target='#add'>"
            + "<span type='button' onclick='add()' data-toggle='modal' data-target='#add' class='glyphicon glyphicon-plus' name='add'id='" + plusID
            + "' ></span></button><button type='button' onclick='del()' class='btn btn-default' id='" + minusbtnID
            + "' data-toggle='modal' data-target='#delete'><span  data-toggle='modal' data-target='#delete' type='button' onclick='del()' class='glyphicon glyphicon glyphicon-minus' id='" + minusID
            + "'></span></button><button type='button' onclick='remove()' class='btn btn-default'id='" + removebtnID
            + "' data-toggle='modal' data-target='#change'><span  data-toggle='modal' data-target='#change' type='button' onclick='remove()' class='glyphicon glyphicon glyphicon-remove' id='" + removeID + "'></span></button></a></h2></div>"
            + "<div id='" + ariaID + "' class='collapse show' aria-labelledby='" + heading + "' data-parent='#accordionExample'><div class='text-center'>"
            + "<table class='table table-hover table-borderless' ><thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr></thead><tbody id='"
            + menberID + "'>";
        for (j = 1; j < data.Already[i].length; j += 2) {

            str += "<tr id='row0'><th scope='row'>" + k + "</th><td >" + data.Already[i][j] + "</td><td>" + data.Already[i][j + 1]
                + "</td></tr>"
            k++;
        }
        k = 1;

        str += "</tbody></table ></div></div></div>"
        // console.log(str)
    }
    $('#accordionExample').html(str);
}


function add(data) {
    //添加成员
    var i = 0;
    var flag;
    var team_now;
    $(document).on('click', "button[id^='plus']", function (e) {
        btn_now = e.target.id;
        flag = 1;
        console.log("函数内" + btn_now);
        console.log(btn_now)
        i = btn_now.substr(4, btn_now.length)
        console.log("当前小组"+i)
        var flagname = btn_now.substr(0, btn_now.length - 1)
        team_now = wdata.Already[i][0]
        console.log(wdata)
        console.log("对小组进行add"+team_now)
        console.log(flagname)
    })

    $("#btn_add").click(function () {
        //获取输入的新成员的姓名学号
        console.log("111")
        var name = $("#Addname").val();//模态框
        var id = $("#Addid").val();//模态框
        console.log(name, id)
        var addstr = "<tr><th scope='row'>" + ((wdata.Already[i].length - 1) / 2 + 1) + "</th><td>" + name + "</td><td>" + id + "</td></tr>"
        var temp = "menber" + i;
        console.log(i)

        var a = document.createElement("tr");name
        a.innerHTML = "<th scope='row'>" + ((wdata.Already[i].length - 1) / 2 + 1) + "</th><td>" + name + "</td><td>" + id + "</td>";
        document.getElementById(temp).appendChild(a);

        $('#add').modal('hide');//关闭模态框

        //传回1，name_add,id_add,组号
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/AdTeamInfo_1",
            data: JSON.stringify({ "flag": flag, "name": name, "id": id, "teamid": team_now }), //将JSON对象转为字符串
            dataType: "JSON",
            contentType: "application/json",
            async: 'true',
            success: function () {
                alert("success");
            },
            error: function () {
                //请求出错处理
                console.log("error");
            },
        })
    })
}

//删除成员
function del() {
    var i = 0;
    var flag;
    var team_now;
    $(document).on('click', "button[id^='minus']", function (e) {
        btn_now = e.target.id;
        flag = -1;//flag
        console.log("函数内" + btn_now);
        console.log(btn_now)
        i = btn_now.substr(5, btn_now.length)
        console.log("num"+i)
        var flagname = btn_now.substr(0, btn_now.length - 1)
        team_now = wdata.Already[i][0]//小组
        console.log(team_now)
        console.log(flagname)
        // var id="member"+i;

        // x=$("table").get(i);
        //     alert(x);
    })
    $("#btn_dele").click(function () {
        var name_dele = $("#Deletename").val();//被删除成员的获取
        console.log(name_dele)
        var state = false;
        var id = "member" + i;
        console.log(id)

        for (j = 0; i < wdata.Already[i].length; j++) {
            if (wdata.Already[i][j]==name_dele) {
                id = wdata.Already[i][j + 1]
            }
        }
         $('#delete').modal('hide');//关闭模态框

        //传回-1，name,id,组号
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/AdTeamInfo_1",
            data: JSON.stringify({ "flag": flag, "name": name_dele, "id": id, "teamid": team_now }), //将JSON对象转为字符串
            dataType: "JSON",
            contentType: "application/json",
            async: 'true',
            success: function () {
                alert("success");
            },
            error: function () {
                //请求出错处理
                console.log("error");
            },
        })
        //未能实现删除
        // var member = document.getElementById(id);//获取table 
        // console.log(i)
        // console.log(document.getElementById(menber1))
        // console.log(member)
        // var rowsLength = (wdata.Already[i].length - 1)/2;//表格总共有多少行
        // console.log(rowsLength)
        // var match_col = 1;//要搜索的哪一列，这里是第一列，从0开始数起  
        // for (var j = 0; j < rowsLength; j++) {//按表的行数进行循环（从0数起）  
        //     //取得table的行 并读取第一列的值是多少
        //     var match = member.rows[j].cells[match_col].innerHTML;//取得table行，列的值 
        //     console.log(match)
        //     if (match.match(name_dele)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
        //         state = true;
        //         break;
        //     }
        // }
        // if (state == true) {
        //     member.rows[j].style.display = 'none';//显示行操作， 
        //     $('#delete').modal('hide');//关闭模态框
        // }
        // else {
        //     alert("成员不存在！")
        //     $('#delete').modal('hide');//关闭模态框
        // }

    })
}

function remove() {
    //修改成员
    var i = 0;
    var flag;
    var team_now;
    $(document).on('click', "button[id^='remove']", function (e) {
        btn_now = e.target.id;
        flag = 0;//flag
        console.log("函数内" + btn_now);
        console.log(btn_now)
        i = btn_now.substr(6, btn_now.length)
        console.log("num"+i)
        var flagname = btn_now.substr(0, btn_now.length - 1)
        team_now = wdata.Already[i][0]//原小组
        console.log(team_now)
        console.log(flagname)
        // var id="member"+i;

        // x=$("table").get(i);
        //     alert(x);
    })
    $("#btn_remove").click(function () {
        Changename = $("#Changename").val();
        console.log(Changename)//获取需移动名字
        Newteam_LeaderID = $("#Newteam").val();
        console.log(Newteam_LeaderID)//获取需移动到的组号

        
        // for (j = 0; i < wdata.Already[i].length; j++) {
        //     if (wdata.Already[i][j].equals(Changename)) {
        //         id = wdata.Already[i][j + 1]
        //     }
        // }
       $('#change').modal('hide');//关闭模态框

        //传回0，name,newid：为新组组号，teamid:旧组号
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/AdTeamInfo_1",
            data: JSON.stringify({ "flag": flag, "name": Changename, "newid": Newteam_LeaderID, "teamid": team_now }), //将JSON对象转为字符串
            dataType: "JSON",
            contentType: "application/json",
            async: 'true',
            success: function () {
                alert("success");
            },
            error: function () {
                //请求出错处理
                console.log("error");
            },
        })
    })


    // var team_num = $(".card").length//所有小组的数量
    // var Changename = ""//存放模态框中要删除的名字
    // var Newteam_LeaderID = ""//存放模态框中要移动到的组长学号
    // var statedele = false;
    // var adddele = false;
    // $("span[id^='remove']").click(function (e) { // 对所有id以remove开头的span绑定事件
    //     var remove = $(e.target).attr("id");// 获取被点击的那个叉叉的id
    //     console.log(remove)
    //     i = remove.substr(remove.length - 1, 1)//获取被点击的那个叉叉的i
    //     console.log(i)
    //     // console.log($(e.target).parent())
    //     $("#btn_remove").click(function () {//模态框中的确定按钮触发事件
    //         Changename = $("#Changename").val();
    //         console.log(Changename)
    //         Newteam_LeaderID = $("#Newteam").val();
    //         console.log(Newteam_LeaderID)

    //         var member = document.getElementById("member" + i);//获取当前叉叉所在的tbody 
    //         console.log(member)
    //         var rowsLength = member.rows.length;//表格总共有多少行
    //         // console.log(rowsLength)
    //         var match_col = 1;//要搜索的那一列
    //         var match_name = ""//遍历每个表中的姓名单元格，存进去，以便匹配
    //         var match_id = ""//姓名对应的id号
    //         for (var j = 0; j < rowsLength; j++) {//按表的行数进行循环（从0数起）  
    //             match_name = member.rows[j].cells[match_col].innerHTML;//取得tbody第j行，第1列的值 
    //             match_id = member.rows[j].cells[match_col + 1].innerHTML;//获取这个姓名对应的id
    //             console.log(match_name)
    //             if (match_name.match(Changename)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
    //                 statedele = true;
    //                 break;
    //             }
    //         }
    //         //id要和每一个表中的第一行第三列匹配
    //         var TargetTable = ""
    //         for (var k = 0; k < team_num; k++) {
    //             var teamid = document.getElementById("leaderid" + k).innerHTML;//获得每一个leaderid对象中的值
    //             console.log(teamid);
    //             if (teamid.match(Newteam)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
    //                 adddele = true;
    //                 TargetTable = $("#member" + k);
    //                 break;
    //             }
    //         }
    //         if (state == true & adddele == true) {
    //             member.rows[j].style.display = 'none';//隐藏行操作，
    //             var str = "<tr><td>" + Changename + "</td><td>" + match_id + "</td></tr>"
    //             TargetTable.append(str)
    //             $('#change').modal('hide');//关闭模态框 
    //         }
    //         else {
    //             alert("成员不存在！")
    //             $('#change').modal('hide');//关闭模态框
    //         }

    //     })
    
}