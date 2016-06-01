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

var listPos; //当前选中的列表项
var totallists = 6; // 总共多少项
var the_height_of_a_list = 160; //一条的高度，单位像素
var the_div_height_of_all_lists = 480; //屏幕上显示的所有条目的div的总高度，单位像素

function init(){
	if(sessionStorage.listPos){
		listPos = parseInt(sessionStorage.listPos);
	} else {
		listPos = 1;
	}
	setPos();
	changListPos(listPos);
}

function setPos(){ //设置当前焦点
	$(".conlist > li:nth-child("+listPos+")").addClass("selected");
}

$(document).ready(function(){
	totallists = parseInt($(".conlist li").length);
});

function changUP(){
	if( listPos > 1 ){ //不是第一条才能向上移动
		$(".conlist > li:nth-child("+listPos+")").removeClass("selected");
		listPos -= 1;
		$(".conlist > li:nth-child("+listPos+")").addClass("selected");
		changListPos(listPos);
	}
}

function changDOWN(){
	if( listPos < totallists ){ //不是最后一条才能向下移动
		$(".conlist > li:nth-child("+listPos+")").removeClass("selected");
		listPos += 1;
		$(".conlist > li:nth-child("+listPos+")").addClass("selected");
		changListPos();
	}
}

function changListPos(){ //调节列表在屏幕上的位置
	if( listPos == 1 ){ // 如果是第一条，选中的条目在屏幕显示的三条中的顶部
		$(".conlist").css("transform","translateY(0px)");
	}
	else if( listPos == totallists ){ //如果是最后一条，选中的条目在屏幕显示的三条中的底部
		$(".conlist").css("transform","translateY(-"+ (totallists-3) * the_height_of_a_list +"px)");
	}
	else { //否则，选中的条目在屏幕显示的三条中的中部
		$(".conlist").css("transform","translateY(-"+ (listPos-2) * the_height_of_a_list +"px)");
	}
	$(".huadongtiao-in").css("height",""+ (1/totallists) * the_div_height_of_all_lists +"px");
	$(".huadongtiao-in").css("top",""+ ((listPos-1)/totallists) * the_div_height_of_all_lists +"px");
}

function doSelect(){ //按确认键打开页面
	sessionStorage.listPos = listPos;
	data_url = $(".conlist > li:nth-child("+listPos+")").attr("data_url");
	location.href = data_url;
}

function doExit(){ //返回到上一个页面
	if(sessionStorage) { // 如果支持HTML5的sessionStorage
		sessionStorage.listPos = listPos;
	}
	location.href = document.referrer;
}
