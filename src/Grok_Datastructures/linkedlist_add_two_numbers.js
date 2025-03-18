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

    
function addTwoHelper(head1, head2, carry_over = 0){
        let temp_var = 0;
        
        // if both heads are now null you return nothing, tail of the list
        if(head1 == null && head2 == null){
            return null;            
        }else if(head1 != null && head2 == null){
            return new Node(head1.data + carry_over);
        }else if(head2 != null && head1 == null){
            return new Node(head2.data + carry_over);
        }

        temp_var = head1.data + head2.data + carry_over;
        
        if(temp_var >= 10 ) {
            carry_over = 1;
            temp_var = temp_var % 10;
        } else {
            carry_over = 0;
        }
        
        const answer_node = new Node(temp_var);
        answer_node.next = addTwoHelper(head1.next, head2.next, carry_over);
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


let mergedList = addTwoHelper(deepCopyList(samplelist1),deepCopyList(samplelist2));
printList(mergedList);
