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
            if (!isOperatorClicked) {
                operator = btnText; // Operator store karein
                isOperatorClicked = true;
                inputVal.value += btnText; // Operator dikhayen
            }
        }
        // Agar '=' click hua
        else if (btnText === "=") {
            const [num1, num2] = inputVal.value.split(new RegExp(`\\${operator}`)); // Operator ke aas-paas ke numbers nikaalein
            const result = calculate(Number(num1), Number(num2), operator);
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
            inputVal.value = inputVal.value.slice(0, -1); // Ek character delete karein
        }
        // Agar number click hua
        else {
            if (isOperatorClicked) {
                inputVal.value += btnText; // Dusra number add karein
            } else {
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
