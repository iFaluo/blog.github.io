$(function(){
    var w = parseInt($(document.body).width());
    if (w < 1000){
        w = w - 80;
        navi_m(0);
        $("#main_block").css("width",w);
        $(".naviBody_m").css("width",w-80);
        $("#tiny_block").css("width",w-30);
        $("#art_title").css("width",w);
        $("#art_title").css("text-align","center");
        $("#art_split").css("width",w-40);
        $("#art_author").css("width",w-40);
        $("#feet").css("width",w+60);
        // $s = $("#search");
        // if (null != $s){
        //     $naviW = parseInt($("#navis").width());
        //     $s.css("width",$naviW-60);
        // }
    }
});
function getLifeArray(){
    $lifeArray = new Array();
    // 资讯
    $lifeArray[0] = [
        ["v2ex","https://www.v2ex.com/","","V2EX-v站","FF9999"],
        ["少数派","https://sspai.com/","","高效工作，品质生活","FF9999"],
        ["玩儿法","https://www.waerfa.com/","","应用提高设备生产力","FF9999"],
        ["爱范儿","https://www.ifanr.com/","","让未来触手可及","FF9999"],
        ["好奇心日报","http://www.qdaily.com/","","好奇驱动你的世界_Qdaily","FF9999"],
        ["知乎","https://www.zhihu.com/","","有问题上知乎","FF9999"],
        ["豆瓣","https://www.douban.com/","","城市独特的文化生活","FF9999"],
        ["利器","http://liqi.io/","","创造者和他们的工具","FF9999"],
        ["新浪微博","https://weibo.com/","","随时随地发现新鲜事","FF9999"]
    ];
    // 播客
    $lifeArray[1] = [
        ["IPN","https://ipn.li/","","for discriminating listeners","990066"],
        ["狗熊阅读","http://www.readwithbear.com/","","高效阅读","990066"],
        ["Anyway.FM","https://anyway.fm/","","我们，想让你的听觉更懂视觉。","990066"],
        ["Byte.coffee","http://byte.coffee/","","一档播客以及咖啡本人","990066"]
    ];
    // 玩
    $lifeArray[2] = [
        ["ACFun","http://www.acfun.cn/","","认真你就输啦 (?ω?)ノ- ( ゜- ゜)つロ","0099CC"],
        ["Bilibili","https://www.bilibili.com/","","哔哩哔哩 (゜-゜)つロ 干杯~-bilibili","0099CC"],
        ["Dilidili","http://www.dilidili.name/","","这里是兴趣使然的无名小站（D站）","0099CC"],
        ["蜜柑计划","https://mikanani.me/","","新一代的动漫...","0099CC"],
        ["Stage1st","https://bbs.saraba1st.com/2b/forum.php","","游戏动漫论坛","0099CC"],
        ["Anitama","http://www.anitama.cn/","","面向动漫爱好者的专业媒体，提供高质量的、最新的动漫资讯，内容丰富，推送及时。","0099CC"],
        ["动漫之家","https://www.dmzj.com/","","动漫之家","0099CC"],
        ["网易漫画","https://manhua.163.com/","","精品正版原创漫画平台","0099CC"]
    ];
    // 购
    $lifeArray[3] = [
        ["淘宝","https://www.taobao.com/","","淘！我喜欢","99CCCC"],
        ["京东","https://www.jd.com/","","京东商城","99CCCC"],
        ["亚马逊","https://www.amazon.cn/","","亚马逊","99CCCC"],
        ["萌购","https://www.030buy.net/","","二次元购物","99CCCC"],
        ["家乐福","http://www.carrefour.com.cn/","","家乐福&nbsp;省更多","99CCCC"],
        ["华润通","http://www.huaruntong.com/","","华润通","99CCCC"],
        ["大润发","http://www.rt-mart.com.cn/","","生活必需品购物","99CCCC"],
        ["迪卡侬","https://www.decathlon.com.cn/zh/","","专业体育用品专卖店","99CCCC"],
        ["MUJI","https://www.muji.com.cn/","","创造了商品的一天到一天的生活在一般家庭用品","99CCCC"]
    ];
    // 食
    $lifeArray[4] = [
        ["饿了么","https://www.ele.me/","","饿了么网上订餐","66CC99"],
        ["美团","http://kd.meituan.com/","","美团外卖","66CC99"],
        ["KFC","https://www.4008823823.com.cn/kfcios/Html/index.html","","尽情送自在","66CC99"],
        ["金拱门","https://www.mcdonalds.com.cn/","","麦当劳","66CC99"]
    ];
    // 三次元
    $lifeArray[5] = [
        ["淘票票","https://dianying.taobao.com/","","淘票票","CCFF99"],
        ["大麦网","https://www.damai.cn/","","全球华语排名领先票务网站(Damai.cn)-100%正品、先付先抢、在线选座！","CCFF99"],
        ["爱奇艺","http://www.iqiyi.com/","","在线视频网站-海量正版高清视频在线观看","CCFF99"],
        ["网易云音乐","https://music.163.com/","","网易云音乐","CCFF99"]
    ];
    // 住
    $lifeArray[6] = [
        ["链家","https://bj.lianjia.com/","","连接每个家的故事","00CCFF"],
        ["宜家","https://www.ikea.cn/cn/zh/","","提供客厅，卧室，厨房，各类家居灵感和产品解决方案。","00CCFF"]
    ];
    // 行
    $lifeArray[7] = [
        ["滴滴出行","https://www.didiglobal.com/","","滴滴出行","FFCC33"],
        ["百度地图","https://map.baidu.com/","","百度地图","FFCC33"],
        ["高德地图","https://www.amap.com/","","高德地图","FFCC33"],
        ["摩拜单车","https://mobike.com/cn/","","让自行车回归城市","FFCC33"],
        ["飞常准","http://www.variflight.com/","","让世界更准点","FFCC33"],
        ["航旅纵横","https://www.umetrip.com","","航班查询,航旅纵横","FFCC33"],
        ["顺丰","http://www.sf-express.com/cn/sc/","","顺丰速运","FFCC33"],
        ["申通","http://www.sto.cn/","","客户的满意,申通的追求!","FFCC33"],
        ["韵达","http://www.yundaex.com/cn/index.php","","韵达速递","FFCC33"]
    ];

    return $lifeArray;
}

