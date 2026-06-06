function numJewelsInStones(jewels, stones) {
   let mapp = new Map();
   for(let i=0;i<stones.length;i++){
    const char = stones.charAt(i);

    if(mapp.has(char)){
        const preCount = mapp.get(char);
        mapp.set(char,preCount+1);
    }else{
        mapp.set(char,1);
    }
   }
   let result=0;
   for(let i=0;i<jewels.length;i++){
      const char = jewels.charAt(i);
      if(mapp.has(char)){
        result+=mapp.get(char);
      }
   } 
   return  result ;
};