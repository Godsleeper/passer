$(function(){
	// $("#loginbtn").click(function(){
	// 	$.post("/test",{
	// 			name:$("#signName").val(),
	// 			password:$("#signPassword").val()
	// }).done(function(results){
	// 			alert(results.name);
	// 	})
	// })

	//登录框
	$("#signinbtn").click(function(event){
		
		$(".loginCon").css({
			visibility:"visible",
			opacity:1,
			transition:'all'+' '+0.6+"s"
		});
		$(".mask").css({
			display:"block",
			height:$(window).height()+'px',
		});
		event.preventDefault;
	})
	//关闭按钮
	$(".close").click(function(){
		$(".loginCon").css({
			visibility:"hidden",
			opacity:0
		});
		$(".mask").css({
			display:"none",
			height:0+'px',
		});
	})

	function clear(){
		$(".top_list_item").removeClass("active");
	}

	function active(){
		clear();
		var path = window.location.pathname;
		if(path=='/signup'){
			$('.top_list_item').eq(4).addClass('active');
		}else if(path=='/signin'){
			$('.top_list_item').eq(3).addClass('active');
		}else{
			$('.top_list_item').eq(1).addClass('active');
		}
	};
	active();

})