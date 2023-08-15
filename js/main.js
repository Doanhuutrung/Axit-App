
var openNav = document.querySelector(".open-nav");
var closeNav = document.querySelector(".close-nav");
var navBar = document.querySelector("#navBar");

openNav.addEventListener("click", function(){
    navBar.style.opacity = "1";
    navBar.style.visibility = "visible";
    navBar.stye.top = "60px";
    openNav.stye.display = "none";
    closeNav.stye.display = "block";
});
closeNav.addEventListener("click", function(){
    navBar.style.opacity = "0";
    navBar.style.visibility = "hidden";
    navBar.stye.top = "40px";
    openNav.stye.display = "block";
    closeNav.stye.display = "none";
});