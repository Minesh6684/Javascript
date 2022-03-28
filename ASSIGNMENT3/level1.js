// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Minesh';
let lastName = 'Tandel';
let country = 'Inida';
let city = 'Navsari';
let age = 25;
let isMarried = false;
let year = 1996;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


// 2.Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10);


// 3.Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.80'))
console.log('9.8' === 9.8)


// 4.Boolean value is either true or false.
    // Write three JavaScript statement which provide truthy value.
let trueCondition1 = 5 < 7;
let trueCondition2 = 'minesh'.length > 'asha'.length;
let trueCondition3 = null == undefined;
    
    // Write three JavaScript statement which provide falsy value.
let falseCondition1 = 5 == 7;
let falseCondition2 = typeof null == 'number';
let falseCondition3 = null === undefined;

// 5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    // 4 > 3 true
console.log(4 > 3);
    // 4 >= 3 true
console.log(4 >= 3);
    // 4 < 3 false
console.log(4 < 3);
    // 4 <= 3 false
console.log(4 <= 3);
    // 4 == 4 true
console.log(4 == 4);
    // 4 === 4 true
console.log(4 === 4);
    // 4 != 4 false
console.log(4 != 4);
    // 4 !== 4 false
console.log(4 !== 4);
    // 4 != '4' true
console.log(4 != '4');
    // 4 == '4' false
console.log(4 == '4');
    // 4 === '4' false
console.log(4 === '4');

    // Find the length of python and jargon and make a falsy comparison statement. 
console.log('python'.length != 'jargon'.length);


// 6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    // 4 > 3 && 10 < 12 - true
console.log(4 > 3 && 10 < 12);

    // 4 > 3 && 10 > 12 - false
console.log(4 > 3 && 10 > 12);

    // 4 > 3 || 10 < 12 - true
console.log(4 > 3 || 10 < 12);

    // 4 > 3 || 10 > 12 - true
console.log(4 > 3 || 10 > 12);

    // !(4 > 3) - false
console.log(!(4 > 3));

    // !(4 < 3) - true
console.log(!(4 < 3));

    // !(false) - true
console.log(!(false));

    // !(4 > 3 && 10 < 12) - false
console.log(!(4 > 3 && 10 < 12));

    // !(4 > 3 && 10 > 12) - true
console.log(!(4 > 3 && 10 > 12));

    // !(4 === '4') - true
console.log(!(4 === '4'));

    // There is no 'on' in both dragon and python - false
console.log('-------')
let x = !'dragon'.endsWith('on');
let y = !'python'.endsWith('on')
console.log(x && y);



// 7.Use the Date object to do the following activities
const dateObject = new Date();
    // What is the year today?
console.log(`Year: ${dateObject.getFullYear()}`);
    // What is the month today as a number?
console.log(`Month: ${dateObject.getMonth()+1}`);
    // What is the date today?
console.log(`Date: ${dateObject.getDate()}`);
    // What is the day today as a number?
console.log(`Day: ${dateObject.getDay()}`);
    // What is the hours now?
console.log(`Hours: ${dateObject.getHours()}`);
    // What is the minutes now?
console.log(`Minutes: ${dateObject.getMinutes()}`);
    // Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(`Seconds Since January 1, 1970: ${dateObject.getTime()}`);



console.log('---------------')