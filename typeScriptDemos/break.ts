let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

let discount = 0;
// let product = products[1]; // tablet
let product = { name: 'mobile', price: 1200 };

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
    default:
        discount = 0;
        break;
}

console.log(`There is a ${discount}% discount on ${product.name}.`);