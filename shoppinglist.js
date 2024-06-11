
let shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

shoppingList.push('fruit loops')

let coffeeIndex = shoppingList.indexOf('coffee');
if (coffeeIndex !== -1) {
    shoppingList[coffeeIndex] = 'fair trade coffee';
}

let chipsIndex = shoppingList.indexOf('chips');
let salsaIndex = shoppingList.indexOf('salsa');

if (chipsIndex !== -1 && salsaIndex !== -1) {
    shoppingList.splice(chipsIndex, 2, 'rice', 'beans');
}

let shoppingCart = [];

let lastItem = shoppingList.pop();
shoppingCart.push(lastItem);


let firstItem = shoppingList.shift();
shoppingCart.push(firstItem);

while (shoppingList.length > 0) {
    let item = shoppingList.pop();
    shoppingCart.push(item);
}

shoppingCart.sort(); 
shoppingCart.reverse(); 

let str = ''; 

for (let item of shoppingCart){
    str += `${item}, `
}

console.log("Shopping Cart:", str);