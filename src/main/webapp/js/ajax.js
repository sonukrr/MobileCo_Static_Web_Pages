var c = 0;
var cData=null;
$(document).ready(function(){

  var allData = "";
  var baseLink = "http://localhost:9090/items/";
  
  //get cart data
//  $.ajax({
//	  type:'GET',
//	  url:'http://localhost:9090/cartitems',
//	  dataType:'json',
//	  success: function(data){
//		  refreshCart();
//	  }
//  });
  
  refreshCart();
  
  //get mobiles
  $.ajax({
    type:'GET',
    url:baseLink+"mobile",
    dataType:'json',
    success: function(data){
      $.each(data, function(index, element){
    	var stock = "<a class='btn btn-success' onclick='addToCart(this)' data-target="+element.id+">Add to cart</a>";
    	
    	if(element.quantity <= 0)
    		stock = "<div class='btn btn-danger'>Out of Stock</div>";
    	
        var card = "<div class='item col-md-2 col-sm-4'>"
          +"<div class='card' style='width: 18rem;'>"
          +"<img class='card-img-top' src='../images/"+element.id+".jpg' alt='Card image cap'/>"
          +"<div class='card-body'>"
          +"<h5 class='caption card-title'>"
          +element.mobile.name+"{"+element.mobile.ram+"GB,<br> "
          +element.mobile.rom+"GB, "+element.mobile.fcamera+"MP+"
          +element.mobile.rcamera+"MP}</h5>"
          +"<br><div class='price'>&#8377;"+(element.price).toLocaleString()+"</div></p>"
          +stock
          +"</div>"
          +"</div></div>";
        
        $("#mobile-list").append(card);
      });
    }
  });
  
  //get accessories
  $.ajax({
    type:'GET',
    url:baseLink+"acc",
    dataType:'json',
    success: function(data){
      $.each(data, function(index, element){
    	  
    	var stock = "<a class='btn btn-success' onclick='addToCart(this)' data-target="+element.id+">Add to cart</a>";
    	
    	if(element.quantity <= 0)
    		stock = "<div class='btn btn-danger'>Out of Stock</div>";
    	  
        var card = "<div class='item col-md-2 col-sm-4'>"
          +"<div class='card' style='width: 18rem;'>"
          +"<img class='card-img-top' src='../images/"+element.id+".jpg' alt='Card image cap'/>"
          +"<div class='card-body'>"
          +"<h5 class='caption card-title'>"
          +element.accessories.name+
          "</h5>"
          +"<p class='card-text'>"+"<br><div class='price'>&#8377;"+(element.price).toLocaleString()+"</div></p>"
          +stock
          +"</div>"
          +"</div></div>";
        
        $("#acc-list").append(card);
      });
    }
  });
  

  $("#showmob").click(function(){
    $("#main-page-content").css("display", "none");
    $("#products").empty();
    
    $.ajax({
    type:'GET',
    url:baseLink+"mobile",
    dataType:'json',
    success: function(data){

      $.each(data, function(index, element){
    	
    	  var stock = "<a class='btn btn-success' onclick='addToCart(this)' data-target="+element.id+">Add to cart</a>";
    	
    	  if(element.quantity <= 0)
    		stock = "<div class='btn btn-danger'>Out of Stock</div>";
    	
    	  var z = "<div class='item  col-xs-4 col-lg-4'>"
	          +"<div class='thumbnail'>"
	          +"<img class='group list-group-image' src='../images/"+element.id+".jpg'/>"
	          +"<div class='caption'>"
	          +"<h4 class='group inner list-group-item-heading'>"
	          +element.mobile.name+" ("+element.mobile.ram+"GB RAM, "+element.mobile.rom+"GB Storage)</h4>"
	          +"<p class='group inner list-group-item-text'>"
	          +"<br>Front Camera: "+element.mobile.fcamera
	          +"<br>Rear Camera: "+element.mobile.rcamera
	          +"</p>"
	          +"<div class='row'>"
	          +"<div class='col-xs-12 col-md-6'>"
	          +"<p class='lead'>&#8377;"
	          +(element.price).toLocaleString()
	          +"</p>"
	          +"</div>"
	          +"<div class='col-xs-12 col-md-6'>"
	                    +stock
	                    +"</div></div></div></div></div>";
        
        $("#products").append(z);
      });
      
      $("#main-item-page").css("display","block");
    }});
  });
  
  
  $("#showacc").click(function(){
    $("#main-page-content").css("display", "none");
    $("#products").empty();
    
    $.ajax({
    type:'GET',
    url:baseLink+"acc",
    dataType:'json',
    success: function(data){
      console.log(data);
      $.each(data, function(index, element){
    	  
    	var stock = "<a class='btn btn-success' onclick='addToCart(this)' data-target="+element.id+">Add to cart</a>";
    	
    	if(element.quantity <= 0)
    		stock = "<div class='btn btn-danger'>Out of Stock</div>";
    	  
        var z = "<div class='item  col-xs-4 col-lg-4'>"
          +"<div class='thumbnail'>"
          +"<img class='group list-group-image' src='../images/"+element.id+".jpg'/>"
          +"<div class='caption'>"
          +"<h4 class='group inner list-group-item-heading'>"
          +element.accessories.name+"</h4>"
          +"<div class='row'>"
          +"<div class='col-xs-12 col-md-6'>"
          +"<p class='lead'><span class='price'>&#8377;"
          +(element.price).toLocaleString()
          +"</span></p>"
          +"</div>"
          +"<div class='col-xs-12 col-md-6'>"
                    +stock
                    +"</div></div></div></div></div>";
        
        $("#products").append(z);
      });
      
      $("#main-item-page").css("display","block");
    }});
  });

  
  //search-items
  $("#search-btn").click(function(){
    $("#main-page-content").css("display", "none");
    $("#products").empty();
    
    var x = $("#search-box").val();
    $.ajax({
    type:'GET',
    url:baseLink+x,
    dataType:'json',
    success: function(data){

      $.each(data, function(index, element){
    	  
    	var stock = "<a class='btn btn-success' onclick='addToCart(this)' data-target="+element.id+">Add to cart</a>";
    	
    	if(element.quantity <= 0)
    		stock = "<div class='btn btn-danger'>Out of Stock</div>";
    	
        var z ="";
        
        if(element.mobile == null){
          z = "<div class='item  col-xs-4 col-lg-4'>"
            +"<div class='thumbnail'>"
            +"<img class='group list-group-image' src='../images/"+element.id+".jpg'/>"
            +"<div class='caption'>"
            +"<h4 class='group inner list-group-item-heading'>"
            +element.accessories.name+"</h4>"
            +"<br><br><br><br><div class='row'>"
            +"<div class='col-xs-12 col-md-6'>"
            +"<p class='lead'><span class='price'>&#8377;"
            +(element.price).toLocaleString()
            +"</span></p>"
            +"</div>"
            +"<div class='col-xs-12 col-md-6'>"
                      +stock
                      +"</div></div></div></div></div>";
        }
        
        else{
          z = "<div class='item  col-xs-4 col-lg-4'>"
            +"<div class='thumbnail'>"
            +"<img class='group list-group-image' src='../images/"+element.id+".jpg'/>"
            +"<div class='caption'>"
            +"<h4 class='group inner list-group-item-heading'>"
            +element.mobile.name+" ("+element.mobile.ram+"GB RAM, "+element.mobile.rom+"GB Storage)</h4>"
            +"<p class='group inner list-group-item-text'>"
            +"<br>Front Camera: "+element.mobile.fcamera
            +"<br>Rear Camera: "+element.mobile.rcamera
            +"</p>"
            +"<div class='row'>"
            +"<div class='col-xs-12 col-md-6'>"
            +"<p class='lead'><span class='price'>&#8377;"
            +(element.price).toLocaleString()
            +"</span></p>"
            +"</div>"
            +"<div class='col-xs-12 col-md-6'>"
                      +stock
                      +"</div></div></div></div></div>";
        }
        $("#products").append(z);
      });
      $("#main-item-page").css("display","block");
    }});
  });
  


       //orders list
       $("#myorders").click(function(){
              $("#main-page-content").css("display", "none");
              $("#products").empty();
           var link="http://localhost:9090/orders/all";
           $.ajax({
                     type:'GET',
                     url:link,
                     dataType:'json',
                     success: function(data){
                           console.log(data);
                                  
                                  var str="";
                                 
                                  $.each(data, function(index, element){
                                         
                                         
                                         str="<div class='item  col-xs-4 col-lg-4'>"
                                                +"<div class='thumbnail'>"
                                                +"<img class='group list-group-image' src='../images/"+element.product.id+".jpg'/>"
                                                +"<div class='caption'>"
                                                +"<h4 class='group inner list-group-item-heading'>Product Name :"
                                                +element.productName+"</h4>"
                                                +"<div class='row'>"
                                                +"<div class='col-xs-12 col-md-12'>"
                                                +"<p class='lead'><div class='price'>&#8377;"
                                                +(element.product.price).toLocaleString()
                                                +"</div><br>Quantity Ordered :"
                                                +element.quantity
                                                +"<br>Date of Order :"
                                                +element.dateOrdered
                                                +"<br>Expected date :"
                                                +element.dateExpected
                                                +"</p>" 
                                                +"</div>"
                                  +"</div></div></div></div>";
                                         
                                         $("#products").append(str);
                                         console.log(str);
                                  });
                                  
                                  $("#main-item-page").css("display","block");
                     }});
              
              });
              
       
       
     //cart data
       $("#carticon").click(function(){
              $("#main-page-content").css("display", "none");
              $("#main-item-page").css("display","block");
       });
       



       

});

