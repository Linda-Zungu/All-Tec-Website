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
    let aboutTab = document.getElementById("aboutID")
    let coursesTab = document.getElementById("coursesID")
    let contactTab = document.getElementById("contactID")
    let cartTab = document.getElementById("cartID")
    let courseLinkNav = document.getElementById("courseIconID")

    
    nav.style.background = scroll >=485 ? "rgba( 255, 255, 255, 0.7 )" : "rgba( 0, 0, 0, 0.7 )"
    nav.style.transition = "all 0.3s ease-in-out"
    
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

function cartFunc() {
    var miniCart = document.getElementById("miniCartID");
    miniCart.style.animation = "moveMiniCart 0.3s ease-in-out"
    if(miniCart.style.transform == "translateX(0%)"){
        miniCart.style.transform = "translateX(150%)"
        document.getElementById('miniCartID').innerHTML = '';
    }
    else{
        miniCart.style.transform = "translateX(0%)"
        if(items != null) {
            items.forEach(i => {
                addToTray(i);
            });
        }
    } 
}

var items = [];
items = JSON.parse(localStorage.getItem('items')) || [];
function storeText(nameID) {
    items.push(document.getElementById(nameID).innerHTML)
    localStorage.setItem('items', JSON.stringify(items));
    addToTray(items[items.length-1])
}

function addToTray(nameID) {
    var ul = document.getElementById('miniCartID');
    var li = document.createElement("li");
    var hr = document.createElement("hr");

    li.appendChild(document.createTextNode(nameID));
    ul.appendChild(li);
    ul.appendChild(hr);
}