function getWorkArray(){
    $workArray = new Array();
    // 招聘求职
    $workArray[0] = [
        ["BOSS直聘","https://www.zhipin.com/","","互联网招聘神器！","66CC99"],
        ["拉钩","https://www.lagou.com/","","专业的互联网招聘平台","66CC99"],
        ["猎聘","https://www.liepin.com/","","精英职业发展平台","66CC99"],
        ["前程无忧","https://www.51job.com/","","好工作尽在前程无忧","66CC99"],
        ["智联招聘","https://www.zhaopin.com/","","好工作上智联招聘","66CC99"]
    ];
    // 生产力
    $workArray[1] = [
        ["Eclipse","https://www.eclipse.org/","","home to a global community, the Eclipse IDE, Jakarta EE and over 350 open source projects, including runtimes, tools and frameworks.","0099CC"],
        ["VSCode","https://code.visualstudio.com/","","Free. Open source. Runs everywhere.","0099CC"],
        ["Sublime","https://www.sublimetext.com/","","A sophisticated text editor for code, markup and prose","0099CC"],
        ["VIM","https://www.vim.org/","","a highly configurable text editor for efficiently creating and changing any kind of text. ...","0099CC"],
        ["Git","https://www.git-scm.com/","","Git","0099CC"],
        ["Dash","https://kapeli.com/dash","","Dash gives your Mac instant offline access to 200+ API documentation sets.","0099CC"],
        ["iDea","https://www.jetbrains.com/idea/","","The Java IDE for Professional Developers by JetBrains","0099CC"]
    ];
    // 日常行政
    $workArray[2] = [
        ["iThoughtX","https://www.toketaware.com/","","Mindmapping for Windows, Mac, iPad and iPhone.","99CCCC"],
        ["MindNode","https://mindnode.com/","","Visual Brainstorming for your Mac, iPad and iPhone","99CCCC"],
        ["XMind","https://www.xmind.net/","","The Most Popular Mind Mapping Software on The Planet.","99CCCC"],
        ["WPS","http://www.wps.cn/","","免费正版的办公软件","99CCCC"],
        ["Office365","https://www.office.com/","","Microsoft Office","99CCCC"]
    ];
    // 记录
    $workArray[3] = [
        ["有道云笔记","http://note.youdao.com/","","记录，成为更好的自己","00CCFF"],
        ["印象笔记","https://www.yinxiang.com/","","工作必备效率应用","00CCFF"],
        ["Bear","https://bear.app/","","Bear is a beautiful, flexible writing app for crafting notes and prose.","00CCFF"],
        ["Ulysses","https://ulysses.app/","","A pleasant, focused writing experience combined with effective document management, ...","00CCFF"],
        ["MWeb","https://zh.mweb.im/","","专业的Markdown写作、记笔记、静态博客生成软件","00CCFF"]
    ];
    // 项目
    $workArray[4] = [
        ["tower","https://tower.im/","","深受用户喜爱的团队协作工具","FF9999"],
        ["worktile","https://my.worktile.com/standard","","让工作更简单","FF9999"]
    ];
    // 云
    $workArray[5] = [
        ["OneDriver","https://account.microsoft.com/account/onedrive","","Microsoft OneDriver","FF0099"],
        ["iCloud","https://www.icloud.com/","","Sign in to iCloud to access your photos, videos, documents, notes, contacts, and more.","FF0099"],
        ["七牛云","https://www.qiniu.com/","","国内领先的企业级云服务商","FF0099"],
        ["阿里云","https://www.aliyun.com/","","上云就上阿里云","FF0099"],
        ["腾讯云","https://cloud.tencent.com/","","连接智能未来","FF0099"],
        ["百度云","https://cloud.baidu.com/","","智能,计算无限可能","FF0099"]
    ];
    // 资讯培训
    $workArray[6] = [
        ["PM圈子","http://www.pmleader.cn/","","项目管理牛人聚集地","990033"],
        ["有道精品课","https://ke.youdao.com/","","为你精选好课","990033"],
        ["欧陆词典","https://www.eudic.net/v4/en/app/eudic","","『欧路词典』权威的英语词典软件，英语学习者必备的工具","990033"],
        ["慕课网","https://www.imooc.com/","","程序员的梦工厂","990033"]
    ];
    return $workArray;
}

