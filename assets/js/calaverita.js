import * as calConst from './calaverita_constants.js';
import * as calEvents from './calaverita_events.js';
import {addRainDrops} from './calaverita_cempasuchil.js';

calConst.screen.addEventListener('click', () => {
    calEvents.changeToClassName(calConst.set, 'desappear');
    calEvents.changeToClassName(calConst.media, 'appear');
});

addRainDrops();
calEvents.typingEffect(calConst.screen, 'Guillermo González Camarena', () => {
    calEvents.typingEffect(calConst.screen, 'El visionario inventor mexicano de la televisión a color...', () => {
        calConst.screen.click();
    });
});