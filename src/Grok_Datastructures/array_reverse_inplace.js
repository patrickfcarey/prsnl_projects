let arr1 = [1,2,3,4,5];

function reverseArrayInPlace(input_array){
    let temp_var;
    for(let count = 0; count<(input_array.length-1)/2;count++) {
        temp_var = input_array[count];
        input_array[count] = input_array[input_array.length-1-count];
        input_array[input_array.length-1-count]=temp_var;
    }
    return;
}
reverseArrayInPlace(arr1);
console.log(arr1);