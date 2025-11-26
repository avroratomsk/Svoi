import {bodyLock} from "./baseFunctions.js";

const burgerBtn = document.getElementById("burger");

burgerBtn?.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        bodyLock();
    }
});

let lastScroll = window.scrollY;

// window.addEventListener("scroll", (e) => {
//     const header = document.querySelector(".header");
//     const mainSliderHeight = document.querySelector(".main-slider").offsetHeight;
//     const currentScroll = window.scrollY;
//
//     if(currentScroll < lastScroll && currentScroll > mainSliderHeight) {
//         header.classList.add('sticky')
//         document.body.style.paddingTop = header.offsetHeight + "px";
//     }else {
//         header.classList.remove('sticky');
//         document.body.style.paddingTop = "0px";
//     }
//
//     lastScroll = currentScroll;
// })