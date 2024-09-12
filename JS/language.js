function language(){
    var choice = document.getElementById("lang-choice").value;
    if (choice == "tamil") {
        window.location.href="/HTML/MOVIES/TAMIL/movie-home.html"
    }
    else if(choice == "telugu"){
        window.location.href="/HTML/MOVIES/TELUGU/index.html"
    }
    else if(choice == "malayalam"){
        window.location.href="/HTML/MOVIES/MALAYALAM/index.html"
    }else{
        window.location.href="/HTML/MOVIES/TAMIL/movie-home.html"
    }

}