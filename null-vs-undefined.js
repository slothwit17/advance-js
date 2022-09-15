//if we don't set a value then it will be undefined
let number;
console.log(number);


function add(num1, num2){
    console.log(num1 + num2);
}
const result = add(5,6); // here add function is not returning any value so result will be undefined
console.log(result); 


function add2(num1, num2){
    console.log(num1, num2)
}
const result2 = add2(5); // here we didn't pass any value for num2 so this will be undefined
console.log(result2);


const ages = [12, 34, 23, 88];
console.log(ages[10]); // in this array there is only 4 element. So 10 no index will be undefined

const student = {studentName:"Justin", studentID:12133, studentAddress:"New York"};
console.log(student.studentPhone); // there is no attribute named as studentPhone in student object. So this will be undefined.

