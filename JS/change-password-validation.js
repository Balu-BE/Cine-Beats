function changePassword(event){
    event.preventDefault();

    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordFlag = false;


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
    
    if(password.length>=1){
        if((password.length >=8)&&(password.length <=16)){
            if((upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)){
                passwordFlag = true;
            }else{
                document.getElementById("error").innerHTML="Password must contain a-z A-Z 0-9 @$#/";
            }
            
        }
        else{
            document.getElementById("error").innerHTML="Password length should be min 8 - 16";
        }
    }
    else{
        document.getElementById("error").innerHTML="Fields can't be empty";
    }
    
    

    //confirm password validation
    if((password == confirmPassword)&&(passwordFlag==true)){
         alert("Password Changed successfully...")
         window.location.href = "/index.html";
    }
}