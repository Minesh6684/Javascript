
//1. Declare an empty array;
const emptyArray = Array();

//2. Declare an array with more than 5 number of elements
const animals = ['Lion', 'Tiger', 'Leopard', 'Cheetah', 'Elephant', 'Dinosaur'];

//3. Find the length of your array
let totalElements = animals.length;
console.log(`Number of elements in 'animals' array: ${totalElements}`);

//4. Get the first item, the middle item and the last item of the array
  //firstElement
let firstElement = animals[0];
console.log(`First element of 'animals' array: ${firstElement}`)

    //middleElement
if (animals.length%2 === 0) {
    let middleElement1 = animals[(animals.length/2) -1];
    let middleElement2 = animals[animals.length/2];
    console.log(`Middle Elements of 'animals' array: ${middleElement1}, ${middleElement2}`);
}
else {
    let middleElement = animals[Math.floor(animals.length/2)];
    console.log(`Middle elements of 'animals' array: ${middleElement}`);
}

    //lastElement
let lastElement = animals[animals.length - 1]
console.log(`Last element of 'animals' array: ${lastElement}`)

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Animal', 25, true, null, undefined, ['Facebook', 'Google']];
const mixedDataTypesTotalElements = mixedDataTypes.length;
console.log(`number of Elements in 'mixedDataTypes: ${mixedDataTypesTotalElements}`);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
const numberOfCompanies = itCompanies.length;
console.log(`Number of companies in 'itCompanies' array: ${numberOfCompanies}`);

//9. Print the first company, middle and last company
    //firstCompany
const firstCompany = itCompanies[0];
console.log(`First element of 'itCompanies' array: ${firstCompany}`)

    //middleCompany
if (itCompanies.length%2 === 0) {
    let middleCompany1 = itCompanies[(itCompanies.length/2) -1];
    let middleCompany2 = itCompanies[itCompanies.length/2];
    console.log(`Middle elements of 'itCompanies' array: ${middleCompany1}, ${middleCompany2}`);
}
else {
    let middleCompany = itCompanies[Math.floor(itCompanies.length/2)];
    console.log(`Middle element of 'itCompanies' array: ${middleCompany}`);
}

    //lastCompany
const lastCompany = itCompanies[itCompanies.length -1];
console.log(`Last element of 'itCompanies' array: ${lastCompany}`);

//10. Print out each company
for (let i=0; i<itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itCompaniesString = itCompanies.toString();
console.log(`'itCompanies' array as string: ${itCompaniesString}`)

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'TATA'
let isExist = itCompanies.indexOf(company);
if (isExist == -1) {
    console.log('company is not found');
}
else {
    console.log(`${company}`);
}

// 14. Filter out companies which have more than one 'o' without the filter method
let itCompaniesWithMoreO = []
for(let i=0; i<itCompanies.length; i++) {
    let count = 0;
    for (let j=0; j<itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() === 'o') {
            count += 1;
        }
    }
    if (count > 1) {
        itCompaniesWithMoreO.push(itCompanies[i]);
    }
}
console.log(`Elements having more than one 'o': ${itCompaniesWithMoreO}`);


// 15. Sort the array using sort() method
let itCompaniesSorted = itCompanies.sort();
console.log(`Sorted 'itCompanies' array: ${itCompaniesSorted}`)

//16. Reverse the array using reverse() method
let itCompaniesReversed = itCompanies.reverse();
console.log(`Reversed sorted 'itCompanies' Array: ${itCompaniesReversed}`);

//17. Slice out the first 3 companies from the array
let itCompaniesFirstThree = itCompanies.slice(0, 3);
console.log(`First three companies of sorted and reversed 'itCompanies' array: ${itCompaniesFirstThree}`);

//18. Slice out the last 3 companies from the array
let itCompaniesLastThree = itCompanies.slice((itCompanies.length)-3, itCompanies.length);
console.log(`Last three comapanies of sorted and reversed 'itCompanies' array: ${itCompaniesLastThree}`);

//19. Slice out the middle IT company or companies from the array
if (itCompanies.length%2 ==0) {
    let itCompaniesMiddleElements = itCompanies.slice((itCompanies.length/2)-1, (itCompanies.length/2)+1);
    console.log(`Middle companies of shorted and reversed 'itCompanies' array: ${itCompaniesMiddleElements}`);
}
else {
    let itCompaniesMiddleElement = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2)+1);
    console.log(`Middle company of shorted and reversed 'itCompanies' array: ${itCompaniesMiddleElement}`);
}

//20. Remove the first IT company from the array
itCompanies.shift()
console.log(`'itCompanies' array after removing first company: ${itCompanies}`)

//21. Remove the middle IT company or companies from the array
if (itCompanies.length%2 == 0) {
    itCompanies.splice((itCompanies.length/2)-1, 2);
    console.log(`'itCompanies' array after removing middle companies: ${itCompanies}`);
}
else {
    itCompanies.splice(Math.floor(itCompanies.length/2), 1);
    console.log(`'itCompanies' array after removing middle company: ${itCompaniesRemovedMiddleElement}`);
}

//22. Remove the last IT company from the array
itCompanies.pop()
console.log(`'itCompanies' array after removing last company: ${itCompanies}`)

//23. Remove all IT companies
let itCompaniesRemoved = itCompanies.splice();
console.log(`'itCompanies' array after removing all company: ${itCompaniesRemoved}`)