function isEmputy($x){
    if($x == "" || $x == null || $x == undefined){
        return true;
	}
	return false;
}

function navi($id){
    if (isEmputy($id) || $id < 0 || $id > 2){
        $id = 0;
    }
    $divNavis = "";
    $showArray = null;
    if ($id == 0){
        $divNavis += "<div class='naviTags'><div style='width:260px;margin:0px auto;'><div id='naviSearch' class='tag tagSelected'>搜索</div><div id='naviLife' class='tag'>生活</div><div id='naviWork' class='tag'>工作</div></div></div>";
    } else if ($id == 1){
        $showArray = getWorkArray();
        $divNavis += "<div class='naviTags'><div style='width:260px;margin:0px auto;'><div id='naviSearch' class='tag'>搜索</div><div id='naviLife' class='tag'>生活</div><div id='naviWork' class='tagSelected'>工作</div></div></div>";
    } else {
        $showArray = getLifeArray();
        $divNavis += "<div class='naviTags'><div style='width:260px;margin:0px auto;'><div id='naviSearch' class='tag'>搜索</div><div id='naviLife' class='tagSelected'>生活</div><div id='naviWork' class='tag'>工作</div></div></div>";
    }
    
    if (null != $showArray){
        for (let $showIndex in $showArray){
            $show = $showArray[$showIndex];
            $divNavis += "<div style='clear:both;'>";
            for (let $detailIndex in $show){
                $detail = $show[$detailIndex];
                $divNavis += "<div class='naviBody' onClick=\"window.open('" + $detail[1] + "')\">";
                $divNavis += "<div style=\"width:100%;height:40px;text-align:center;\">";
                if ($detail[2] === ""){
                    $tmp = $detail[0].substring(0,1);
                    $divNavis += "<div class='defLogo' style='background-color:#" + $detail[4] + "'>" + $tmp + "</div>";
                } else {
                    $divNavis += "<img style=\"min-width:32px;height:32px;\" src=\"../img/logos/" + $detail[2] + "\" />";
                }
                $divNavis += "</div>";
                $divNavis += "<div class='naviTitle'>" + $detail[0] + "</div>";
                $divNavis += "<div class='naviDesc'>" + $detail[3] + "</div>";
                $divNavis += "</div>";
            }
            $divNavis += "</div>";
        }
    } else {
        $("#navis").css("height",900);
        $divNavis += "<div style='clear:both;'>";

        $divNavis += "<div style='height:800px;width:100%;'>";
        $divNavis += "<input type='text' id='search' style='margin-top:150px;margin-left:90px;height:50px;width:800px;font-size:1.1em;' onKeyPress='s();' autocomplete='off' placeholder='搜索...' />";
        $divNavis += "<div style='width:100%;font-size:0.9em;color:#999999;text-align:center;padding-top:30px;'>Search by Bing...</div>";
        $divNavis += "</div>";

        $divNavis += "</div>";
    }

    $("#navis").html($divNavis);
    $("#search").focus();
    $('#naviSearch').attr('onClick','navi(0);');
    $('#naviLife').attr('onClick','navi(2);');
    $('#naviWork').attr('onClick','navi(1);');
    flushSize();
}

