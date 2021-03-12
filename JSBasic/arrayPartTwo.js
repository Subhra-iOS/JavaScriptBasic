function isEven(element){
    return element % 2 === 0;
}

// console.log(isEven(3));

var isRight = (element) => {
    return element % 2 === 0
}
// console.log(isRight(2));

// var result = [2, 3, 6, 8].every(isRight);
// console.log(result);

// var result = [2, 4, 6, 8].every((element) => {
//     return element % 2 === 0;
// });
// console.log(result);

var result = [2, 4, 6, 8].every((element) => (element % 2 === 0));
// console.log(result);

var testArray = [2, 4, 6, 5, 9, 10, 12, 18];
// console.log(testArray.fill("empty", 2, 5));
const testNumber = [2, 4, 6, 5, 9, 10, 12, 18];
console.log(testNumber.filter( (num) => { return num < 12}));