//add to cart
function addToCart(item){
    var productId = item.getAttribute("data-target");
    var requestBody = {'product':{'id':productId},'orderQuantity':1};
    $.ajax({
      type:'POST',
      url:'http://localhost:9090/addtocart',
      contentType:'application/json',
      data:JSON.stringify(requestBody),
      dataType:'json',
      success: function(data){
  		if(data.error != null)
			alert(data.error);
		refreshCart();
      }});
}

//update cart quantity
function updateCart(x){
	var productStr = x.getAttribute('data-target');
	var z = productStr.split("|");
	var productId = z[0];
	var stockQuantity = z[1];
	var quantity = x.previousSibling.value;

	var requestBody = {"product":{"id":productId,"quantity":stockQuantity},"orderQuantity":quantity};
	
	$.ajax({
		type: 'POST',
		url:'http://localhost:9090/updatecart',
		contentType:'application/json',
		data:JSON.stringify(requestBody),
		dataType:'json',
		success: function(data){
			if(data.error != null)
				alert(data.error);
			refreshCart();
		}});
}

//Remove Item From cart
function removeItemFromCart(x){
	var productStr = x.parentNode.previousSibling.childNodes[1].getAttribute('data-target');
	var z = productStr.split("|");
	var productId = z[0];

	var requestBody = {"product":{"id":productId}};
	
	$.ajax({
		type: 'POST',
		url:'http://localhost:9090/removecartitem',
		contentType:'application/json',
		data:JSON.stringify(requestBody),
		dataType:'json',
		success: function(data){
			refreshCart();
		}});
}

