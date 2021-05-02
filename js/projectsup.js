//Victor Anna Holly
//purpose: create a web page that shows your knowledge of client side web coding.
//this is for the support a project page, and it calculates the time I did for these.

const store = [
    {
        name:"Wireless Keyboard and mouse set",
        description:"This is a wireless keyboard and mouse set that is silent type and click. Multi System support.",
        price:33.00,
        picLink: "../images/image1.png"

    },
    {
        name:"Rainbow Keyboard",
        description:"This is a wired rainbow backlit keyboard that has silent keys. Great for if you are a loud typer.",
        price:26.00,
        picLink: "../images/image9.png"

    },{
        name:"Wireless Mouse",
        description:"Has a silent click. It is rechargeable and wireless. Slim design and has adjustable DPI and lighting.",
        price:14.00,
        picLink: "../images/image3.jpg"

    },{
        name:"Monitor 27in",
        description:"This is a 1920x1080 flat desktop monitor. HDMI and mountable.",
        price:150.00,
        picLink: "../images/image10.jpg"

    },{
        name:"Dual Monitor Stand",
        description:"This is a stand to holding 2 monitors that is very mobile and can cover many of you possible needs with its range of motion.",
        price:32.00,
        picLink: "../images/image7.jpg"

    },{
        name:"Wired Speakers",
        description:"These are wired speakers that can be plugged in by USB or 3.5mm micro jack. Great for portability. ",
        price:15.00,
        picLink: "../images/image8.png"

    },{
        name:"Drawing Tablet with Stylus",
        description:"11x8.6in drawing tablet that comes with a stylus. It is connected to a computer with a usb cord and is easy to use anywhere. ",
        price:70.00,
        picLink: "../images/image6.png"

    },{
        name:"External CD Drive",
        description:"This wired external CD drive is plugged in by USB. Convenient for laptops without a CD drive. ",
        price:22.00,
        picLink: "../images/image4.png"

    },{
        name:"Webcame with Tripod",
        description:"1080 full HD webcam. Wired webcam has a built in mic with 110 degree wide angle.You can use the universal clip to put on a laptop or monitor, or it can be used with the tripod",
        price:15.00,
        picLink: "../images/image2.png"

    },{
        name:"Headset Stand with USB",
        description:"This headset stand is both stylish and functional, it can be paired with headphones via USB ports or 3.5mm audio jacks. This headset stand also has a nonslip base, and various different lighting modes. ",
        price:25.00,
        picLink: "../images/image13.png"

    },{
        name:"RGB Mouse Pad",
        description:"This mouse pad has a rubber base to prevent it from sliding, and 11 different light up modes. It can be rolled up for convenience, and it is easy to clean. ",
        price:12.00,
        picLink: "../images/image15.png"

    },{
        name:"Metal Cell Phone Stand",
        description:"This cell phone stand provides a perfect way to charge your phone while also still being able to utilize it for answering calls/texts. This cell phone stand has a nonslip base, and is small enough to not cause any clutter on your desk. ",
        price:9.00,
        picLink: "../images/image12.png"

    },{
        name:"Mouse Pad with Wrist Support",
        description:"This gel mouse pad provides the user with ample wrist support so that they don’t need to worry about joint stress. The non-slip backing ensures that the mousepad will remain both in place and comfortable. ",
        price:10.00,
        picLink: "../images/image17.png"

    },{
        name:"1TB 3.1 USB SSD external drive",
        description:"This is a USB 3.1 drive that is top of the line for external storage.",
        price:120.00,
        picLink: "../images/image5.webp"

    }

]

var cart = [];


document.addEventListener("DOMContentLoaded", displayProducts);

function displayProducts(){
    document.getElementById("storeFront").innerHTML = 
    `
    <div class="row">
    ${store.map(getProduct).join("")}

    </div>
    `
}

function getProduct(product){
    return `
    <div class= "product col-12 col-lg-3 col-sm-10 col-md-4">
        <img class="imgsizing" src="${product.picLink}">
        <h6>${product.name}</h6> <span>${product.price}.00</span>
        <p>${product.description} </p>
        
        <button onclick="addCart(${product.price} , '${product.name}' )"> Add to cart </button>

    </div>
    
    `

}

function addCart(pprice, pname){
    
    var item = {
        price : pprice,
        name: pname
    }
    

    cart.push(item);
    //alert("Added " + pname + " to cart.")
}

function cartTotal() {
    //sets the variable total
    var total = 0;
    var receipt = "Your items bought were, <br>";

    //a loop that runs 4 times to run through the rows of the table and get a number to total

    for (var i = 0; i < cart.length; i++) {
        
        total += cart[i].price;
        receipt += cart[i].name + " ----- $" + cart[i].price+ ".00 <br>"
    }

    // //this sets total to sessionStorage for later use if need be
    // sessionStorage.setItem("cartTotal", total.toString());

    //this makes a little message to the visiter that has the amount of time which is probably wrong.
    document.getElementById("cart").innerHTML = "The cart has a total of  $" + total +
        ".00 <br>  "+ receipt+ " <br>"+
        "If you need something not in the system just do a service request and we will get to it ASAP.";
    cart = [];// EMPTIES CART   
}