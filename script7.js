//7.	Scrie o funcție care primește ca parametru un număr de la 1 la 7(numărul zilei săptămânii) și returnează numele zilei respective.

function weekDay(day) {
    switch (day) {
        case 1: {
            console.log('Monday');
            break;
        }
        case 2: {
            console.log('Tuesday');
            break;
        }
        case 3: {
            console.log('Wednesday');
            break;
        }
        case 4: {
            console.log('Thursday');
            break;
        }
        case 5: {
            console.log('Friday');
            break;
        }
        case 6: {
            console.log('Saturday');
            break;
        }
        case 7: {
            console.log('Sunday');
            break;
        }
        default: {
            console.log('not a week day');
        }
    }
}

weekDay(7);
weekDay(1);
weekDay(4);
weekDay(2);

//sa nu utilizez console.log in function

//update:


function weekDay(day) {
    switch (day) {
        case 1: {
            return "Monday"; 
        }
        case 2: {
            return "Tuesday";
        }
        case 3: {
            return "Wednesday";
        }
        case 4: {
            return "Thursday";
        }
        case 5: {
            return "Friday";
        }
        case 6: {
            return "Saturday";
        }
        case 7: {
            return "Sunday";
        }
        default: {
            return "not a week day";
        }
    }
}

console.log(weekDay(7));
console.log(weekDay(1));
console.log(weekDay(4));
console.log(weekDay(2));
