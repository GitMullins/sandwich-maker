import buttonEvents from './javascripts/helpers/buttonEvents.js';
import makeStore from './javascripts/components/store.js';

const init = () => {
    buttonEvents.attachEvents();
    makeStore.makeStore();
};

init();