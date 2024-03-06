/**
 * for given string tell me whether it has even number of chracters or not 
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str,size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

// evenSizedString('dhaka')
// evenSizedString('faka')

function doubleOrTriple(number, doDoubl){
    if(doDoubl === true){
        const result = number * 2
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(number){
    const len = number.length;
    return len
}

// numberOfElements([12, 45, 78,45,1231245,4,4,5])

function getAge(person){
    const age = person.age;
    return age
}