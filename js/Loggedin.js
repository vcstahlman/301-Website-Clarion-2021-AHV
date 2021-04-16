//Victor Stahlman cis 270
//purpose: create a web page that shows your knowledge of client side web coding.

//this page is for the function lognew which has an array of welcome messages that combines
// them with the username if logged in correctly

function lognew() {

    //this is an array of welcome messages and a randomized selector

    var myArray = ["Welcome to my website ", "Welcome traveller, have a seat ", "Come on in the water is fine "
        , "We welcome you, ", "Well the party is over now that you are here ", "What do you want "];
    var item = myArray[(Math.random() * myArray.length) | 0];
    console.log('item:', item);


    // original idea this is an alert that popes up that states the message and the username of the user
    //if(confirm(item + sessionStorage.getItem("Username") + ", now would you like to enter the page?")){ window.location = "../view/index.html";

        //new idea to just make a text welcome and link. it works but I am annoyed that the window.location didn't work like in my other projects
       document.getElementById("trying").innerHTML = item + sessionStorage.getItem("Username") + ", now would you like to enter the page?" +
           '<a href="../view/index.html"> Link to the page because I can' +
           'not get window.location to work for the life of me. </a>'
   // }
}


document.addEventListener("DOMContentLoaded", setTimeout(lognew,10000));//failsafe that lets me get to main page