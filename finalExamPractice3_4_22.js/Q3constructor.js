"use strict";
/*eslint-disable*/
/*

Write a constructor function to create an object Item that has id, name, price,
discount and freeShipping as properties and has the method, getFinalPrice(). Default value of freeShipping is false.
NOTE: Discount is percentage. Ex: 10 -> 10%.
getFinalPrice(): subtract the discount from the price.
Example: Price:500, discount:10 getFinalPrice()-> 500 - (10/100*500) = 450.
*/

Calculus1982!
Physics1981!


function Item(id, name, price, discount, freeShipping = false) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.freeShipping = freeShipping;
    this.getFinalPrice = function () {
        return (this.price * (100 - this.discount) / 100) + (freeShipping ? 0 : 3);
    }

}

const item1 = new Item(1, 'cell phone', 500, 10);
const item2 = new Item(2, 'book', 50, 0, true);
const item3 = new Item(3, 'table', 500, 1);
const item4 = new Item(4, 'adapter', 40, 2, true);

let shoppingCart = [item1, item2, item3, item4]

console.log(item1.getFinalPrice());

function getCheckoutPrice(cart) {
    let total = 0;
    for (const item of cart) {
        total = total + item.getFinalPrice();
    }
    return total;
}

function getItemsPricedOver100(cart) {
    let result = [];
    for (const item of cart) {
        if (item.price > 100) {
            result.push(item)
        }
    }
    return result
}
console.log(getCheckoutPrice(shoppingCart));
console.log(getItemsPricedOver100(shoppingCart));

function findCheapestItem(cart) {
    let min = 10000;
    let result = { name: null, price: null }
    for (const item of cart) {
        if (item.getFinalPrice() < min) {
            min = item.getFinalPrice();
            result.name = item.name;
            result.price = item.getFinalPrice();
        }
    }
    return result
}
console.log(findCheapestItem(shoppingCart));