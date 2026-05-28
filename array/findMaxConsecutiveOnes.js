 function findMaxConsecutiveOnes (nums) {
    let count = 0
    let max = 0
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] == 1) {
            count++
        }
        else {
            count = 0
        }


        if (count > max) {
            max = count
        }

    }
    return max
};

//1 <= nums.length <= 105
// nums[i] is either 0 or 1.
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))