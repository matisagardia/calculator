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


//Event listeners for number clicks. forEach because querySelectorAll returns an array. pushNumber is a function that stores is currentNum the number that I click on the html and then
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

//Event listeners for operator clicks. When an operator is clicked, it is added to the string but also the entryValue screen is erased and the value is moved to the savedValue.

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        pushOperator(e.target.textContent);
    })
})

function pushOperator(operat) {
    if(currentNum.length < 12 && currentNum.length > 0){
        opValue = operat;
        savedValue.textContent = currentNum + ' ' + opValue;
        previousNum = currentNum;
        currentNum = '';
        entryValue.textContent = currentNum;
    }
}

//Erasing a character

erase.addEventListener('click', (e) => {
    deleteNum();
})

function deleteNum() {
    currentNum = currentNum.slice(0, currentNum.length - 1);
    entryValue.textContent = currentNum;
}

//Clear screen

clear.addEventListener('click', (e) => {
    clearScreen();
})

function clearScreen() {
    currentNum = '';
    previousNum = '';
    entryValue.textContent = currentNum;
    savedValue.textContent = previousNum;
}

//Operate

equal.addEventListener('click', (e) => {
    operate();
})

function operate() {
    console.log(opValue);
    currentNum = Number(currentNum);
    previousNum = Number(previousNum);
    if(opValue == 'x') {
        previousNum = previousNum * currentNum;
        savedValue.textContent = previousNum;
        currentNum = '';
        entryValue.textContent = currentNum;
    } else if (opValue == '+') {
        previousNum = previousNum + currentNum;
        savedValue.textContent = previousNum;
        currentNum = '';
        entryValue.textContent = currentNum;
    } else if (opValue == '-') {
        previousNum = previousNum - currentNum;
        savedValue.textContent = previousNum;
        currentNum = '';
        entryValue.textContent = currentNum;
    } else if (opValue == '/') {
        previousNum = previousNum / currentNum;
        savedValue.textContent = previousNum;
        currentNum = '';
        entryValue.textContent = currentNum;
    }else if (opValue == '%') {
        previousNum = previousNum % currentNum;
        savedValue.textContent = previousNum;
        currentNum = '';
        entryValue.textContent = currentNum;
    }
}