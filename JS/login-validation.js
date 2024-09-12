function login(event){
    event.preventDefault();
    var db = [{'username':'balu','password':'Balu@1234'}
                ,{'username':'ravi','password':'Ravi@1234'}
                ,{'username':'siva','password':'Siva@1234'}
                ,{'username':'admin','password':'Admin@1234'}
                ,{'username':'balu@gmail.com','password':'Balu@1234'}
                ,{'username':'ravi@gmail.com','password':'Ravi@1234'}
                ,{'username':'siva@gmail.com','password':'Siva@1234'}];
    
    var Username = document.getElementById("mail").value;
    var Password = document.getElementById("pass").value;
    var flag = false;
    for(var i=0;i<db.length;i++){
        if(db[i].username == Username && db[i].password == Password){
            flag = true;
            break;
        }
    }
    if(flag==true){
        alert("Login Successful");
        window.location.href="/HTML/home.html";
    }
    else{
        document.getElementById("error").innerHTML="Invalid Username or Password";
    }
}