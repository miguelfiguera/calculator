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
    if(b === 0) {
        screenAnswer.textContent = "";
        screenInput.textContent = "You are not Chuck Norris.";
        return alert("ERROR! Only Chuck Norris can divide by zero!")}
    return a/b
}
function percent(a,b){
    return a*(b/100)
}

//Keyboard Input

window.addEventListener("keydown",keyboardInput);
function keyboardInput(e){
  if (e.key >= 0 && e.key <= 9) addNum(e.key)
  if (e.key === '.') addDot(decimalBtn.textContent)
  if (e.key === '=' || e.key === 'Enter') evaluate()
  if (e.key === 'Backspace') eraser()
  if (e.key === 'Escape') clearAll()
}


//The button Functions
function clearAll(){
    screenInput.textContent = "0";
    screenAnswer.textContent= "";
    firstNum = "";
    secondNum= "";
    currentOperator = "";
}

function eraser(){
    theString = screenInput.textContent;
    newString = theString.slice(0,-1);
    screenInput.textContent = newString;
}
function screenReseter() {
    if (screenInput.textContent == "0") {screenInput.textContent = "";}
    if (screenAnswer.textContent != "") {
        screenInput.textContent = screenAnswer.textContent;
        screenAnswer.textContent = "";
    }
    else return;
}
function addNum(num){
    screenInput.textContent += num;
}
function addDot(dot){
    if(screenInput.textContent == "" || screenInput.textContent == "0"){
        screenInput.textContent = "0" + dot
    }
    else {screenInput.textContent +=dot };
}
function operator(operator){
    screenInput.textContent += operator;
}
function evaluate(){
    operation = screenInput.textContent
 if (operation.indexOf("+") > -1 ) {
     array = operation.split("+");
     a =parseFloat(array[0]);
     b =parseFloat(array[1]);
     screenAnswer.textContent= add(a, b);} 
if (operation.indexOf("-") > -1) {     
    array = operation.split("-");
    a =parseFloat(array[0]);
    b =parseFloat(array[1]);
    screenAnswer.textContent= minus(a, b);  }
if (operation.indexOf("*") > -1) {     
    array = operation.split("*");
    a =parseFloat(array[0]);
    b =parseFloat(array[1]);
    screenAnswer.textContent= multiply(a, b);  }
if (operation.indexOf("/") > -1){
    array = operation.split("/");
    a =parseFloat(array[0]);
    b =parseFloat(array[1]);
    screenAnswer.textContent= divide(a, b);  }
if (operation.indexOf("%") > -1){
    array = operation.split("%");
    a =parseFloat(array[0]);
    b =parseFloat(array[1]);
    screenAnswer.textContent= percent(a, b);  }
}

eraserBtn.onclick = () => {eraser()};
allClearBtn.onclick= () => {clearAll()}
equalBtn.onclick= () => {evaluate()}
decimalBtn.onclick= () => {screenReseter();addDot(decimalBtn.textContent)}

operatorBtns[0].onclick= () =>{screenReseter();operator(operatorBtns[0].textContent)}
operatorBtns[1].onclick= () =>{screenReseter();operator(operatorBtns[1].textContent)}
operatorBtns[2].onclick= () =>{screenReseter();operator(operatorBtns[2].textContent)}
operatorBtns[3].onclick= () =>{screenReseter();operator(operatorBtns[3].textContent)}
operatorBtns[4].onclick= () =>{screenReseter();operator(operatorBtns[4].textContent)}

numberBtns[0].onclick= () =>{screenReseter(); addNum(numberBtns[0].textContent)}
numberBtns[1].onclick= () =>{screenReseter(); addNum(numberBtns[1].textContent)}
numberBtns[2].onclick= () =>{screenReseter(); addNum(numberBtns[2].textContent)}
numberBtns[3].onclick= () =>{screenReseter(); addNum(numberBtns[3].textContent)}
numberBtns[4].onclick= () =>{screenReseter(); addNum(numberBtns[4].textContent)}
numberBtns[5].onclick= () =>{screenReseter(); addNum(numberBtns[5].textContent)}
numberBtns[6].onclick= () =>{screenReseter(); addNum(numberBtns[6].textContent)}
numberBtns[7].onclick= () =>{screenReseter(); addNum(numberBtns[7].textContent)}
numberBtns[8].onclick= () =>{screenReseter(); addNum(numberBtns[8].textContent)}
numberBtns[9].onclick= () =>{screenReseter(); addNum(numberBtns[9].textContent)}