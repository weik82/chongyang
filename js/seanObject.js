//get html ?
function $G() {
    var Url = top.window.location.href;
    var u, g, StrBack = '';
    if (arguments[arguments.length - 1] == "#") {
        u = Url.split("#");
    }
    else {
        u = Url.split("?");
    }

    if (u.length == 1) {
        g = '';
    }
    else {
        g = u[1];
    }

    if (g != '') {
        gg = g.split("&");
        var MaxI = gg.length;
        str = arguments[0] + "=";
        for (i = 0; i < MaxI; i++) {
            if (gg[i].indexOf(str) == 0) {
                StrBack = gg[i].replace(str, "");
                break;
            }
        }
    }
    return StrBack;
}


// FriendLink Jump
function MM_jumpMenu(targ, selObj, restore) { //v3.0
    window.open(selObj.options[selObj.selectedIndex].value);
    if(restore)
        selObj.selectedIndex=0;
}

// menu
function menuOver(num) {
    if (!isclick) {
        if (menuState != num) {
            $("#menu0" + num).attr("src", "Images/menu0" + num + "on.gif");
        }
    }
}

function menuOut(num) {
    if (!isclick) {
        if (menuState != num) {
            $("#menu0" + num).attr("src", "Images/menu0" + num + ".gif");
        }
    }
}

var isclick = false;
function menuClick(nul) {
    isclick = true;
}

function menu(num) {
    $("#menu0" + num).attr("src", "Images/menu0" + num + "on.gif");
    $("#title_pic").attr("src", "Images/title_pic0" + num + "_1.jpg");
}


// subnav
function navOver(typeName, num) {
    if (!isclick) {
        if (subState != num) {
            $("#nav0" + num).attr("src", "Images/" + typeName + "/nav0" + num + "on.gif");
        }
    }
}

function navOut(typeName, num) {
    if (!isclick) {
        if (subState != num) {
            $("#nav0" + num).attr("src", "Images/" + typeName + "/nav0" + num + ".gif");
        }
    }
}

function navSelect(typeName, num) {
    var arrLocation= new Array();

    if (typeName == "about") {
        typeNum = 7;
        arrLocation = ["公司简介", "组织架构",  "合伙人简介", "基金经理简介","投资研究团队","公司荣誉","公司荣誉"];
    }
    else if (typeName == "profile") {
        typeNum = 3;
        arrLocation = ["投资理念", "公司愿景", "公司文化"];
    }
    else if (typeName == "info") {
        typeNum = 5;
        arrLocation = ["重阳公告", "重阳新闻", "重阳视点", "重阳视点", "重阳推荐"];
    }

    subState = num;

    for (var i = 1; i <= typeNum; i++) {
        if (i == num) {
            $("#nav0" + i).attr("src", "Images/" + typeName + "/nav0" + i + "on.gif");
            $("#page0" + i).css("display", "block");
            $("#title").attr("src", "Images/" + typeName + "/title0" + i + ".gif");
            $("#SubNav").css("height", $("#page0" + i).outerHeight()+88);
            $("#location").html(arrLocation[i-1]);
        }
        else {
            $("#nav0" + i).attr("src", "Images/" + typeName + "/nav0" + i + ".gif");
            $("#page0" + i).css("display", "none");
        }
    }

}

// products
function pnavSelect(num) {
    subState = num;
    pnavtClear();
    for(var i=1;i<=8;i++)
    {
        if(i==num){
            $("#nav0"+i).attr("src","Images/products/nav0"+i+"on.gif");
            pnavt(num,1);
        }
        else
        {
            $("#nav0"+i).attr("src","Images/products/nav0"+i+".gif");
        }
    }
}

//clear products subnav state
function pnavtClear(){
    var pnavtNum= new Array();
    pnavtNum=[0,16,2,1,1,1,5];

    for(var i=0;i<pnavtNum.length;i++)
    {
        if(pnavtNum[i]!=0)
        {
            for(var j=1;j<=pnavtNum[i];j++)
            {
                $("#nav0"+i+"s0"+j).attr("src","Images/products/nav0"+i+"s0"+j+".gif");
                $("#page0" + i + "s0" + j).css("display", "none");
            }
        }
    }
}

