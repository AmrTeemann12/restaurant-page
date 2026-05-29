import {createContainer, createElm, content, appendContact} from './base.js';
import "./styles/home.css";
import dishes from "./images/GGI_dishes.png";
import flavorIcon from "./images/icons/flavors-icon.svg";
import ingredientsIcon from "./images/icons/ingredients-icon.svg";
import cozyHomeIcon from "./images/icons/restaurant-icon.svg";
function createHome() {
    const container = createContainer();
    const indicator = container.firstChild;
    const header = createElm('div');
    const main = createElm('div');

    indicator.textContent = 'Home';
    indicator.classList.remove('menu-active', 'about-active');
    indicator.classList.add('home-active');

    (function createHeader(){
        const para = createElm('p');
        const heading = createElm('h1');
        const sub = createElm('span');
        const divide = createElm('div');

        para.classList.add('arabic-text');
        para.textContent = 'اهلاً وسهلاً';

        heading.textContent = 'Beit El Hamam';

        sub.textContent = 'بَيْتُ الْحَمَامُ';
        sub.classList.add('subtitle', 'arabic-text');

        divide.classList.add('divider');

        header.append(para, heading, sub, divide)
        header.classList.add('home-header')
    })();

    

    (function createMain() {
        const wlc = createElm('section');
        const hero = createElm('section');
        const features = createElm('section');

        (function createWlc() {
        const wlcPara = createElm('p');

        wlcPara.innerHTML = 'Welcome to <strong>"Beit El Hamam"</strong> — where every meal tastes like home';
        wlcPara.classList.add('wlc-text');
        wlc.appendChild(wlcPara);
        })();

        (function createHero() {
        const imgContainer = createElm('div');
        const heroImg = createElm('img');
        const heroText = createElm('div');
        const heroPara = createElm('p');

        heroImg.src = dishes;
        heroImg.alt = 'cartoon picture showing various dishes';
        imgContainer.appendChild(heroImg);
        imgContainer.classList.add('img-container');

        heroPara.textContent = 'HERE YOU CAN HAVE A TASTE OF THE DELICIOUS AND DIVERSE EGYPTIAN CUISINE';
        heroText.appendChild(heroPara);
        heroText.classList.add('hero-text');

        hero.append(imgContainer, heroText);
        hero.classList.add('home-hero')
        })();

        (function createFeatures() {
            const flavorsCard = createCard(flavorIcon, 'spices icon', 'Authentic Flavors', 'Traditional recipes passed down through generations');
            const ingredientsCard = createCard(ingredientsIcon, 'fresh ingredients icon', 'Fresh Ingredients', 'Locally sourced spices and produce daily');
            const cozyCard = createCard(cozyHomeIcon, 'cozy restaurant icon', 'Cozy Atmosphere', 'Warm hospitality like an Egyptian home');
           
            function createCard(src, alt, header, para) {
                const card = createElm('div');
                const icon = createElm('div');
                const head = createElm('h3');
                const text = createElm('p');

                icon.classList.add('feature-icon');
                icon.innerHTML = `<img src="${src}" alt="${alt}">`;
                head.textContent = header;
                text.textContent = para;

                card.append(icon, head, text);
                card.classList.add('feature-card');
                return card;
            }

            features.append(flavorsCard, ingredientsCard, cozyCard);
            features.classList.add('features-grid');

        })();

        main.append(wlc, hero, features);
        appendContact(main);
        main.classList.add('home-main');
    })();

    container.append(header, main);

    content.appendChild(container);
}

export {createHome};