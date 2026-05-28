import {content} from "./base.js";
import {createHome} from "./home.js";
import {createMenu} from './menu.js';
import "./styles/main.css";

const navBtns = document.querySelectorAll('nav button');
const pages = {
    home: createHome,
    menu: createMenu,
}
let currentPage = 'd'

function switchPage(pageId, button) {
    if(pageId === currentPage) return;
    if(!pages[pageId]) return;

    content.classList.add('slide-out');
    
    setTimeout(function() {
        content.innerHTML = '';
        currentPage = pageId;
        pages[pageId]();

        navBtns.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');
            
        content.classList.remove('slide-out');
        content.classList.add('slide-in');

        setTimeout(function() {
            content.classList.remove('slide-in');
        }, 300);
            
    }, 300);
}

navBtns.forEach(btn => btn.addEventListener('click', () => {
    switchPage(btn.id, btn);
}));

createMenu();
document.querySelector('#menu').classList.add('active-btn');