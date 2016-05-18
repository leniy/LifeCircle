function searchfunc(){
	//搜索事件
	var teststr = jQuery.parseJSON('[{"id":"5452432432","question":"wenti1","name":"xxoo校区1"},{"id":"222222","question":"wenti2","name":"xxoo校区2"}]');
	/*
	$.ajax({
		url : 'url地址',
		type : 'POST',
		dataType : 'json',
		contentType : "application/json",
		async : false,
		success : function(data) {*/
			$('.xiaoqulists li').remove();
			$.each(teststr, function(index,value){
				$('.xiaoqulists').append('<li id="' + value.id + '"><p class="hidden">' + value.question + '</p><p>' + value.name + '</p></li>');
			});
		/*},
		error : function(e) {
			alert("搜索失败");*/
/*		}
		});*/

	//点击列表事件
	$(".xiaoqulists li").on('click', function(){
		$(".searchlayer").hide();
		var thisindex = $(this).index();
		$(".answerkey").html(teststr[thisindex].question);
		$(".answerkey").attr("id",teststr[thisindex].question);
		$("#promptlayer").show();
	});
}
//上一步
$("#shangyibu").on('click', function(){
	$(".searchlayer").show();
	$("#promptlayer").hide();
	$(".answerresult").hide();
});
//确认添加
$("#checkanswer").on('click', function(){
/*	$.ajax({
			url : 'url地址',
			type : 'POST',
			dataType : 'json',
			contentType : "application/json",
			async : false,
			success : function(data) {
				pass;
			},
			error : function(e) {*/
				$(".answerresult").show();
/*			}
		});*/

});
