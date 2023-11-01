// Constants for the TV
export const set = document.querySelector('.set'),
    screen = set.querySelector('.tv .screen'),
    media = document.querySelector('.media:has(img)');

// Constants for cempasúchil
export const rainContainer = document.querySelector('.rain-container'),
    rainDropImage = new Image();
rainDropImage.src = '/assets/img/cempasuchil_1.png'; // Add the image source URL here

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};