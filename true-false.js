// ** Falsy: **
//1. ""
//2. 0
//3. NaN
//4. Undefined
//5. null
//6. false

// ** Truthy: **
//1. " "
//2. '0'
//3. []
//4. {}
//5. 'false'


 let number;
 number = NaN;
 if(number){
    console.log('Condition is true');
 } else{
    console.log('Condition is false');
 }