/* 1. The following is an array of 10 students ages: */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
    //Sort the array and find the min and max age
ages.sort()
let minimumAge = ages[0]
let maximumAge = ages[ages.length - 1]
console.log(`Minimum Age: ${minimumAge}`)
console.log(`Maximum Age: ${maximumAge}`)

    //Find the median age(one middle item or two middle items divided by two)
let medianAge
if (ages.length%2 == 0) { 
    medianAge = (ages[ages.length/2] + ages[(ages.length/2) - 1]) / 2
}
else {
    medianAge = ages[Math.floor(ages.length/2)] 
}
console.log(`Median Age: ${medianAge}`)

    //Find the average age(all items divided by number of items)
let sum = 0;
for (let i=0; i<ages.length; i++) {
    sum += ages[i]
}
let averageAge = (sum/ages.length);
console.log(`Average Age: ${averageAge}`);

    //Find the range of the ages(max minus min)
console.log(`Range of Ages: ${maximumAge-minimumAge}`);

    //Compare the value of (min - average) and (max - average), use abs() method 
let min_average = Math.abs(minimumAge - averageAge);
let max_average = Math.abs(maximumAge - averageAge)
switch (true) {
    case (min_average > max_average):
        console.log(`Bigger-One: MinimumAge - Average Age = ${min_average}`);
        break;
    case (min_average < max_average):
        console.log(`Bigger-One: MaximumAge - Average Age = ${max_average}`);
        break;
    default:
        console.log(`MinimumAge - AverageAge = MaximumAge - AverageAge = ${min_average}`)
}



//1.Slice the first ten countries from the countries array
let slicedCountries = countries.slice(0,10)
console.log(`First 10 countries: ${slicedCountries}`)

// 2.Find the middle country(ies) in the countries array.
switch (true) {
    case (countries.length%2 == 0): // if number of elements of 'countries' array is even
        console.log(`Middle countries: ${countries[countries.length/2]} and ${countries[(countries.length/2) -1]}`);
    default: // if number of elements of 'countries' array is odd
        console.log(`Middle country: ${countries[Math.floor(countries.length/2)]}`)
}

/* 3.Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half. */
let firstHalfCountries
let secondHalfCountries
switch (true) {
    case (countries.length%2 == 0):
        firstHalfCountries = countries.slice(0, countries.length/2)
        secondHalfCountries = countries.slice(countries.length/2, countries.length)
    default:
        firstHalfCountries = countries.slice(0, Math.ceil(countries.length/2))
        secondHalfCountries = countries.slice(Math.ceil(countries.length/2), countries.length)
}
console.log(`First-Half Array of countries Array: ${firstHalfCountries}`)
console.log(`Second-Half Array of countries Array: ${secondHalfCountries}`)
