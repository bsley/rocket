
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Period</title>
		
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black">

		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="apple-touch-icon" href="_img/ios_appicon.png" />


		<link rel="shortcut icon" href="favicon.ico" />
		
		<link rel="stylesheet" type="text/css" href="_css/clear.css" />
		<link rel="stylesheet" type="text/css" href="_css/screen.css" />
		<link rel="stylesheet" type="text/css" href="_css/idangerous.swiper.css" />

		
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
		<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
		

		<script src="_js/actions.js"></script>
		<script src="_js/jquery.maskMoney.js"></script>
		<script src="_js/idangerous.swiper-2.1.min.js"></script>


		<script src="http://eightmedia.github.io/hammer.js/dist/jquery.hammer.min.js"></script>
			
			
			

	</head>
<body>


	<div id="splash" >
   	
   		<img src="_img/period_logo.svg">
   	
   	</div>
   	
   	
   	
   	<div class="pushpanel new" >
   		
    	
    	<div class="content">
    	
	    	<div class="horizontal">
			    	<p>Vendor</p>
			    	<input type="text" class="text" value="City Target">
		    </div>
		    
	<!--  IS IT ___________? -->
	
	    	 <div class="horizontal">
			    	<p>Budget</p>
		
			    	<div id="dropdown">
			   			<select>
				    		<option>Shopping</option>
				    		<option>Groceries</option>
				    		<option>Restaurants</option>
				    		<option>Entertainment</option>
				    		<option>Gas</option>
				    		<option>Amy's Allowance</option>
				    		<option>Guest</option>
				    		<option>Taxi</option>
				    		<option>Kids</option>
				    	</select>
					</div>
		    </div>
		    	
	    	 <div class="horizontal">
			    	<p>Date</p>
		
			    	<div id="dropdown">
			   			<select>
				    		<option>Dec. 28 10:12AM</option>
				    	</select>
					</div>
		    </div>
	    	
	    	
	    	<div id="nextsteps">
			
				<a class="">Add Transaction</a>
				
			</div>
			
		</div>
		
		 
    	
    </div>
   	
   	<div class="pushpanel transactions" >
   		
   		<div class="close"><div></div></div>
    	
    	<div class="content">
	    	
	    	<div class="horizontal">
		    	<p>Amount</p>
		    	<input type="text" class="text" value="$10.99">
	    	</div>
	    	
	    	<div class="horizontal">
				<p>Vendor</p>
				<input type="text" class="text" value="Goodwill">
	    	</div>
	    	
	    	<div class="horizontal">
		    	<p>Budget</p>
	
		    	<div id="dropdown">
		   			<select>
			    		<option>Shopping</option>
			    		<option>Groceries</option>
			    		<option>Restaurants</option>
			    		<option>Entertainment</option>
			    		<option>Gas</option>
			    		<option>Amy's Allowance</option>
			    		<option>Guest</option>
			    		<option>Taxi</option>
			    		<option>Kids</option>
			    	</select>
				</div>
	    	</div>    	
    	
			<div id="nextsteps">
		
			<a class="" onclick="return confirm('Are you sure?')">Delete Transaction</a>
			
			</div>
			
			<div class="history">
			
				<p>1/13/13 10:12 AM - Category changed from "Groceries" to "Shopping"</p>
				<p>1/13/13 10:10 AM - Amount changed to "$13.12" from "$14.12"</p>
				<p>Created on 1/13/13</p>
				
			</div>
		
		</div>
	
	</div>
	
	
	<div class="pushpanel budgets">
    	
   		<div class="close"><div></div></div>

    	<div class="content">
    	
    		<div class="horizontal">
		    	<p>Max Amount</p>
		    	<input type="text" class="text" value="$120">
	    	</div>
	    	
	    	<div class="horizontal">
				<p>Name</p>
				<input type="text" class="text" value="Groceries">
	    	</div>
	    	
	    	<div class="horizontal">
		    	<p>Recurring?</p>
	
		    	<div id="dropdown">
		   			<select>
			    		<option>Yes</option>
			    		<option>No</option>
			    	</select>
				</div>
	    	</div>    	
    	
			<div id="nextsteps">
		
			<a class="" onclick="return confirm('Are you sure?')">Delete Budget</a>
			
			</div>
    	
    	</div>
    	
    </div>
    
    
    <div class="pushpanel bills">
    	
   		<div class="close"><div></div></div>

    	<div class="content">
    	
    		<div class="horizontal">
		    	<p>Amount</p>
		    	<input type="text" class="text" value="$120">
	    	</div>
	    	
	    	<div class="horizontal">
				<p>Vendor</p>
				<input type="text" class="text" value="Seattle Public Utilities">
	    	</div>
	    	
	    	<div class="horizontal">
		    	<p>Recurring?</p>
	
		    	<div id="dropdown">
		   			<select>
			    		<option>Yes</option>
			    		<option>No</option>
			    	</select>
				</div>
	    	</div>    	
    	
			<div id="nextsteps">
		
			<a class="" onclick="return confirm('Are you sure?')">Delete Bill</a>
			
			</div>
    	
    	</div>
    	
    </div>
    
    
    
