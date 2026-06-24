function reorganizeString(s) {
    const frqMap = new Map();
    let maxCount = 0;
    let maxChar = "";
    for (const char of s) {
        const count = (frqMap.get(char) || 0) + 1;
        frqMap.set(char, count);

        if (maxCount < count) {
            maxCount = count;
            maxChar = char;
        }


    }

    if (maxCount > Math.floor((s.length + 1) / 2)) {
        return "";
    }
    let index = 0;
    const res = new Array(s.length);
    for (let i = 0; i < maxCount; i++) {
        res[index] = maxChar;
        index += 2;
    }

    frqMap.delete(maxChar);

    for (let [char, count] of frqMap) {
        while (count > 0) {
            if (index >= s.length) {
                index = 1;
            }
            res[index] = char;
            index += 2;
            count--;
        }
    }
    return res.join('');
};