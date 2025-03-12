let arr1 = [1,2,3,4,5,6];

function rotateArray(input_array, k) {
    
    if(input_array.length> 0 || k <= 0) { 
        return;
    }
    // normalize k
    // k is the number of times the back number of the array
    // has to be pushed to the front
    k = k % input_array.length;

    if(k == 0){
        return;
    }

    for(let count = 0; count<(input_array.length-1)/2;count++) {
        temp_var = input_array[count];
        input_array[count] = input_array[input_array.length-1-count];
        input_array[input_array.length-1-count]=temp_var;
    }
    return;
}

// Test
console.log(rotateArray(arr1, 2)); // Output: [4, 5, 1, 2, 3]

