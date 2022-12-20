// DOM Elements
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const value = document.querySelector('.value');

const ac = document.querySelector('.ac');
const pm = document.querySelector('.pm')
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition')
const subtraction = document.querySelector('.subtraction')
const division = document.querySelector(' .division')
const multiplication = document.querySelector('.multiplication')
const equal = document.querySelector('.equal');

const operationsArray = [
    addition, subtraction, division, multiplication
]

const decimal = document.querySelector('.decimal')
const num0 = document.querySelector(".num0")
const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const num3 = document.querySelector(".num3")
const num4 = document.querySelector(".num4")
const num5 = document.querySelector(".num5")
const num6 = document.querySelector(".num6")
const num7 = document.querySelector(".num7")
const num8 = document.querySelector(".num8")
const num9 = document.querySelector(".num9")

const numArray = [
    num0, num1, num2, num3, num4, num5, num6, num7, num8, num9
];

let currentOperator = ''
let firstNum = 0;
let emptyString = 0;

// Functions

const getValue = () => {
    return value.textContent
}

const handleNumberClick = (numStr) => {
    if (emptyString == 1){
        firstNum = parseFloat(value.textContent.replace(',',''));
        value.textContent = '0'
        emptyString = 0
    }
    if (value.textContent == '0') {
        value.textContent = numStr;
    }
    else {
        value.textContent = parseFloat(value.textContent.replace(',','') + numStr).toLocaleString();
    }
    console.log(numStr)
};

const handleOperatorClick = (operatorStr) => {
    console.log("operator = ", operatorStr)
    currentOperator = operatorStr;
    emptyString = 1;
};


const performOperation = (firstNum, secondNum) => {
    if (currentOperator == '×') {
        console.log(firstNum, currentOperator, secondNum, '=', firstNum * secondNum);
        return firstNum * secondNum; 
    }
    if (currentOperator == '+') {
        console.log(firstNum, currentOperator, secondNum, '+', firstNum * secondNum);
        return firstNum + secondNum; 
    }
    if (currentOperator == '−') {
        console.log(firstNum, currentOperator, secondNum, '-', firstNum * secondNum);
        return firstNum - secondNum; 
    }
    if (currentOperator == '÷') {
        console.log(firstNum, currentOperator, secondNum, '/', firstNum * secondNum);
        return firstNum / secondNum; 
    }
}

// Add event listeners to numbers and decimals
for (let i = 0; i < numArray.length; i++){
    const numElem = numArray[i]
    numElem.addEventListener('click', () => {
        handleNumberClick(numElem.textContent);
    })
}

decimal.addEventListener('click', () => {
    if (!value.textContent.includes('.')){
        value.textContent += '.';
    }
})


// Add event listeners for operators and functions 
for (let i = 0; i < operationsArray.length; i++){
    const operatorElem = operationsArray[i]
    operatorElem.addEventListener('click', () => {
        handleOperatorClick(operatorElem.textContent);
    })
}

ac.addEventListener('click', () => {
    value.textContent = '0'
})

equal.addEventListener('click', () => {
    secondNum = parseFloat(value.textContent.replace(',',''));
    value.textContent = performOperation(firstNum,secondNum);
    currentOperator = '';
})

pm.addEventListener('click', () => {
    value.textContent = -parseFloat(value.textContent.replace(',',''));
})

percent.addEventListener('click', () => {
    value.textContent = parseFloat(value.textContent.replace(',','') / 100)
})


// Set up the time
const updateTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2, '0');
}

setInterval(updateTime, 1000)
updateTime();