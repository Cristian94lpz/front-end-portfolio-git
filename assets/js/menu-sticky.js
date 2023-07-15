function menuSticky(){
    if (window.scrollY >= 1){
        document.getElementById("menu").setAttribute("class","sticky");
        
    }else{
        document.getElementById("menu").setAttribute("class","estatico");
       
    }
}



function scroll_event(e){
   menuSticky();
   
   console.log(window.scrollY);

}
window.onscroll = scroll_event;