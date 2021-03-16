$(document).ready(function(){
	var n=0;
    var timer=null;
    var imgLength=$("#imglist li").length;
    timer=setInterval(function(){
    if(n<7){
	    n=n+1;
	    $("#imglist").animate({marginLeft:-1920*n},10)
	    $(".banner dl dd").removeClass("current").eq(n).addClass("current")
    }else{
	    n=0;
	    $("#imglist").animate({marginLeft:-1920*n},10)
	    $(".banner dl dd").removeClass("current").eq(n).addClass("current")
    }
    }, 3000);
    $(".banner dl dd").mouseover(function(){
	    n=$(this).index();
	    $("#imglist").stop().animate({marginLeft:-1920*n},300);
	    $(this).addClass("current").siblings().removeClass("current");
    });
    $(".banner dl dd").hover(function(){
	    clearInterval(timer);
    },function(){
	     timer=setInterval(function(){
		    if(n<7){
			    n=n+1;
			    $("#imglist").animate({marginLeft:-1920*n},10)
			    $(".banner dl dd").removeClass("current").eq(n).addClass("current")
		    }else{
			    n=0;
			    $("#imglist").animate({marginLeft:-1920*n},10)
			    $(".banner dl dd").removeClass("current").eq(n).addClass("current")
		    }
		    }, 3000);
	});
	$("#left").click(function(){
		n--;
	  if(n<0){
		  n=7;
	  }
		$("#imglist").animate({marginLeft:-1920*n},10);
		$(".banner dl dd").removeClass("current").eq(n).addClass("current");
	},function(){
		timer=setInterval(function(){
		    if(n<7){
			    n=n+1;
			    $("#imglist").animate({marginLeft:-1920*n},10)
			    $(".banner dl dd").removeClass("current").eq(n).addClass("current")
		    }else{
			    n=0;
			    $("#imglist").animate({marginLeft:-1920*n},10)
			    $(".banner dl dd").removeClass("current").eq(n).addClass("current")
		    }
		    }, 3000);
	})
	$("#right").click(function(){
		n++;
	  if(n<8){
		  $("#imglist").animate({marginLeft:-1920*n},10);
		  $(".banner dl dd").removeClass("current").eq(n).addClass("current");
	  }else{
	 	  $("#imglist").animate({marginLeft:0},10); 
	 	  n=0;
		  $(".banner dl dd").removeClass("current").eq(n).addClass("current");
	  }
	},function(){
	})
	//banner下导航
	$(".nav_middle ul li").mouseover(function(){
		var n=$(this).index();
		$(this).css("background-color","#2E2D2D");
		$(".nav_middle ul li em").eq(n).css("background-position-y","36px")
		$(".nav_middle p").eq(n).css("color","#2577de");
	})
	$(".nav_middle ul li").mouseleave(function(){
		var n=$(this).index();
		$(this).css("background-color","#000");
		$(".nav_middle ul li em").eq(n).css("background-position-y","0px")
		$(".nav_middle p").eq(n).css("color","#fff");
	})
	//小banner图
	var a=0;
	var jsq=null;
	var btn=$(".box ol li")
	jsq=setInterval(function(){
    if(a<1){
	    a=a+1;
	    $(".box ul").animate({marginLeft:-240*a},10)
	    btn.removeClass("danqian").eq(a).addClass("danqian")
    }else{
	    a=0;
	    $(".box ul").animate({marginLeft:-240*a},10)
	    btn.removeClass("danqian").eq(a).addClass("danqian")
    }
    }, 3000);
    btn.click(function(){
    	var a=$(this).index();
    	$(".box ul").animate({marginLeft:-240*a},10)
    	btn.removeClass("danqian").eq(a).addClass("danqian");
    })
    //点击宣传视频
    $(".advertising_video").mouseover(function(){
    	var m=$(this).index();
    	$(".advertising_video em").eq(m).css("display","none")
    })
    $(".advertising_video").mouseleave(function(){
    	var m=$(this).index();
    	$(".advertising_video em").eq(m).css("display","block")
    })
})
$("img").each(function(){
	if($(this).width() > $(this).parent().width()) {
			$(this).width("100%");
	}
});
