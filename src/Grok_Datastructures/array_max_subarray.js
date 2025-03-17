function maxSubArray(input_array){
    let answer = input_array[0];
    let comparison = input_array[0];
    for(let count = 1; count < input_array.length; count++){
        
        comparison = Math.max(input_array[count],comparison + input_array[count]);
        answer = Math.max(answer, comparison);
    } 
    return answer;
}


let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

