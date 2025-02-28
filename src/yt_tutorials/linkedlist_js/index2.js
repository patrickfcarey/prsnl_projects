class Node {
    constructor(data, next = null) {
       this.data = data;
       this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert First node
    insertFirst(data) {
        this.head = new Node(data,this.head);
        this.size++;
    }
    // Insert last node
    insertLast(data) {
       let node = new Node(data);
       let current;

       // if empty make head
       if(!this.head){
        this.head = node;
       } else {
        current = this.head;

        while (current.next != null) {
            current = current.next;
        }
         current.next = node;
       }

    }
    // Insert at index
    insertAt(data, index) {
        //if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }
        
        //if first index
        if(index === 0) {
            this.head = new Node(data,this.head)
            return;
        }
 
        const node = new Node(data);
        let current, previous;
        //set current to first
        current = this.head;
        let count = 0;
        
        while(count < index) {
          previous = current;
          count++;
          current = current.next;
        }
    }
    // Get at index

    // Remove at index

    // Clear list

    // Print list data
    printListData() {
        let current = this.head;

        while(current) {
          console.log(current.data);
          current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.printListData();