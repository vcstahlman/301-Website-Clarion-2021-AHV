//Victor Anna Holly cis 301
//purpose: create a web page that shows your knowledge of client side web coding.

//this is used for having a constant header/footer for the pages of the site

//event listener that runs the header when the page gets loaded
document.addEventListener("DOMContentLoaded", displayheader);

// sets up a header and nav that is shared between all the pages
function displayheader() {
    try {
        document.getElementById("headerid").innerHTML =
            '<div class="fluid container" id="pagetop"> ' +
            '<header class= "pagehead"> <h1 id ="titlehead" > H.A.V. Computer Supply </h1> </header>' +

            '<nav class="navbar navbar-expand-md navbar-dark"><!--sets up a nav and uses some bootstrap-->' +
            '<a class="navbar-brand   d-lg-block" href="../view/index.html">Home</a>' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
            '</button><!--this is stuff for that "hamburger" button-->' +

            '<div class="collapse navbar-collapse" id="navbarSupportedContent"><!--stuff that is dynamic, as in it can go in and out of the hamburger-->' +
            '<ul class="navbar-nav mr-auto">' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/about.html">About</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/contact.html">Contacts</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/products.html">Products</a>' +
            '</li>' +

            '<!--dropdown with likely additions for the site-->' +
            '<li class="nav-item dropdown">' +
            '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            'Other Services' +
            '</a>' +
            '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
                   
            '<a class="dropdown-item" href= "../view/newsletter.html">Newsletter</a>' +            
            '<div class="dropdown-divider"></div>' +
            '<a class="dropdown-item" href="../view/services.html">Services Sign-in</a>' +
            '</div>' +
            '</li>' +


            '</ul>' +
            '</div>' +
            '</nav>' +
            '</div>';
    }
    //       
    catch (load) {
        //if not able to find display header it will continue without trying agian till new page
    }
}

//sets up a footer that is constant between the pages
document.addEventListener("DOMContentLoaded", displayfooter);

function displayfooter() {
    try {
        document.getElementById("footerid").innerHTML =
            '<div class=" fluid container" id="pagebottom"> <!-- div for styling and responsiveness-->' +
            '<footer>' +
            '<h6 class="text-center">Made by <a href="mailto:vicstahlman@gmail.com">Holly D, Anna J, & Victor S</a></h6>    <!--has an email link after saying it was made by me-->' +
            '<p class="text-center"> Copyright H.A.V Inc. &copy; 2021</p>   ' + //Copyright &copy;
            '<p class="text-center">Providing best computer experiences possible est. 2021  </p>' +
            '</footer>' +
            '</div>'
    } catch (load) {}
}