import { createElm, createContainer, content, appendContact} from "./base.js";
import './styles/about.css';
import homeImg from './images/home.png';
import pigeonImg from './images/pigeon.png';
import recipeImg from './images/recipe.png';

function createAbout() {
    const container = createContainer();
    const indicator = container.firstChild;

    const header = createElm('section');
    const headerText = createElm('h1');
    const headerDivide = createElm('div');

    const brief = createElm('section');

    const story = createElm('div');
    const storyText = createElm('p');
    const storyImg = createElm('img');

    const message = createElm('div');
    const messageText = createElm('p');
    const messageImg = createElm('img');

    const history = createElm('div');
    const historyText = createElm('p');
    const historyImg = createElm('img');

    const hours = createElm('section');
    const hoursHead = createElm('h3');
    const hoursList = createElm('table');
    const hoursTableBody = createElm('tbody');
    const workingHoursInfo = [
        {dayName: 'Saturday', hours: '8am - 2am'},
        {dayName: 'Sunday', hours: '8am - 2am'},
        {dayName: 'Monday', hours: '8am - 2am'},
        {dayName: 'Tuesday', hours: '8am - 2am'},
        {dayName: 'Wednesday', hours: '8am - 2am'},
        {dayName: 'Thursday', hours: '8am - 2am'},
        {dayName: 'Friday', hours: '2pm - 2am'},
    ];

    const footer = createElm('section');
    const attr = createElm('div');

    indicator.textContent = 'About';
    indicator.classList.remove('home-active', 'menu-active');
    indicator.classList.add('about-active');

    
    headerText.textContent = 'About Us';
    headerDivide.classList.add('divider');
    header.append(headerText, headerDivide)
    header.classList.add('heading');

    storyText.innerHTML = '<strong>Beit El Hamam - "The House of the Pigeons"</strong> - was born from a love of traditional Egyptian home cooking. <span class="highlight">Founded in 2024</span>, our restaurant brings the warmth of a Egyptian family kitchen to every guest who walks through our doors.'
    storyImg.src = homeImg;
    storyImg.alt = 'cozy home sticker';
    story.append(storyText, storyImg);
    story.classList.add('brief-story');

    messageText.innerHTML = 'We believe <span class="highlight">food is love made visible.</span> Every dish is prepared the way grandmothers used to make — slowly, with patience, and with the finest locally sourced ingredients. No shortcuts. No compromises.';
    messageImg.src = pigeonImg;
    messageImg.alt = 'pigeon carrying a branch sticker';
    message.append(messageImg, messageText);
    message.classList.add('brief-message');

    historyText.innerHTML = 'Pigeon has been enjoyed along the Nile since the time of the Pharaohs. Our signature <span class="hamam-highlight">Hamam Mahshi</span> follows a <span class="highlight">100-year-old</span> family recipe: freekeh, ghee, and a secret blend of spices, slow-roasted until the skin is crisp and the meat falls off the bone.';
    historyImg.src = recipeImg;
    historyImg.alt = 'old recipes book sticker';
    history.append(historyText, historyImg);
    history.classList.add('brief-history');

    brief.append(story, message, history);
    brief.classList.add('about-brief');
    
    hoursHead.textContent = 'Hours';
    hoursHead.classList.add('hours-heading');
    hoursList.classList.add('hours-list');
    workingHoursInfo.forEach(day => {
        const row = createElm('tr');
        const dayName = createElm('th');
        const dayHours = createElm('td');

        dayName.textContent = day.dayName;
        dayName.scope = 'row'
        dayHours.textContent = day.hours;

        row.append(dayName, dayHours);
        row.classList.add('hours-row');
        hoursTableBody.append(row);
    });
    hoursList.appendChild(hoursTableBody);
    hours.append(hoursHead, hoursList);
    hours.classList.add('about-hours');

    footer.classList.add('about-footer');
    attr.innerHTML =`
    <p>Home stickers created by <a href="https://www.flaticon.com/free-stickers/home" title="home stickers">Stickers - Flaticon</a></P>
    <p>Bird stickers created by <a href="https://www.flaticon.com/free-stickers/bird" title="bird stickers">kerismaker - Flaticon</a></p>
    <p>Magic stickers created by <a href="https://www.flaticon.com/free-stickers/magic" title="magic stickers">Stickers - Flaticon</a></p>
    `;
    attr.classList.add('attribution')
    footer.appendChild(attr);

    container.append(header, brief, hours);
    appendContact(container)
    container.appendChild(footer);
    content.appendChild(container);
}

export {createAbout};