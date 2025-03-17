class Node {
   constructor(data){
    this.data = data;
    this.next = null;
   }    
}

function createSampleList() {
    let head = new Node(1);
    head.next = new Node(3);
    head.next.next = new Node(4);
    return head;
}

function createSampleList2() {
    let head = new Node(2);
    head.next = new Node(3);
    head.next.next = new Node(5);
    head.next.next.next = new Node(6);
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

function mergeTwoSortedListsRecursive(list1, list2) {
    // Base cases, to get this far means you are at the end of the linkedlist
    // since the two linkedlists are sorted, this means you can just end here and take the other linkedlist
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    // Recursive step
    if (list1.data <= list2.data) {
        list1.next = mergeTwoSortedListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoSortedListsRecursive(list1, list2.next);
        return list2;
    }
}

let list1 = createSampleList();
let list2 = createSampleList2();

let mergedList = mergeTwoSortedListsRecursive(list1,list2);

printList(mergedList);