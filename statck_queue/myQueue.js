function MyQueue(){
    this.q = [];
}
MyQueue.prototype.push = function(x){
    this.q.push(x);
}
MyQueue.prototype.pop = function(){
    return this.q.shift();
}
MyQueue.prototype.peak = function(){
    return this.q[0];
}

MyQueue.prototype.empty = function(){
    return this.q.length===0;
}