const numbers = [3, 6, 9, 19, 21, 8];
// const output =[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

function square(element){
    return element * element;
}
const result2 = numbers.map(square);
console.log(result2);