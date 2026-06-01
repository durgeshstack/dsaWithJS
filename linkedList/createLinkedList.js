function Node (val){
    return {
        val,next:null
    }
}
class MyLinkedList {
    constructor(){
        this.size=0;
        this.head=null;
    }
get(index){
    if(index < 0 || index >= this.size) return -1;

    let temp = this.head;

    for(let i=0;i<index;i++){
        temp = temp.next;
    }

    return temp.val;
}
    addAtHead(val){
        const newNode= new Node(val);
        newNode.next = this.head;
        this.head=newNode;
        this.size++;
    }
    addAtTail(val){
        let temp = this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        const newNode = new Node(val);
        temp.next = newNode;
        this.size++;
    }
    addAtIndex(index,val){
        let temp = this.head;
        const mini_index= Math.min(index,this.size-1);
        for(let i=0;i<mini_index;i++){
         temp=temp.next;
        }
        const newNode = new Node(val);
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
    }
    deleteAtIndex(index){
        let temp = this.head;
        let pre = temp;
        if(index>(this.size-1)){
            throw new Error("index out of range")
        }
        for(let i=0;i<index;i++){
            pre=temp;
         temp=temp.next;
        }
        pre.next = temp.next;
        temp.next=null;
        this.size--;
        
    }

}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */