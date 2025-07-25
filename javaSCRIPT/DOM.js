// let runAgain= true;
// while(runAgain){



// let age = prompt("Enter your age");
// console.log(age ++);
// console.log(typeof age);
// 20


// const canDrive = age=>{
//     return age>=18?true:false
// }
// if (canDrive(age)){
//     alert("YES YOU CAN DRIVE")
// }
// else {
//     alert("YOU CANNOT DRIVE")
// }
// runAgain=confirm("Do you want to play again");
// }

let b = document.body
console.log("first child of b is:",b.firstChild);
console.log("first element child of b is:",b.firstElementChild);
console.log("last child of b is:",b.lastChild);
console.log("last element child of b is:",b.lastElementChild);

const changeBgBlue = () => {
    document.body.firstElementChild.style.background = "blue"
}

let span = document.getElementById("a")
span.style.color = "blue"



