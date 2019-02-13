// ====================================
// 
// 作者：MNing
// 日期：2019-01-12~13
// 
// 简易魔方计时器
// 
// ====================================


var sTime = 0;
var cubeCount = -1;
var timeShow = '00:00';
var palyIndex = 0;
var playTimes = new Array(12).fill(0);
var q = 3600;
var s = 0;
var av = 0;

$(function(){
    initCubePage();
    $("#quick").text("最快=" + formatTime(q));
    $("#slow").text("最慢=" + formatTime(s));
    $("#av").text("平均=" + formatTime(calcAverage()));
    showPlays();
    $(document).keydown(function(e) {
        if (e.which == 32){
            if (sTime > 0 && cubeCount > 0){
                stopCube();
                playTimes[palyIndex] = cubeCount;
                palyIndex++;
                if (palyIndex == 12){
                    palyIndex = 0;
                }
                if (cubeCount < q){
                    q = cubeCount;
                }
                if (cubeCount > s){
                    s = cubeCount
                }
                $("#quick").text("最快=" + formatTime(q));
                $("#slow").text("最慢=" + formatTime(s));
                $("#av").text("平均=" + formatTime(calcAverage()));
                randomCube();
                showPlays();
            } else {
                cubeCount = -1;
                timeShow = "00:00";
                $('#timer').text(timeShow);
                $('#timer').css('color','#FF0000');
            }
        }
     });
     $(document).keyup(function(e) {
        if (e.which == 32){
            if (sTime == 0 && cubeCount == -1){
                cubeCount = 0;
                sTime = setInterval(function(){starCube()},1000); 
                $('#timer').css('color','#000000');
                randomCube();
            }
        }
     }) ;
});

function initCubePage(){
    $cube = $('#cube');

    $total = "";

    $timer = "<div class='timer' id='timer'>00:00</div>";

    $midare = "<div class='midare' id='midare'>L2 D U2 B' F U2 B R U' L2 R' D2 B2 D2 U' B F2 R2 B' F L2 B' F' L R2</div>";

    $q = "<div id='quick' style='width:100%;height:50px;text-align:center;font-size:1.2em;color:#333333;'>最快=</div>";
    $s = "<div id='slow' style='width:100%;height:50px;text-align:center;font-size:1.2em;color:#333333;'>最慢=</div>";
    $av = "<div id='av' style='width:100%;height:50px;text-align:center;font-size:1.2em;color:#333333;'>平均=</div>";

    $plays = "<div id='plays' style='width:100%;height:auto;padding-top:30px;'></div>";

    $tips = "<div style='width:100%;height:auto;font-size:0.9em;text-align:center;color:#999999;padding-top:58px;'>";
    $tips += "魔方新手。自制简易的只有计时功能的计时器。欢迎使用体验。";
    $tips += "</div>";

    $total = $timer + $midare + $q + $s + $av + $plays + $tips;
    $cube.html($total);
}

function showPlays(){
    var play = "";
    for(var i = 0 ; i < playTimes.length ; i+=6){
        play += "<div style='width:730px;margin:0px auto;clear:both;background-color:#FF0000;'>";
        for(var j = i ; j < i + 6 ; ++j){
            play += "<div style='float:left;width:120px;'>";
            play += "<b>" + zero(j + 1) + "</b> : " + formatTime(playTimes[j]);
            play += "</div>";
        }
        play += "</div>";
    }
    
    $('#plays').html(play);
}

function zero($j){
    return $j < 10 ? "0" + $j : $j;
}

