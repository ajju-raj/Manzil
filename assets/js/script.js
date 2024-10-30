
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove");
});

// add event on multiple elements

const addEventOnElements = function(elements, event, callback){
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener(event, callback);
    }
}

// navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navbarTogglers, "click", toggleNav);

// header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
