'use strict'
const menu = document.querySelector('.header__menu-box');
const hamburger = document.getElementById('hamburger-btn');
hamburger.addEventListener('click',function(){

        menu.classList.toggle('active');
        hamburger.classList.toggle('check');
});