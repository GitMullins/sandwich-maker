import cart from './cart.js';

import meats from '../components/meat.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const meatPrice = meats.getPrice();
    cart.setCart(meatPrice);
    cart.cartToDom();
};

const makeStore = () => {
    const meatPrice = meat.getPrice();
    let domString = '<h2>Our only book</h2>';
    domString += `<h3>${meatPrice.value}`
    domString += `<button id="cart-button" class="btn btn-danger">Add to Cart</button>`
    util.printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener("click", addToCartEvent);
};

export default { makeStore };