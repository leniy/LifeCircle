document.onirkeypress = grabEvent;
document.onkeydown = grabEvent;
function grabEvent(event){
	var keyval = event.which;
	switch(keyval){
		case 38://up
			changUP();
			event.stopPropagation();
			break;
		case 40://down
			changDOWN();
			event.stopPropagation();
			break;
		case 37://left
			changUP();
			event.stopPropagation();
			break;
		case 4:
		case 39://right
			changDOWN();
			event.stopPropagation();
			break;
		case 13://ok
			doSelect();
			event.stopPropagation();
			break;
		case 339:
		case 27://esc
			doExit();
			event.stopPropagation();
			break;
		case 340://back
		case 8://back
			doExit();
			return EVENT.STOP;
			break;
	}
	event.stopPropagation();
}

var total_con_height;
var current_con_move;
var allow_con_move_max;

$(document).ready(function(){
	total_con_height = parseInt($(".coninfo").outerHeight());
	current_con_move = 0;
	allow_con_move_max = total_con_height-360;//内容区域高度480px，最多底部能上移到文本区域的中间偏下
	$(".huadongtiao-in").css("height",""+ (480/total_con_height) * 480 +"px");
	$(".huadongtiao-in").css("top","0px");
});

function changDOWN(){
	if( current_con_move < allow_con_move_max ){ //底部没移到最上面，才能继续向上移动，也就是按向下的键
		current_con_move += 120;
		$(".coninfo").css("transform","translateY(-"+current_con_move+"px)");
		$(".huadongtiao-in").css("top",""+ (current_con_move/allow_con_move_max) * ((1-480/total_con_height)*480) +"px");
	}
}

function changUP(){
	if( current_con_move > 120 ){ //顶部没移到最下面，才能继续向下移动，也就是按向上的键
		current_con_move -= 120;
		$(".coninfo").css("transform","translateY(-"+current_con_move+"px)");
		$(".huadongtiao-in").css("top",""+ (current_con_move/allow_con_move_max) * ((1-480/total_con_height)*480) +"px");
	} else {
		$(".coninfo").css("transform","translateY(-"+0+"px)");
		$(".huadongtiao-in").css("top","0px");
	}
}

function doExit(){ //返回到上一个页面
	location.href = document.referrer;
}
