function arrayDiff(a, b) {
    return a.filter(ele=>!b.includes(ele)) //loop over all (a) elements and return only elements that not included in (b) array
}

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,2], [1]))
console.log(arrayDiff([1,2,2], [2]))