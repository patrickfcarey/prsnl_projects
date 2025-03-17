// First, let's define a basic Node class for our linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Iterative Solution
function reverseListIterative(head) {
    let prev = null;
    let current = head;
    let next = null;
    
    while (current !== null) {
        // Store next
        next = current.next;
        // Reverse the link
        current.next = prev;
        // Move prev and current one step forward
        prev = current;
        current = next;
    }
    
    // prev is the new head
    return prev;
}

// Recursive Solution
function reverseListRecursive(head) {
    // Base cases: empty list or single node
    if(head == null || head.next == null){
        return head;
    }
    // Recursive call
    let rest = reverseListRecursive(head.next);
    // Reverse the links
    head.next.next = head;
    head.next = null;
     return rest;
}

// Example usage:
function createSampleList() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    return head;
}

// Function to print the list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test the code
let list = createSampleList();
console.log("Original List:");
printList(list);

// Test iterative reversal
let reversedIterative = reverseListIterative(list);
console.log("Reversed List (Iterative):");
printList(reversedIterative);

// Create new list for recursive test
list = createSampleList();
console.log("Original List:");
printList(list);
let reversedRecursive = reverseListRecursive(list);
console.log("Reversed List (Recursive):");
printList(reversedRecursive);