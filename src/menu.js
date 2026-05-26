import { createContainer, createElm, content } from './base.js';
import './styles/menu.css';

function createMenu() {
    const container = createContainer();
    const indicator = container.firstChild;

    indicator.textContent = 'Menu';
    indicator.classList.remove('home-active', 'about-active');
    indicator.classList.add('menu-active');
    
    content.appendChild(container);
}

export {createMenu};