//Refresh cart with new Data also write all UI Integration code for cart here only.
function refreshCart(){
		var total=0;
        $("#products").empty();
        var link="http://localhost:9090/cartitems";
        $.ajax({
        type:'GET',
        url:link,
        dataType:'json',
        success: function(data){
        	cData = data;
      	  var array=data.results;
      	  $("#cart-count").html(array.length);
      	  if(array != null)
      		  $("#cart-checkout-panel").css("display","block");
      	  if(array.length<=0)
      		  $("#cart-checkout-panel").css("display","none");
      	  
               $.each(array, function(index, element){
                     var z ="";
                     total+=element.orderQuantity * element.product.price;
                     if(element.product.mobile == null){
                            z =    "<div class='item  col-xs-4 col-lg-4'>"
                                   +"<div class='thumbnail'>"
                                   +"<img class='group list-group-image' src='../images/"+element.product.id+".jpg'/>"
                                   +"<div class='caption'>"
                                   +"<h4 class='group inner list-group-item-heading'>"
                                   +element.product.accessories.name+"</h4>"
                                   +"<br><br><br><br>" +
                                   "<div class='row'>"
                                   +"<div class='col-xs-8 col-md-4'>"
                                   +"<p class='lead'><span class='price'>&#8377;"
                                   +(element.product.price).toLocaleString()
                                   +"</span></p>"
                                   +"</div></div><div class='row'><div class='col-xs-12 col-md-6'>" +
                              		"<input type='number' value='"+element.orderQuantity+"' class='form input' style='width:50%'>" +
                              		"<button onclick='updateCart(this)' class='btn btn-warning' data-target="+element.product.id+"|"+element.product.quantity+">&#10004;</button></div>" +
                              		"<div class='col-xs-12 col-md-6'><button onclick='removeItemFromCart(this)' class='btn btn-danger'>Remove from cart</button></div>" +
                              		"</div></div>"
                              		+"</div></div></div></div>";
                     }
                     
                     else{
                            z = "<div class='item  col-xs-4 col-lg-4'>"
                                   +"<div class='thumbnail'>"
                                   +"<img class='group list-group-image' src='../images/"+element.product.id+".jpg'/>"
                                   +"<div class='caption'>"
                                   +"<h4 class='group inner list-group-item-heading'>"
                                   +element.product.mobile.name+" ("+element.product.mobile.ram+"GB RAM, "+element.product.mobile.rom+"GB Storage)</h4>"
                                   +"<p class='group inner list-group-item-text'>"
                                   +"<br>( "+element.product.mobile.fcamera
                                   +"MP + "+element.product.mobile.rcamera
                                   +"MP)</p>"
                                   +"<div class='row'>"
                                   +"<div class='col-xs-12 col-md-6'>"
                                   +"<p class='lead'><span class='price'>&#8377;"
                                   +(element.product.price).toLocaleString()
                                   +"</span></p>"
                     +"</div></div><div class='row'><div class='col-xs-12 col-md-6'>" +
                     		"<input type='number' value='"+element.orderQuantity+"' class='form input' style='width:50%'>" +
                     		"<button onclick='updateCart(this)' class='btn btn-warning' data-target="+element.product.id+"|"+element.product.quantity+">&#10004;</button></div>" +
                     		"<div class='col-xs-12 col-md-6'><button onclick='removeItemFromCart(this)' class='btn btn-danger'>Remove from cart</button></div>" +
                     		"</div></div>" +
                     		"</div></div></div></div>";
                     }
                     $("#products").append(z);
               });
               $("#total-price").html("<p class='lead'>Total Price: <span class='price'>&#8377;"+total.toLocaleString()+"</span></p>"+"<div onclick='checkout()' class='btn btn-warning'>Checkout</div>");   
        }});
}

function checkout(){
	if(cData != null){
		$.ajax({
			type: 'POST',
			url:'http://localhost:9090/placeorder',
			contentType:'application/json',
			data:JSON.stringify(cData),
			dataType:'json',
			success: function(data){
				alert(data.message);
				refreshCart();
			}
		});
	}
}