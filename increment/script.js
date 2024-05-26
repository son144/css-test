console.log("hii");
let incrementBtn=document.getElementById("increment");
let counter=+document.getElementById("count").innerText;
let decrementBtn=document.get("decrement"); 

let countVar=document.querySelector("#count");

let resetBtn=document.querySelector("#reset");
console.log(resetBtn);

console.log(incrementBtn,"inc");
console.log(decrementBtn,"dec");
console.log(counter);
console.log(countVar);

incrementBtn.addEventListener("click",()=>{
    counter=counter+1;
    countVar.innerText=counter;
})

decrementBtn.addEventListener("click",()=>{
    if(counter>0){
        counter=counter-1;
        countVar.innerText=counter;
    }
})

resetBtn.addEventListener("click",()=>{
        counter=0;
        countVar.innerText=counter;
})