function dailyTemperatures(t) {
    let result = new Array(t.length).fill(0);
    let stack = [];
    for(let i=0;i<t.length;i++){
        let current  = t[i];
        while(stack.length>0 && current>t[stack[stack.length-1]]){
            let stIndex = stack.pop();
             result[stIndex] = i-stIndex;
        }
        stack.push(i);
    }
    return result;
};