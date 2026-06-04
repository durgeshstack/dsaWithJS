function  oddEvenList (head) {
    if(!head || !head.next) return head;
    let tail = head;
    let n = 1;
    while (tail.next) {
        tail = tail.next;
        n++;
    }
    if(n<=2){
        return head;
    }
    let current = head;
    let pre = null;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pre.next = current.next;
            tail.next = current;
            tail = tail.next;
            current.next = null;
            current = pre.next;
            pre = null;
        } else {
            pre = current;
            current = current.next;
        }

    }

    return head;
};