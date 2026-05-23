
function search (nums, target) {
    let l=0,h=nums.length;
    while(l<=h){
     const mid = Math.floor((l+h)/2);
     if(nums[mid]===target){
        return mid;
     }else if(nums[mid]>target){
        h=mid-1;
     }else{
        l=mid+1;
     }
    }
    return -1;
};