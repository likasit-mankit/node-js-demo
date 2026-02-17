const resultEl = document.getElementById("result");
const formEl = document.getElementById("form");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operatorEl = document.getElementById("operator");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const num1 = parseFloat(num1El.value);
    const num2 = parseFloat(num2El.value);
    const operator = operatorEl.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultEl.value = "Please enter valid numbers";
        return;
    }
    resultEl.value = eval(`${num1} ${operator} ${num2}`);
});