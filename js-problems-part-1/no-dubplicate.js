/**
 * array has some duplicate elements
 * []
 */


const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

const number = [1, 5, 87, 7, 5, 81, 61];


function onDuplicate (array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = onDuplicate(biryaniKhor);
console.log(uniqueArray);