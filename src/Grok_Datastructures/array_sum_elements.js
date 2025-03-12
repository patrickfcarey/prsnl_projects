let arr1 = [1222,13,3,4,115,6];

function findArraySum(input_array) {
    let sum;
    for(let element of input_array) {
        sum += element;
    }
    return sum;
}

console.log(findArraySum(arr1));