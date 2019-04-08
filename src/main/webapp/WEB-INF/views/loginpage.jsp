<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Particles Login</title>
 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="css/Style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  
  
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>


  <script>
    particlesJS.load('particles-js', 'js/particles.json', function(){
      console.log('particles.json loaded...');
    });
  </script>
</head>
<body>
  <div id="particles-js">
    <div id="login">
  
 <div class="form">
		<ul class="tab-group">
			<li class="tab"><a href="signuppage">Sign Up</a></li>
			<li class="tab-active"><a href="loginpage">Log In</a></li>
		</ul>
	<center> <b style="text-align:center;margin:auto; color:#d64b4b;">${success}</b></center>
	<center> <b style="text-align:center;margin:auto; color:#d64b4b;">${error}</b></center>
			
			<div id="signup">
				<form name="form" onsubmit="return validate()" method="post" action="login">
			      
						<div class="input-container">
						 <div class="w3-xlarge"> <i class="	fa fa-envelope icon"></i></div>
							 <input type="text" id="email" name="email" placeholder="Username or Email" required  />
						</div>

					
						<div class="input-container">
						 <div class="w3-xlarge"> <i class="	fa fa-lock icon"></i></div>
							 <input type="password" id="password" name="password" placeholder="  Password" required  />
						</div>
						<input  type="checkbox" style="margin-left:20px;">  Remember me
						<b style="font-weight:200;  color: #4691f6; text-decoration: none;float:right;margin-right:20px;" >Forgot your password?</b>
					<br>
					<br>
					<br>
					<input type="submit" name="submit" value="Log In" class="button-block" style="margin-left:38%;">

				</form>

			</div>
		<br>
		<br>
		<div class="form-bottom">
			<div class="text-center">Or Connect with</div>
			<div class="social">
	<button id="fb" type="button"> <i class="fa fa-facebook"></i> Facebook</button>
				
			
				<button id="google" type="button"><i class="fa fa-google"></i> Google</button>
				
			
				<button id="linkedin" type="button"><i class="fa fa-linkedin"></i> LinkedIn</button>
				
	
				<button id="github" type="button"><i class="fa fa-github"></i> GitHub</button>
			
			</div>
			<div class="small">By signing up, you agree to our<i style="font-weight:200;  color: #4691f6; text-decoration: none;" > Terms of Service</i> and <i style="font-weight:200; color: #4691f6; text-decoration: none;">Privacy Policy</i></div>
		</div>



	</div>
	<!-- form -->

  </div>
  
    </div>

</body>
</html>

