let number = document.querySelector('#number');
console.log(number);

let lowNum = document.querySelector('#lowNum');
console.log(lowNum);

let constant = document.querySelector('#constant');
console.log(constant);

let highNum = document.querySelector('#highNum');
console.log(highNum);

let input = 0
console.log(input)

highNum.addEventListener("click",()=>{
    input ++
    number.textContent = input 
    if(input > 0){
        number.style.color = "green"
    }
})

lowNum.addEventListener("click",()=>{
    input --
    number.textContent = input
    if(input < 0){
        number.style.color = "red"
    }
})

constant.addEventListener('click',()=>{
    input = 0;
    number.textContent = input
    number.style.color = "black"
})




// let count = 0;
// const value = document.getElementById("value");
// const btns = document.getElementsByClassName("btn");


// btns.forEach(function (btn){
//     btn.addEventlistener("click", function (e) {
//         const buttons = e.currentTarget.classList;
//         if (buttons.contains("decrease")){
//             count--;
//         }
//         else if (buttons.contains("increase")){
//             count++;
//         }
//         else{
//             count = 0;
//         }

//         if (count > 0){
//             value.style.color = "green"
//         }
//         if (count < 0){
//             value.style.color = "red"
//         }
//         if (count === 0){
//             value.style.color = "black"
//         }
//         value.textContent = count;
//     })
// })



