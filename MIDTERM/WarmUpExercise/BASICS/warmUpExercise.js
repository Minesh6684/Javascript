// Array Methods
const Names = new Array();
Names.push('Javascript') // add element to the end of an array
Names.unshift('Minesh') //add new element to start of the array
Names.pop() //remove the last element of the array
console.log(Names)
console.log(Array.isArray(Names)) //To check if a datatype is array


// Object Literals
var person = {
    firstName: 'Minesh',
    age: 25,
    address: {
        city: 'Montreal',
        province: 'Quebec',
    }
}

const {age, firstName, address:{province, city}} = person
console.log(age)

person.email = 'minesh@gmail.com' //properties Addition
person.address.postalcode = 'H3S1S5'
console.log(person)


// ARRAY OF OBJECTS
const todo = [
    {
        id: 0,
        text: 'Javascript Assignment',
        isDone: true
    },
    {
        id: 1,
        text: 'LeetCode Submition',
        isDone: false
    },
    {
        id: 2,
        text: 'Python Project',
        isDone: true
    }
]

console.log(JSON.stringify(todo)) // JSON file creation

//Different for loop
for (let element of todo) {
    console.log(element);
}

// HIGHER ORDER FUNCTION forEach, map, filter

// forEach = for every elements call the function
todo.forEach(function(element) {
    console.log(element.text);
})
/*
map = for every element call the function and store the  
the result to a new Array

.filter = check every element for a condition inside function and 
if it is true it returns element and store it to another array
*/
const workDone = todo.filter(function (element) {
        return element.isDone === true;
}).map(function(element) {
    return element.text;
})
console.log(workDone)

//TERNARY OPERATOR
const nameL = 'java'
const TERNARY = nameL === 'JavaScript' ? 'It is JavaScript' : 'It is not JavaScript'
console.log(TERNARY)

//SWITCH statement
switch (TERNARY) {
    case 'It is JavaScript':
        console.log('JavaScript');
        break;
    case 'It is not JavaScript':
        console.log('Another language');
        break;
    default:
        console.log('It not a Language');
        break;
}

// OBJECT CONSTRUCTION by FUNCTION

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthMonth = function() {
    //     return this.dob.getMonth();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
} 

//method addition using .prototype
Person.prototype.getBirthMonth = function() {
    return this.dob.getMonth();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Instantiate object
const person1 = new Person('Justin', 'Bieber', '11-5-1996');
const person2 = new Person('Johny', 'Depp', '3-8-1975');

console.log(person1.getBirthMonth())
console.log(person1.getFullName())
console.log(person1)


//CLASS
class Man {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthMonth() {
        return this.dob.getMonth();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const man1 = new Man('Jackey', 'Chan', '12-4-1960');
const man2 = new Man('Bruce', 'Lee', '1-29-1945');

console.log(man1.getFullName())
