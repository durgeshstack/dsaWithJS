function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}

function maxFreqSum(s) {
    let v=0,c=0;
    const mapp = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (mapp.has(char)) {
            const pre = mapp.get(char);
            mapp.set(char, pre + 1)
        } else {
            mapp.set(char, 1)
        }
    }

    for(const [key,val] of mapp){
        if(isVowel(key)){
            v= Math.max(val,v);
        }else{
            c=Math.max(val,c);
        }
    }

return c+v;
};