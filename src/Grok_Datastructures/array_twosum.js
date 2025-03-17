function twoSum(nums, target){
    let candidate_element = 0;
    let answer_array=[];
    let hashmap = {};
    for(let count = 0; count < nums.length; count++){
        hashmap[count] = target - nums[count];
        for(let innerCount = count+1; innerCount < nums.length; innerCount++){
            if(nums[innerCount] == hashmap[count]){
                return answer_array = [innerCount,count];
            }
        }
    }

    return;
}

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [3,2,4];
let arr3 = [3,3];

console.log(twoSum(arr1,9));
console.log(twoSum(arr2,6));
console.log(twoSum(arr3,6));