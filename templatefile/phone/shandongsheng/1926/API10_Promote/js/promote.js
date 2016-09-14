$("#searchbtn").on('click', function(){
	promoteid = $("#promoteid").val();
	phone = $("#phone").val();
	name = $("#name").val();
	if("" == promoteid){
		lfalert("推荐人为空");
		return;
	}
	$.ajax({
		url : '/Portal/savePromotionInfo'+window.location.search,
		type : 'POST',
		dataType : 'json',
		data : JSON.stringify({
			"promotionUserId":promoteid,
			"phone":phone,
			"name":name
		}),
		contentType : "application/json",
		async : false,
		success : function(data) {
			if( "2" == data["code"] ) {
					tempstr = '<h2>'+data["message"]+'</h2><table class="table table-hover">';
					tempstr += '<tbody>';
					tempstr += '<tr><td>推广ID</td><td>'+data["data"]["id"]+'</td></tr>';
					tempstr += '<tr><td>推广市</td><td>'+data["data"]["city"]+'</td></tr>';
					tempstr += '<tr><td>推广县</td><td>'+data["data"]["county"]+'</td></tr>';/*接口单词写错了，这儿要对应着错过来*/
					tempstr += '</tbody></table>';
			} else {
				tempstr = '<h2>'+data["message"]+'</h2>';
			}
			$('.jieguo').html(tempstr);
		},
		error : function(e) {
			lfalert("添加失败");
		}
	});
});
