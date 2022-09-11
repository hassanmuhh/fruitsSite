let btn = document.getElementById("scr");

window.onscroll = function(){
    if(window.scrollY >= 1600){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}