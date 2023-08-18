// Utility Logic
// Regular Expression checks to see if input contains only number characters
function numberRegex(userInput) {
  let numberRegex = new RegExp(/^[0-9]+$/i);
  let regexResult = numberRegex.test(userInput);
  return regexResult;
}

// Business Logic
function beepBoop(enteredNumber) {
  const saveNumbersUpToEnteredNumber = [];
  // Conditional statements to check if enteredNumber is a valid number
  if (enteredNumber < 0) {
    return null;
  } else if (!numberRegex(enteredNumber)) {
    return NaN;
  } else {
    // Counts up from 0, pushing each number into an array
    for (let i = 0; i <= enteredNumber; i++) {
      saveNumbersUpToEnteredNumber.push(i);
    }
    console.log(saveNumbersUpToEnteredNumber);
    // Maps through whole array. Saves elements into new array.
    // If element is '1', then pushes "Beep" instead.
    const substitutedResult = saveNumbersUpToEnteredNumber.map(function (element) {
      if (element === 1) {
        return "Beep!";
      } else {
        return element;
      }
    });
    console.log(substitutedResult);
  }
}

// User Interface Logic
