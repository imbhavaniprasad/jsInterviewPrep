//Points to note :
//substring takes start & endindex
//substr takes first as start index & 2nd as count of chars

//Where inputs are displayed
const calcArea = document.querySelector("textarea");

//Add input
const addNums = text => {
  let { value } = calcArea;

  //Rules to add dot
  const ruleA = value.length === 0 && text === ".";

  //Add  only if both rules apply
  if (!ruleA) {
    calcArea.value += text;
  }
};

//operators
const oprList = ["+", "-", "*", "/", "%", "."];

//Add operators
const addOpr = text => {
  const { value } = calcArea;
  const lastCharacter = value[value.length - 1];

  //Don't add repeated operators and initially without numbers
  if (lastCharacter !== text) {
    if (value.length > 0) {
      calcArea.value += text;
    }
  }

  //If last character is operator then replace it with new operator
  if (oprList.includes(lastCharacter)) {
    calcArea.value = value.substr(0, value.length - 1) + text;
  }
};

const del = () => {
  const { value } = calcArea;
  if (value.length > 0) {
    calcArea.value = value.substring(0, value.length - 1);
  }
}

const clear = () => {
  calcArea.value = "";
}

//Perform calculation
const calc = () => {
  const { value } = calcArea;
  const result = eval(value);

  if (!isNaN(result)) {
    calcArea.value = result;
  } else {
    alert("Wrong expression, Please check your input");
  }
};
//Add event listeners to the button
//you can also use Array.from()
document.querySelectorAll(".button-group > span").forEach(e => {
  e.addEventListener("click", f => {
    const { classList, innerText } = f.target;
    console.log(innerText)
    if (classList.contains("num")) {
      //Number buttons clicked including .
      addNums(innerText);
    } else if (classList.contains("opr")) {
      //Opertor buttons clicked
      addOpr(innerText);
    } else if (classList.contains("calc")) {
      //Equal button clicked
      calc();
    } else if (classList.contains("delete")) {
      //Backspace button clicked
      del();
    } else if (classList.contains("clear")) {
      //Clear button clicked
      clear();
    }
  });
});


//Add key events
document.addEventListener("keydown", e => {
  switch (e.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
      addNums(e.key);
      break;
    case "/":
    case "*":
    case "+":
    case "-":
    case "%":
      addOpr(e.key);
      break;
    case "Enter":
      calc();
      break;
    case "Backspace":
      del();
      break;
    case "c":
      clear();
    default:
  }
});