const phones = [
    { name: 'Smnung', prices: 90000, camera: '200mp', color: 'Black' },
    { name: 'Iphone', prices: 120000, camera: '48mp', color: 'Black' },
    { name: 'xoami', prices: 30000, camera: '120mp', color: 'Black' },
    { name: 'Soney', prices: 80000, camera: '50mp', color: 'Black' },
    { name: 'Vivo', prices: 20000, camera: '120mp', color: 'Black' },
    { name: 'Oppo', prices: 21000, camera: '120mp', color: 'Black' },
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.prices < min.prices){
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheap);