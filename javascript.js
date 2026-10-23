
/* Desktop dropdowns */
const dropdowns = document.querySelectorAll(".desktop-nav .dropdown");

dropdowns.forEach(function (dropdown) {
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

    dropdownToggle.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });
});


/* Mobile navigation */
const nav = document.querySelector("nav");
const menuToggle = document.querySelector("#menuToggle");
const menuClose = document.querySelector("#menuClose");
const menuOverlay = document.querySelector("#menuOverlay");

menuToggle.addEventListener("click", function () {
    nav.classList.add("menu-open");
});

menuClose.addEventListener("click", function () {
    nav.classList.remove("menu-open");
});

menuOverlay.addEventListener("click", function () {
    nav.classList.remove("menu-open");
});


/* Mobile dropdowns */
const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

mobileDropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector(".mobile-dropdown-toggle");

    toggle.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });
});
