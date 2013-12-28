



$( document ).ready(function() {




// INITIAL MESS


	$( "#wrapper section" ).hide();
	$( ".section_head" ).hide();
	$( ".back_button" ).hide();
	$( "#new" ).show();
/* 	$( ".section_head.status" ).show(); */
	$("#splash").hide();
	$("#blackbar").hide();
	$(".next, .prev").hide();
	
	
	
function resetKeypad() {
   $( "#numBox").innerHTML("");
   hasdec = false;
   fromdec = 0;
}	
	
	// PREVENT ELASTIC SCROLLING
 
  /*
  
	$(document).bind(
		'touchmove', function(e) {
		e.preventDefault();
	});
*/


/*

		$("#splash").delay(1500).fadeTo(400, 0, function() {
	        $(this).hide();
	    }); 
	              
	
*/



// PERIOD SELECTOR
		
	var i = 0;

	$( "#header .period" ).click(function() {
		if (i++ % 2 == 0) {
			$( "#header #period_menu" ).addClass( "open");
		} else {
			$( "#header #period_menu" ).removeClass( "open");
	    }

	
	});
	

	
// PUSHPANELS

	$( "#transactions .item" ).hammer().on("tap", function(ev) {
	  $( ".pushpanel.transactions" ).animate({marginLeft: '0'}, 0);
	    
	});
	
	$( "#budgets .item" ).hammer().on("tap", function(ev) {
	  $( ".pushpanel.budgets" ).animate({marginLeft: '0'}, 0);
	    
	});
	
	$( "#bills .item" ).hammer().on("tap", function(ev) {
	  $( ".pushpanel.bills" ).animate({marginLeft: '0'}, 0);
	    
	});
	  
	$( ".pushpanel .close" ).hammer().on("tap", function(ev) {
	  $( ".pushpanel" ).animate({marginLeft: '350px'}, 0);
	    
	});
   
	
	
// CLOSE ALL .PUSHPANELS
	
	$( "#header nav a" ).hammer().on("tap", function(ev) {
				
		$(".next, .prev").hide();		
		$( ".pushpanel" ).css("margin-left", "350px");
		$("html, body").animate({ scrollTop: 0 },  200);
  return false;
	  	

		
	});


	$( "#header nav .transactions, #header nav .bills, #header nav .budgets" ).hammer().on("tap", function(ev) {
		$( "#blackbar" ).show();
	});
	
	

	$( "#header nav .status, #header nav .new" ).hammer().on("tap", function(ev) {
		$( "#blackbar" ).hide();
	});
	
// RESETS KEYPAD
	
/*
	$( "#header nav .status, #header nav .transactions, #header nav .bills, #header nav .budgets" ).hammer().on("tap", function(ev) {
		resetKeypad();
	});
	
*/


// NAV


	$( "#header .transactions" ).hammer().on("tap", function(ev) {
		
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
	
	$( "#header .status" ).hammer().on("tap", function(ev) {

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
	
	$( "#header .new" ).hammer().on("tap", function(ev) {
		

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
	
	$( "#header .budgets" ).hammer().on("tap", function(ev) {
	
		
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
	
	$( "#header .bills" ).hammer().on("tap", function(ev) {
	
	
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
	


// TRANSACTION ENTRY


	var numBox = document.getElementById('numBox');
	var hasdec = 0;
	var fromdec = 0;


	// ADD NUMBERS

	$('.key').hammer().on("tap", function(ev) {
	 
	 	if(fromdec < 2) {
	  		if(numBox.innerHTML.length < 7){
	    		numBox.innerHTML = numBox.innerHTML + this.innerHTML;
	    		console.log("keep going...");

	   		}
	  		else if (numBox.innerHTML.length == 7) {
	    		console.log("limit reached");
    	    	$("#numBox").effect( "shake", {times:4, distance: 2}, 200 );

			}
	  	}
	  	
	  	else if(fromdec == 2) {
	  		console.log("limit reached");
	    	$("#numBox").effect( "shake", {times:4, distance: 2}, 200 );	
	  	
	  	}
	  	
	  	else {
	    
	  	}
	    event.stopPropagation();
	});
	
	// SHRINK TEXT
	
	$('.key, .btn').hammer().on("tap", function(ev) {
		
		if(numBox.innerHTML.length < 5) {
			$( "#numBox").css("font-size", "60px");
			$( "#numBox").css("margin-top", "0px");
            console.log("LENGTH: " + numBox.innerHTML.length);

		}
		
		else if(numBox.innerHTML.length > 5) {
			$( "#numBox").css("font-size", "40px");
			$( "#numBox").css("margin-top", "15px");
            console.log("LENGTH: " + numBox.innerHTML.length);

		}		
	});
	
	
	// ADD DECIMAL
	
	$('.dec').hammer().on("tap", function(ev) {
	
		if (hasdec == 0) {
	    	numBox.innerHTML = numBox.innerHTML + ".";
	 		hasdec = true;
	 		console.log("hasdec " + hasdec);
            console.log("fromdec " + fromdec);
		}
		
		else {
			//nothing
		}	 	

	});
	
	
	// ADD FROMDEC
	
	$('.key').hammer().on("tap", function(ev) {
	
		if(hasdec == true && fromdec < 2) {
			fromdec += 1;
			console.log("hasdec " + hasdec);
            console.log("fromdec " + fromdec);
		}
		
		else if (hasdec == false) {
			fromdec = 0;
			console.log("hasdec " + hasdec);
            console.log("fromdec " + fromdec);
		}
		
  	});
  	
  	
    // DELETE KEY

    $('.btn').hammer().on("tap", function(ev) {
       
        if(numBox.innerHTML.length > 0 && fromdec > 0){
            numBox.innerHTML = numBox.innerHTML.substring(0, numBox.innerHTML.length - 1);
            fromdec -= 1;
            console.log("hasdec " + hasdec);
            console.log("fromdec " + fromdec);
        }
        
        else if (numBox.innerHTML.length > 0 && fromdec == 0) {
            numBox.innerHTML = numBox.innerHTML.substring(0, numBox.innerHTML.length - 1);
            hasdec = false;
            console.log("hasdec " + hasdec);
            console.log("fromdec " + fromdec);
        }
    
        event.stopPropagation();
    });


	// CONTINUE BUTTON 
	
	$('.key, .btn').hammer().on("tap", function(ev) {
		
		if (fromdec == 2) {
/* 			$( ".numDisplay").css("background", "#b9e2d2"); */
/* 			$( ".numDisplay").css("border-color", "#b9e2d2"); */
			$( "#header .new" ).hide();
			$( ".next" ).show();
		}
		
		else if (fromdec < 2) {
/* 			$( ".numDisplay").css("background", "white"); */
			$( ".numDisplay").css("border-color", "white");
			$( "#header .new" ).show();
			$( ".next" ).hide();
		}
	});	
	
	
	$('.next').hammer().on("tap", function(ev) {
		$( ".prev").show();
		$( ".next").hide();
		$( ".pushpanel.new" ).animate({marginLeft: '0'}, 0);		
		$( "#header nav a").hide();
		
	});


	$('.prev').hammer().on("tap", function(ev) {
		$( ".prev").hide();
		$( ".next").show();
		$( ".pushpanel.new" ).animate({marginLeft: '350'}, 0);		
		$( "#header nav a").show();
		
	});


  






	
	

});










