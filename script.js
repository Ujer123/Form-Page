function validate(){
    let name = document.getElementById('fname').value;
    let Password = document.getElementById('password').value;
    let ConfirmPassword = document.getElementById('confirmpassword').value;
    let mobile = document.getElementById('mnumber').value;
    let Email = document.getElementById('email').value;



    if(name==null || name==""){
		// alert("enter d username");
		document.getElementById('user').innerHTML ="Please fill the username feild";
		return false;
	}

    if(name.length<=2 || name.lenth>=30){
        document.getElementById('user').innerHTML = "User Name is incorrect";
        return false;
    }

    
	if(!isNaN(name)){
		// alert("enter d username");
		document.getElementById('user').innerHTML ="only character is allowed ";
		return false;
	}

    if(Password==null || Password==""){
        document.getElementById('pass').innerHTML = "Fill the password";
        return false;
    }

    if(Password.length<=4 || Password.length>=8){
        document.getElementById('pass').innerHTML = "Enter correct password";
        return false;
    }

    if(ConfirmPassword!=Password){
        document.getElementById('cpass').innerHTML = "Enter same password";
        return false;
    }

    if(ConfirmPassword==null || ConfirmPassword==""){
		// alert("enter d username");
		document.getElementById('cpass').innerHTML ="Please fill the Confirm Password feild";
		return false;
	}

    if(mobile==null || mobile==""){
		// alert("enter d username");
		document.getElementById('number').innerHTML ="Please fill the mobilenumber feild";
		return false;
	}

    if(isNaN(mobile)){
		// alert("enter d username");
		document.getElementById('number').innerHTML ="mobile number should be in digits";
		return false;
	}

    if(mobile.length!=10){
		// alert("enter d username");
		document.getElementById('number').innerHTML ="mobile number should be in 10 digits not more or less than 10.";
		return false;
	}

    if(Email==null || Email==""){
		// alert("enter d username");
		document.getElementById('mail').innerHTML ="Please fill the email feild";
		return false;
	}

    if(Email.indexOf('@') <= 0){
        // alert("enter d username");
        document.getElementById('mail').innerHTML ="@ indvalid position";
        return false;
      }

      if((Emailmail.charAt(email.length-4)!=".") && (Emailmail.charAt(email.length-3)!=".")){
        // alert("enter d username");
        document.getElementById('mail').innerHTML =" . invalid position";
        return false;
      }


    return true;
}