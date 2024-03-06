/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft 
 */

function woodQuantity(chairQuantity , tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTablewood = 10;
    const perBedWood = 50;


    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTablewood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);

