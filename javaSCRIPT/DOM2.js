// sSELECTION OF ElEMENTS AND CHANGE OF CSS

let a=document.querySelector("h1")
console.log(a);
a.style.color = "blue"
// for class .h1 for id #h1

// CHANGING HTML

let b= document.querySelector("h1")
b.innerHTML = "HEHEHEHE"

// EVENT LISTNER

let c= document.getElementById("s")

addEventListener("click",function() {
    c.innerHTML="SHRAVUUU"
    c.style.color="red"
    c.style.backgroundColor="yellow"
})

let bulb =document.getElementById("k")
console.log(k);
let btn=document.getElementById("d")
console.log(d);
let flag = 0
btn.addEventListener("click",function(){
    if (flag==0){
        bulb.style.backgroundColor="#FFFF00"
        bulb.style.border="2px solid #8B8000"
        flag=1;  
    }else{
    bulb.style.backgroundColor="transparent"
    bulb.style.border="2px solid #d5d5d5"
    flag=0;
    }
})