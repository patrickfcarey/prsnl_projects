let arr1 = [1222,13,3,4,115,6];

function findLargestElement(input_array) {
    let largest;
    let temp_var;
    for(let element of input_array) {
        temp_var = element;
        if(temp_var > largest || largest == null){
            largest = temp_var;
        }
    }
    return largest;
}

console.log(findLargestElement(arr1));