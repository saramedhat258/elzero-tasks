//task 1/////////////////////////////////////////////////
type n = number
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here


//task 2/////////////////////////////////////////////////
type mix = number | boolean
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here


//task 3/////////////////////////////////////////////////
type Info = {
    theName: string;
    theAge: number;
}
type Full = Info & {
    country: string
}
// Do Not Edit Here
function showInfo(data: Info) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));


//task 4 ///////////////////////////////////////////////////
function yesOrNo(val: number | string): boolean | string {
    if (typeof val === "number") {
        return val > 10 ? true : false
    }
    return 'Error'
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False


//task 5 //////////////////////////////////////////////////
type custom = {
    yes: string,
    no: string
}
function isHeOld(age: number | string): custom | string {
    if (typeof age === "number") {
        return age > 40 ? 'yes' : 'no';
    }
    return 'Error'
}
// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"


//task 6 ///////////////////////////////////////////////////
let post: readonly [number, string, boolean] = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
post.push("Elzero"); // Error => Cant Add
const [id, title, state] = post
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true


//task 7 //////////////////////////////////////////////////
function getinsane(num: number) {
    return num
}
enum Game {
    Easy = 100,
    Medium = Easy - 20,
    Hard = Medium - Easy / 2,
    Insane = Hard - getinsane(10)
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20


//task 8 //////////////////////////////////////////////////
const user: {
    username: string,
    age: number|string,
    website?: string,
    skills: {
        frontEnd: string[],
        backEnd: (string|number)[]
    }
} = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
