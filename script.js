let firstNum = "";
let secondNum= "";
let currentOperator = null;

//Buttons
const allClearBtn = document.getElementById("btnClear");
const eraserBtn = document.getElementById("btnEraser");
const decimalBtn = document.getElementById("btnDecimal");
const equalBtn=document.getElementById("btnEqual");
const operatorBtns=document.getElementsByClassName("operator");
const numberBtns=document.getElementsByClassName("number");

// Screen elements
const screenInput=document.getElementById("input");
const screenAnswer = document.getElementById("answer");

// Basic operations
function add(a,b){
    return a+b
};
function minus(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b) {
    if(b === 0) {return alert("ERROR! Only Chuck Norris can divide by zero!")}
    return a/b
}
function percent(a,b){
    return a*(b/100)
}

//Keyboard Input


//The button Functions
function clearAll(){
    screenInput.textContent = "0";
    screenAnswer.textContent= "";
    firstNum = "";
    secondNum= "";
    currentOperator = "";
}

function eraser(){
    screenInput.textcontent = screenInput.textContent
    .toString()
    .slice(0,-1);
}

function addNum(num){
    screenInput.textContent += number;
}

function operator(operator){
    screenInput.textContent += operator;
}

eraserBtn.onclick = () => {eraser()};
allClearBtn.onclick= () => {clearAll()}

    