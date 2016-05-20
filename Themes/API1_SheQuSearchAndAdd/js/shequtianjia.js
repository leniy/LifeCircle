$("#searchtext").keyup(function(){
	//在输入框中输入文字
	if( event.keyCode==13 ) {
		searchfunc($("#searchtext").val());
		this.blur();
	};
	if( "" != $("#searchtext").val() ) {
		$("#index-cross").show();
		$("#searchbtn").show();
		$("#cancelbtn").hide();
	} else {
		$("#index-cross").hide();
		$("#searchbtn").hide();
		$("#cancelbtn").show();
	};
});
$("#searchbtn").on('click', function(){
	//搜索按钮
	searchfunc($("#searchtext").val());
});
$("#cancelbtn").on('click', function(){
	//搜索取消
	history.back(-1);
});
$("#index-cross").on('click', function(){
	//清空取消
	$('#searchtext').val('');
	$("#index-cross").hide();
	$("#searchbtn").hide();
	$("#cancelbtn").show();
});
$("#shangyibu").on('click', function(){
	//上一步
	$(".searchlayer").show();
	$(".promptlayer").hide();
	$(".answerresult").hide();
});
$("#checkanswer").on('click', function(){
	//申请加入
	questions = [];
	answers = [];
	xiaoquid = $(".answers").attr("xiaoquid");
	$(".answers li p").each(function(){
		questions.push(this.innerHTML);
	});
	$(".answers li input").each(function(){
		answers.push(this.value);
	});
	$.ajax({
			url : '/Portal/submitQuestion' + window.location.search,
			type : 'POST',
			dataType : 'json',
			data : JSON.stringify({
				"xiaoquid" : xiaoquid,
				"questions" : questions,
				"answers" : answers
			}),
			contentType : "application/json",
			async : false,
			success : function(data) {
				alert("申请成功，请等待管理员审核");
			},
			error : function(e) {
				$(".answerresult").show();
			}
		});
});
function searchfunc(teststr){
	var searchfuncresult;
	//搜索事件
	$.ajax({
		url : '/Portal/searchCommunity',
		type : 'POST',
		dataType : 'json',
		data : JSON.stringify({
			"keywords":teststr
		}),
		contentType : "application/json",
		async : false,
		success : function(data) {
			searchfuncresult = data;
			$('.xiaoqulists li').remove();
			$.each(data, function(index,value){
				$('.xiaoqulists').append('<li id="xiaoqulists' + value.id + '"><p>' + value.name + '</p></li>');
			});
		},
		error : function(e) {
			alert("搜索失败");
		}
	});

	//小区列表获取后，绑定列表点击事件
	$(".xiaoqulists li").on('click', function(){
		$(".searchlayer").hide();
		var thisindex = $(this).index();
		$(".answers").attr("xiaoquid",searchfuncresult[thisindex].id)
		questionlist = searchfuncresult[thisindex].question;
		$('.answers li').remove();
		$.each(questionlist, function(index,value){
			$('.answers').append('<li id="answers' + index + '"><p class="answerkey">' + value + '</p><input name="answertext" class="answertext" id="answertext' + index + '" type="text" placeholder="请输入小区管理员设置的答案"></li>');
		});
		$(".promptlayer").show();
	});
}
