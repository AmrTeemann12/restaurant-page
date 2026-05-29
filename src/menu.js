import { createContainer, createElm, content } from './base.js';
import './styles/menu.css';
import coldMezzePic from './images/menu/cold-mezze.webp';
import hotMezzePic from './images/menu/hot-mezze.webp';
import soupPic from './images/menu/soup.webp';
import saladPic from './images/menu/salad.webp';
import taginePic from './images/menu/tagine.webp';
import pigeonPic from './images/menu/pigeon.webp';
import sidesPic from './images/menu/sides.webp';
import dessertsPic from './images/menu/desserts.webp';
import hotDrinksPic from './images/menu/hot-drinks.webp';
import coldDrinksPic from './images/menu/cold-drinks.webp';

function createMenu() {
    const container = createContainer();
    const indicator = container.firstChild;

    indicator.textContent = 'Menu';
    indicator.classList.remove('home-active', 'about-active');
    indicator.classList.add('menu-active');

    const menuData = {
        coldMezze: {
            nameEn: "Cold Mezze",
            nameAr: "مُقْبِلَاتٍ بَارِدَة",
            image: coldMezzePic,
            items: [
                {nameEn: "Baba Ghanoush", nameAr: "بَابَا غَنُّوج", desc: "Smoky roasted eggplant blended with tahini, garlic & lemon", price: 85},
                {nameEn: "Hummus Bil Tahini", nameAr: "حُمُّص بِطَحِينَة", desc: "Creamy chickpeas, tahini, lemon, olive oil & sumac", price: 75},
                {nameEn: "Warak Enab", nameAr: "وَرَق عِنَب", desc: "Grape leaves stuffed with rice, herbs & tomatoes", price: 90},
            ],
        },
        hotMezze: {
            nameEn: "Hot Mezze",
            nameAr: "مُقْبِلَاتٍ سَاخِنَة",
            image: hotMezzePic,
            items: [
                {nameEn: "Sambousek (Cheese)", nameAr: "سَمْبُوسَه جُبْنَة", desc: "Crispy golden triangles filled with halloumi", price: 55},
                {nameEn: "Sambousek (Meat)", nameAr: "سَمْبُوسَه لَحْمَة", desc: "Crispy golden triangles filled with spiced beef", price: 95},
                {nameEn: "Falafel (Ta'meya", nameAr: "فَلافِل (طَعْمِيَّة)", desc: "Egyptian-style fried fava bean patties with sesame & herbs", price: 25},
                {nameEn: "Hawawshi", nameAr: "حَوَاوِشِي", desc: "Spiced minced meat stuffed inside baked pita", price: 90},

            ]
        },
        soups: {
            nameEn: "Soups",
            nameAr: "شَوْرَبَات",
            image: soupPic,
            items: [
                {nameEn: "Adas Shorba", nameAr: "شَوْرَبَة عَدَس", desc: "Velvety red lentils, cumin, crispy onions", price: 55},
                {nameEn: "Shorbet Kaware'a", nameAr: "شَوْرَبَة كَوَارِع", desc: "Traditional cow hoof soup", price: 90},
                
            ]
        },
        salads: {
            nameEn: "Salads",
            nameAr: "سَلَطَات",
            image: saladPic,
            items: [
                {nameEn: "Salata Baladi", nameAr: "سَلَطَة بَلَدِي", desc: "Chopped cucumber, tomato, onion, parsley, mint & lemon-olive oil dressing", price: 45},
                {nameEn: "Rocca Wa Ruman", nameAr: "رُوكَا وَرُّمَّان", desc: "Arugula, pomegranate seeds, walnuts, shaved parmesan", price: 80},
                {nameEn: "Tahini Salad", nameAr: "سَلَطَة طَحِينَة", desc: "Creamy sesame dip with parsley and lemon", price: 50}
                
            ]
        },
        clayPot: {
            nameEn: "Tagayn",
            nameAr: "طَجَايِن",
            image: taginePic,
            items: [
                {nameEn: "Koshari Supreme", nameAr: "كُشَرِي سُبْرِيم", desc: "Layers of rice, lentils, pasta, chickpeas, topped with spicy tomato sauce & crispy onions", price: 90},
                {nameEn: "Sayadeya", nameAr: "صَيَّادِيَّة", desc: "Pan-seared Nile tilapia with caramelized onions & spiced rice", price: 60},
                {nameEn: "Roz Meammar Bil Firakh", nameAr: "رُز مِعَمَّر بِالْفِرَاخ", desc: "Baked creamy rice with chicken & Egyptian ghee", price: 220},
                {nameEn: "Fatta Bil Lahma", nameAr: "فَتَّة بِاللَّحْمَة", desc: "Layers of rice, crispy bread, lamb chunks, garlic vinegar & spiced broth", price: 260},
                
            ]
        },
        grills: {
            nameEn: "Grills",
            nameAr: "مَشَوِيَات",
            image: pigeonPic,
            items: [
                {nameEn: "Hamam Mahshi (Signature)", nameAr: "حَمَام مَحْشِي", desc: "Tender stuffed pigeon with freekeh, herbs & nuts — roasted to perfection", price: 320, isSignature: true},
                {nameEn: "Kofta Kebab", nameAr: "كُفْتَة كَبَاب", desc: "Minced lamb with parsley & spices", price: 200},
                {nameEn: "Lamb Chops", nameAr: "لَحْمَة ضَان مُشْوِيَّة", desc: "Herb-marinated, charcoal-grilled", price: 310},
                {nameEn: "Shish Tawook", nameAr: "شِيش طَاوُوق", desc: "Marinated chicken breast skewers", price: 190},
                
            ]
        },
        sides: {
            nameEn: "Sides",
            nameAr: "أَطْيبَة",
            image: sidesPic,
            items: [
                {nameEn: "Egyptian Rice", nameAr: "رُز مِصْرِي", desc: "per plate", price: 30},
                {nameEn: "Baladi Bread", nameAr: "عَيْش بَلَدِي", desc: "per 5 Loaves", price: 15},
                {nameEn: "French Fries", nameAr: "بَطَاطِس مُقَلَيَة", desc: "per plate", price: 40},
                
            ]
        },
        desserts: {
            nameEn: "Desserts",
            nameAr: "حَلَوَيَات",
            image: dessertsPic,
            items: [
                {nameEn: "Om Ali", nameAr: "أُم عَلِي", desc: "Flaky pastry, milk, nuts, coconut & raisins, baked golden", price: 80},
                {nameEn: "Konafa Bil qshta", nameAr: "كُنَافَة بِالْقْشْطَة", desc: "Crispy shredded phyllo filled with cream cheese & pistachios", price: 90},
                {nameEn: "Basbousa", nameAr: "بَاسْبُوسَة", desc: "Semolina coconut cake soaked in rose syrup", price: 70},
                {nameEn: "Goulash Bel qshta", nameAr: "جُولاش بِالْقْشْطَة", desc: "Thin flaky phyllo rolled with creamy ashta, baked golden, drenched in syrup", price: 85},
                {nameEn: "Roz Bel Laban", nameAr: "رُز بِاللَّبَن", desc: "Creamy rose-perfumed rice pudding topped with cinnamon & pistachios", price: 50},
                {nameEn: "Luqmat El Qadi", nameAr: "لُقْمَة الْقَاضِي", desc: "Syrup-drenched dough balls", price: 60},
                {nameEn: "Ghorayeba (3 pcs)", nameAr: "غُرَيْبَة", desc: "Buttery shortbread", price: 40},
                {nameEn: "Maamoul (3 pcs)", nameAr: "مَعْمُول", desc: "Date or walnut cookies", price: 40},
            ]
        },
        hotDrinks: {
            nameEn: "Hot Drinks",
            nameAr: "مَشْرُوبَات سَاخِنَة",
            image: hotDrinksPic,
            items: [
                {nameEn: "Egyptian Tea", nameAr: "شَاي مِصْرِي", desc: "", price: 20},
                {nameEn: "Turkish Coffee", nameAr: "قَهْوَة تُرْكِي", desc: "", price: 30},
                {nameEn: "Karkadeh", nameAr: "كَرْكَدِيه", desc: "", price: 35},
                {nameEn: "Sahlab", nameAr: "سَحْلَب", desc: "", price: 40},
                
            ]
        },
        coldDrinks: {
            nameEn: "Cold Drinks",
            nameAr: "مَشْرُوبَات بَارِدَة",
            image: coldDrinksPic,
            items: [
                {nameEn: "Fresh Mango Juice", nameAr: "عَصِير مَانْجَا طَازَج", desc: "", price: 60},
                {nameEn: "Fresh Lemon with Mint", nameAr: "عَصِير لَيْمُون بِنَعْنَاع", desc: "", price: 45},
                {nameEn: "Sobia", nameAr: "سُوبْيَا", desc: "", price: 35},
                {nameEn: "Soft Drinks", nameAr: "مَشْرُوبَات غَازِيَّة", desc: "", price: 25},
                {nameEn: "Bottled Water", nameAr: "مَايَة مَعْدَنِيَّة", desc: "", price: 15},
                
            ]
        },
    };

    for (let key in menuData){
        const section = menuData[key];
        const parent = createElm('div');
        const header = createElm('div');
        const body = createElm('div');

        (function createHeader() {
            const heading = createElm('h2');
            const headingAr = createElm('span');
            const imageContainer = createElm('div');
            const borderImage = createElm('div');
            const sectionImageContainer = createElm('div');
            const sectionImage = createElm('img');

            heading.textContent = section.nameEn;
            headingAr.textContent  = section.nameAr;
            heading.classList.add('category-heading');
            heading.appendChild(headingAr);

            imageContainer.classList.add('category-image');
            borderImage.classList.add('category-border-image');
            sectionImageContainer.classList.add('category-image-container');
            sectionImage.src = section.image;
            sectionImage.alt = `${section.name} phote`;
            
            sectionImageContainer.appendChild(sectionImage);
            borderImage.appendChild(sectionImageContainer);
            imageContainer.appendChild(borderImage)

            header.append(heading, imageContainer);
            header.classList.add('category-header')
        })();

        (function createBody() {
            const list = createElm('table');
            const listBody = createElm('tbody');
            
            section.items.forEach(item => {
                const row = createElm('tr');
                const rowHead = createElm('th');
                const headAr = createElm('span');
                const rowDesc = createElm('td');
                const rowPrice = createElm('td');

                rowHead.scope = 'row';
                rowHead.textContent = item.nameEn;
                headAr.textContent = item.nameAr;
                rowHead.appendChild(headAr);
                rowHead.classList.add('menu-item-name');

                rowDesc.textContent = item.desc;
                rowDesc.classList.add('menu-item-desc');

                rowPrice.textContent = item.price + ' L.E';
                rowPrice.classList.add('menu-item-price');

                row.append(rowHead, rowDesc, rowPrice);
                row.classList.add('menu-item');
                if(item.isSignature === true) row.id = 'signature-item';
                listBody.appendChild(row);
            });

            list.append(listBody);
            body.appendChild(list);
            body.classList.add('category-body');

        })();

        parent.append(header, body);
        parent.classList.add('category', `${section.nameEn.split(' ').map(item => item.toLowerCase()).join('-')}-category`)
        container.appendChild(parent);
    }

    content.appendChild(container);
}

export {createMenu};