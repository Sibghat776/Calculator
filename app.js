let inputVal = document.querySelector("input"); // Input field
let allBtns = document.querySelectorAll("button"); // Saare buttons select karo

let firstValue = ""; // Pehla number
let operator = "";   // Operator
let isOperatorClicked = false; // Operator click ka status

allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnText = btn.innerHTML; // Button ka text
        console.log("Button Clicked:", btnText);

        // Agar operator click hua
        if (['+', '-', 'x', '÷'].includes(btnText)) {
            operator = btnText; // Operator store karein
            isOperatorClicked = true;
            inputVal.value += btnText; // Operator dikhayen
        }
        // Agar '=' click hua
        else if (btnText === "=") {
            const secondValue = inputVal.value.split(operator)[1]; // Operator ke baad ka number
            console.log(secondValue)
            const result = calculate(Number(firstValue), Number(secondValue), operator);
            inputVal.value = result; // Result dikhayen
            firstValue = ""; // Reset
            operator = "";
            isOperatorClicked = false;
        }
        // Agar 'C' ya clear button hua
        else if (btnText === "AC") {
            inputVal.value = ""; // Input field clear karein
            firstValue = "";
            operator = "";
            isOperatorClicked = false;
        }
        else if (btnText === "X") {
            console.log("Chala")
            inputVal.value = inputVal.value.slice(0, -1)
        }
        // Agar number click hua
        else {
            if (isOperatorClicked) {
                inputVal.value += btnText; // Dusra number add karein
            } else {
                firstValue += btnText; // Pehle number ko store karein
                inputVal.value += btnText; // Input field update karein
            }
        }
    });
});

// Calculation Function
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            return num2 !== 0 ? num1 / num2 : "Error"; // Division by zero check
        default:
            return "Invalid Operation";
    }
}
