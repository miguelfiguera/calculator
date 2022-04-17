//Buttons
const allClearBtn = document.getElementById("btnClear");
const eraserBtn = document.getElementById("btnEraser");
const decimalBtn = document.getElementById("btnDecimal");
const equalBtn=document.getElementById("btnEqual");
const operatorBtns=document.getElementsByClassName("operator");
const numberBtns=document.getElementsByClassName("number");


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