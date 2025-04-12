"use strict";
const menu_ber = document.querySelector(".menu i");
menu_ber.addEventListener('click', function(){
    menu_ber.classList.toggle("fa-times-circle");

    document.querySelector(".menu ul").classList.toggle("active");
})

