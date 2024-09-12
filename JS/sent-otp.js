function changePassword(event){
    event.preventDefault();
    var userInput = document.getElementById("contact-info").value; 
   
    var phoneFlag = false;
    var emailFlag = false;
    var isPhoneNo = false;


    for(var i=0;i<userInput.length;i++){
        if((userInput[i]>=0)&&(userInput[i]<=9)){
            isPhoneNo = true;
        }
        else{
            isPhoneNo= false
        }
    }
    if(isPhoneNo==false){
         // Email Validation
            var flag1 = false;
            var flag2 = true;
            
            for(var i=0;i<userInput.length;i++){
                if(userInput[i] == "@"){
                    flag1 = true;
                }
                if((userInput[i]>='A')&&(userInput[i]<='Z')){
                    flag2 = false;
                }
            }
            if((flag1==true)&&(flag2==true)){
                emailFlag = true;
            }
            else{
            document.getElementById("error").innerHTML="Please enter a valid email address";
            }
     }else{
            //phone number validation
            if((userInput>=6000000000)&&(userInput<=9999999999)){
                    phoneFlag = true;
            }
            else{
                document.getElementById("error").innerHTML ="Please enter valid phone Number"
            }
     }
     
     if(phoneFlag==true||emailFlag==true){
        window.location.href = "/HTML/otp-verification.html"
     }

   
}