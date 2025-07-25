var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]


var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]


var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15
