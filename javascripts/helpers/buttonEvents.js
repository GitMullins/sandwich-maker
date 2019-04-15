import meats from '../components/meat.js';
// import cart from '../../../../inclass/modules/javascripts/components/cart.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    // const meatsPriceInfo = meats.getPrice();
    console.log((e.target.id));

    // cart.setCart(meatsPriceInfo);
    // cart.cartToDom();
    // console.log(meats.getPrice());
};


const attachEvents = () => {
document.getElementById('tuna').addEventListener('click', addToCartEvent);
};


export default { attachEvents };