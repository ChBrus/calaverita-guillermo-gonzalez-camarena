import {rainContainer, rainDropImage, random} from './calaverita_constants.js';

export const createRainDrop = () => {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain-drop');

    random(1, 2) % 2 === 0 ? rainDrop.classList.add('right') : rainDrop.classList.add('left');

    rainDrop.style.left = Math.random() * 100 + '%';
    rainDrop.style.animationDelay = Math.random() * 3 + 's';
    rainDrop.style.backgroundImage = `url(${rainDropImage.src})`;
    rainContainer.appendChild(rainDrop);
};

export const addRainDrops = () => {
    const numOfRainDrops = 100;
    for (let i = 0; i < numOfRainDrops; i++) {
        setTimeout(() => {
            createRainDrop();
        }, Math.random() * 2);
    }
};