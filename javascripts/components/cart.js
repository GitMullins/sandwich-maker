import util from '../helpers/util.js';

const cart = [];

const getCart = () => {
    return cart;
};

const setCart = (ingredient) => {
    cart.push(ingredient);
};

const buyEvent = (e) => {
    e.preventDefault();
    const myCart = getCart();
    const total = myCart.reduce((total, currentValue) => {return total + currentValue.value}, 0);
    window.alert(`You owe ${total.toFixed(2)}`);
};

const cartToDom = () => {
    const myCart = getCart();
    let domString = '<div class="row">';
    domString += '<h2>Cart:</h2>';
    domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
    domString += '</div><div class="row d-flex flex-wrap">';
    myCart.forEach((ingredient) => {
      domString += `<div class="card col-4">`;
      domString += `  <div class="card-body">`;
    //   domString += `    <h5 class="card-title">${ingredient.title}</h5>`;
      domString += `    <p class="card-text">${ingredient.value}</p>`;
      domString += `  </div>`;
      domString += `</div>`;
    });
    domString += `</div>`;
    util.printToDom('cart-container', domString);
    document.getElementById('purchase-btn').addEventListener("click", buyEvent);
};

export default { setCart, cartToDom };