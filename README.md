```
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should return an array of numbers from 0 to the user's inputted number: 5"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should receive user input, and return null if input is a negative number."
Code: beepBoop(-5);
Expected Output: null

Test: "It should receive user input, and return NaN if input contains alpha characters."
Code: beepBoop("5a1");
Expected Output: NaN

Test: "It should replace numbers that contain a '1' with "Beep!""
Code: beepBoop(1);
Expected Output: [0, "Beep!"]

Test: "It should replace numbers that contain a '2' with "Boop!""
Code: beepBoop(2);
Expected Output: [0, "Beep!", "Boop!"]

Test: "It should replace numbers that contain a '3' with "Won't you be my neighbor?""
Code: beepBoop(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]
```
