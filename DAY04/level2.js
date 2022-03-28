// 1.Write a code which can give grades to students according to theirs scores:
    // 80-100, A
    // 70-89, B
    // 60-69, C
    // 50-59, D
    // 0-49, F
let score = prompt('Enter your score to know Grade: ');
switch (true) {
    case (score >= 80 && score <= 100):
        alert('A');
        break;
    case (score >= 70 && score < 80): 
        alert('B'); 
        break; 
    case (score >= 60 && score < 70): 
        alert('C'); 
        break; 
    case (score >= 50 && score < 60): 
        alert('D'); 
        break; 
    case (score <  49): 
        alert('F'); 
        break; 
    default: 
        alert('Invalid Input')
}



// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer
let mon = prompt('Enter a month to know the season: ');
let month = mon.toLowerCase()


switch (true) {
    case (month == 'september' ||  month == 'october' || month == 'november'):
        alert('Season: Autumn')
        break;
    case (month =='december' || month == 'january' || month == 'february'):
        alert('Season: Winter')
        break;
    case (month == 'march' || month == 'april' || month == 'may'):
        alert('Season: Spring')
        break;
    case (month == 'june' || month == 'july' || month == 'august'):
        alert('Season: Summer')
        break;
}


// 3.Check if a day is weekend day or a working day. Your script will take day as an input.
    //     What is the day  today? Saturday
    //     Saturday is a weekend.
    //     What is the day today? saturDaY
    //     Saturday is a weekend.
    
    //     What is the day today? Friday
    //     Friday is a working day.
    
    //     What is the day today? FrIDAy
    //     Friday is a working day.
let Day = prompt('Enter a day to know if it is a weekday/weekend: ');
let day = Day.toLowerCase()

switch (true) {
    case (day ==  'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday'):
        alert(`${day[0].toUpperCase()}${day.substring(1)} is a working day`)
        break
    case (day ==  'saturday' || day == 'sunday' ):
        alert(`${day[0].toUpperCase()}${day.substring(1)} is a weekend`)
        break
    default:
        alert(`! Invalid Input`)
        break
}



