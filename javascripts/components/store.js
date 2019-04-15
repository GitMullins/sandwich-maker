import cart from './cart.js';

import meat from '../components/meat.js';
import util from '../helpers/util.js';

// const sandwichBuilder = () => {
    // let sandwich = [];
    const checkBoxFinder = () => {
        let boxes = document.getElementsByClassName('form-check-input');
        let types = [];
        let prices = [];
        for (var i=0; i<boxes.length; i++) {
           if (boxes[i].checked) {
              types.push(boxes[i].id);
           }
           if (document.getElementById(n) = object.keys(meats))
        }
        console.log(checkedBoxes);
        console.log(prices);
      }
// };




export default { checkBoxFinder };