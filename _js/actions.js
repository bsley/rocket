



$( document ).ready(function() {




// INITIAL MESS


	$( "#wrapper section" ).hide();
	$( ".section_head" ).hide();
	$( ".back_button" ).hide();
	$( ".pushpanel" ).hide();
	$( "#new" ).show();
/* 	$( ".section_head.status").show(); */
	$("#splash").hide();


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
	

	
	
// PUSH - TRANSACTIONS

	$( "#transactions .item" ).hammer().on("touch", function(ev) {
		
			// hide content
			$( "#wrapper" ).hide();
			
			// back button
			$( ".pushpanel.transactions" ).show();
			$( ".section_head.transactions" ).hide();
			$( ".back_button.transactions" ).show();
							
	});
	
	
	$( ".back_button.transactions" ).hammer().on("touch", function(ev) {
	
			// show content
			$( "#wrapper" ).show();
			
			// back button
			$( ".pushpanel.transactions" ).hide();
			$( ".section_head.transactions" ).show();
			$( ".back_button.transactions" ).hide();

			
	});
	
	
// PUSH - BUDGETS

	$( "#budgets .item" ).hammer().on("touch", function(ev) {
		
			// hide content
			$( "#wrapper" ).hide();
			
			// back button
			$( ".pushpanel.budgets" ).show();
			$( ".section_head.budgets" ).hide();
			$( ".back_button.budgets" ).show();
							
	});
	
	
	$( ".back_button.budgets" ).hammer().on("touch", function(ev) {
	
			// show content
			$( "#wrapper" ).show();
			
			// back button
			$( ".pushpanel.budgets" ).hide();
			$( ".section_head.budgets" ).show();
			$( ".back_button.budgets" ).hide();

	});
	

// PUSH - BILLS

	$( "#bills .item" ).hammer().on("touch", function(ev) {
		
			// hide content
			$( "#wrapper" ).hide();
			
			// back button
			$( ".pushpanel.bills" ).show();
			$( ".section_head.bills" ).hide();
			$( ".back_button.bills" ).show();
							
	});
	
	
	$( ".back_button.bills" ).hammer().on("touch", function(ev) {
	
			// show content
			$( "#wrapper" ).show();
			
			// back button
			$( ".pushpanel.bills" ).hide();
			$( ".section_head.bills" ).show();
			$( ".back_button.bills" ).hide();
			
	});	
	

	
// CLOSE ALL PUSHPANELS
	
	$( "#header nav a" ).hammer().on("touch", function(ev) {
				
		$( ".pushpanel" ).hide();
		$( "#wrapper" ).show();
		$( ".section_head" ).show();
		$( ".back_button" ).hide();

		
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
	

	
// TRANSACTION ENTRY


var digits = 0; 
  var numBox = document.getElementById('numBox');

  // mac characters
  
  $('.key').hammer().on("touch", function(ev) {
  
  if (digits == 6) {
    
    $("#numBox").effect( "shake", {times:4}, 200 );
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
  
  
    //decimal entry
  
  
  
  
   function GetNumberAfterAppendingDecimal(str) {
        if (str.length < 3)
            return str;
        var positionFromEnd = 2;
        var reversedStr = str.split('').reverse().join('');
        if (str.length == 3)
            positionFromEnd -= 1;
        reversedStr = [reversedStr.slice(0, positionFromEnd), ".", reversedStr.slice(positionFromEnd)].join('');
        return reversedStr.split('').reverse().join('');
    }
    function GetCleanString(str) {
    str = str.replace(/[\r]+/, '');
    str = str.replace(/[\n]+/, '');
    str = str.replace(/[\t]+/, '');
    str = str.replace('.', '');
    str = $.trim(str);
    return str;
    }
  
   
   
    $('.key').hammer().on("touch", function(ev) {
      
     var inputNumber=GetCleanString($("#numBox").html());

     $("#numBox").html(GetNumberAfterAppendingDecimal(inputNumber));
      
      
      
       $('div.btn').hammer().on("touch", function(ev) {


 var inputNumber=GetCleanString($("#numBox").html());

 $("#numBox").html(GetNumberAfterAppendingDecimal(inputNumber));

 });
   
    
     });
  
  
  
      
   /*   
     str = str.replace(".","");

     
        if(str.length > 2){
            str = str.substr(0, str.length - 2) + '.' + str.substr(str.length - 2);
        }
     */
      
    
 /*   alert(str);*/
    
  
      
   
    
    
    
      
	
	
	

});



