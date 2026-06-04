function deleteDuplicates(head) {
    let st = head;
    let end = head;
    let pre=null;

    while(end){
        if(end.val!==st.val){
            st.next=end;
            st=end;
        }else if(end.next===null){
            st.next=end.next;
        }
          end=end.next;
    }
    return head;
};