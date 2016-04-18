
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
				html = replaceStr(html);
				document.getElementById('lifecirclebody').innerHTML = html;
				
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function replaceStr(str){
	var html = '';
	html=str.replace(/&#60;/g, "<");
	html =html.replace(/&#62;/g, ">");
	html =html.replace(/&#160;/g, "");
	html =html.replace(/&#38;/g, "&");
	html =html.replace(/&#34;/g, "\"");
	html =html.replace(/&#39;/g, "'");
	html =html.replace(/&#215;/g, "x");
	html =html.replace(/&#247;/g, "/");

	return html;
}

$(document).ready(function(){
	initContent();
});
