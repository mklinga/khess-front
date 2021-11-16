import { fetchSystemInformation } from './services/system';

console.log('load')
const mainElement = document.querySelector('body > main');
mainElement.innerHTML = 'Well, here we go, again.';

fetchSystemInformation().then(information => {
    const informationSpan = document.createElement('span');
    informationSpan.innerHTML = information.hello;
    document.querySelector('body footer').append(informationSpan);
});