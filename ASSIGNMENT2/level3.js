/* 

EXERCISE: LEVEL-3

*/

console.log('EXERCISE: LEVEL-3\n')
// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence_love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log((sentence_love.match(/love/gi)).length);


// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log((sentence2.match(/because/gi)).length);


// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching '
sentence5 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence5 = sentence5.replace(/[^A-Za-z ]/g, '');
console.log(sentence5)
let maxCount = 0;
let maxChar1 = ''
let maxChar2 = ''

sentence5.split(' ').forEach(word => {
    let re = new RegExp (`\\b${word}\\b`, 'gi');
    wordCount = sentence5.match(re).length;
    if (wordCount = maxCount) {
        maxCount = wordCount;
        maxChar2 =  word;
    }
    else if (wordCount > maxCount) {
        maxCount = wordCount;
        maxChar1 = word;
    }
});
console.log(`Most Frequent Word: ${maxChar1} and ${maxChar2}, ${maxCount} times`);




// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryStatement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = salaryStatement.match(/\d+/gi);
numbers[0] = parseInt(numbers[0]) * 12;
numbers[1] = parseInt(numbers[1]);
numbers[2] = parseInt(numbers[2]) * 12;

let sum = 0;
for (i=0; i <= numbers.length-1; i++) {
    sum += numbers[i];
}
console.log(`Total Annual Salary: ${sum} Euros`)


