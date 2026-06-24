function repeatedStringMatch(a, b) {
    const sizea = a.length;
    const sizeb = b.length;
    let miniRepeat = Math.ceil(sizeb / sizea);

    let newSt = a.repeat(miniRepeat);
    if (newSt.includes(b)) return miniRepeat;
    newSt += a;
    if (newSt.includes(b)) return miniRepeat + 1;

    return -1;
};