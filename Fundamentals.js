let num = 20
if (num === 20) {
    console.log("matched")
} else {
    console.log("not matched")
}

// intertView Question-> what is difference between == and === equalto

// https://contactmentor.com/javascript-if-else-exercises-solutions/  
// 1. Check if a number is odd or even in JavaScript
// 2. Check if input variable is a number or not
// 3. Find the largest of two number
// 4. Find the largest of three number
// 5. Check if a triangle is equilateral, scalene, or isosceles
// 6. Find the a number is present in given range
// 7. Perform arithmetic operations on two numbers
// 8. Find check if a year is leap year or not
// 9. Find the grade for input marks
// condition-
// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

// 10. Find number of days in a given month


let x = 20
for (x = 1; x <= 20; x++) {
    console.log(x)
}

const arr = [2, 4, 6, 7, 8, 9];
console.log(arr)

// how to inport one file to anotherfile

const DrmmyData = require('./DrmmyData')
console.log(DrmmyData)
// with the help of .object we can access the particular value
console.log(DrmmyData.x)

// with the help of .object we can access the function
console.log(DrmmyData.z())