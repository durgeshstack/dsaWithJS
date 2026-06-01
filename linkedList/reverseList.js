function reverseList (head) {
    let current = head;
    let pre = null;
    let nxt = null;

    while (current !== null) {
       nxt = current.next;
       current.next = pre;
       pre =current;
       current = nxt;
       
    }

   head = pre;
   return pre;

};