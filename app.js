var visibleMenu = false;
let menu = document.getElementById("nav");
function showHideMenu(){
    if(visibleMenu==false){//si esta oculto
        menu.style.display = "block";
        visibleMenu = true;
    }
    else{
        menu.style.display = "none";
        visibleMenu = false;
    }
}
