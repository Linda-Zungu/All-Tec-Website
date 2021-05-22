function checkScrollPosition(){
    let scroll = this.scrollY;
    console.log(scroll);

    let comSciPic = document.getElementById("comsci");
    document.getElementById("centeredtext").style.opacity = ""+scroll/200;
    
    if(scroll < 150){
        comSciPic.style.filter = "blur("+scroll/20+"px)";
    }
    
}

window.addEventListener("scroll", function() {checkScrollPosition()})