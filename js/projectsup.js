//Victor Stahlman
//purpose: create a web page that shows your knowledge of client side web coding.

//this is for the support a project page, and it calculates the time I did for these.
function cartTotal() {
    //sets the variable total
    var total = 0;

    //a loop that runs 4 times to run through the rows of the table and get a number to total

    for (var i = 1; i < 11; i++) {
        //document.getElementById("suptbl").rows; //this will get the row number
        
            var a = parseFloat(document.getElementById("suptbl").rows[i].cells[3].innerHTML);
            var b = parseInt(document.getElementById("num" + i));
            total = total +  a * b ;
        
    }

    //this sets total to sessionStorage for later use if need be
    sessionStorage.setItem("cartTotal", total.toString());

    //this makes a little message to the visiter that has the amount of time which is probably wrong.
    document.getElementById("cart").innerHTML = "The cart has a total of  " + total +
        " <br> If you need something not in the system just do a service request and we will get to it ASAP.";

}