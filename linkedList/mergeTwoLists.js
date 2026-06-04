function mergeTwoLists(list1, list2) {
    let head = null;
    let tail = null;
    if (!list1) return list2;
if (!list2) return list1;
    while (list1 && list2) {
        let newNode = null;
        if (list1.val <= list2.val) {
            newNode = new ListNode(list1.val, null);
            list1 = list1.next;
        } else {
            newNode = new ListNode(list2.val, null);
            list2 = list2.next;
        }

        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }
    }
    while (list1) {
        tail.next = new ListNode(list1.val, null);
        list1 = list1.next;
        tail = tail.next;
    }
    while (list2) {
        tail.next = new ListNode(list2.val, null);
        list2 = list2.next;
        tail = tail.next;
    }
  return head;
};