import App from '../script/app.js';

window.onload = () => {
    const script = document.getElementById('FGCU-email-sgnature-module');
    App.init(script.dataset.targetDiv);
};
