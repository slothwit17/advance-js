const numbers = [3, 6, 9, 19, 21, 8];
const output =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

function square(element){
    return element * element;
}
const result2 = numbers.map(square);
console.log(result2);



numbers.map(function(element, index, array){
    console.log(element, index, array);
});


const result3 = numbers.map(x => x*x);
console.log(result3);

const bigger = numbers.filter( x => x > 10); // filter return an array
console.log(bigger);

const isThere = numbers.find( x => x < 10); // find return just an element
console.log(isThere);