console.log('jasdoihasd');


var visibleMenu = false;
let menu = document.getElementById('nav');

function showHideMenu() {
    if (visibleMenu = false) {
        menu.style.display = 'block';
        visibleMenu = true;
    } else {
        menu.style.display = 'none';
        visibleMenu = false; 
    }
}

// const navToggle = document.getElementById('nav-toggle');
// const nav = document.getElementById('nav');

// navToggle.addEventListener('click', () => {
//   mainNav.classList.toggle('active'); // toggle the 'active' class
// });
