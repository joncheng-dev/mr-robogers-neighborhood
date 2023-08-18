// Utility Logic
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
  }
  for (let i = 0; i <= enteredNumber; i++) {
    saveNumbersUpToEnteredNumber.push(i);
  }
  console.log(saveNumbersUpToEnteredNumber);
}

// User Interface Logic
