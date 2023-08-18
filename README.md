# _Mr. Roboger's Neighborhood_

#### By _**Jonathan Cheng**_

#### _A website app utilizing a form to collect user input, JavaScript employing logic branching, arrays, and loops to display the results._

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_
- _Web APIs_

## Description

_This is my independent project for Week 3 of Epicodus, demonstrating my abilities in the basics of JavaScript -- specifically the concepts of arrays and looping. It uses basic HTML and CSS for the website appearance, and JavaScript for the 'magic'. Also being practiced is Test Driven Development. You'll see the tests used for the business logic below._

## Setup/Installation Requirements

- _Clone this repository from GitHub: https://github.com/joncheng-dev/mr-robogers-neighborhood.git_
- _Navigate to the project's root directory._
- _Open index.html in your browser._

## Tests:

```
Describe: beepBoop()

Test #1: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test #1b: "It should return an array of numbers from 0 to the user's inputted number: 5"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test #2: "It should receive user input, and return null if input is a negative number."
Code: beepBoop(-5);
Expected Output: null

Test #3: "It should receive user input, and return NaN if input contains alpha characters."
Code: beepBoop("5a1");
Expected Output: NaN

Test #4: "It should replace numbers that contain a '1' with "Beep!""
Code: beepBoop(1);
Expected Output: [0, "Beep!"]

Test #5: "It should replace numbers that contain a '2' with "Boop!""
Code: beepBoop(2);
Expected Output: [0, "Beep!", "Boop!"]

Test #6: "It should replace numbers that contain a '3' with "Won't you be my neighbor?""
Code: beepBoop(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test #7: "It should follow above said rules for number replacement, but also apply the rules to a 2 digit number: 10"
Code: beepBoop(10);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]

Test #8: "It should follow above said rules for number replacement, but also apply the rules to a 2 digit number: 12"
Code: beepBoop(12);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test #8b: "It should follow above said rules for number replacement, but also apply the rules to a 2 digit number: 24"
Code: beepBoop(24);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!"]
```

## Known Bugs

- _Currently viewing is ideal only for full-sized screens - not optimized for mobile._

## License

_MIT License_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _2023_ _Jonathan Cheng_
