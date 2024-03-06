// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// 75 
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetnumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetnumber + ' ft ' + inchRemaining + ' inch. '
    return result
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2)