// let p= new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and i m resolved");
//         resolve(true)
//     }, 5000);
// })

// let p2= new Promise((resolve, reject) => {
//     console.log("Promise2 is pending");
//     setTimeout(() => {
//         reject(new Error("I am a error"))
        
        
//     }, 5000);
// })


// // How to hold a value of promise
// p.then ((value)=>{
//     console.log(value);
// })


// // How to handle a error
// p2.catch((value)=>{
//     console.log(value);
// })

async function whether() {
    let delhiWheather= new Promise((resolve, reject) => {
        console.log("Fetching Delhi whether");
        setTimeout(() => {
        
            resolve("27c")
        }, 5000);
    })
    
    let maharashtraWheather= new Promise((resolve, reject) => {
        console.log("Fetching Maharashtra whether");
        setTimeout(() => {
            
            resolve("15c")
        }, 7000);
    })
    let delhiW=await delhiWheather
    console.log("Fetched Delhi whether :"+ delhiW);
    let maharashtraW=await maharashtraWheather
    console.log("Fetched Maharashtra whether :"+maharashtraW);
    return[delhiW,maharashtraW]
}

console.log("Welcome to whether control room");
whether()