//selected products subnav state
function pnavt(num1, num2) {
    psubState = num1 + "s" + num2;
    if (num1 == 1 && num2 != '1' && num2 != '5') {
        showDiv("div_"+num2+"_1","img_"+num2+"_1",1);
    }

    var arrLocation= new Array();
    arrLocation = [[], ['信托产品 > 产品净值', '信托产品 > 重阳1期', '信托产品 > 重阳2期', '信托产品 > 重阳3期', '信托产品 > 专户管理', '信托产品 > 重阳5期', '信托产品 > 重阳6期', '信托产品 > 重阳7期', '信托产品 > 重阳8期', '信托产品 > 重阳9期', '信托产品 > 重阳10期', '信托产品 > 重阳目标回报1期', '信托产品 > 投资精英', '信托产品 > 君享重阳一号', '信托产品 > 汇金重阳', '信托产品 > 重阳对冲1号','信托产品 > 重阳A股阿尔法'], ['网上预约 > 产品预约', '网上预约 > 活动预约'], ['认购流程'], ['常见问题'], ['产品咨询'], ['客户信息 > 客户首页', '客户信息 > 用户资料', '客户信息 > 密码修改', '客户信息 > 投资策略', '客户信息 > 行业公司研究']];

    var pnavtNum= new Array();
    pnavtNum=[0,17,2,1,1,1,5];

    pnavtClear();

    for(var i=1;i<=pnavtNum[num1];i++) {
        if(i==num2) {
            $("#nav0"+num1+"s0"+i).attr("src","Images/products/nav0"+num1+"s0"+i+"on.gif");
            $("#title").attr("src", "Images/products/nav0" + num1 + "s0" + i + "title.gif");
            $("#page0"+num1+"s0"+i).css("display","block");
            $("#SubNav").css("min-height", $("#page0" + num1 + "s0" + i).outerHeight() + 88);
            $("#SubNav").css("_height", $("#page0" + num1 + "s0" + i).outerHeight() + 88);

            $("#location").html(arrLocation[num1][i-1]);

            //user iframe reload
            if(num1==6)
            {
                $("#Iframe"+i).attr("src","user"+i+".aspx");
            }

        }
        else {
            $("#nav0"+num1+"s0"+i).attr("src","Images/products/nav0"+num1+"s0"+i+".gif");
            $("#page0"+num1+"s0"+i).css("display","none");

        }
    }
}


//navtab
function navTab(num1,num2)
{
    for(var i=1;i<=3;i++)
    {
        if(i==num2)
        {
            $("#t"+num1+i).attr("src","Images/products/nav01t0"+i+"on.gif");
            $("#t"+num1+i+"c").css("display","block");
            $("#SubNav").css("min-height", $("#t" + num1 + i + "c").outerHeight() + 128);
            $("#SubNav").css("height", $("#t" + num1 + i + "c").outerHeight() + 128);

        }
        else
        {
            $("#t"+num1+i).attr("src","Images/products/nav01t0"+i+".gif");
            $("#t"+num1+i+"c").css("display","none");
        }

    }
}

//userTab
function userTab(num)
{
    for(var i=1;i<=3;i++)
    {
        if(i==num)
        {
            $("#userTab0"+i).css("display","block");
            $("#user0"+i).attr("src","Images/user/btn"+i+"on.gif");
        }
        else
        {
            $("#userTab0"+i).css("display","none");
            $("#user0"+i).attr("src","Images/user/btn"+i+".gif");
        }
    }
}


function pnavOver(typeName, num, num2) {

    if (!isclick) {

        if (psubState != num + "s" + num2) {
            $("#nav0" + num + "s0" + num2).attr("src", "Images/" + typeName + "/nav0" + num + "s0" + num2 + "on.gif");
        }
    }
}

function pnavOut(typeName, num, num2) {
    if (!isclick) {
        if (psubState != num + "s" + num2) {
            $("#nav0" + num + "s0" + num2).attr("src", "Images/" + typeName + "/nav0" + num + "s0" + num2 + ".gif");
        }
    }
}
//原始显示的 Div Id
var oldDivId = "";
//原始选定 Img Id
var oldImgId = "";
//原始图片标识
var oldprifx="";
//显示Div 参数1:要显示的Div Id 参数2:点击的图片Id 参数3:图片标识
function showDiv(showingDivId,imgButtonId,prifx)
{
    if (showingDivId != oldDivId) {
        //显示要显示的Div
        document.getElementById(showingDivId).style.display="block";
        var a = "nav01t01.gif";
        //选中要选中的Img
        document.getElementById(imgButtonId).src="Images/products/nav01t0"+prifx+"on.gif";
        //隐藏原始的Div
        if(document.getElementById(oldDivId)!=null)
        {
            document.getElementById(oldDivId).style.display="none";
        }
        //取消选择原始Img
        if(document.getElementById(oldImgId)!=null)
        {
            document.getElementById(oldImgId).src="Images/products/nav01t0"+oldprifx+".gif";;
        }
        //保存当前Div Id
        oldDivId = showingDivId;
        //保存当前prifx
        oldprifx = prifx;
        //保存当前img Id
        oldImgId =imgButtonId;
    }
}