"use strict";
// Do Not Edit The Code Below
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
class Playerr {
    constructor(username, type, level, vip) {
        this.u = username,
            this.Ty = type,
            this.lvl = level,
            this.V = vip;
    }
    details() {
        if (this.V) {
            return `VIP ${this.u},Type Is ${this.Ty} Level Is ${this.lvl}`;
        }
        return `${this.u},Type Is ${this.Ty} Level Is ${this.lvl}`;
    }
}
// Do Not Edit The Code Below
let player11 = new Playerr("Osama", "Mage", 90, true);
let player2 = new Playerr("Shady", "Archer", "85", false);
let player3 = new Playerr("Amr", "Fighter", 50, true);
let player4 = new Playerr("Mahmoud", "Assassin", 77);
console.log(player11.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
//task 5 /////////////////////////////////////////////////////////////////////////////////////////////////
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.id);
console.log(tester.username);
//task 6 /////////////////////////////////////////////////////////////////////////////////////////////////
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(val) {
        this._title = val;
    }
}
let testerr = new Show("Elzero");
console.log(testerr.title); // Property 'title' does not exist on type 'Show'
testerr.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(testerr.title); // Property 'title' does not exist on type 'Show'
class Player {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log('logged in');
    }
    logOut(msg) {
        console.log(`logged out, ${msg}`);
    }
}
let player1 = new Player(100, "Elzero", 95);
console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye
