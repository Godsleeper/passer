$(function(){
	$(".triangel").click(function(){
		$(".topbar").css({height:60})
	});

	$(".topbar").find(".logo").click(function(event){
		$(".topbar").css({height:480});
		return false;
	})
})