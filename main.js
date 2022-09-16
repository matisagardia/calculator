//Variable declarations
let currentNum = "";
let previousNum = "";
let operator = "";


const entryValue = document.querySelector(".entryValue");
const savedValue = document.querySelector(".savedValue");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clear = document.querySelector(".clear");

const equal = document.querySelector(".equal");

const erase = document.querySelector(".erase");

const dot = document.querySelector(".dot");


//Eventlisteners for number clicks. forEach because querySelectorAll returns an array. pushNumber is a function that stores is currentNum the number that I click on the html and then
//sets on the entryValue field that number.


numbers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        pushNumber(e.target.textContent);
    });
});

function pushNumber(number) {
    if(currentNum.length < 12){
    currentNum += number;
    entryValue.textContent = currentNum;
}
}

//Eventlisteners for operator clicks.

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        pushOperator(e.target.textContent);
    })
})

function pushOperator(operat) {
    if(currentNum.length < 12){
        currentNum += operat;
        entryValue.textContent = currentNum;
    }
}