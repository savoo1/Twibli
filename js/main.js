$( ".right_pop" ).click(function() {
  if($(this).hasClass("right_pop_active")){
  	$(this).removeClass("right_pop_active");
  }else{
  	$(this).addClass("right_pop_active");
  }
});


$( ".navbar .navbar-nav .scrollto" ).click(function(e) {
	e.preventDefault();
	var attr = "#" + $(this).attr("name");
	var heightofmenu = 80;
	if ($(window).width() < 992) {
		var heightofmenu = 130;
	}
	if ($(window).width() < 772) {
		var heightofmenu = 89;
	}

	$('html, body').animate({
	    scrollTop: $(attr).offset().top - heightofmenu
	}, 700);
});

$( ".hero_sec .cont .leftcont .find_btn a" ).click(function(e) {
	e.preventDefault();
	var heightofmenu = 80;
	if ($(window).width() < 992) {
		var heightofmenu = 130;
	}
	if ($(window).width() < 772) {
		var heightofmenu = 89;
	}
	$('html, body').animate({
	    scrollTop: $(".lead_generation_sec").offset().top - heightofmenu
	}, 500);
});

$( ".navbar .navbar-nav .nav-link" ).click(function() {
	if($(".navbar .navbar-collapse").hasClass("show")){
		$(".navbar .navbar-collapse").removeClass("show");
	}
});


$(document).scroll(function() {
	var scroll = $(this).scrollTop();
	if (scroll >= 120) {
 	  $(".navbar").addClass("navbar_fixed");
	}else{
 	  $(".navbar").removeClass("navbar_fixed");
	}
});
var i = 1;
var j = 1;
$( window ).scroll(function() {
  	var heightofwin = $(window).height();
  	var topofmainline = $(".mainline1").offset().top;
  	var mainlineheight = $(".mainline1").height();
	var scroll = $(this).scrollTop() + heightofwin;
	if (scroll >= topofmainline) {
	  if(heightofwin < topofmainline + mainlineheight){
	  	if(i == 1){
	  		i++;
	  		$(".mainline1").attr('src',$(".mainline1").attr('src'));
	  		$(".mainline1").css("opacity", "1");
	  	}
	  }
	}
});

$( window ).scroll(function() {
  	var heightofwin = $(window).height();
  	var topofmainline = $(".mainline2").offset().top;
  	var mainlineheight = $(".mainline2").height();
	var scroll = $(this).scrollTop() + heightofwin;
	if (scroll >= topofmainline) {
	  if(heightofwin < topofmainline + mainlineheight - 100){
	  	if(j == 1){
	  		j++;
	  		$(".mainline2").attr('src',$(".mainline2").attr('src'));
	  		$(".mainline2").css("opacity", "1");
	  	}
	  }
	}
});
$( document ).ready(function() {
	var heightofwin = $(window).height();
	var topofmainline = $(".mainline1").offset().top;
	var mainlineheight = $(".mainline1").height();
    if(heightofwin < topofmainline + mainlineheight){

    }else{
	  	$(".mainline1").css("opacity", "1");
    }
});

$( document ).ready(function() {
	var heightofwin = $(window).height();
	var topofmainline = $(".mainline2").offset().top;
	var mainlineheight = $(".mainline2").height();
    if(heightofwin < topofmainline + mainlineheight - 100){

    }else{
	  	$(".mainline2").css("opacity", "1");
    }
});



$( ".ledgeneration .btns a" ).click(function(e) {
	e.preventDefault();

	if($(this).hasClass("activatedbtn")){

	}else{
		$(".ledgeneration .btns a").removeClass("activatedbtn");
		$(this).addClass("activatedbtn");

		if($(this).hasClass("lenderenqshow")){
			$(".ledgeneration .affiliatecont").removeClass("activecontbelow");
			$(".ledgeneration .lendercont").addClass("activecontbelow");
		}else{
			$(".ledgeneration .lendercont").removeClass("activecontbelow");
			$(".ledgeneration .affiliatecont").addClass("activecontbelow");
		}
	}
	
});


$(document).ready(function(){

	var pp = window.location.hash;
    var heightofmenu = 80;
    if ($(window).width() < 992) {
    	var heightofmenu = 130;
    }
    $('html, body').animate({
        scrollTop: $(pp).offset().top - heightofmenu
    }, 700);
 });



// $(window).scroll(function() {
// 		var scrollDistance = $(window).scrollTop();
// 		$('.our_business').each(function(i) {
// 			if ($(this).position().top <= scrollDistance) {
// 					$('.navbar .navbar-nav .activelink').removeClass('activelink');
// 					$('.navbar .navbar-nav .nav-link').eq(i).addClass('activelink');
// 			}else{
// 					$('.navbar .navbar-nav .activelink').removeClass('activelink');
// 			}
// 		});
// }).scroll();










