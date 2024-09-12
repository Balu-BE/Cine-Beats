function signupValidation(event){
    event.preventDefault();
    var name = document.getElementById("name").value
    var phoneNo = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var nameFlag = false;
    if(name.length>=3){
       nameFlag = true;
    }else if(name.lenth<=3){
      nameFlag= false
       document.getElementById("err1").innerHTML ="Name should be at least 3 characters long"
    }else{
      document.getElementById("err1").innerHTML ="Enter the name"
    }
    //to check all conditions is checked or not
    var phoneFlag = false;
    var emailFlag = false;
    var passwordFlag = false;
    var confirmPasswordFlag = false;


    //phone number validation
   if((phoneNo>=6000000000)&&(phoneNo<=9999999999)){
        phoneFlag = true;
   }
   else{
     document.getElementById("err3").innerHTML ="Please enter valid phone Number"
   }
   
   // Email Validation
    var flag1 = false;
    var flag2 = true;
    
    for(var i=0;i<email.length;i++){
        if(email[i] == "@"){
            flag1 = true;
        }
        if((email[i]>='A')&&(email[i]<='Z')){
            flag2 = false;
            break;
        }
    }
    if((flag1==true)&&(flag2==true)){
        emailFlag = true;
    }
    else{
       document.getElementById("err2").innerHTML="Please enter a valid email address";
    }

    //password validation
    var upper = 0;
    var lower = 0;
    var num = 0;
    var special = 0;

    for(var i = 0;i<password.length;i++){
        if((password[i]>='A') && (password[i]<='Z')){
            upper++;
        }
        else if((password[i]>='a') && (password[i]<='z')){
            lower++;
        }
        else if((password[i]>='0') && (password[i]<='9')){
            num++;
        }
        else{
            special++;
        }
    }
    if((password.length >=8)&&(password.length <=16)&&(upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)){
        passwordFlag = true;
    }
    else{
      document.getElementById("err4").innerHTML="Password must be 8-16 characters";
    }

    //confirm password validation
    if(password == confirmPassword){
       confirmPasswordFlag = true;
    }
    else{
      document.getElementById("err5").innerHTML="Passwords does not match";
    }

    //redirect to sent otp page if all conditions are met  else show error message
    if((nameFlag==true)&&(phoneFlag==true)&&(emailFlag==true)&&(passwordFlag==true)&&(confirmPasswordFlag==true)){
        window.location.href ="/HTML/otp-verification.html";
        alert("Successfully Registered...")
    }
    else{
        document.getElementById("error").innerHTML ="Please enter Valid details"
    }
 
}