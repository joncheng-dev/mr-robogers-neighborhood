// Business Logic
function beepBoop(enteredNumber) {
  const saveNumbersUpToEnteredNumber = [];
  if (enteredNumber < 0) {
    return null;
  }
  for (let i = 0; i <= enteredNumber; i++) {
    saveNumbersUpToEnteredNumber.push(i);
  }
  console.log(saveNumbersUpToEnteredNumber);
}

// User Interface Logic
