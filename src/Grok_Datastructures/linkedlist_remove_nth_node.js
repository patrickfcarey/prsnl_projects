class Node {
    constructor(data){
     this.data = data;
     this.next = null;
    }    
 }

//Use this to create a copy of an object, so the function acting on your object is not changing the original object
function deepCopyList(head) {
    if (!head) return null;
 
    // Create new head node
    let newHead = new Node(head.data);
    let currentOriginal = head.next;
    let currentNew = newHead;
    
    // Iterate through the list, copying each node
    while (currentOriginal) {
        currentNew.next = new Node(currentOriginal.data);
        currentOriginal = currentOriginal.next;
        currentNew = currentNew.next;
    }
    
    return newHead;
}


 function createSampleList() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);

    return head;
}

// given integer node_to_remove
// remove node that is node_to_remove distance from the tail.next
function removeNthNodeIteratively(head, node_to_remove){
    // Create a dummy node to handle edge cases (like removing head)
    let dummy = new Node(0);
    dummy.next = head;

    let slow_node = dummy;
    let fast_node = dummy;

    // set fast_node to be node_to_remove distance from head/slow_node
    // this allows slow_node to be at Nth-1 slot when fast_node gets to the tail
    for(let i = 0; i < node_to_remove; i++){
        fast_node = fast_node.next;
    }

    while(fast_node.next !== null){
        slow_node = slow_node.next;
        fast_node = fast_node.next;
    }
    slow_node.next = slow_node.next.next;
    return dummy.next;
}

// Recursive solution
function removeNthNodeRecursively(head, n) {
    // Base case: empty list
    if (!head) return null;
    
    // Use a wrapper object to maintain count across recursive calls
    let counter = { count: 0 };
    
    // Helper recursive function
    function removeNthHelper(node, n, counter) {
        // If we reach the end of the list
        if (!node) return null;
        
        // Recursively process the next node
        node.next = removeNthHelper(node.next, n, counter);
        
        // Increment counter as we come back up the recursion
        counter.count++;
        
        // When counter matches n+1, we're at the node before the one to remove
        if (counter.count === n) {
            return node.next;
        }
        
        return node;
    }
    
    // Add dummy node to handle case of removing head
    let dummy = new Node(0);
    dummy.next = head;
    
    return removeNthHelper(dummy, n, counter).next;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

let samplelist1 = createSampleList();
let mergedList = removeNthNodeIteratively(deepCopyList(samplelist1),2);
printList(mergedList);
mergedList = removeNthNodeIteratively(deepCopyList(samplelist1),1);
printList(mergedList);

mergedList = removeNthNodeRecursively(deepCopyList(samplelist1),2);
printList(mergedList);
mergedList = removeNthNodeRecursively(deepCopyList(samplelist1),1);
printList(mergedList);