/**
 * 
 */


function validate() {
	var pass=document.getElementById("password").value;
	var email=document.getElementById("email").value;
/*	var pass=document.forms["signup"]["password"].value;*/
	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(email.match(regex))
		{
		 if(pass.match(strongRegex))
			{
			return true;
			}
		else {
			alert("Password must be combination of atleast one lowercase,uppercase,numeric,special symbol");
			return false;
			}
		}
	else{
	
		alert("email must be valid and in proper format");
		return false;
	}
	
}



