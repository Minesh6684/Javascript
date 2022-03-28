// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    // Enter base: 20
    // Enter height: 10
    // The area of the triangle is 100
let base = prompt('Enter Triangle-Base: ');
let height = prompt('Enter Triangle-Heigth: ');
let triangleArea = 0.5 * base * height;

console.log(`Area of Triangle: ${triangleArea}`)


// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    // Enter side a: 5
    // Enter side b: 4
    // Enter side c: 3
    // The perimeter of the triangle is 12
let a = Number(prompt("Enter \"side a\" of a Triangle: "));
let b = Number(prompt("Enter \"side b\" of the Triangle: "));
let c = Number(prompt("Enter \"side c\" of the Triangle: "));
let perimeter = a + b + c;
console.log(`Perimeter of the Triangle: ${perimeter}`)

// 3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt('Enter the length of a Rectangle: '));
let width = Number(prompt('Enter the width of the Rectangle: '));
let areaRectangle = (length * width);
let perimeterRectangle = (2 * (length + width));
console.log(`Rectangle Area: ${areaRectangle}, Perimeter: ${perimeterRectangle}`);

// 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let radiusCircle = Number(prompt('Enter Radius of a Circle: '));
let areaCircle = PI * (r ** 2);
let circumferenceCircle = PI * (r * 2);
console.log(`Circle Area: ${areaCircle}, Cercumference: ${circumferenceCircle}`)

// 5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
var x = 0;
var y = 2*x-2;
var y_intercept = y;

var y = 0;
var x = (y+2) / 2;
var x_intercept = x;

var slop = - (y_intercept/x_intercept);
console.log(`x-intercept : ${x_intercept}, y-intercept :${y_intercept}, slope: ${slop}`)


// 6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point(2, 2) and point(6,10)
function getSlope(x1, y1, x2, y2) {
     m = (y2-y1) / (x2-x1);
    console.log(`Slope of the line joining (${x1}, ${y1}) and (${x2}, ${y2}): ${m}`) 
}

getSlope(2, 2, 6, 10)


// 7.Compare the slope of above two questions.
isSlopeOf5IsEqualTo6 = (slop == m);
console.log(isSlopeOf5IsEqualTo6)


// 8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function calculateY_At(x){
    let y = (x**2 + 6*x + 9);
    console.log(`x: ${x}, y: ${y}`);
} 
calculateY_At(-3)


// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let Hours = parseInt(prompt('Enter weekly work-hours: '));
let payRate = parseInt(prompt('Enter rate per hour: '));
    // Your weekly earning is 1120
console.log(`Your weekly earning is: ${Hours*payRate}`)


// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = prompt('Enter your Name: ');
if (yourName.length > 7) {
    console.log('Your name is long.');
}
else {
    console.log('Your name is short.');
}


// 11.Compare your first name length and your family name length and you should get this output.
let firstName = 'Minesh D'
let lastName = 'Tandel'
    // Your first name, Asabeneh is longer than your family name, Yetayeh
if (firstName.length > lastName.length) {
    console.log(`Your first name, "${firstName}" is longer than your family name, "${lastName}"`);
}
else {
    console.log(`Your first name, "${firstName}" is shorter or of equal to your family name, "${lastName}" in terms of length`)
}


// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 200;
let yourAge = 100;
    // I am 225 years older than you.
console.log(`I am ${myAge-yourAge} years older than you.`) 


// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let bornYear = parseInt(prompt("Enter the Year of Birth: "));
    // Enter birth year: 1995
    // You are 25. You are old enough to drive
const Date_Object = new Date();
let userAge = Date_Object.getFullYear() - bornYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive`)
}
    // Enter birth year: 2005
    // You are 15. You will be allowed to drive after 3 years.
else {
    let afterYear = 18 - userAge;
    console.log(`You are ${userAge}. You will be allowed to drive after ${afterYear} years.`)
}


// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    // Enter number of years you live: 100
let noYear = parseInt(prompt('Enter the Number of years you lived: '));
    // You lived 3153600000 seconds.
const secondsLived = (noYear) * 365 * 24 * 60 * 60 ;
console.log(`You Lived ${secondsLived} seconds.`)



// 15.Create a human readable time format using the Date time object
const DateObject = new Date();
let year = DateObject.getFullYear();
let month = DateObject.getMonth()+1;
let day = DateObject.getDate();
let hour = DateObject.getHours();
let minute = DateObject.getMinutes();

let timeArray = [year, month, day, hour, minute]
for (let i=0; i < timeArray.length; i++) {
    if (timeArray[i] < 10) {
       timeArray[i] = '0' + String(timeArray[i]);
    }  
}
   
const YYYY = timeArray[0];
const MM = timeArray[1];
const DD = timeArray[2];
const HH = timeArray[3];
const mm = timeArray[4];
    // YYYY-MM-DD HH:mm
 console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)

    // DD-MM-YYYY HH:mm
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`)
    // DD/MM/YYYY HH:mm
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`)



console.log('---------------')