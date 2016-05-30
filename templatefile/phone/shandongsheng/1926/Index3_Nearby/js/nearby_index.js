function openMerchant(){
	$.ajax({
		url : '/Portal/getMerchantUrl' + window.location.search,
		type : 'POST',
		dataType : 'json',
		contentType : "application/json",
		async : false,
		success : function(data) {
			merchanturl = data.url;
			if ("" != merchanturl) {
				window.location.href = merchanturl;
			} else {
				lfalert("欢迎商户入驻，具体事项电询96123");
			}
		},
		error : function(e) {
			lfalert("网络连接失败，请重试");
		}
	});
}
$(document).ready(function(){
	$("#moredown").click(function(){
		$(".moreseven").show();
		$("#moredown").hide();
		$("#moreup").show();
	});
	$("#moreup").click(function(){
		$(".moreseven").hide();
		$("#moreup").hide();
		$("#moredown").show();
	});
	$("#submitButton").click(function(){
		var keywords = $("#searchId").val();
		keywords = encodeURI(keywords);
		top.location.href='../Nearby_List1_Merchant/index.html'+window.location.search+"&mapkeywords="+keywords;
	});
});
