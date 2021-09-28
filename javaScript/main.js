'use strict'
const menu = document.querySelector('.header__menu-box');
const hamburger = document.getElementById('hamburger-btn');
const navbar = document.querySelector('#nav');
hamburger.addEventListener('click',function(){

        
        menu.classList.toggle('activee');
        hamburger.classList.toggle('check');
        navbar.classList.toggle("fix");
});