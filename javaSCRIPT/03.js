// OBJECT
// DOT METHOD
// const person={
//     name:"SHRAVANI",
//     age:19,
//     hobbies:["guitar","drawing","gaming"]
// }
// console.log(person);
// console.log(person.age);

// add key value in object

// person.gender="female";
// console.log(person);

// BRACKET METHOD
// console.log(person["age"]);
// person["gender"]="female";
// console.log(person);

// ITERATE OBJECT
const person={
    name:"SHRAVANI",
    age:19,
    hobbies:["guitar","drawing","gaming"]
}

// for(let key in person){
//     console.log(person[key]);
//     console.log(key , " : ", person);
//     console.log(`${key}:${person[key]}`);
// }

for(let key of Object.keys(person)){
    console.log(person[key]);
}