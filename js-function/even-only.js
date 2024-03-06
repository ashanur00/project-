/**
 * create function that will return only even numbers
 * retun the sum of even numbers
 */

function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are',evens)