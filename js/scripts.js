// Business Logic
function beepBoop(enteredNumber) {
  const saveNumbersUpToEnteredNumber = [];
  // Set up Regex to see if input contains only numerical characters
  let numberRegex = new RegExp(/^[0-9]+$/i);
  let regexResult = numberRegex.test(enteredNumber);

  // Conditional statements to check if enteredNumber is a valid number
  if (enteredNumber < 0) {
    return null;
  } else if (!regexResult) {
    return NaN;
  }
  for (let i = 0; i <= enteredNumber; i++) {
    saveNumbersUpToEnteredNumber.push(i);
  }
  console.log(saveNumbersUpToEnteredNumber);
}

// User Interface Logic