<!--  PUSHPANEL - BUDGET NEW -->
    
    <div class="pushpanel bill_create" >
   		
   		<div class="close"><div></div></div>
    	
    	<div class="content">
	    	
	    	<div class="horizontal">
		    	THIS IS HOW YOU CREATE A NEW BILL
	    	</div>
	    	
	    </div>
	    
	</div>
	
	
	
    	

    
	<div class="overlay"></div>

	<div id="back"></div>
	
	
	
	<a class="prev">
	Back
	</a>
	
	
	<a class="next">
	Next
	</a>
	

	<section id="header">
	
		
	
	
	
	

		<nav>
		
			<!--
<a class="period ">
				<?php include("_svg/icon_period.svg"); ?>
			</a>
		
			<div id="period_menu">
				
				<a class="current">Nov. 13 - Nov. 29</a>
				
			</div>	
-->	
			
			
			
			<a class="new">
				<?php include("_svg/icon_new.svg"); ?>
			</a>
			
			
			
			
			<a class="status fastclick active">
				<?php include("_svg/icon_status.svg"); ?>
			</a>
			
			<a class="transactions">
				<?php include("_svg/icon_transactions.svg"); ?>
			</a>
			
			<a class="budgets">
				<?php include("_svg/icon_budget.svg"); ?>
			</a>
			
			<a class="bills">
				<?php include("_svg/icon_bills.svg"); ?>
			</a>
			
			
			
			
		
		</nav>
	

	
	</section>
	
	

	<div id="blackbar">
	
		<div id="inside">
    
		<div class="section_head status">
	    	<div class="one">Status </div>
		</div> 
		
		<div class="section_head transactions">
	    	<div class="one">Transactions </div>
		</div>
		
		 <div class="section_head budgets">
			<div class="one">Budgets </div>
			<div class="two">Left</div>
			<div class="three">Max</div>
		</div>
		
		<div class="section_head bills">
	    	<div class="one">Bills</div>
	    	<div class="three">Amount</div>
		</div>
	
	    <div class="back_button transactions">
	    	<div>Back</div>
	    </div>
	    
	    <div class="back_button budgets">
	    	<div>Back</div>
	    </div>
	    
	    <div class="back_button bills">
	    	<div>Back</div>
	    </div>
	    
	    
	    
	    </div>
	    	 
</div>
	
	
	

    <div id="wrapper">
    	
    	
  
   	    	 

    
    <section id="status">
    
	   
  	 <div class="swiper-container">
    <div class="swiper-wrapper">
    
		<div class="swiper-slide">
		        
			<div id="items" class="equation">
				<div class="row">
					<div class="left">Cash</div>
					<div class="right">$2,212</div>
				</div>
				
				<div class="row">
					<div class="left">Bills (this period)</div>
					<div class="right">-$520</div>
				</div>
				
				<div class="row">
					<div class="left">Budget Remaining</div>
					<div class="right">-$1,200</div>
				
				</div>
				
				
				<div class="row">
					<div class="left">Next Period</div>
					<div class="right">-$183</div>
				
				</div>		
				
			</div>
			
			<div id="main">
    
	   			<div id="number"><span>$</span>492</div> 
	    		
			</div>
		
		</div>
		
		<div class="swiper-slide">
			
			<div class="item" >
	    	
		    	<div class="one">Reminder: Pay Seattle Public Ulilities</div>			
				<div class="details">
					<div>before Friday</div>
				</div>
				
		    </div>
		</div>
		
		<div class="swiper-slide">
			
			
			<div class="item" >
	    	
		    	<div class="one">Pay Period</div>			
				<div class="details">
					<div>Set as every 14 days (on Friday)</div>
				</div>
				
		    </div>
		    
		    <div class="item" >
	    	
		    	<div class="one">Push Notifications</div>			
				<div class="details">
					<div>Upcoming Bills, Low Balance</div>
				</div>
				
		    </div>
		    
		    <div class="item" >
	    	
		    	<div class="one">Currency</div>			
				<div class="details">
					<div>$USD</div>
				</div>
				
		    </div>
		    
		    <div class="item" >
	    	
		    	<div class="one">Data Backup</div>			
				<div class="details">
					<div>Dropbox Account (jeremy@bsley.com)</div>
				</div>
				
		    </div>
		   
		   
		    <div class="item" >
	    	
		    	<div class="one">Having Problems?</div>			
				<div class="details">
					<div>Contact our support staff</div>
				</div>
				
		    </div> 
		    <div class="item" >
	    	
		    	<div class="one">Credits</div>			
				<div class="details">
					<div>Designed and built by smpl.</div>
				</div>
				
		    </div>
				
			
		</div>
		      
        
    </div>
    <div class="pagination"></div>
  </div>
  
  
  

    
    
	
	  <!--
 
