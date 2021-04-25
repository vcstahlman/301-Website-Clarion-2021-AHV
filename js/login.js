//Victor Stahlman cis 270
//purpose: create a web page that shows your knowledge of client side web coding.

//this page is for getting the username and password out of the login form and then if they both are correct
//it will run lognew from Loggedin.js




function checkUser() {


    //gets the username ans password out of the form and puts them into variables
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var req = document.getElementById("request").value;

    //sets them to session storage in case I wanted to use them other places
    sessionStorage.setItem("Username", user);
    sessionStorage.setItem("Password", pass);
    sessionStorage.setItem("Request", req);

    

    if(req === "")
    { //we need to load the old form 
        if (localStorage.getItem(user) != null) {  //the user exists it will continue
            
            if (localStorage.getItem(user) === pass) {
                req = localStorage.getItem(user+pass);
                document.getElementById("request").value = req;
            }
            else alert("password incorrect. Please try again.");
        }
        
        
    }
        
    else {
        //making new information
        localStorage.setItem(user, pass);
        localStorage.setItem(user+pass, req);
        alert("Request: {"+ req + "} was added to your account " + user + "\nThank you for your business, and we will get to you as soon as possible.");
    }


}
