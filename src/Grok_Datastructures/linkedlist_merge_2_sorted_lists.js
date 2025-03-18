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

// Helper function
function createSampleList() {
    let head = new Node(1);
    head.next = new Node(3);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    return head;
}
// Helper function
function createSampleList2() {
    let head = new Node(2);
    head.next = new Node(3);
    head.next.next = new Node(5);
    head.next.next.next = new Node(6);
    return head;
}
// Function to print the list
// Helper function
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

function mergeTwoSortedListsRecursive(list1, list2) {
    // Base cases, to get this far means you are at the tailend of the linkedlist
    // since the two linkedlists are sorted, this means you can just end here and take the other linkedlist
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    // Recursive step
    // if list1.data is smaller than, or equal to, list2.data then set list1.data 
    if (list1.data <= list2.data) {
        list1.next = mergeTwoSortedListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoSortedListsRecursive(list1, list2.next);
        return list2;
    }
}

let samplelist1 = createSampleList();
let samplelist2 = createSampleList2();

let mergedList = mergeTwoSortedListsRecursive(deepCopyList(samplelist1),deepCopyList(samplelist2));

printList(mergedList);