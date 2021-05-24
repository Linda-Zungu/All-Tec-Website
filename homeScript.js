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

window.addEventListener("scroll", function() {checkScrollPosition()})