const student = [
    {id: 397, name: "Hulk"},
    {id: 408, name: "Iron Man"},
    {id: 414, name: "Captain America"},
]
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);

const names = student.map( x => x.name);
const ids = student.map( x => x.id);
const bigger = student.filter( x => x.id > 400);
const biggerOne = student.find ( x => x.id > 400);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne); 
