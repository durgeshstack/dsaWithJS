function mergeTwoArr(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function sortArray(nums) {
    // base case
    if (nums.length <= 1) {
        return nums;
    }

    // divide
    const mid = Math.floor(nums.length / 2);

    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    // recursive sort
    const sortedLeft = sortArray(left);
    const sortedRight = sortArray(right);

    // merge
    return mergeTwoArr(sortedLeft, sortedRight);
}


// Example
console.log(sortArray([5, 2, 8, 1, 3]));