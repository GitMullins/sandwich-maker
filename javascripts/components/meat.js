const meatsPriceInfo = {
    tuna: 1.50,
    pepperoni: 1.75,
    turkey: 2.00
};

const meatsTypeInfo = {
    type1: 'tuna',
    type2: 'pepperoni',
    type3: 'turkey'
};

const getPrice = () => {
    return  meatsPriceInfo;
};

const getType = () => {
    return meatsTypeInfo;
}

export default { getPrice, getType };