function navi_m($id){
    if (isEmputy($id) || $id < 0 || $id > 2){
        $id = 0;
    }
    $divNavis = "";
    $showArray = null;
    if ($id == 0){
        $divNavis += "<div class='naviTags' id='naviTags'><div style='width:450px;margin:0px auto;'><div id='naviSearch' class='tagSelected tagSelected_m'>搜索</div><div id='naviLife' class='tag tag_m'>生活</div><div id='naviWork' class='tag tag_m'>工作</div></div></div>";
    } else if ($id == 1){
        $showArray = getWorkArray();
        $divNavis += "<div class='naviTags' id='naviTags'><div style='width:450px;margin:0px auto;'><div id='naviSearch' class='tag tag_m'>搜索</div><div id='naviLife' class='tag tag_m'>生活</div><div id='naviWork' class='tagSelected tagSelected_m'>工作</div></div></div>";
    } else {
        $showArray = getLifeArray();
        $divNavis += "<div class='naviTags' id='naviTags'><div style='width:450px;margin:0px auto;'><div id='naviSearch' class='tag tag_m'>搜索</div><div id='naviLife' class='tagSelected tagSelected_m'>生活</div><div id='naviWork' class='tag tag_m'>工作</div></div></div>";
    }
    
    if (null != $showArray){
        for (let $showIndex in $showArray){
            $show = $showArray[$showIndex];
            $divNavis += "<div style='clear:both;'>";
            for (let $detailIndex in $show){
                $detail = $show[$detailIndex];
                $divNavis += "<div class='naviBody_m' onClick=\"window.open('" + $detail[1] + "')\">";
                $divNavis += "<div style=\"float:left;width:100px;height:100px;text-align:center;\">";
                if ($detail[2] === ""){
                    $tmp = $detail[0].substring(0,1);
                    $divNavis += "<div class='defLogo defLogo_m' style='background-color:#" + $detail[4] + "'>" + $tmp + "</div>";
                } else {
                    $divNavis += "<img style=\"min-width:32px;height:32px;\" src=\"../img/logos/" + $detail[2] + "\" />";
                }
                $divNavis += "</div>";
                $divNavis += "<div class='naviTitle naviTitle_m'>" + $detail[0] + "</div>";
                $divNavis += "</div>";
            }
            $divNavis += '</div>';
        }
    } else {
        $("#navis").css("height",900);
        $divNavis += "<div style='clear:both;'>";

        $divNavis += "<div style='height:800px;width:100%;'>";
        $divNavis += "<input type='text' id='search' style='margin-top:50px;margin-left:30px;height:50px;font-size:0.9em;' onKeyPress='s();' autocomplete='off' placeholder='搜索...' />";
        $divNavis += "<div style='width:100%;font-size:0.9em;color:#999999;text-align:center;padding-top:30px;'>按回车随机搜索</div>";
        $divNavis += "</div>";

        $divNavis += "</div>";
    }

    $("#navis").html($divNavis);
    $('#naviSearch').attr('onClick','navi_m(0);');
    $('#naviLife').attr('onClick','navi_m(2);');
    $('#naviWork').attr('onClick','navi_m(1);');
    var w = parseInt($(document.body).width());
    $(".naviBody_m").css("width",w-160);
    flushSize();
    $naviW = parseInt($("#navis").width());
    $("#search").css("width",w-210);
}

function s(){
    var e = window.event || arguments.callee.caller.arguments[0];
	if (e.keyCode == 13){
        $search = $("#search").val();
        // $rnd = Math.floor(Math.random()*10);
        // if ($rnd % 2 == 0){
            window.open('https://cn.bing.com/search?q=' + $search);
        // } else {
        //     window.open('https://www.baidu.com/s?wd=' + $search);
        // }
        
	}
}

window.onload = function(){
	resize();
}

$(window).resize(function(){
	resize();
});

function resize(){
    flushSize();
    var w = parseInt($(document.body).width());
    // if (w < 1000){
        // w = w - 80;
        // navi_m(0);
        // $("#main_block").css("width",w);
        // $(".naviBody_m").css("width",w-80);
        // $("#tiny_block").css("width",w-30);
        // $("#art_title").css("width",w);
        // $("#art_title").css("text-align","center");
        // $("#art_split").css("width",w-40);
        // $("#art_author").css("width",w-40);
        // $("#feet").css("width",w+60);
    // } else {
        navi(0);
        var mainBlockWidth = parseInt($("#main_block").css("width"));
        $("#main_block").css("left",(w-mainBlockWidth)/2);
        $("#tiny_block").css("width",1000);
        $("#art_title").css("width",1000);
        $("#art_title").css("text-align","left");
        $("#art_title").addClass("full_art");
        $("#art_split").css("width",990);
        $("#art_author").css("width",1000);
        $("#art_author").addClass("full_art");
        $("#feet").css("width",w-17);
    // }

}

function flushSize(){
    var h = parseInt($(document.body).height());
    $("#main").css("height",h-60);

    var mainBlockHeight = parseInt($("#main_block").css("height"));
	if (mainBlockHeight < (h-60)){
		$("#feet").addClass("nail_bottom");
	} else {
		$("#feet").removeClass("nail_bottom");
    }
}