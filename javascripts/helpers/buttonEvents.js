import makeStore from '../components/store.js';
import meats from '../components/meat.js';
// import cart from '../../../../inclass/modules/javascripts/components/cart.js';


const attachEvents = () => {
document.getElementById('tuna').addEventListener('click', makeStore.checkBoxFinder);
document.getElementById('pepperoni').addEventListener('click', makeStore.checkBoxFinder);
};


export default { attachEvents };