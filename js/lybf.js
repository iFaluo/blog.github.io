window.onload = function(){
	resize();
}

$(window).resize(function(){
	resize();
});

function resize(){
	var w = parseInt($(document.body).width());
	var h = parseInt($(document.body).height());
	$("#main").css("height",h-60);
	var mainBlockWidth = parseInt($("#main_block").css("width"));
	var mainBlockHeight = parseInt($("#main_block").css("height"));
	$("#main_block").css("left",(w-mainBlockWidth)/2+60);
	if (mainBlockHeight < (h-60)){
		$("#feet").addClass("nail_bottom");
	} else {
		$("#feet").removeClass("nail_bottom");
	}
	// console.log(mainBlockHeight + "   " + (h-60));
}