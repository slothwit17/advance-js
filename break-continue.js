const numbers = [1,3,5,-3,4,-2,4];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 4){
        break;
    }
    // console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0){
        continue; // skip the negative numbers.
    }
    console.log(numbers[i]);
}