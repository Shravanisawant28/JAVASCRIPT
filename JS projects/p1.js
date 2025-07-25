let a= document.getElementById("add")
let h5=document.querySelector("h5")
let b=document.getElementById("remove")
let check=0
a.addEventListener("click",function(){
    if(check==0){
    h5.innerHTML="Friends"
    h5.style.color="green"
    check=1;
}else{
    b.addEventListener("click",function(){
    h5.innerHTML="Strangers"
    h5.style.color="red"
    check=0;
    })
}}
)

let p= document.getElementsByTagName('span')[0]
p.style.color= "pink"