-->
	
	 
	
	<!--
<div id="nextsteps">
	
		<a href="" class="allocate" >Allocate your balance</a>
		<a href="" class="">See next period</a> 
		
		
		
	</div>
-->

    
	
	

    
    </section>
    
    
    <section id="transactions">

		
    
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Goodwill</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$3.10</div>
    	</div>
    	
    	<div class="item alt" >
    		<div class="date">11/12</div>
    		<div class="vendor">Target.com</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$122.12</div>
    	</div>
    	
    	
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Macy's</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$43.23</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Smith</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$76.23</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/11</div>
    		<div class="vendor">Lost Lake Cafe</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$23.12</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/11</div>
    		<div class="vendor">City of Seattle</div>
    		<div class="category">Utilities</div>
    		<div class="amount">$120.09</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Farnsworth's </div>
    		<div class="category">Groceries</div>
    		<div class="amount">$89.00</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Target.com</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$122.12</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Macy's</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$43.23</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Smith</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$76.23</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/11</div>
    		<div class="vendor">Lost Lake Cafe</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$23.12</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/11</div>
    		<div class="vendor">City of Seattle</div>
    		<div class="category">Utilities</div>
    		<div class="amount">$120.09</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Farnsworth's </div>
    		<div class="category">Groceries</div>
    		<div class="amount">$89.00</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Goodwill</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$3.10</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Target.com</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$122.12</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Macy's</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$43.23</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Smith</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$76.23</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/11</div>
    		<div class="vendor">Lost Lake Cafe</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$23.12</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/11</div>
    		<div class="vendor">City of Seattle</div>
    		<div class="category">Utilities</div>
    		<div class="amount">$120.09</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Farnsworth's </div>
    		<div class="category">Groceries</div>
    		<div class="amount">$89.00</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Goodwill</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$3.10</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Target.com</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$122.12</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Macy's</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$43.23</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Smith</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$76.23</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/11</div>
    		<div class="vendor">Lost Lake Cafe</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$23.12</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/11</div>
    		<div class="vendor">City of Seattle</div>
    		<div class="category">Utilities</div>
    		<div class="amount">$120.09</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Farnsworth's </div>
    		<div class="category">Groceries</div>
    		<div class="amount">$89.00</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Goodwill</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$3.10</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Target.com</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$122.12</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Macy's</div>
    		<div class="category">Shopping</div>
    		<div class="amount">$43.23</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/12</div>
    		<div class="vendor">Smith</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$76.23</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/11</div>
    		<div class="vendor">Lost Lake Cafe</div>
    		<div class="category">Restaurants</div>
    		<div class="amount">$23.12</div>
    	</div>
    	
    	<div class="item alt">
    		<div class="date">11/11</div>
    		<div class="vendor">City of Seattle</div>
    		<div class="category">Utilities</div>
    		<div class="amount">$120.09</div>
    	</div>
    	
    	<div class="item">
    		<div class="date">11/12</div>
    		<div class="vendor">Farnsworth's </div>
    		<div class="category">Groceries</div>
    		<div class="amount">$89.00</div>
    	</div>


    
    </section>
    
    
    <section id="new">
    
	    <div class="numDisplay">
		    <div id="numBox"></div>
		 </div> 
	 
	    <div class="keypad">
	    	<div class="key">1</div>
	        <div class="key">2</div>
	        <div class="key">3</div>
	        <div class="key">4</div>
	        <div class="key">5</div>
	        <div class="key">6</div>
	        <div class="key">7</div>
	        <div class="key">8</div>
	        <div class="key">9</div>
	        <div class="bottom dec">.</div>
	        <div class="key bottom">0</div>
	        <div class="btn del bottom"></div>
	   	</div>
	   	
	   	<a class="continue">Next</a>
    
    </section>
    
    <section id="budgets">
    
    	
	   
		
		
		
		
    
	  
		  
			
			
		
		
			    
	    <div class="item" >
    	
	    	<div class="one">Restaurants</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
	
	    </div>
	    
	    <div class="graph">
				<div class="filled full" id="second" ></div>
			</div>
	    
	    <div class="item" >
    	
	    	<div class="one">Gas/Fuel</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
			
	
	    </div>
	    
	    <div class="graph">
				<div class="filled" id="third" ></div>
			</div>
	    
	    <div class="item" >
    	
	    	<div class="one">Entertainment</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
	
	    </div>
	    
	    
			<div class="graph">
				<div class="filled" id="fourth"></div>
			</div>
	    
	    <div class="item" >
    	
	    	<div class="one">Kids</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
			
	
	    </div>
	    
	    <div class="graph">
				<div class="filled" id="fifth"></div>
			</div>
	    
	    <div class="item" >
    	
	    	<div class="one">Allowance</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
			
	
	    </div>
	    
	    <div class="graph">
				<div class="filled" id="sixth"></div>
			</div>
			
			
			
			
		 <div class="item" id="groceries" >
	
	    	<div class="one">Groceries</div>
			<div class="two">$150</div>
			<div class="three">$650</div>
				
	    </div>
	    
		<div class="below" id="groceries_info">
			<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et tempus ante, nec pharetra enim. Nulla eget rhoncus nisl. Cras in massa at eros facilisis pulvinar fringilla sed nibh.</div>
		</div>
		
		<div class="graph">
			<div class="filled" id="first" ></div>
		</div>
			
			
			
			
	    
	    <div class="item" >
    	
	    	<div class="one">Guests</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
			
	
	    </div>
	    
	    <div class="graph">
				<div class="filled" id="seventh" ></div>
			</div>
	    
	    <div class="item" >
    	
	    	<div class="one">Taxi</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
			
	    </div>
	    
	    <div class="graph">
				<div class="filled" id="eighth" ></div>
			</div>
	
	    
	   <!--
 <div class="item" >
    	
	    	<div class="one">Health/Doctor</div>
			<div class="two">$650</div>
			<div class="three">$650</div>
			
			<div class="graph">
				<div class="filled" id="ninth" ></div>
			</div>
	
	    </div>
