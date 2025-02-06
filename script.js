let display = document.getElementById("display");
function appendNumber(num) {
  display.value += num;
}
function appendOperator(op) {
  if (display.value !== "" && !isNaN(display.value.slice(-1))) {
    display.value += op;
  }
}
function appendMinus() {
  if (display.value === "" || display.value === "0") {
    display.value = "-";
  } else if (display.value.slice(-1) !== "-") {
    display.value += "-";
  }
}
function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}
function clearDisplay() {
  display.value = "";
}
function calculateResult() {
  try {
    let expression = display.value.replace("%", "/100");
    if (/\/0(?![\.\d])/.test(expression)) {
      throw new Error("Tidak bisa membagi dengan nol");
    }
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
    setTimeout(() => (display.value = ""), 1500);
  }
}
