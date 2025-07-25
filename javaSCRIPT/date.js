// var currentDate=new Date();
// console.log(currentDate);

var date = new Date();
date.setDate(15);
date.setFullYear(2024);
console.log(date);

// CANT SET A MONTH


var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));

