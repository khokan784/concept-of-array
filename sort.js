const persons = ['ali', 'poli', 'bali', 'sali', 'jali']
sortPerson = persons.sort();
// console.log(sortPerson);


// const numbers = [5, 2, 8, 6, 9, 5, 3, 1],
// sortNumber = numbers.sort();
// console.log(sortNumber);

const numbers = [5, 2, 48, 6, 19, 15, 33, 1],
sortNumber_asc = [...numbers].sort(function (a, b) {return a - b });
sortNumber_dsc = [...numbers].sort(function (a, b) {return b - a });
console.log(sortNumber_asc);
console.log(sortNumber_dsc);