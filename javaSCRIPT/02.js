// LOOPS

// FALSY AND TRUTHY VALUES
// FALSE
// undefined
// null
// 0
// ""

// truthy
// "abc"
// 1,-1

// FALSY

// let firstName=""

// if(firstName){
//     console.log(firstName);
// }
// else{
//     console.log("firstName is kinda empty");
// }
// TRUTHY
// let firstName="SHRAVANI"

// if(firstName){
//     console.log(firstName);
// }
// else{
//     console.log("firstName is kinda empty");
// }

// TERNARY OPERATOR

// let age=3
// let drink = age>=5 ? "coffee":"milk";
// console.log(drink);

// AND OR OPERATOR
// let firstName="SHRAVANI"
// let age=18
// if(firstName[0]=="S" && age<=18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }

let firstName="SHRAVANI"
let age=18
if(firstName[0]=="S" || age<=18){
    console.log("inside if");
}else{
    console.log("inside else");
}

// NESTED IF ELSE

// let wNUM=19;
// let userGuess = +prompt("Guess a number");

// if(userGuess==wNUM){
//     console.log("Your guess is right");
// }
// else{
//     if(userGuess < wNUM){
//         console.log("Your guess is two low");
//     }
//     else{
//         console.log("your guess is two high");
//     }
      
// }

// IF ELSEIF 

let temp =60;

if(temp<0){
    console.log("exteremely cold outside");
}else if(temp<16){
    console.log("It is cold outside");
}else if(temp<25){
    console.log("wheather is okay");
}else if(temp<35){
    console.log("lets go to swim");
}else if(temp<45){
    console.log("turn on the AC");
}else{
    console.log("too hot!!");
}

// SWITCH

let day = 4;

switch(day){
    case 0:
        console.log("Sunday")
        break;
        case 1:
        console.log("Monday")
        break;
        case 2:
        console.log("Tuesday")
        break;
        case 3:
        console.log("Wednesday")
        break;
        case 4:
        console.log("Thursday")
        break;
        case 5:
        console.log("Friday")
        break;
        case 6:
        console.log("Saturday")
        break;
        default:
            console.log("Invalid day");
}

// WHILE LOOP
// let i=0
// while(i<11){
// console.log(i);
// i++;
// }

// let sum=0
// i=1
// while(i<11){
// sum=sum+i;
// i++;
// }
// console.log(sum);

// FOR LOOP
// total=0;
// for(let i=0;i<11;i++){
//     total=total+i;

// }
// console.log(total);

// DO WHILE LOOP
// let i=0
// do{
//     console.log(i);
//     i++;
// }while(i<11);

// ARRAY PUSH POP
// ARRAY SHIFT UNSHIFT

// let fruits = ["apple","mango","banana"];
// console.log(fruits);
// fruits.push("grapes");
// console.log(fruits);
// // fruits.pop()
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.pop());

// unshift

// fruits.unshift("grapes");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// console.log(fruits.shift());

// PUSH AND POP IS FASTER AS COMPARE TO UNSHIFT AND SHIFT AS PUSH AND POP DEAL WITH ELEMENT FROM LAST AND SHIFT UNSHFT DEALS WITH ELEMENTS FROM FIRST SO IT MAKES THEM SLOWER. 

// PRIMITIVE AND REFERENCE TYPE
// pRIMITIVE
let num1=7;
let num2=num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);
num1++;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

// REFERENCE
// array
// let array1=[2,3,4,5];
// let array2=array1;
// console.log("the value of array1 is",array1);
// console.log("the value of array2 is",array2);
// array1.push(3)
// console.log("the value of array1 is",array1);
// console.log("the value of array2 is",array2);

// THE CHANGE IS BCOZ PRIMNITIVE DATA IS STORE IN STACK WHERESE REFERENCE DAATA IS STORE IN HEAP AND ADDRESS IS STORE IN STACK.

// clone,concat,spread operator
// CLONE
let array1=["iteam1","iteam2"];
// let array2=["iteam1","iteam2"];
// let array2=array1.slice(0);
// let array2=[].concat(array1);

// spread
let array2=[...array1];

array1.push("iteam3");
console.log(array1);
console.log(array2);

// FOR LOOP IN ARRAY
// let fruits=["apple","mango","banana","grapes"]
// for(let i=0;i<=array1.length;i++)
// console.log(fruits[i].toUpperCase());

// WHILE LOOP IN AN ARRAY
// let fruits=["apple","mango","banana","grapes"];
// let i=0;
// while(i<fruits.length){
// console.log(fruits[i]);
// i++;
// }
// console.log("Hello World");

// FOR OFF AND FOR IN LOOP
let fruits=["apple","mango","banana","grapes"]
// for(let fruit of fruits){
//     console.log(fruit.toUpperCase());
    
// }

for(let index in fruits){
    console.log(fruits[index].toUpperCase());;
}