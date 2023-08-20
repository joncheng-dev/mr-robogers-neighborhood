// Utility Logic
// Regular Expression checks to see if input contains only number characters
function numberRegex(userInput) {
  let numberRegex = new RegExp(/^[0-9]+$/i);
  let regexResult = numberRegex.test(userInput);
  return regexResult;
}

// Business Logic
function decideDigitReplacement(anyInteger) {
  const integerToDigits = anyInteger.toString().split("");
  // replacedNumber keeps track of hierarchy for of substitutions.
  let replacedNumber = -1;
  for (let i = 0; i < integerToDigits.length; i++) {
    if (integerToDigits[i] === "3") {
      if (replacedNumber < 3) {
        replacedNumber = 3;
      }
    } else if (integerToDigits[i] === "2") {
      if (replacedNumber < 2) {
        replacedNumber = 2;
      }
    } else if (integerToDigits[i] === "1") {
      if (replacedNumber === -1) {
        replacedNumber = 1;
      }
    }
  }
  if (replacedNumber === 3) {
    return "Won't you be my neighbor?";
  } else if (replacedNumber === 2) {
    return "Boop!";
  } else if (replacedNumber === 1) {
    return "Beep!";
  } else {
    return integerToDigits.join("");
  }
}

function beepBoop(enteredNumber) {
  // Conditional statements to check if enteredNumber is a valid number
  if (enteredNumber < 0) {
    return null;
  } else if (!numberRegex(enteredNumber)) {
    return NaN;
  } else {
    const saveNumbersUpToEnteredNumber = [];
    // Counts up from 0, pushing each number into an array
    for (let i = 0; i <= enteredNumber; i++) {
      saveNumbersUpToEnteredNumber.push(i);
    }
    // Checks each element in array and apply rules for digit replacement.
    const substitutedResult = saveNumbersUpToEnteredNumber.map(function (element) {
      return decideDigitReplacement(element);
    });
    return substitutedResult;
  }
}

// User Interface Logic
function formLoader() {
  let userForm = document.querySelector("form");
  userForm.addEventListener("submit", formSubmissionHandler);
}

function formSubmissionHandler(event) {
  event.preventDefault();

  const userEnteredNumber = document.getElementById("userInput").value;

  const userResults = beepBoop(userEnteredNumber);
  const pElement = document.getElementById("results-display");
  // Removes all ul and li elements if remaining from prior submission.
  pElement.innerHTML = "";

  if (userResults === null) {
    // message to user about entering a positive integer
    let errorMessage = "Please enter a positive integer";
    pElement.append(errorMessage);
  } else {
    const ulElement = document.createElement("ul");
    pElement.append(ulElement);

    userResults.forEach(function (item) {
      const liElement = document.createElement("li");
      liElement.append(item);
      ulElement.append(liElement);
    });
  }

  document.getElementById("results-div").removeAttribute("hidden");
  // Resets form.
  document.getElementById("user-form").reset();
}

window.addEventListener("load", formLoader);
