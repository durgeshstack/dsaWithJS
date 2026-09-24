function isBetween(st, end, t) {
    return st <= t && t <= end;
}

var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        //is left half sorted
        if (nums[low] <= nums[mid]) {
            if (isBetween(nums[low], nums[mid], target)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        //or right half sorted
        else {
            if (isBetween(nums[mid], nums[high], target)) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};