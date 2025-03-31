function divide(numerator, denominator) {
    if(denominator === 0) {
        throw new Error('ERROR - Division by zero');
    }
    return numerator / denominator;
}

try{
    let result = divide(5,1);
    console.log(result);
    let result2 = divide(5,0);
    console.log(result2);
    //this section will not run - the error will be thrown and cause the rest of the try block to not execute
    let result3 = divide(15,3);
    console.log(result3);
}catch(error){
    console.log(error.message);
}