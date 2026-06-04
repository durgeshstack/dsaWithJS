 function rotateRight (head, k) {
    if(!head ||k===0) return head;
    let n = 0;
    let temp = head;

    while (temp) {
        n++;
        temp = temp.next;
    }
    if(k%n===0){ //tricky
        return head;
    }
    k =k>n?k%n:k; 
    const targetNode = n - k;
    temp = head;
    for (i = 1; i < targetNode; i++) {
        temp = temp.next;
    }
    const secondHead = temp.next;
    temp.next = null;
    let tail = secondHead;

    while (tail.next) {
        tail = tail.next;
    }
    tail.next = head;
    head = secondHead;

    return head;
};