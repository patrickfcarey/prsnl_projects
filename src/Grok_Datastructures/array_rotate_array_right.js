let arr1 = [1,2,3,4,5,6];

function rotateArray(arr, k) {
    if (!arr || arr.length === 0 || k <= 0) return arr;
    
    const n = arr.length;
    k = k % n; // Normalize k if it's larger than array length
    
    // Helper function to reverse portion of array
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap using destructuring
            start++;
            end--;
        }
    }
    
    // Three reversals
    reverse(arr, 0, n - 1);    // Reverse entire array
    reverse(arr, 0, k - 1);    // Reverse first k elements
    reverse(arr, k, n - 1);    // Reverse remaining elements
    
    return arr;
}

// Test
let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2)); // Output: [4, 5, 1, 2, 3]

