var operandSelectionList = document.getElementsByName("operand-selection");

// --- Section: Sum 2 Numbers ---

        // Calls sumTotal

document.getElementById("button-sum").addEventListener('click', sumTotal);

function sumTotal(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var total = num1 + num2;
    var totalMessage = `Result: The sum of ${num1} and ${num2} is ${total}.`;

    document.getElementById("result-sum").innerHTML = totalMessage;
    return false;
};

// --- Section: Calculate 2 Numbers ---

        // Calls calculateTotal

document.getElementById("button-calculate").addEventListener('click', calculateTotal);


function calculateTotal(){
    operandValue = getOperand();
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var total;

    switch(operandValue) {
        case "subtraction":
            total = num3 - num4;
            totalMessage = `Result: The difference of ${num3} and ${num4} is ${total}.`;
          break;
        case "multiplication":
            total = num3 * num4;
            totalMessage = `Result: The product of ${num3} and ${num4} is ${total}.`;
          break;
        case "division":
            if(num4 == 0) {
                totalMessage = `Dividing by 0 is undefined.`;
            }
            else {
            total = num3/num4;
            totalMessage = `Result: The quotient of ${num3} and ${num4} is ${total}.`;
            };
          break;
        default:
        //addition is default
            total = num3 + num4;
            totalMessage = `Result: The sum of ${num3} and ${num4} is ${total}.`;
        break;
    };
    document.getElementById("result-calculate").innerHTML = totalMessage;
    return false;
};

        // getOperand

function getOperand() {
    for (var i = 0; i < operandSelectionList.length; i++) {
        if (operandSelectionList[i].checked) {
            var operandValue = operandSelectionList[i].value;
        }; 
    };
    return operandValue;
};


// --- Section: Change Background Color of Full Page ---

        // Call changeFullBgColor

document.getElementById("button-change-fullbgcolor").addEventListener('click', changeFullBgColor);

const color = document.querySelector(".color");
const startColor = document.querySelector(".color");
const colors = ["red", "silver", "green", "blue", "yellow"];

function changeFullBgColor() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

        // Revert FullBgColor

document.getElementById("button-revert-fullbgcolor").addEventListener('click', revertFullBgColor);

function revertFullBgColor() {
    document.body.style.backgroundColor = startColor;
}


// --- Section: Change Background Color of This Div Only - Random ---

        // Call changeDivColor

document.getElementById("button-change-divcolor").addEventListener('click', changeDivColor);
        
function changeDivColor() {
    const randomNumber = getRandomNumber();
    document.getElementById("section-change-divcolor").style.backgroundColor = colors[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

        // Revert divColor

document.getElementById("button-revert-divcolor").addEventListener('click', revertDivColor);

function revertDivColor() {
    document.getElementById("section-change-divcolor").style.backgroundColor = startColor;
}


// --- Section: Select Background Color of Full Page ---

            // Call selectFullBgColor

document.getElementById("button-select-fullbgcolor").addEventListener('click', selectFullBgColor);
        
function selectFullBgColor() {
    var hex = (document.getElementById("hex1").value);
    document.body.style.backgroundColor = hex;
};

        // Revert Section of FullBgColor

document.getElementById("button-revertselection-fullbgcolor").addEventListener('click', revertSelectionFullBgColor);

function revertSelectionFullBgColor() {
    document.body.style.backgroundColor = startColor;
};

        
// --- Section: Select Background Color of This Div Only ---

        // Call selectDivColor

document.getElementById("button-select-divcolor").addEventListener('click', selectDivColor);
        
function selectDivColor() {
    var hex = (document.getElementById("hex2").value);
    document.getElementById("section-select-divcolor").style.backgroundColor = hex;
};

        // Revert divColor

document.getElementById("button-revertselection-divcolor").addEventListener('click', revertSelectionDivColor);

function revertSelectionDivColor() {
    document.getElementById("section-select-divcolor").style.backgroundColor = "white";
};


// --- Section: Counter ---

        // Call decrement, increment, reset as needed. 

document.getElementById("counter-decrement").addEventListener('click', decrementCounter);
document.getElementById("counter-increment").addEventListener('click', incrementCounter);
document.getElementById("counter-reset").addEventListener('click', resetCounter);

var counterCount = 0;

function decrementCounter() {
    counterCount--;
    document.getElementById("current-count").innerHTML = counterCount;
};

function incrementCounter() {
    counterCount++;
    document.getElementById("current-count").innerHTML = counterCount;
};

function resetCounter() {
    counterCount = 0;
    document.getElementById("current-count").innerHTML = 0;
};


