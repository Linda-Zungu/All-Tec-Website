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

window.addEventListener("scroll", function () {
    let scroll = this.scrollY;
    let nav = document.getElementById("navBarID")
    let miniCart = document.getElementById("miniCartID");
    let aboutTab = document.getElementById("aboutID")
    let coursesTab = document.getElementById("coursesID")
    let contactTab = document.getElementById("contactID")
    let cartTab = document.getElementById("cartID")
    let courseLinkNav = document.getElementById("courseIconID")

    
    nav.style.background = scroll >=485 ? "rgba( 255, 255, 255, 0.7 )" : "rgba( 0, 0, 0, 0.7 )"
    nav.style.transition = "all 0.3s ease-in-out"

    miniCart.style.background = scroll >=485 ? "rgba( 255, 255, 255, 0.7 )" : "rgba( 0, 0, 0, 0.7 )"
    miniCart.style.borderLeft = scroll >=485 ? "0.5px solid rgba( 255, 255, 255, 0.9 )" : "0.5px solid rgba( 255, 255, 255, 0.2 )"
    miniCart.style.color = scroll >=485 ? "black" : "lightgray"
    
    function switchColorsTab(tab) {
        let scroll = this.scrollY;
        tab.addEventListener("mousemove", function () {
            tab.style.color = "gray"
        })
        tab.addEventListener("mouseout", function () {
            tab.style.color = scroll >=485 ? "black" : "white"
        })
    }

    switchColorsTab(aboutTab)
    switchColorsTab(coursesTab)
    switchColorsTab(contactTab)
    switchColorsTab(cartTab)

    aboutTab.style.color = scroll >=485 ? "black" : "white"
    coursesTab.style.color = scroll >=485 ? "black" : "white"
    contactTab.style.color = scroll >=485 ? "black" : "white"
    cartTab.style.color = scroll >=485 ? "black" : "white"
    courseLinkNav.style.background = scroll >= 485 ? "rgba( 255, 255, 255, 0.7 )" : "rgba( 0, 0, 0, 0.7 )"
    courseLinkNav.style.transition = "all 0.3s ease-in-out"
    
    function switchColorsIcons(icon) {
        let scroll = this.scrollY;
        document.getElementById(""+icon).addEventListener("mouseout", function () {
            document.getElementById(""+icon).style.color = scroll >=485 ? "black" : "white"
        })
        document.getElementById(""+icon).addEventListener("mousemove", function () {
            document.getElementById(""+icon).style.color = "gray"
            document.getElementById(""+icon).style.transition = "all 0.0s ease-in-out"
        })
        document.getElementById(""+icon).style.color = scroll >=485 ? "black" : "white"
        document.getElementById(""+icon).style.transition = "all 0.3s ease-in-out"
    }

    switchColorsIcons("iconID1");
    switchColorsIcons("iconID2");
    switchColorsIcons("iconID3");
    switchColorsIcons("iconID4");
    switchColorsIcons("iconID5");
    switchColorsIcons("iconID6");
    switchColorsIcons("iconID7");
})

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

        document.getElementById("miniCartID").removeChild(document.getElementById("toBeRemovedID"))
        document.getElementById("miniCartID").removeChild(document.getElementById("toHR"))

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

    if(p.innerHTML == ""){
        li.id = "toBeRemovedID"
        hr.id = "toHR"
        removeLine.style.opacity = "0"
        removeLine.disabled = true
    }
    
    removeLine.onclick = function () {
        for(i = 0; i < itemPrices.length; i++){
            if(itemPrices[i] == p.innerHTML){
                itemPrices.splice(i, 1)
                items.splice(i, 1);
                ul.removeChild(li)
                ul.removeChild(hr)
            }
        }
        localStorage.setItem('itemPrices', JSON.stringify(itemPrices));
        localStorage.setItem('items', JSON.stringify(items));
        if(items.length == 0){
            console.log(li)
            console.log(hr)
            li.id = "toBeRemovedID"
            hr.id = "toHR"
            p.innerHTML = ""
            removeLine.style.opacity = "0"
            removeLine.disabled = true

            li.appendChild(document.createTextNode(" removed... Add some items"));
            ul.appendChild(li)
            li.appendChild(p)
            ul.appendChild(hr)
        }
    }
    
    ul.appendChild(li);
    li.appendChild(p)
    ul.appendChild(hr);
    
}


