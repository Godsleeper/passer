$(function(){
	//标题栏上移
	$(".triangel").click(function(){
		$(".topbar").css({height:60})
	});

	$(".topbar").find(".logo").click(function(event){
		$(".topbar").css({height:480});
		return false;
	})

	//图片轮播
	$(".listbtn").click(function(event){
		var target = event.target;
		switch(target.id){
			case "imgbtn1":
				clear();	
				$(target).addClass("list_active");
				move(target.id);
				break;
			case "imgbtn2":
				clear();
				$(target).addClass("list_active");
				move(target.id);
				break;
			case "imgbtn3":
				clear();
				$(target).addClass("list_active");
				move(target.id);
				break;
		}
	})

	var clear = function(){
		$(".topbar_bg").removeClass('cssmove');
		$(".listbtn").children().removeClass("list_active");

	}
	var move = function(idx){
		var str = idx;
		var id = parseInt(str.substr(str.length-1));
		var offset = (id-1)*-1349+'px';
		$(".topbar_bg").addClass('cssmove').css({
			left:offset});
	}

	//登录框
	$("#signinbtn").click(function(){
		var height=$("body").height()+'px';
		$(".loginCon").css({
			visibility:"visible",
			opacity:1
		});
		$(".mask").css({
			display:"block",
			height:height,
		});
		return false;
	})
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

})