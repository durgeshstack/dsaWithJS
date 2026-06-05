 function lengthOfLastWord(s) {
    const normalizeText = s?.trim().replace(/\s+/g," ");
    if(!normalizeText) return 0;

    const strArr = normalizeText.split(" ");
    return  strArr[strArr.length-1].length;
   
};