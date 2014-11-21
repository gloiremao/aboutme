
$(document).ready(function(){

	$("#header-wrapper").height($(window).height());
	$("#photo").width($("#photo").height());
	$("#down").width($("#down").height());
    $(window).resize(function(event) {
    	
    	$("#header-wrapper").height($(window).height());
    	$("#photo").width($("#photo").height());
    	$("#down").width($("#down").height());
    });

	$("#down").click(function(event) {
		
		$("html ,body").animate({scrollTop: $("#header-wrapper").height() },600);
	});

	$('#job').appear(function() {
      	$('.exp_icon').fadeIn(1500);
      	$('.exp_text').animate({opacity:1,paddingLeft:'0px'},1500);
    });

    $('#js-bar').appear(function() {
    	$('#html-bar').animate({width:'90%'},1500);
    	$('#css-bar').animate({width:'85%'},1500);
    	$('#js-bar').animate({width:'75%'},1500);
    	$('#jq-bar').animate({width:'75%'},1500);
    	$('#php-bar').animate({width:'70%'},1500);
    	$('#sql-bar').animate({width:'65%'},1500);
    	$('#bs-bar').animate({width:'60%'},1500);
    	$('#rwd-bar').animate({width:'60%'},1500);
    	$('#ruby-bar').animate({width:'50%'},1500);
    });

    $('#java-bar').appear(function() {
    	$('#c-bar').animate({width:'90%'},1500);
    	$('#cpp-bar').animate({width:'40%'},1500);
    	$('#java-bar').animate({width:'80%'},1500);
    	$('#cs-bar').animate({width:'20%'},1500);
    	$('#ooc-bar').animate({width:'50%'},1500);
    });

    $('#ios-bar').appear(function() {
    	$('#a-bar').animate({width:'30%'},1500);
    	$('#ios-bar').animate({width:'55%'},1500);
    });

    $('#ps-bar').appear(function() {
    	$('#ps-bar').animate({width:'10%'},1500);
    	$('#ms-bar').animate({width:'95%'},1500);
    });

    $(".bg").interactive_bg({
       strength: 40,              
       scale: 1.05,               
       animationSpeed: "100ms",   
       contain: true,             
       wrapContent: false         
     });

    
    $(window).resize(function() {
        $(".bg > .ibg-bg").css({
            width: $(window).outerWidth(),
            height: $(window).outerHeight()
        })
    })

    $("#flipit").hover(
        function() {
            $("#flip-hover").slideDown(400);
        }, function() {
            $("#flip-hover").css("display","none")
        }
    );

    $("#cal").hover(
        function() {
            $("#cal-hover").slideDown(400);
        }, function() {
            $("#cal-hover").css("display","none")
        }
    );

    $("#paint").hover(
        function() {
            $("#paint-hover").slideDown(400);
        }, function() {
            $("#paint-hover").css("display","none")
        }
    );

    $("#map").hover(
        function() {
            $("#map-hover").slideDown(400);
        }, function() {
            $("#map-hover").css("display","none")
        }
    );
})
