const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// slice does not change the main array. 
// const part = numbers.slice(2, 7);
// console.log(part);
// console.log(numbers);

//splice change the main array.
const remove = numbers.splice(1, 3, 56, 78, 32);
// console.log(remove);
// console.log(numbers);

const together = numbers.join(' ');
console.log(together);