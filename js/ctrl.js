$(document).ready(function () {
			$("input[type='button']").click(function(){
				var url ="https://api.47ks.com/webcloud/?url="+$("input[type='text']").val();
				$("iframe").attr("src",url);
			});
		});