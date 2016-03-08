
function initContent(){
	$.ajax({
		url : '/Portal/portal/template/getTemplate'+window.location.search,
		type : 'POST',
		dataType : 'json',
		contentType : "application/json",
		async : false,
		success : function(data) {
			data =eval(data)[0];
				var html = template('template', data);
				document.getElementById('lifecirclebody').innerHTML = html;
		},
		error : function(e) {
			console.log(e);
		}
	});
}

$(document).ready(function(){
	initContent();
});
