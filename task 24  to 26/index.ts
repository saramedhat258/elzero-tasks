//task 1 //////////////////////////////////////////////////////////////////////////
// Do Not Edit
type numandstring = number | string;

abstract class Game {
    constructor(public title: string, public price: numandstring) { }
    abstract getLocation(): string;
    abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game {
    constructor(title: string, price: numandstring, public rate: number) {
        super(title,price)
    }
    getLocation(): string {
        return 'location'
    }
    getDiscount(): string {
        return 'discount'
    }
}

class Action extends Game {
    constructor(title: string, price: numandstring, public rate: number,public company:string) {
        super(title,price)
    }
    getLocation(): string {
        return 'location'
    }
    getDiscount(): string {
        return 'discount'
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
function showTypes<s=void,n=void,b=void>(str?:s,num?:n,bol?:b):string{
    return `${str??'nothing'}-${num??'nothing'}-${bol??'nothing'}`
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true



//task 3 //////////////////////////////////////////////////////////////////////////////////
type stORnum=string|number
class Gamer<n=stORnum,p=stORnum>{
    constructor(public title:n,public price:p){}
    getDiscount(val:n):void{
        console.log(`the discount is ${val}`)
    }

}
// Do Not Edit Here
let gameOnee = new Gamer<string>("Ys", 100);
let gameTwoo = new Gamer<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOnee.title); // "Ys"
console.log(gameOnee.price); // 100
gameOnee.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwoo.title); // 2064
console.log(gameTwoo.price); // 100
gameTwoo.getDiscount(80); // "The Discount Is 80"