"use strict";
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() {
        return 'location';
    }
    getDiscount() {
        return 'discount';
    }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return 'location';
    }
    getDiscount() {
        return 'discount';
    }
}
// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
//task 2 //////////////////////////////////////////////////////////////////////////////////
function showTypes(str, num, bol) {
    return `${str !== null && str !== void 0 ? str : 'nothing'}-${num !== null && num !== void 0 ? num : 'nothing'}-${bol !== null && bol !== void 0 ? bol : 'nothing'}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
class Gamer {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(val) {
        console.log(`the discount is ${val}`);
    }
}
// Do Not Edit Here
let gameOnee = new Gamer("Ys", 100);
let gameTwoo = new Gamer(2064, 100); // There's A Game Called "2064"
console.log(gameOnee.title); // "Ys"
console.log(gameOnee.price); // 100
gameOnee.getDiscount("50"); // "The Discount Is 50"
console.log(gameTwoo.title); // 2064
console.log(gameTwoo.price); // 100
gameTwoo.getDiscount(80); // "The Discount Is 80"
