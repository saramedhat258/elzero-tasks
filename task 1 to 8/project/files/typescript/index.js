//task 6 //////////////////////////////////////////
var nothing;
var theName = "Elzero";
function showMyDetails(a, b, c) {
    if (a === void 0) { a = ""; }
    if (b === void 0) { b = ""; }
    return "".concat(a).concat(b).concat(c);
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
//task 7 /////////////////////////////////////////
function showMsg(user, age, country) {
    return "".concat(user).concat(age).concat(country);
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
//task 8 ///////////////////////////////////////
function printInConsole() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    arr.map(function (e) {
        return "The Value Is ".concat(e, " And Type Is ").concat(e.type);
    });
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
