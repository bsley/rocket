



$( document ).ready(function() {




// INITIAL MESS


	$( "#wrapper section" ).hide();
	$( ".section_head" ).hide();
	$( ".back_button" ).hide();
	$( "#status" ).show();
	$( ".section_head.status" ).show();
/* 	$("#splash").hide(); */
	
	
	// PREVENT ELASTIC SCROLLING
 
    
	/*
$(document).bind(
		'touchmove', 
		function(e) {
		e.preventDefault();
	});
*/



		$("#splash").delay(1500).fadeTo(400, 0, function() {
	        $(this).hide();
	    }); 
	              
	



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
				
		$( ".pushpanel" ).css("margin-left", "350px");
		
	});
	


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


var digits = 0; 
  var numBox = document.getElementById('numBox');

  // mac characters
  
  $('.key').hammer().on("touch", function(ev) {
  
  if (digits == 6) {
    
    $("#numBox").effect( "shake", {times:4, distance: 5}, 200 );
  } 
  
  
  });
  
  
  // removing the initial zero
  
  var haszero = 1;
/*
  
  $('.key').hammer().on("touch", function(ev) {
  
  if (haszero == 1) {
    
   console.log($("numBox").innerHTML);
   haszero = 0;
  } 
  
  
  });
  
*/
  
    
    $('.key').hammer().on("touch", function(ev) {
      
      
        if(this.innerHTML > 6 && digits < 6){
            if (numBox.innerHTML.length > 0)
                numBox.innerHTML = numBox.innerHTML + this.innerHTML;
                digits += 1;
                //console.log("digits"); 
          
        }
      else if (digits < 6) {
            // add digits          
            numBox.innerHTML = numBox.innerHTML + this.innerHTML;
            digits += 1;
            //console.log(digits);
      }
      
      else {
        
         
      }
        event.stopPropagation();
    });
    
    $('.btn').hammer().on("touch", function(ev) {
        if(this.innerHTML == 'DEL'){
            var numBox = document.getElementById('numBox');
            if(numBox.innerHTML.length > 0){
                
                // delete a digit
                numBox.innerHTML = numBox.innerHTML.substring(0, numBox.innerHTML.length - 1);
                digits -= 1;
                //console.log(digits);
            }
        }
        else{
           
            // clear numbox
            document.getElementById('numBox').innerHTML = '';
            digits = 0;
            //console.log(digits);
        }
        
        event.stopPropagation();
    });
  
  






	
	

});










