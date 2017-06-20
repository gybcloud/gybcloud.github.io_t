$(document).ready(function () {
			$(".ctrl > input[type='button']").click(function(){
				var url ="https://api.47ks.com/webcloud/?url="+$("input[type='text']").val();
				$("iframe").attr("src",url);
			});
		});
$(document).ready(function(){
				$("#so-btn").click(function(){
					var keyword = $("#key-input").val();
					var suggest_url = "http://suggest.video.iqiyi.com/?platform=11&rltnum=1&key="+keyword;
					$.get(suggest_url,function(data,status){
						var datasrc = JSON.parse(data);//原始数据解析成json对象
						var data_data = datasrc.data;//获取原始数据的data部分
						var data_length = data_data.length;//获取data部分长度
						if(data_length>=1){
							var datarel = data_data[0]; //获取第一条结果
							if(datarel.link==""){
								$("#so-result-div").html("没有搜索结果！")
								return;
							}
							console.log(datarel);
							$("#video-name").html(datarel.name);
							$("#video-img > img").attr('src',datarel.picture_url);
							if(datarel.hasOwnProperty("director")){
								$("#video-director").html(datarel.director.toString());
							}
							$("#video-actor").html(datarel.main_actor.toString());
							console.log(datarel);
						}else{
							$("#so-result-div").html("没有搜索结果！")
							return;
						}
						
						
					});
				});
			});