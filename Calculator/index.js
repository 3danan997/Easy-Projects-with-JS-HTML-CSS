const display = document.getElementById("display");
function appendDigitsToDisplay(input) {
  //check if the . pressed first and prevent that it will come more than one time
  if (input == ".") {
    if (display.value.length == 0) {
      display.value = 0 + input;
      return;
    } else if (display.value.includes(".")) {
      return;
    }
  }
  //prevent the typing of 0 more than once at the beginning
  if (display.value == "0" && input != ".") {
    if (input != 0) {
      display.value = input;
    }
    return;
  }

  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function appendArithToDisplay(input) {
  let last = display.value.slice(-1);
  if (last.length == 0 || last == input) {
    return;
  }
  if (last == "+" || last == "-" || last == "*" || last == "/") {
    display.value = display.value.replace(last, input);
    return;
  }
  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  display.value = "";
}

function calc() {
  try {
    display.value = eval(display.value);
    display.scrollLeft=0;
  } catch (error) {
    display.value = "Error";
  }
}
