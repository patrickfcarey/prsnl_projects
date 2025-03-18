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

    
function addTwoNumbers(head1, head2, carry_over = 0){
        let temp_var = 0;
        
        // if both heads and carry_over are now null you return nothing, tail of the list
        if(head1 == null && head2 == null && carry_over == 0){
            return null;            
        }
        const val1 = head1 ? head1.data : 0;
        const val2 = head2 ? head2.data : 0;

        temp_var = val1 + val2 + carry_over;
        
        if(temp_var >= 10 ) {
            carry_over = 1;
            temp_var = temp_var % 10;
        } else {
            carry_over = 0;
        }
        
        const answer_node = new Node(temp_var);
        answer_node.next = addTwoNumbers(
            head1 ? head1.next : null,
            head2 ? head2.next : null,
            carry_over
        );
        return answer_node;
}

 
function createSampleList() {
    let head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(3);
    head.next.next.next = new Node(3);

    return head;
}

function createSampleList2() {
    let head = new Node(5);
    head.next = new Node(6);
    head.next.next = new Node(4);

    return head;
}
function createSampleList3() {
    let head = new Node(1);
    return head;
}

function createSampleList4() {
    let head = new Node(9);
    head.next = new Node(9);
    head.next.next = new Node(9);

    return head;
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
let samplelist2 = createSampleList2();
let samplelist3 = createSampleList3();
let samplelist4 = createSampleList4();

let mergedList = addTwoNumbers(deepCopyList(samplelist1),deepCopyList(samplelist2));
printList(mergedList);

mergedList = addTwoNumbers(deepCopyList(samplelist3),deepCopyList(samplelist4));
printList(mergedList);
