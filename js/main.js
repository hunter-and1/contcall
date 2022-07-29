$(function() {

	var image = [ "img/1.png", "img/2.png", "img/3.png"];

	function showSliders(i)
	{
		i = (i>=image.length)?0:i;
		console.log(i);
		$(".cs-notification-mobile-call img").attr("src",image[i]);
		$(".cs-notification-mobile-call img").delay(1000).queue(function(next){
		  $(".cs-notification-mobile-call img").animate({
		  	opacity:1,
		  	padding:"0",
		  	bottom:"+=120"
		  }, 580, function() {
		    $(".cs-notification-mobile-call img").delay(500).queue(function(next){
		    	$(".cs-notification-mobile-call img").addClass("animate-wizz").delay(2000).queue(function(next){
		    		$(".cs-notification-mobile-call img").removeClass("animate-wizz");
			    	$(".cs-notification-mobile-call img").animate({
				  		opacity:0,
				  		padding:"50px",
				  		bottom:"-=120"
				  	},1000,function(){
				  		showSliders(i+1);
				  	});
				  	next();
				});
				next();
			});
		  });	
		    next();
		});
	}


	var msie6 = $.browser == 'msie' && $.browser.version < 7;
	if (!msie6) {
	    $(window).scroll(function (event) {
	        // what the y position of the scroll is
	        var y = $(this).scrollTop();

	        if (y >= 100) 
	            $('.main-page > .navbar.fixed-top').removeClass('navbar-transparent').addClass('bg-contcall');
	        else 
	            $('.main-page > .navbar.fixed-top').addClass('navbar-transparent').removeClass('bg-contcall');
	        
	    });
	}

	showSliders(0);
	
});