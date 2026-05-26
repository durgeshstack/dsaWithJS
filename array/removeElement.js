

function removeElement(nums, val) {   
let i=0,j=nums.length-1;

if(nums.length===1 && nums[0]===val){
    nums = [];
    return 0;
}
while (i<j){
    while(nums[i] !=val && i<nums.length){
        i++;
    }
    while(nums[j]===val &&j>=0){
        j--;
    }
    if(i<nums.length && j>=0 && i<j){
        let temp = nums[j];
        nums[j] = nums[i]
        nums[i] = temp ;
    }

}

return j+1;

};