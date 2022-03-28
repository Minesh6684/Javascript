let month = prompt('Enter a month: ')
let isLeapYear = prompt('Is it a leap Year?: (true/false) ')
let Month = month.toLowerCase()

switch (Month) {
    case 'january':
        console.log(`${Month.toUpperCase()} has 31days`)
        break
    case 'february':
        switch (isLeapYear) {
            case 'true':
                console.log(`${Month.toLocaleUpperCase()} has 29days`)
                break
            case 'false':
                console.log(`${Month.toUpperCase} has 28days`)
                break
            default:
                alert('Invalid Year')
        }
        break
    case 'march':
        console.log(`${Month.toLocaleUpperCase()} has 31days`)
        break
    case 'april':
        console.log(`${Month.toLocaleUpperCase()} has 30days`)
        break
    case 'may':
        console.log(`${Month.toLocaleUpperCase()} has 31days`)
        break
    case 'june':
        console.log(`${Month.toLocaleUpperCase()} has 30days`)
        break
    case 'july':
        console.log(`${Month.toLocaleUpperCase()} has 31days`)
        break
    case 'august':
        console.log(`${Month.toLocaleUpperCase()} has 31days`)
        break
    case 'september':
        console.log(`${Month.toLocaleUpperCase()} has 30days`)
        break
    case 'october':
        console.log(`${Month.toLocaleUpperCase()} has 31days`)
        break
    case 'november':
        console.log(`${Month.toLocaleUpperCase()} has 30days`)
        break
    case 'december':
        console.log(`${Month.toLocaleUpperCase()} has 31days`)
        break
    default:
        console.log(`Enter Valid Month`)
        break
}