-->
	    
	    <div class="item" style="background: transparent">
    				<a class="addnew">
    					<img src="_img/icon_new_black.svg">
    					<span>Create a new budget item</span>
    					
    				</a>

	    		
	    </div>
	   	    
	    
	 
    
    </section>
    
    
    
<!--     BILLS -->

	<section id="bills">
	
		
	    
	    <div class="item existing" >
    	
	    	<div class="one">Rent</div>
			<div class="three">$1,895</div>
			
			<div class="details">
				<div>Due on 12/1 (11 days)</div>
			</div>
			
	    </div>
	    
	    <div class="item existing" >
    	
	    	<div class="one">Seattle Utilities</div>
			<div class="three">~$150</div>
			
			<div class="details">
				<div>Due on 11/23 (23 days)</div>
			</div>
			
	    </div>
	    
	    <div class="item existing" >
    	
	    	<div class="one">Seattle Light</div>
			<div class="three">~$180</div>
			
			<div class="details">
				<div>Due on 11/23 (23 days)</div>
			</div>
			
	    </div>
	    
	    <div class="item existing" >
    	
	    	<div class="one">Puget Energy</div>
			<div class="three">~$150</div>
			
			<div class="details">
				<div>Due on 11/23 (23 days)</div>
			</div>
			
	    </div>
	    
	    <div class="item existing" >
    	
	    	<div class="one">Wave Broadband</div>
			<div class="three">$57</div>
			
			<div class="details">
				<div>Due on 11/23 (23 days)</div>
			</div>
			
	    </div>
	    
	   <!--
 <div class="item" >
    	
	    	<div class="one">AT&T</div>
			<div class="three">$180</div>
			
			<div class="details">
				<div>Due on 11/23 (23 days)</div>
			</div>
			
	    </div>
	    
-->

<div class="item create" style="background: transparent">
    				<a class="addnew">
    					<img src="_img/icon_new_black.svg">
    					<span>Create a new bill</span>
    					
    				</a>

	    		
	    </div>

	    
	
	</section>
	
	
	
	

          
      
    </div>
    
    
  </body>
</html>
