var Otp = Math.floor(Math.random()*999999);
alert(Otp);
function otpVerification(event){
event.preventDefault();

var enteredOtp = document.getElementById("otp").value;
if(Otp == enteredOtp){
    alert("Verified...")
    window.location.href = "/index.html";
}
else{
    document.getElementById("error").innerHTML = "Incorrect OTP entered. Please try again";
}
} 
