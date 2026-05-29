import mobileIcon from "./images/icons/phone-icon.svg";
import mailIcon from "./images/icons/mail-icon.svg";

const content = document.querySelector('#content');
const createElm = document.createElement.bind(document);

function createContainer() {
    const container = createElm('div');
    const indicator = createElm('div');

    container.classList.add('container');
    indicator.classList.add('indicator');

    container.appendChild(indicator);
    
    return container;
}

function appendContact(elem) {
    const contact = createElm('section');
    const header = createElm('h3');
    const info = createElm('div');
    const mobile = createIcon(mobileIcon, 'mobile', '+2012 345 6789');
    const mail = createIcon(mailIcon, 'mail', 'beitelhamam@rest.com');
            
    function createIcon(icon, alt, data){
        const div = createElm('div');
        const img = createElm('img');
        const para = createElm('p');

        img.src = icon;
        img.alt = alt;
        para.textContent = data;

        div.append(img, para);
        div.classList.add('contact-icon');
        return div;
    }

    header.textContent = 'Contact us:';

    info.append(mobile, mail);
    info.classList.add('contact-info');

    contact.append(header, info);
    contact.classList.add('contact');

    elem.appendChild(contact);
}

export {content, createElm, createContainer, appendContact};