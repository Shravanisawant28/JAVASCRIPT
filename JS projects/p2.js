let h=document.getElementById("container")
let l=document.getElementsByTagName('i')[0]
console.log(h);
console.log(l);

h.addEventListener("dblclick",function(){
    
   l.style.transform = 'translate(-50%,-50%) scale(1)';
   l.style.opacity=0.8

   setTimeout(() => {
    l.style.opacity=0;
}, 1000)

   setTimeout(() => {
    l.style.transform = 'translate(-50%,-50%) scale(0)'
}, 2000); 
})

// setTimeout(() => {
//     l.style.transform = 'translate(-50%,-50%) scale(0)'
// }, 1000);