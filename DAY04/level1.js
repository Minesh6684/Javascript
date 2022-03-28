// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    // Enter your age: 30
    // You are old enough to drive.
let age = prompt("Enter your age: ");
if (age >= 18) {
    alert('You are old enough to drive');
}
    // Enter your age:15
    // You are left with 3 years to drive.
else {
    alert(`You are left with ${18-age} years to drive.`)
}


// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    // Enter your age: 30
    // You are 5 years older than me.
let myAge = 25;
let yourAge = prompt('Enter your age: ');
if (yourAge > myAge) {
    alert(`You are ${yourAge-myAge} older than me.`);
}
else {
    alert(`I am ${myAge-yourAge} older than you.`)
}

// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3   
    // using if else
if (a > b) {
    alert(`${a} is greater than ${b}`)
}
else {
    alert(`${b} is greater than ${a}`)
}
    
    // ternary operator.
a>b
    ? alert(`${a} is greater than ${b}`)
    : alert(`${b} is greater than ${a}`)

    
// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    // Enter a number: 2
    // 2 is an even number
let number = prompt('Enter a number: ');
if (number/2 == 0) {
    alert(`${number} is an even number`);
}
else {
    alert(`${number} is an odd number`);
}

    // Enter a number: 9
    // 9 is is an odd number.