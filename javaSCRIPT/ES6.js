// arrow functions

// basic fat arrow function
let a=()=>{
    console.log("Shravani is a good girl");
}
a()

// fat arrow function with one parameter

let b=(parameter)=>{
    console.log("Shravani is a :",parameter);
}
b("good girl")


// fat arrow function with implicit return

let c=()=>"Shravani is a good girl"
console.log(c());

// template litreals backtick ``

console.log(`hey 2+2 is ${2+2} and 2-2 id ${2-2}`);

// default parameter or default values

function k(a=0,b=0,c=0) {
    console.log(a,b,c);
}
k(1,4,5)
k(6,8,4)
k(6)

//  spread

let f=[3,5,6,2,0,9]
let g=[...f]
console.log(f);
console.log(g);

// rest

function h(a,b,c,...n) {
    console.log(a,b,c,n);
}
 h(3,5,6,2,0,9)

//  destructuring
 
let m=[3,4,5,2,8]
let [j,i,d]=m;

let obj={name:"shravni",age:"19"}
let {age}=obj

let l=[3,4,5]
let [o,,x]=l;

