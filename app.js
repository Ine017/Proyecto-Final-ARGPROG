var visibleMenu = false;
let menu = document.getElementById("nav");
function showHideMenu(){
    if(visibleMenu==false){
        menu.style.display = "block";
        visibleMenu = true;
    }
    else{
        menu.style.display = "none";
        visibleMenu = false;
    }
}

let links = document.querySelectorAll("nav a");
for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        menu.style.display = "none";
        visibleMenu = false;
    }
}