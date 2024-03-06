/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];
for (const friend of friends) {
    // console.log(friend);
}
for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i]);
}
const numbers = [11, 22, 44, 33, 55, 66, 77, 88, 99, 99];
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
}

let i = 0;
while(i < friends.length){
    console.log(friends[i])
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n])
    n++;
}
