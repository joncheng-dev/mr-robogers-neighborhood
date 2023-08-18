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
    // If element is '1', then pushes "Beep!" instead.
    // If element is '2', then pushes "Boop!" instead.
    // If element is '3', then pushes "Won't you be my neighbor?" instead.
    // What happens if element is >9?
    // Apply rules to check individual digits.
    const substitutedResult = saveNumbersUpToEnteredNumber.map(function (element) {
      if (element > 9) {
        const splitElement = element.toString().split("");
        let replacedNumber = 0;
        for (let i = 0; i < splitElement.length; i++) {
          if (splitElement[i] === "3") {
            if (replacedNumber < 3) {
              replacedNumber = 3;
            }
          } else if (splitElement[i] === "2") {
            if (replacedNumber < 2) {
              replacedNumber = 2;
            }
          } else if (splitElement[i] === "1") {
            if (replacedNumber === 0) {
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
          return splitElement.join("");
        }
      } else {
        if (element === 3) {
          return "Won't you be my neighbor?";
        } else if (element === 2) {
          return "Boop!";
        } else if (element === 1) {
          return "Beep!";
        } else {
          return element;
        }
      }
    });
    console.log(substitutedResult);
  }
}

beepBoop(24);
