const colors = ["green","red","rgb(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random nuumber between 0 - 3
    const randomNunber = getRandomNumber();
    // console.log(randomNunber);
    document.body.style.backgroundColor = colors[randomNunber];
    color.textContent = colors[randomNunber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}