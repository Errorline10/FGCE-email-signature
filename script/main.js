import App from '../script/app.js';

// onLoad because the js source is non blocking
window.onload = () => {

    // dynamicaly insert the style sheet into the dom
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/styles/style.css';
    document.head.appendChild(link);


    // initilize the email signature form
    const script = document.getElementById('FGCU-email-sgnature-module');
    App.init(script.dataset.targetDiv);
};