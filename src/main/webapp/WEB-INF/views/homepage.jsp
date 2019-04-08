<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>home page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <!--  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
   -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<link rel="stylesheet" href="../css/cardscroller.css">


 <script src="../js/ajax.js"></script>
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="2">
<!-- nav starts here -->
<nav class="navbar navbar-inverse navbar-fixed-top" style="margin-bottom:0px;">
  <div class="container-fluid">
   
      <a class="navbar-brand" href="homepage"><img style="width:-100px;height:50px;" src="https://www.needomart.com/image/shop.gif"></a>
   
    <ul class="nav navbar-nav" style="background-color:#1f1f2e;">
      <li><a href="home">Home</a></li>
   	 <li><a href="#section2">Mobiles</a></li>
   	  <li><a href="#section3">Accessories</a></li>
      
       
      
    </ul>
    
     <ul class="nav navbar-nav navbar-right">
      
      <% if (session.getAttribute("login-user") == null) { %>
    	<li><a href="signuppage"><span class="glyphicon glyphicon-user" style="color:green;font-size:20px;"></span> Sign Up</a></li>
      	<li><a href="loginpage"><span class="glyphicon glyphicon-log-in" style="color:green;font-size:20px;"></span> Login</a></li>
		<% } else {%>
		<li><a href="#" id="myorders"><span class="glyphicon glyphicon-list-alt" style="color:green;font-size:20px;"></span> My Orders </a></li>
    	<li><a href="logout"><span class="glyphicon glyphicon-log-in" style="color:green;font-size:20px;"></span> Logout</a></li>
		<li><a href="#" id="carticon"><span class="glyphicon glyphicon-shopping-cart" style="color:yellow;font-size:20px;"></span><span id="cart-count" class="badge" style="background:red; position:relative;top:-14px;right:8px;">0</span><span style="color:yellow;">${success}</span></a></li>
		<% } %>
    </ul>
    
      <div class="input-group" style="margin-top:8px;" >
        <input type="text" id="search-box" class="form-control" placeholder="Search" name="search">
        <div class="input-group-btn">
          <a href="#" id = "search-btn" class="btn btn-success" type="submit">
            <i class="glyphicon glyphicon-search" style="height:20px; width:20px;font-size:20px;color:white;"></i></a>
        </div>
      </div>
    
   
  </div>
  </nav>
  <!-- navigation ends here -->
<!-- slider starts here -->
  <div id="main-page-content" class="container" style="width:100%;margin:0px;padding:0px;">
  <div id="myCarousel" class="carousel slide" data-ride="carousel"style="margin-top:60px;width:100%;">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" style="width:100%;border-style:none;">

      <div class="item active">
        <img src="https://ksassets.timeincuk.net/wp/uploads/sites/54/2016/11/iphone-10-1-1024x576.jpg" alt="mob-1" style="width:100%;margin:0px;height:400px;">
        <div class="carousel-caption">
          <h3>IPhones</h3>
          <p>Get latest phones at our site!</p>
        </div>
      </div>

      <div class="item">
        <img src="https://www.technewscentral.com/wp-content/uploads/2015/07/wireless-charging.jpg" alt="img-2" style="width:100%;  height:400px;">
        <div class="carousel-caption">
          <h3>Go wireless</h3>
        </div>
      </div>
    
      <div class="item">
        <img src="http://timeinc.brightcove.com.edgesuite.net/rtmp_uds/293884104/201405/767/293884104_3550766007001_headphones.jpg?pubId=293884104&videoId=3550766104001" alt="img-3" style="width:100%; height:400px;">
        <div class="carousel-caption">
          <h3>Enjoy good music with our speakers</h3>
          <p>We love Loud Music!</p>
        </div>
      </div>
  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

 <div class="container" id="section2" style="width:100%;margin-top:10px;padding:0px;">
<div class="row">
<div class="col-sm-2" style="float: left"><h2>Mobiles</h2></div>

<div class="col-sm-2" style="float: right; top:20px;" ><a id="showmob" class="btn btn-success">Show All</a></div>
</div>
</div>
<!-- mobiles header div ends here-->
<hr>
<!--  mobiles scroller tab -->
<div class="container-fluid container-scroll" style="margin-top: 10px;">
  <div id = "mobile-list" class="row">
  </div>
</div>
<!--  mobiles scroller tab ends here -->
<!--  added div for accessories header -->

<div class="container" style="width:100%;margin-top:10px;padding:0px;">
<div class="row">
<div class="col-sm-2" style="float: left"><h2>Accessories</h2></div>

<div class="col-sm-2" style="float: right; top:20px;" ><a id="showacc" class="btn btn-success">Show All</a></div>
</div>
</div>
<!-- closed header of accessories -->
<hr>
<!--  accessories scroller tab -->
<div class="container-fluid container-scroll" id="section3" style="margin-top: 10px;">
  <div id = "acc-list" class="row">    
  </div>
</div>
<!--  accessories scroller tab ends here -->

</div>

<div id="main-item-page" class="container" style="width:100%;margin:0px;padding:0px;display:none;">  	


<div id="products" class="row list-group" style="margin-top: 50px;"></div>
<div class = "row" id="cart-checkout-panel" style="margin:10px; display:none;">
<div class = "col-lg-12" id = "total-price"></div>
</div>
</div>
<div id="address-page" class="container" style="width:100%;margin:0px;padding:0px;display:none;">
                            <form action="#" method="post">
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control" name="street" placeholder="Street" value="">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control" name="city" placeholder="City" value="">
                                    </div>
                                    <div class="col-12 mb-3">
					<input type="text" class="form-control" name="state" placeholder="State" value="">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control mb-3" name="country" placeholder="Country" value="">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" name="pincode" placeholder="Pin code" value="">
                                    </div>
                                        <div class="custom-control custom-checkbox d-block">
                                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                                            <label class="custom-control-label" for="customCheck3">Ship to a different address</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
</div>
</div>
</div>
 <!-- <div id = "cart-test"></div>  -->

</body>
</html>