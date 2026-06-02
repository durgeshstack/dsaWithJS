function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;

    // Find middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // For odd length, skip middle node
    if (fast) {
        slow = slow.next;
    }

    // Reverse second half
    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Compare
    let p1 = head;
    let p2 = prev;

    while (p2) {
        if (p1.val !== p2.val) {
            return false;
        }

        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
}