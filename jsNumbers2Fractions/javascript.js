//Assignment: What are results of these expressions?
"" + 1 + 0 //1 | 10 (Oops)
"" - 1 + 0 //0 | -1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //2px??? | NaN
"  -9  " + 5 //"  -9   5" Why so many space? Would it keep the spaces?
"  -9  " - 5 //-14
null + 1 //NaN | 1
undefined + 1 //NaN
" \t \n" - 2 //NaN? | -2  (Apparently those characters are null characters, so it would've been "0" - 2. I was not aware or told those were null spaces. I blame the assignment. They should've known I have literally \n experience in code at all.)

//Barriers seperate my answers from correct answers
//Complete

//Assignment: Output is 12, but should be 3. Fix the maths:
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

//Assignment above, answer below
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // Correct output
//Complete