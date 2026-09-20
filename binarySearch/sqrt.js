function mySqrt(x) {
    let l=0;
    let h =x;
    if(x>4) h=Math.ceil(x/2);

    while(l<=h){
        const mid = Math.floor((l+h)/2);
        const key = mid*mid;
        if(key===x){
            return mid;
        }else if(key>x){
            h=mid-1;
        }else {
            l=mid+1;
        }
    }
    
    return h ;
};