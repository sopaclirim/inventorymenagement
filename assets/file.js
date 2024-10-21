responav = document.querySelector(".responsive-nav");

responav.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

closenav = document.querySelector(".close-nav");

closenav.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}