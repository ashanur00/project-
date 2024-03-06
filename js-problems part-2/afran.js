// function calculateMoney(cells) {
//     if (typeof cells !== 'number' || cells < 0) {
//         return "Invalid Number";
//     }
//     return (cells * 120) - (500 + (8 * 50));
// }
// console.log(calculateMoney(-130));

// function checkName(name) {
//     // Check if the input is not a string
//     if (typeof name !== 'string') {
//         return "invalid";
//     }
//     // Check if the name contains any of the forbidden strings
//     const forbiddenNames = ['Tonoy', 'Uthso', 'Roide', 'Shanto'];
//     for (let forbidden of forbiddenNames) {
//         if (name.toLowerCase().includes(forbidden.toLowerCase())) {
//             return "Bad Name";
//         }
//     }
//     // If the name passes all checks, it's a good name
//     return "Good Name";
// }

// function calculateMoney(ticketSale) {
//     if (ticketSale[0] === ticketSale[0].toUpperCase()) {
//         return "Good Name";

//     }
//     // Check if the first letter of the string is uppercase
//     else if (typeof ticketSale !== 'string') {
//         return "invalid";
//     }
//     } else {
//         return "Bad Name";
//     }

// console.log(calculateMoney("RAFEE"));

// (typeof ticketSale !== 'string') {
// return "invalid";
// }
// 
// function checkName(name) {
//     // Check if the name ends with a, y, i, e, o, u, or w
//     const lastChar = name.charAt(name.length - 1).toLowerCase();
//     const letterCharacter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//     if (letterCharacter.includes(lastChar)) {
//         return 'Good Name';
//     }

//     else if (typeof name !== 'string') {
//         return "invalid";
//     }

//     else {
//         return "Bad Name";
//     }
// }
// console.log(checkName(1234))


// function checkName(name) {
//     // Check if the input is not a string
//     if (typeof name !== 'string') {
//         return "invalid";
//     }
//     // Check if the name ends with a, y, i, e, o, u, or w
//     const goodName = name.charAt(name.length - 1).toLowerCase();
//     const letterCharacter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//     if (letterCharacter.includes(goodName)) {
//         return "Bad Name";
//     }
//     // If the name passes all checks, it's a good name
//     return "Good Name";
// }
// console.log(checkName('Rafee'))


// function deleteInvalids(arr) {
//     // Check if the input is not an array
//     if (!Array.isArray(arr)) {
//         return "Error: Input must be an array";
//     }
//     // Filter out non-numeric values from the array
//     return arr.filter(element => typeof element === 'number' && !isNaN(element));
// }
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))

// function password(obj) {
    // Check if all required properties are present
//     if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
//         return "invalid";
//     }
//     // Check if birthYear is a valid 4-digit number
//     if (typeof obj.birthYear !== 'number' || obj.birthYear < 1000 || obj.birthYear >= 10000) {
//         return "invalid";
//     }
//     // Capitalize the first letter of the siteName
//     const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//     // Construct the password string
//     const passwordStr = `${siteName}#${obj.name}@${obj.birthYear}`;
//     return passwordStr;
// }
// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));


function monthlySavings(payments, livingCost) {
    // Check if the input is valid
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    // Calculate total income
    const totalIncome = payments.reduce((acc, curr) => acc + curr, 0);
    // Calculate total tax amount
    const totalTax = payments.filter(payment => payment >= 3000).reduce((acc, curr) => acc + (curr * 0.20), 0);
    // Calculate total savings after tax and living cost
    const totalSavings = totalIncome - totalTax - livingCost;
    // Check if savings are positive or negative
    if (totalSavings >= 0) {
        return totalSavings;
    } else {
        return "earn more";
    }
}


