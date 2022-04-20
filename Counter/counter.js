let count=0;
const numberChanges=document.querySelector("#counter");

const decrease=document.querySelector(".decrease");
const reset=document.querySelector(".reset");
const increase=document.querySelector(".increase");

decrease.addEventListener("click",function(){
    count--;
    numberChanges.innerHTML=count;
});
reset.addEventListener("click",function(){
    count=0;
    numberChanges.innerHTML=count;
});
increase.addEventListener("click",function(){
    count++;
    numberChanges.innerHTML=count;
});




      







