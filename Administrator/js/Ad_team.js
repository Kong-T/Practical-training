
window.onload = function () {

}

function showdata() {

    for (i = 0; i <; i++) {

        //下拉框动态生成需要 collapse 写在data-target中
        var collapseID = "#collapse" + i;
        var ariaID = "collapse" + i;//aria-controlsID
        var teamID = "team" + i;//组号ID
        var leadernameID = "leadername" + i;//组长名字ID
        var leaderID = "leader" + i;//组长ID
        var plusID = "plus" + i;//加号ID
        var minusID = "minus" + i;//减号ID
        var removeID = "remove" + i;//移动ID
        var menberID = "menber" + i;//成员下拉列表ID
        // var menber1ID = "menber/1ID"+i;//成员1id
        // var menber1ID = "menber1ID"+i;//成员1id

        str += " <div class='card'><div class='card-header id='headingOne'><h2 class='mb-0'><button class=' btn' type='button' data-toggle='collapse' data-target='" + collapseID +
            "aria-expanded='true' aria-controls='" + ariaID
            + "'><thead class='thead-light'><tr><th scope='col'>组号:</th></tr></thead><tbody><tr><th id='" + teamID
            + "' scope='row'>" + data.Already[i][1] + "</th></tr> </tbody>"
            + "<thead class='thead-light'><tr><th scope='col'>组长:</th></tr></thead><tbody ><tr><th id='" +
            leadernameID + "' scope='row'>" +? +"</th></tr></tbody>"
                + "<thead class='thead-light'><tr><th scope='col'>学号:</th></tr></thead><tbody class='"
                + "'><tr><th scope='row' id=" + leaderID + ">" +? + "</th></tr></tbody></button><a style='float:right'><button type='button' class='btn btn-default' data-toggle='modal' data-target='#add'>"
                + "<span class='glyphicon glyphicon-plus' name='add' id='" + plusID
                + "'></span></button><button type='button' class='btn btn-default' data-toggle='moda' data-target='#delete'><span class='glyphicon glyphicon glyphicon-minus' id='" + minusID
                + "></span></button><button type='button' class='btn btn-default' data-toggle='modal' data-target='#change'><span class='glyphicon glyphicon glyphicon-remove' id='" + removeID + "></span></button></a></h2></div>"
                + "<div id='" + ariaID + "' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'><div class='text-center'>"
                + "<table class='table table-hover table-borderless' >< thead><tr><th scope='col'>编号</th><th scope='col'>名字</th><th scope='col'>学号</th></tr><tbody id='"
                + menberID + "'>";
        for (j = 0; j < ; j++) {
            str += "<tr id='row0'><th scope='row'>1</th><td >" +?? + "</td><td>" +??
                +"</td></tr>"
        }

        str += "</tbody></table ></div></div></div>"
    }
    $('#accordionExample').html(str);
}
}

//添加成员
var i = 0;
$("span[id^='plus']").click(function (e) { // 对所有id以plus开头的span绑定事件
    plus = $(e.target).attr("id");// e.target表示被点击的目标
    console.log(plus)
    i = plus.substr(plus.length - 1, 1)
    console.log(i)
    // console.log($(e.target).parent())
})

$("#btn_add").click(function () {
    //获取输入的新成员的姓名学号
    var name_add = $("#Addname").val();
    var id_add = $("#Addid").val();
    // console.log(name_add, id_add)
    var addstr = "<tr><th scope='row'></th><td>" + name_add + "</td><td>" + id_add + "</td></tr>"
    $("#member2").append(addstr)//需要赋值给下拉表格
    $('#add').modal('hide');//关闭模态框
})



//删除成员
$("span[id^='minus']").click(function (e) { // 对所有id以minus开头的span绑定事件
    minus = $(e.target).attr("id");// e.target表示被点击的目标
    console.log(minus)
    i = minus.substr(minus.length - 1, 1)
    console.log(i)
    // console.log($(e.target).parent())
    $("#btn_dele").click(function () {
        var name_dele = $("#Deletename").val();
        console.log(name_dele)
        var state = false;
        var member = document.getElementById("member" + i);//获取table 
        var rowsLength = member.rows.length;//表格总共有多少行
        console.log(rowsLength)
        var match_col = 1;//要搜索的哪一列，这里是第一列，从0开始数起  
        for (var j = 0; j < rowsLength; j++) {//按表的行数进行循环（从0数起）  
            //取得table的行 并读取第一列的值是多少
            var match = member.rows[j].cells[match_col].innerHTML;//取得table行，列的值 
            console.log(match)
            if (match.match(name_dele)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
                state = true;
                break;
            }
        }
        if (state == true) {
            member.rows[j].style.display = 'none';//显示行操作， 
            $('#delete').modal('hide');//关闭模态框
        }
        else {
            alert("成员不存在！")
            $('#delete').modal('hide');//关闭模态框
        }

    })
})


//修改成员
var team_num = $(".card").length//所有小组的数量
var Changename = ""//存放模态框中要删除的名字
var Newteam_LeaderID = ""//存放模态框中要移动到的组长学号
var statedele = false;
var adddele = false;
$("span[id^='remove']").click(function (e) { // 对所有id以remove开头的span绑定事件
    var remove = $(e.target).attr("id");// 获取被点击的那个叉叉的id
    console.log(remove)
    i = remove.substr(remove.length - 1, 1)//获取被点击的那个叉叉的i
    console.log(i)
    // console.log($(e.target).parent())
    $("#btn_remove").click(function () {//模态框中的确定按钮触发事件
        Changename = $("#Changename").val();
        console.log(Changename)
        Newteam_LeaderID = $("#Newteam").val();
        console.log(Newteam_LeaderID)

        var member = document.getElementById("member" + i);//获取当前叉叉所在的tbody 
        console.log(member)
        var rowsLength = member.rows.length;//表格总共有多少行
        // console.log(rowsLength)
        var match_col = 1;//要搜索的那一列
        var match_name = ""//遍历每个表中的姓名单元格，存进去，以便匹配
        var match_id = ""//姓名对应的id号
        for (var j = 0; j < rowsLength; j++) {//按表的行数进行循环（从0数起）  
            match_name = member.rows[j].cells[match_col].innerHTML;//取得tbody第j行，第1列的值 
            match_id = member.rows[j].cells[match_col + 1].innerHTML;//获取这个姓名对应的id
            console.log(match_name)
            if (match_name.match(Changename)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
                statedele = true;
                break;
            }
        }
        //id要和每一个表中的第一行第三列匹配
        var TargetTable = ""
        for (var k = 0; k < team_num; k++) {
            var teamid = document.getElementById("leaderid" + k).innerHTML;//获得每一个leaderid对象中的值
            console.log(teamid);
            if (teamid.match(Newteam)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，  
                adddele = true;
                TargetTable = $("#member" + k);
                break;
            }
        }
        if (state == true & adddele == true) {
            member.rows[j].style.display = 'none';//隐藏行操作，
            var str = "<tr><td>" + Changename + "</td><td>" + match_id + "</td></tr>"
            TargetTable.append(str)
            $('#change').modal('hide');//关闭模态框 
        }
        else {
            alert("成员不存在！")
            $('#change').modal('hide');//关闭模态框
        }

    })
})










