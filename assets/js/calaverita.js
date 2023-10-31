import * as calConst from './calaverita_constants.js';
import * as calEvents from './calaverita_events.js';

calConst.screen.addEventListener('click', () => {
    calEvents.changeDisplayTo(calConst.set, 'none');
    calEvents.changeDisplayTo(calConst.media, 'flex');
});