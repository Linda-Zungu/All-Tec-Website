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