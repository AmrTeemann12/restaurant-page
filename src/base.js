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

export {content, createElm, createContainer};