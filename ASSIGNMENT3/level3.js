// /* 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//       YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

let date_object = new Date();

let year = date_object.getFullYear();
let month = date_object.getMonth();
let day = date_object.getDate();
let hour = date_object.getHours();
let minutes = date_object.getHours();

let array_data = [month, day, hour, minutes];
for (let i=0; i < array_data.length; i++) {
    array_data[i] < 10
        ? array_data[i] = '0' + array_data[i]
        : array_data[i] = array_data[i]

}

console.log(`${year}-${array_data[0]}-${array_data[1]} ${array_data[2]}:${array_data[3]}`)


console.log('---------------')
