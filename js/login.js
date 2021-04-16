//Victor Stahlman cis 270
//purpose: create a web page that shows your knowledge of client side web coding.

//this page is for getting the username and password out of the login form and then if they both are correct
//it will run lognew from Loggedin.js



function check() {

    //gets the username ans password out of the form and puts them into variables
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    //sets them to session storage in case I wanted to use them other places
    sessionStorage.setItem("Username", username);
    sessionStorage.setItem("Password", password);

    //checks the password and username and if both are correct run lognew which welcomes them to the page
    //if they do not match it tells you that there is an issue
    if (password === "student") {
        if (username === "student") {

            lognew();
        }
    }
    else {
        alert("You just put in the wrong info, please try again.");
    }

}
