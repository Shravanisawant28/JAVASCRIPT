var myArray =[1,"HELLO",[3,4]];
console.log(myArray);
console.log(myArray.length);

myArray.push("World");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.unshift("WORLD");
console.log(myArray);

console.log(myArray.slice(2,3)); 

myArray.splice("HELLO",[3,4]);
console.log(myArray);

var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray);
//SOME MISTRAKE IN SPLICE NOTHING IS RMOVED
