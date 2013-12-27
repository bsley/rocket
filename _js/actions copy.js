



$( document ).ready(function() {


// INITIAL


	$( "#wrapper section" ).hide();
	$( ".section_head" ).hide();
	$( ".pushpanel" ).hide();
	
	$( "#status" ).show();
	$( ".section_head.status").show();
	
	$("#splash").hide();

	
	
	
	
/*
	$( ".pushpanel" ).css("left", "0");
			$( ".back_button" ).show();
			$( ".back_button" ).css("left", "0");
			
			var test = $(".section_head.transactions")
				test.css("opacity", "0");
			test.bind('transitionend webkitTransitionEnd oTransitionEnd', function () {
				$(this).hide();
				$( "#wrapper" ).hide();
			
			})
*/

	

/*

		$("#splash").delay(1500).fadeTo(400, 0, function() {
	        $(this).hide();
	    }); 
	              
	
*/
		
	var i = 0;

	$( "#header .period" ).click(function() {
		if (i++ % 2 == 0) {
			$( "#header #period_menu" ).addClass( "open");
		} else {
			$( "#header #period_menu" ).removeClass( "open");
	    }

	
	});
	

// PUSHPANELS
	
	
	var A = 0;
	var B = 0;
	var C = 0;
	var D = 0;
	var E = 0;
	
	


	$( "#transactions .item" ).hammer().on("touch", function(ev) {
		
			$( "#wrapper" ).hide();
			$( ".pushpanel.transactions" ).show();
			$( ".section_head.transactions" ).hide();
			$( ".back_button" ).show();
			$( "body" ).css("background", "red");
				
	});
	
	
	$( ".back_button" ).hammer().on("touch", function(ev) {
	
			$( "#wrapper" ).show();
/* 			$( ".pushpanel.transactions" ).hide(); */
			$( ".pushpanel" ).hide();
			$( ".section_head" ).show();
			$( ".back_button" ).hide();
			$( "body" ).css("background", "blue");
			
	});
	
	
	$( "#budgets .item" ).hammer().on("touch", function(ev) {
		if (B++ % 2 == 0) {
		
			$( "#wrapper" ).hide();
			$( ".pushpanel.budgets" ).show();
			$( ".section_head" ).hide();
			$( ".back_button" ).show();
			$( "body" ).css("background", "red");
					
		} else {
		
			$( "#wrapper" ).show();
			$( ".pushpanel.budgets" ).hide();
			$( ".section_head" ).show();
			$( ".back_button" ).hide();
	
	    }
	
	});
	
	$( "#bills .item" ).hammer().on("touch", function(ev) {
		if (C++ % 2 == 0) {
		
			$( "#wrapper" ).hide();
			$( ".pushpanel.bills" ).show();
			$( ".section_head" ).hide();
			$( ".back_button" ).show();
			$( "body" ).css("background", "red");
					
		} else {
		
			$( "#wrapper" ).show();
			$( ".pushpanel.bills" ).hide();
			$( ".section_head" ).show();
			$( ".back_button" ).hide();
	
	    }
	
	});
	
	
// CLOSE ALL PUSHPANELS
	
	$( "#header nav a" ).hammer().on("touch", function(ev) {
				
		$( ".pushpanel" ).hide();
		$( "#wrapper" ).show();
		
		A = 0;
		B = 0;
		C = 0;
		D = 0;
		


	});
	
	
	
	
	
		

// NAV


	$( "#header .transactions" ).hammer().on("touch", function(ev) {
		
		// nav buttons
		
		$( "#header nav a" ).removeClass("active"); 
		$(this).addClass("active"); 
		
		// section labels
		
		$( "#inside .section_head").hide(); 
		$( "#inside .transactions").show(); 
		
		// section content
		
		$( "#wrapper section" ).hide();
		$( "#transactions" ).show();		
		
	});
	
	$( "#header .status" ).hammer().on("touch", function(ev) {

		// nav buttons
		
		$( "#header nav a" ).removeClass("active"); 
		$(this).addClass("active"); 
		
		// section labels
		
		$( "#inside .section_head").hide(); 
		$( "#inside .status").show(); 
		
		// section content
		
		$( "#wrapper section" ).hide();
		$( "#status" ).show();
		
		
	});
	
	$( "#header .new" ).hammer().on("touch", function(ev) {
		

		// nav buttons
		
		$( "#header nav a" ).removeClass("active"); 
		$(this).addClass("active"); 
		
		// section labels
		
		$( "#inside .section_head").hide(); 
/* 		$( "#inside .status").show();  */
		
		// section content
		
		$( "#wrapper section" ).hide();
		$( "#new" ).show();
		
		
	});
	
	$( "#header .budgets" ).hammer().on("touch", function(ev) {
	
		
		// nav buttons
		
		$( "#header nav a" ).removeClass("active"); 
		$(this).addClass("active"); 
		
		// section labels
		
		$( "#inside .section_head").hide(); 
		$( "#inside .budgets").show(); 
		
		// section content
		
		$( "#wrapper section" ).hide();
		$( "#budgets" ).show();
		
		// graphs
		
		$( ".graph #first" ).css( "width", "60px");
		$( ".graph #second" ).css( "width", "310px");
		$( ".graph #third" ).css( "width", "20px");
		$( ".graph #fourth" ).css( "width", "80px");
		$( ".graph #fifth" ).css( "width", "10px");
		$( ".graph #sixth" ).css( "width", "150px");
		$( ".graph #seventh" ).css( "width", "60px");
		$( ".graph #eighth" ).css( "width", "50px");
		$( ".graph #ninth" ).css( "width", "40px");
		$( ".graph #tenth" ).css( "width", "280px");
		
	});
	
	$( "#header .bills" ).hammer().on("touch", function(ev) {
	
	
		// nav buttons
		
		$( "#header nav a" ).removeClass("active"); 
		$(this).addClass("active"); 
		
		// section labels
		
		$( "#inside .section_head").hide(); 
		$( "#inside .bills").show(); 
		
		// section content
		
		$( "#wrapper section" ).hide();
		$( "#bills" ).show();

	});
	
	$( "#header .settings" ).click(function() {
	  	
	  	
	  	// nav buttons
		
		$( "#header nav a" ).removeClass("active"); 
		$(this).addClass("active"); 
		
		// section labels
		
		$( "#inside .section_head").hide(); 
		$( "#inside .settings").show(); 
		
		// section content
		
		$( "#wrapper section" ).hide();
		$( "#settings" ).show();

	});
	

	

});



