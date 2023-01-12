//  it is a linear data structure and the elements in the list are linked through pointers 
// Array is stored congiguously but linked it not 
// these can used for instance in spotfiy where we can traverse back and forth and they are efficient than regular arrays
// they usually have head and tail that can be used to determine the first and the last pointer and the values in between points to each other 

import { LinkedListNode } from './LinkedListNode'

interface List<P>{
    head: LinkedListNode<P>
    tail:LinkedListNode<P>
    size:number;
}


class LinkedList<P> {
    
    private list:List<P> |undefined
    
    constructor(){
        this.list = undefined; 
    }

    size(){
        if(this.list) return this.list.size
        return 0
    }

    isEmpty(){
        if(!this.list) return false
        return true
    }

    addFront(val:P):void{
        const newNode = new LinkedListNode(val)

        if(!this.list){
            this.list = {
                head: newNode,
                tail:newNode,
                size:1
            }
        }else{
            this.list.head.prev = newNode
            newNode.next = this.list.head

            this.list.head = newNode
            this.list.size +=1
        }
    }

    addBack(val:P){
        const newNode =new LinkedListNode<P>(val)
        if(!this.list){
            this.list = {
                head:newNode,
                tail:newNode,
                size:1
            }
        }else{
            this.list.tail.next = newNode
            newNode.prev = this.list.tail
            this.list.tail = newNode
            this.list.size += 1;
        }
    }
    addAtIndex(index:number, val:P){
        if(index ==0 ){
            this.addFront(val)
        }
        if(index == this.size()){
            this.addBack(val);
        }

        if(index <0|| index >= this.size() || !this.list){
            throw new Error("error")
        }

        let current = this.list.head
        for(let k = 0; k < index-1;k++){
            current = current.next!
        }

        const newNode = new LinkedListNode(val)
        
        current.next!.prev = newNode
        newNode.next = current.next

        newNode.prev = current
        current.next = newNode
        this.list.size += 1


    }

    get(i:number){
        if(i< 0 || i>= this.size()|| !this.list){
            throw new Error("out of bounds")
        }
        let j = 0
        let current = this.list.head
        while (j < i){
            current = current.next!
            j++
        }
        return current.val;
    }

     removeFront(){
        if(!this.list) throw new Error("the list does not exist")
        const val = this.list.head.val
        if(this.list.head.next){
            this.list.head.prev = null
            this.list.head =this.list.head.next
            this.list.size -=1 
        }else{
            this.list = undefined
        }
        return val
     }

     removeBack(){
        if(!this.list) throw new Error("The list does not exist")
        const val = this.list.tail.val

        // this means more than one value exist
        if(this.list.tail.prev){
            this.list.tail.prev.next = null
            this.list.tail = this.list.tail.prev
            this.list.size -=1
        }else{
            this.list = undefined
        }
        return val
     }

     removeAt(index:number){
        if(index == 0){
            return this.removeFront()
        }
        if(index == this.size()-1){
            return this.removeBack()
        }
        if(index<0 || index >= this.size() || !this.list){
            throw new Error("out of bounds")
        }
        let j= 0
        let cur =  this.list.head 
        while(j<index){
            cur = cur.next!
            j +=1
        }
        cur.next!.prev = cur.prev
        cur.prev!.next = cur.next
        this.list.size -=1
        return cur.val
     }
     clear(){
         this.list = undefined
     }
    
}

const linkedList = new LinkedList();
linkedList.addFront(2)
linkedList.addFront(3)
linkedList.addBack(5)
console.log(linkedList.get(0))

console.log(linkedList.get(1))
console.log(linkedList.get(2))