function addTwoNumbers(l1, l2) {
    let sum = null;
    let tail = null;
    let carry=0;

    while(l1 || l2){
        let firstVal = (l1 && l1.val)?l1.val:0;
        let secondVal = (l2 && l2.val)?l2.val:0;

        let total = firstVal+secondVal+carry;
         let val = total%10;
       
         carry = Math.floor(total/10);
         const newNode =  new ListNode(val,null);
         if(sum===null){
            sum = newNode;
            tail=newNode;
         }else{
            tail.next = newNode;
            tail = tail.next;
         }
         
         if(l1){
            l1 = l1.next;
         }
         if(l2){
            l2 = l2.next;
         }


    }
    if(carry>0){
       const newNode =  new ListNode(carry,null); 
         tail.next = newNode;
         tail = tail.next;
    }
    return sum;
};