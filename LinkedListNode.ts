// Linked list class that takes the value of a node and pointer that will point to the other nodes back and forth 
export class LinkedListNode<P>{
    val :P;
    next:LinkedListNode<P> |null
    prev:LinkedListNode<P> |null

    constructor(val:P){
        this.val =val;
        this.prev = null;
        this.next = null;
    }
}