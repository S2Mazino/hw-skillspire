//variables for number-button
var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

//variables for buttons
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');;
var displayValElement = document.getElementById('calc-display-val');

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

var displayVal = "0";
var pendingVal; //5+3, 5 is the pending value
var evalStringArray =[]; //5+5, will have 5, +, 5 as the array


//when pressing button, value on display changes
var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayVal === '0'){
        displayVal = '';   
    }
    displayVal += btnText;
    displayValElement.innerText = displayVal
}

for(let i = 0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false)

}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch(operator){
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break; 
            
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray=[];
            break;
        default:
        break;
    }
}

for(let i = 0; i < calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click', performOperation, false)

}

//When you click "C", the value on the display resets to 0
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal
}

//The number of value on the display is the length, will slice so that last value is cut off
//Also when you backspace only 1 value, the display resets to 0
backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0,lengthOfDisplayVal-1);
    displayValElement.innerText = displayVal;

    if(displayVal === ''){
        displayVal = 0
    }
    displayValElement.innerText = displayVal
}

