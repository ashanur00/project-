/**
 * Objective: write a function give me the sum of number inan array
 * step-1: declare functio
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pas the paremeter(s), check whether parameter is passed a proper format 
 * step-5: do the function tasks (step by step)
 */

function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
        
    }
    return sum;
}
const numbs = [54, 62, 12, 6];
const sum = sumOfNumber(numbs);
console.log('sum of number is',sum);