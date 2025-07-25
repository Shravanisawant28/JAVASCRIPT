// FUNCTION DECLARATION
// function singHappyBirthday(){
//     console.log("happy birthday to you....");
// }

// singHappyBirthday();

function twoPlusFour(){
    console.log(2+4);
}

twoPlusFour();

// function sumOfTwoNumbers(num1,num2){
//     console.log("The sum of two number is",num1+num2);
// }

// sumOfTwoNumbers(2,3);

// function isEven(num){
//     if(num%2==0){
//         // return true;
//         console.log("The number is even");
//     }
//     else{
//         false;
//         console.log("The number is odd");
//     }
// }
// console.log(isEven(6));
// isEven(5);

// function fisrtChar(anyString){
//     return anyString[0];
// }
// console.log(fisrtChar("Shravani"));

// function findTarget(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==target){
//         return i;
//         }
//     } return -1;
//  }
//  const myArray=[1,2,3,4]
//  console.log(findTarget(myArray,7));


//  FUNCTION EXPRESSION

// const singHappyBirthday=function(){
//     console.log("happy birthday to you.....");
// }
// singHappyBirthday();

// const sumOfTwoNumbers=function(num1,num2){
//     console.log("The sum of two number is",num1+num2);
// }
// sumOfTwoNumbers(6,7)

// const isEven=function(num){
//     if(num%2==0){
//         return true;
//         // console.log("The number is even");
//     }
//     else{
//         return false;
//         // console.log("The number is odd");
//     }
// }
// console.log(isEven(4));
// isEven(5)

// const fisrtChar=function(anyString){
//     return anyString[0];
   
// }
// console.log(fisrtChar("shravu"));

// const findTarget=function(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==target){
//             return i;
//         }
//         else{
//             return -1;
//         }
//     }
   
// }
 
//  console.log(findTarget([2,4,1,3,5],3));


//  ARROW FUNCTION

const singHappyBirthday=()=> {
    console.log("happy birthday to you...");
}
singHappyBirthday();

const sumOfTwoNumbers=(num1,num2)=>{
    console.log("The sum of two number is",num1+num2);
}
sumOfTwoNumbers(2,3)

const isEven=(num)=>{
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
   
}
console.log(isEven(6));
isEven()

const fisrtChar=(anystring)=>{
    return anystring[0];
}
console.log(fisrtChar("shravani"));

const findTarget=(array,target)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
        else{
            return -1;
        }

    }
}
console.log(findTarget([1,2,3,4],2));

// FUNCTION INSIDE FUNCTION

const myApp=()=>{
    const myFunc=()=>{
        console.log("hello from my func");
    }
    const addTwoNumbers=(num1,num2)=> num1+num2;

    const mul =(num1,num2)=> num1*num2;
    console.log("My app is classroom");
    myFunc()
    console.log(mul(5,3));
    console.log(addTwoNumbers(3,4));
    addTwoNumbers()
    mul()
}
myApp()


// CALLBACK FUNCTION

function myFunc(callback){
    console.log("hello there i am a function");
    callback("SHRAVANI");
}
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

myFunc(myFunc2)

// FUNCTION RETURNING FUNCTION

function myFunc(){
    function hello(){
       return "hello world"
    }
    return hello;
}
const ans=myFunc();
console.log(ans());
