/**
 * year will be a lear year if the year is divisible by 4
 */

function isLeapYear (year) {
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = isLeapYear(2043);
console.log(isLeap);