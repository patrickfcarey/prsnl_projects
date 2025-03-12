function moveZerosToEnd(input_array) {
    let array_length = input_array.length;
    let valid_position = 0;

    for(let count = 0; count < array_length; count++){
        if(input_array[count] != 0){
            input_array[valid_position] = input_array[count];
            valid_position++;
        }
      }
      while(valid_position < array_length){
        input_array[valid_position] = 0;
        valid_position++;
      }
    return;
}

let arr1 = [1,2,3,0,4,0,4];
let arr2 = [1,2,3,4,5,6,7];
let arr3 = [0,2,3,1,4,1,2];
moveZerosToEnd(arr1);