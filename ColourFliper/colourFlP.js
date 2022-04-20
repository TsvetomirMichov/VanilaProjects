const colours=["green","red","rgb(20, 209, 20)",
"#f93131"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",settingRandomVal);
function getRandomNumber(){
return Math.floor(Math.random()*colours.length);
}
function settingRandomVal(){
    const randomNUm=getRandomNumber();
    // console.log(randomNUm);
    document.body.style.backgroundColor=colours[randomNUm];
    color.textContent=colours[randomNUm];
}
