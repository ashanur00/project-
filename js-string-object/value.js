const person = {
    name: 'Sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 250000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 300000;
person['age'] = 26;
person['fav places']= ['maldives', 'bali', 'pataya']

const propName = 'profession';
person[propName] = 'devops'
console.log(person)
