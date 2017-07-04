
$(function(){
	//点击标签侧边栏向右弹出
	$('#top .header-l').on('touchstart',function(e) {
		toRight();
	});
	
	//点击进入登录页面
	var screenHeight=document.documentElement.clientHeight;
	$("#login").css({"top":screenHeight+"px","display":"none"})
	$(".user").on("touchstart",function(){
		loginTop();
	})
	//点击进入离开页面
	$("#quit").on("touchstart",function(){
		$("#login").animate({
			"top":screenHeight+"px"
		},"fast",function(){
			$("#login").css({"display":"none"})
		})
	})
	//点击进入设置页面
	var screenWidth=document.documentElement.clientWidth;
	$("#set").css({"left":screenWidth+"px","display":"none"})
	$(".set1").on("touchstart",function(){
		$("#set").css({"display":"block"})
		$("#set").animate({
			"left":0
		},"fast")	
	})
	//点击离开设置页面
	$(".setHeader .header-l").on("touchstart",function(){
		$("#top").css({
			"position":"absolute",
			"top": 0,
			"marginLeft":0
		})
		$("#set").animate({
			"left":screenWidth+"px"
		},"fast",function(){
			$("#set").css({"display":"none"})
		});
	})
	
	//点击进入设置二级页面
	$("#login-set").css({"left":screenWidth+"px","display":"none"})
	$("#set .setSection ul li:first").on("touchstart",function(){
		$("#login-set").css({"display":"block"})
		$("#login-set").animate({
			"left":0
		},"fast")
	})
	//点击离开设置二级页面
	$("#login-set .header-l").on("touchstart",function(){
		$("#login-set").animate({
			"left":screenWidth+"px"
		},"fast",function(){
			$("#login-set").css({"display":"none"})
		})
	})
	//记录设置值
	var setClick=true;
	$("#login-set ul").on("touchstart","li .right",function(){
		if(setClick){
			$(this).children().css({"marginLeft": 0.6+"rem"})
			$(this).css({"background":"#0185cf"});
			setClick=false;
		}else{
			$(this).children().css({"marginLeft": 0});
			$(this).css({"background":"#fff"});
			setClick=true;
		}	
	})	
})

//点击标签侧边栏向右弹出
var isright=true;
function toRight(){
	if(isright){
		$("#top").css({
		"position": "fixed",
		"top": 0,
		"marginLeft":"4.2rem"
		})
		isright=false;
	}else if(!isright){
		$("#top").css({
			"position":"absolute",
			"top": 0,
			"marginLeft":0
		})
		isright=true;
	}
}
//点击登录页面向上滑动
function loginTop(){
	$("#login").css({"display":"block"})
	$("#login").animate({
		"top":0
	},"fast",function(){
		$("#top").css({
			"position":"absolute",
			"top": 0,
			"marginLeft":0
		})
	})
}





















