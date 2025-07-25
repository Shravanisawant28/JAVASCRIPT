
function greetUser(user){
    const{ name , age, gender}=user;

    let prefix;
    if(gender.toLowerCase()=="male"){
        prefix="Mr."
    }
    else if(gender.toLowerCase()=="female") {
        prefix="Mrs."  
    }
    else{
        prefix="Mx."
    }
    let vote;
if(age>=18){
    vote="You are eligible to vote"
}
else{
    vote="you are not eligible to vote"
}
    console.log(`Hi ${prefix}${name},your age is${age} and ${vote} `);
    
}

const newUser={
    name:"shra",
    age:20,
    gender:"female"
}

greetUser(newUser)

