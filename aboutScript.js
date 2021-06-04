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