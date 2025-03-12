let arr1 = [1,1,2,3,4]
function findArrayDuplicates(input_array) {
    let hashmap = {};
    for(let element of input_array){
        hashmap[element] = (hashmap[element] || 0 ) + 1;
    }
    
    for (let key in hashmap) {
        if (hashmap.hasOwnProperty(key) && hashmap[key] > 1) { // Avoid inherited properties
          console.log(`${key}: ${hashmap[key]}`);
        }
    }
    return;      
}

findArrayDuplicates(arr1);
