 function removeNthFromEnd (head, n) {
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) { 
        let temp = head;
        head = head.next;
        temp.next = null;
        return head;

    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }


    let deletableNode = slow.next;
    slow.next = deletableNode.next;
    deletableNode.next = null;
    return head;

};