$(document).ready(function(){
	// TOGGLE MENU
	$("span.nav-icon").click(function(){
		$(".menu").addClass("show-menu");
		$(".menu").removeClass("hide-menu");
	});	

	$("span.cros-icon").click(function(){
		$(".menu").addClass("hide-menu");
		$(".menu").removeClass("show-menu");
	});

    // STICKY MENU
    $(".js-sticky-menu-show").waypoint(function(direction){
        
        if (direction == "down"){
                $("nav").addClass("sticky-menu");
            } else {
                $("nav").removeClass("sticky-menu");
            }
    });
	
	// COUNT UP
	 $(".counter").counterUp({
            delay: 10,
            time: 3000
        });
	
	// SCROLL UP BTN 
	$(window).scroll(function(){
		
		if($(this).scrollTop() > 200) {
			$("a.scroll-up-btn").fadeIn();
		} else {
			$("a.scroll-up-btn").fadeOut();
		}
		
	});
    
});