function randomCube(){
    var cubes = [
        "L R D2 U' F D' U2 L2 R D U' B D2 R B L2 D' U' F U' L R' D' U' B",
        "L B2 L' R D' U L' D' B' D' L2 D2 L' R D U2 B F2 U B D F U L' R",
        "B L R' D' U F2 D' U B' F' U R D2 U B D2 F' U' L' D2 F2 U2 B2 U L",
        "D' R' U' L B' L R B' F2 U B2 D B' F' L2 D2 L2 D F2 R' D2 U' F2 R' D",
        "R2 U2 B' U' B' F L2 R2 B' U B' D2 U2 L D' U L' R' D U2 R D2 B2 R' D'",
        "B' L' R B2 D' U2 L' R B' F U2 L B' U' F2 U2 R B2 F' D2 L2 R D2 F2 L",
        "B' L' R B2 D' U2 L' R B' F U2 L B' U' F2 U2 R B2 F' D2 L2 R D2 F2 L",
        "B2 L' R' D R' B2 U2 F2 L B2 F2 L2 B' L2 F2 U2 L R2 B F' U' R2 B2 D' L",
        "L2 D U2 B' F U2 B R U' L2 R' D2 B2 D2 U' B F2 R2 B' F L2 B' F' L R2",
        "L2 R2 B' D U2 B D' U R B' D U L R2 B2 D U2 B' L R' D' B' F' D U",
        "U B F2 D' U' B' D F' R B' D2 F2 D2 U L R2 F U' L R2 D R' D L2 R2",
        "U B F2 D' U' B' D F' R B' D2 F2 D2 U L R2 F U' L R2 D R' D L2 R2",
        "R U L' R2 F' L B' U2 R B F D2 R2 F2 L D2 L2 R' D U' R' B F2 L2 R2",
        "F L D2 U F L2 R B L D' F2 D2 U2 L' B' F' R F' L R2 B' F2 D' U R",
        "D2 U' L' B' L2 F' U L' R' B F L' R D2 R' D2 U R2 B2 L' B F2 L2 R2 D2",
        "L B' D2 U B U' F L2 U2 F2 U2 B2 R U2 R' F U2 L B2 D' L2 R B' F2 L2",
        "U B' F2 D U2 B2 U B' F R' B R' F2 R' D2 U2 B F L R2 F' L' U F2 D",
        "B2 D2 U' F2 R' B U' B2 F' L' R2 D2 B2 U2 L2 R' B' F L R D' F L' F2 D'",
        "B2 F' L2 R' D2 U2 B' F L R' B L' D U2 B2 R2 D F2 D U R2 B' L2 D L'",
        "U2 B' F2 D2 B F D B F L2 R2 F R' D' B F2 D' U' L' D2 U B U2 B D"
    ];
    var tmp = parseInt(Math.random() * 21,10);
    $('#midare').text(cubes[tmp]);
}

function calcAverage(){
    var sum = 0;
    for (var i = 0 ; i < playTimes.length ; ++i){
        sum += playTimes[i];
    }
    if (sum > 0){
        if (playTimes[playTimes.length - 1] > 0){
            return Math.ceil(sum / playTimes.length);
        }
        return Math.ceil(sum / palyIndex);
    }
    return 0;
}

// function initCube(){
//     timeShow = "00:00";
//     $('#timer').text(timeShow);
// }

function formatTime($cc){
    var tmp = $cc;
    if (isEmputy(tmp)){
        tmp = 0;
    }
    var tmpShow = '';
    if (tmp < 60){
        if (tmp < 10){
            tmpShow = "00:0" + tmp;
        } else {
            tmpShow = "00:" + tmp;
        }
    } else {
        var m = Math.floor(tmp / 60);
        if (m < 10){
            m = '0' + m;
        }
        var s = tmp % 60;
        if (s < 10){
            s = '0' + s;
        }
        tmpShow = m + ":" + s;
    }
    return tmpShow;
}

function starCube(){
    cubeCount++;
    var tmp = cubeCount;
    if (tmp == 360){
        stopCube();
    } else {
        timeShow = formatTime(tmp);
    }
    $('#timer').text(timeShow);
}

function stopCube(){
    clearInterval(sTime);
    sTime = 0;
}

function isEmputy($x){
    if($x == "" || $x == null || $x == undefined){
        return true;
	}
	return false;
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
    var h = parseInt($(document.body).height());
    var mainBlockWidth = parseInt($("#main_block").css("width"));
    var mainBlockHeight = parseInt($("#main_block").css("height"));
    $("#main_block").css("left",(w-mainBlockWidth)/2);
    $("#tiny_block").css("width",1000);
    $("#tiny_block").css("height",760);
    $("#art_title").css("width",1000);
    $("#art_title").css("text-align","left");
    $("#art_title").addClass("full_art");
    $("#art_split").css("width",990);
    $("#art_author").css("width",1000);
    $("#art_author").addClass("full_art");
    $("#feet").css("width",w-17);
    if (mainBlockHeight < (h-60)){
		$("#feet").addClass("nail_bottom");
	} else {
		$("#feet").removeClass("nail_bottom");
	}
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