function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale > 0) {
        const result = (ticketSale * 120) - (500 +(8 * 50));
        return result
    }
    else {
        return 'invalid number'
    }
}


function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }

    const goodName = name.charAt(name.length - 1).toLowerCase();
    const goodNameLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (goodNameLetter.includes(goodName)) {
        return 'Good Name';
    }

    else {
        return 'Bad Name'
    }
}


function deleteInvalids(array){
  if (!Array.isArray(array)){
    return 'Invalid Array'
  }

  else {
    return array.filter(arrayNumber => typeof arrayNumber === 'number' && !isNaN(arrayNumber));
  }

}


function password(obj) {
  if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
    return 'invalid'
  }

  if (typeof obj.birthYear !== 'number' || obj.birthYear < 1000 || obj.birthYear >= 10000) {
    return 'invalid'
  }

  const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  const passwordProperty = `${siteName}#${obj.name}@${obj.birthYear}`;
  return passwordProperty;
}


function monthlySavings(arr , livingCost){
  if(!Array.isArray(arr) || typeof livingCost !== 'number') {
    return 'invalid input';
  }
  const totalIncome = arr.reduce((a, b) => a + b, 0);
  const totalTex = arr.filter(arr => arr >= 3000).reduce((a, b) => a + (b *0.20), 0);
  const totalSavings = totalIncome - totalTex - livingCost;
  if(totalSavings >= 0){
    return totalSavings;
  }
  else{
    return 'earn more-----------------!'
  }
}



