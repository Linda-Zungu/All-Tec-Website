function checkScrollPosition(){
    let scroll = this.scrollY;
    console.log(scroll);

    document.getElementById("comscipicText").style.opacity = ""+scroll/300;
    
    if(scroll > 450){
        document.getElementById("htmlImage").style.animation = "showUp 3.5s ease-in-out";
        document.getElementById("cssImage").style.animation = "showUp 2.0s ease-in-out";
        document.getElementById("jsImage").style.animation = "showUp 3.5s ease-in-out";
    }
    if(scroll > 850){
        document.getElementById("stackImage").style.animation = "showUp 3.5s ease-in-out";
        document.getElementById("pythonImage").style.animation = "showUp 2.0s ease-in-out";
        document.getElementById("javaImage").style.animation = "showUp 3.5s ease-in-out";
    }
    if(scroll > 1250){
        document.getElementById("swiftImage").style.animation = "showUp 2.0s ease-in-out";
    }
}

window.addEventListener("scroll", function() {checkScrollPosition()});

let coursesTab = document.getElementById("coursesID");
let courseLinkNav = document.getElementById("courseIconID");

coursesTab.addEventListener("mouseover", function (){
    courseLinkNav.style.animation = "moveIconLinks 0.5s ease-in-out";
    courseLinkNav.style.transform = "translateY(44px)"
    courseLinkNav.style.opacity = "1"

    coursesTab.addEventListener("mouseout", function (){
        courseLinkNav.style.transform = "translateY(0px)"
        courseLinkNav.style.opacity = "0"
        courseLinkNav.style.transition = "all 0.3s ease-in-out"
    })
})

courseLinkNav.addEventListener("mouseover", function (){
    courseLinkNav.style.transform = "translateY(44px)"
    courseLinkNav.style.opacity = "1"
})

courseLinkNav.addEventListener("mouseout", function (){
    courseLinkNav.style.transform = "translateY(0px)"
    courseLinkNav.style.opacity = "0"
    courseLinkNav.style.transition = "all 0.3s ease-in-out"
})

// function cartFunc() {
//     var miniCart = document.getElementById("miniCartID");
//     miniCart.style.animation = "moveMiniCart 0.3s ease-in-out"
//     if(miniCart.style.transform == "translateX(0%)"){
//         miniCart.style.transform = "translateX(150%)"
//     }
//     else{
//         miniCart.style.transform = "translateX(0%)"
//     }

//     // storeItem("Hello")
// }

// function storeItem(nameOfItemFromInput) {
//     var data = ["Hello", "World"];
//     if(data.length == 0) {
//         localStorage["data"] = JSON.stringify(data);

        
//     }
//     else {
//         var storedData = JSON.parse(localStorage["data"])
//         console.log(storedData[1])
    
//         addLi(storedData[1])
//         addLi(storedData[0])
//     }

// }

// function addLi(nameOfItem) {
//     var ul = document.getElementById("miniCartID");
//     var li = document.createElement("li");
//     var hr = document.createElement("hr");
//     li.appendChild(document.createTextNode(nameOfItem));
//     ul.appendChild(li);
//     ul.appendChild(hr);
    
// }


var value = 0;
function cartFunc() {
    var miniCart = document.getElementById("miniCartID");
    miniCart.style.animation = "moveMiniCart 0.3s ease-in-out"
    if(miniCart.style.transform == "translateX(0%)"){
        miniCart.style.transform = "translateX(150%)"
        document.getElementById('miniCartID').innerHTML = '';
    }
    else{
        miniCart.style.transform = "translateX(0%)"
        if(items.length != 0) {
            items.forEach(i => {
                addToTray(i, itemPrices[items.indexOf(i)]);
                value += parseFloat(itemPrices[items.indexOf(i)].substring(1, itemPrices[items.indexOf(i)].length))
            });
        }
        else {
            addToTray("Your cart is empty at the moment...", "")
        }
        console.log("Total: R"+value+".00")//use later
    } 
}

var items = [];
var itemPrices = [];
items = JSON.parse(localStorage.getItem('items')) || [];
itemPrices = JSON.parse(localStorage.getItem('itemPrices')) || [];

function storeText(nameID, priceID) {
    if(items.length == 0){
        items.push(document.getElementById(nameID).innerHTML)
        localStorage.setItem('items', JSON.stringify(items));

        itemPrices.push(document.getElementById(priceID).innerHTML)
        localStorage.setItem('itemPrices', JSON.stringify(itemPrices))

        addToTray(items[items.length-1], itemPrices[itemPrices.length-1])
    }
    else{
        var k = new Boolean(false)
        for(i = 0; i < items.length; i++){
            if(items[i] == document.getElementById(nameID).innerHTML){
                k = true
                console.log(true)
                break;
            }
        }

        if(k == false){
            items.push(document.getElementById(nameID).innerHTML)
            localStorage.setItem('items', JSON.stringify(items));
        
            itemPrices.push(document.getElementById(priceID).innerHTML)
            localStorage.setItem('itemPrices', JSON.stringify(itemPrices))
        
            addToTray(items[items.length-1], itemPrices[itemPrices.length-1])
            items = items.filter((e, i, a) => a.indexOf(e) === i)
            itemPrices = itemPrices.filter((e, i, a) => a.indexOf(e) === i)
        } 
    }
}

function addToTray(nameID, priceID) {
    var ul = document.getElementById('miniCartID');
    var li = document.createElement("li");
    var hr = document.createElement("hr");
    var p = document.createElement("p");
    var removeLine = document.createElement("button");

    li.appendChild(removeLine);
    li.appendChild(document.createTextNode(nameID));
    p.appendChild(document.createTextNode(priceID));
    removeLine.appendChild(document.createTextNode("X"));
    
    ul.appendChild(li);
    li.appendChild(p)
    ul.appendChild(hr);
    
}