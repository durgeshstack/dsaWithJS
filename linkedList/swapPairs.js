function swapPairs(head)  {
    if(!head || !head.next) return head;

    let st = head;
    let end = head.next;

    while(st && end){
        let temp = st.val;
        st.val = end.val;
        end.val=temp;

        st = end.next;
        if(st){
             end =st.next;
        }
       
    }
    return head;
};