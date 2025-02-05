
/* task 1
enable in tsconfig file:
1-"rootDir": "./project/files/typescript"
2-"outDir": "./dist/compiled/javascript"
3-"sourceMap": true
*/



/* task 2  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
function calculate(numOne: number, numTwo: number) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work                   
console.log(calculate(+true, +true)); // 2



//task 3 ////////////////////////////////////////////////////////////////////////////////////////////////////////// add :(number|string)
function printInfo(valueOne: (number | string), valueTwo: (number | string)) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work




//task 4 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [1, 2, 3, [true, false], ["a", "b", ["c", "d", 4, 5, 6]]]



//task 5  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* enable: 
"noUnusedParameters": true, 
"noUnusedLocals": true,
"allowUnreachableCode": false,
*/
function reportErrors(username: string, age: number) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));



//task 6 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c: string) {
    return `${a}${b}${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero




//task 7 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showMsg(user?: string, age?: number | string, country?: string) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));



//task 8 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function printInConsole(...arr: any[]): any {
    for (let i = 0; i < arr.length; i++) {
        console.log(`The Value Is ${arr[i]} And Type Is ${typeof arr[i]}`) 
    }
    return 'done'
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

