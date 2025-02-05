//task 1 ///////////////////////////////////////////////////////////////////////////////////////////////////
// Edit The Interface To Fix The Problems
interface Member {
    id: number | string;
    username: string;
    country?: string;
    state: boolean;
    getName(): string
}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName() { // 'getName' does not exist in type 'Member'
        return this.username;
    }
}
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property


//task 2///////////////////////////////////////////////////////////////////////////////////////////////////
interface Client {
    id: number,
    username: string,
    active: boolean,
    discount: number,
    getPrice(num: number): number
}

// Do Not Edit The Code Below
let client: Client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price: number) {
        return price - this.discount;
    }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);


//task 3 ///////////////////////////////////////////////////////////////////////////////////////////////
// Do Not Edit The Code Below
interface Man {
    title: string;
    weight: number;
    age: number;
}

interface Bird {
    canFly: boolean;
}
//solution
interface Superman extends Man, Bird {
    bodyType: string,
    origin: string
}

let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
}


//task 4 //////////////////////////////////////////////////////////////////////////////////////////////
type stAn = string | number
class Playerr {
    u: string
    Ty: string
    lvl: stAn
    V?: boolean
    constructor(username: string, type: string, level: stAn, vip?: boolean) {
        this.u = username,
            this.Ty = type,
            this.lvl = level,
            this.V = vip
    }
    details() {
        if (this.V) {
            return `VIP ${this.u},Type Is ${this.Ty} Level Is ${this.lvl}`
        }
        return `${this.u},Type Is ${this.Ty} Level Is ${this.lvl}`
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
    constructor(public id: number, public username: string, protected title: string) { }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);


//task 6 /////////////////////////////////////////////////////////////////////////////////////////////////
class Show {
    constructor(private _title: string) { }
    get title(): string {
        return this._title
    }
    set title(val: string) {
        this._title = val
    }
}

let testerr = new Show("Elzero");

console.log(testerr.title); // Property 'title' does not exist on type 'Show'
testerr.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(testerr.title); // Property 'title' does not exist on type 'Show'


//task 7 //////////////////////////////////////////////////////////////////////////////////////////////////
interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

class Player implements Play{
    constructor(public id:number,public title:string,public level:number | string){}
    logIn(): void {
        console.log('logged in')
    }
    logOut(msg: string): void {
        console.log(`logged out, ${msg}`)
    }
}

let player1 = new Player(100, "Elzero", 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye