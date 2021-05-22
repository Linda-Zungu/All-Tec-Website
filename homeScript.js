function checkScrollPosition(){
    let scroll = this.scrollY;
    console.log(scroll);

    let comSciPic = document.getElementById("comsci");
    document.getElementById("comscipicText").style.opacity = ""+scroll/300;
    
    // if(scroll < 150){
    //     comSciPic.style.filter = "blur("+scroll/25+"px)";
    // }
    
}

window.addEventListener("scroll", function() {checkScrollPosition()})