//monotonic stack
function nextGreaterElement(nums1, nums2) {
    let mapp = new Map();
    const nextGreaterMap = new Map();
    const stack = [];

 
    for (let i = 0; i < nums2.length; i++) {
        const current = nums2[i];
        while (stack.length > 0 && current > stack[stack.length - 1]) {
            nextGreaterMap.set(stack.pop(), current);
        }
        stack.push(current);
    }

    while (stack.length > 0) {
        nextGreaterMap.set(stack.pop(), -1);
    }

    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        result.push(nextGreaterMap.get(nums1[i]));
    }

    return result;


};