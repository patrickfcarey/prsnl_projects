//create Node class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//2 pointer solution
function detectCycle(head){
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow){
            let cycleStart = head;
            while (cycleStart !== slow) {
                cycleStart = cycleStart.next;
                slow = slow.next;
            }
            let cycleLength = 1;
            fast = slow.next;

            while (slow !== fast) {
                fast = fast.next;
                cycleLength++;
            }

            return {
                hasCycle: true,
                cycleStart: cycleStart.data,
                cycleLength: cycleLength
            };

        }
    }
    return { hasCycle: false, cycleStart: null, cycleLength: 0 };
}

function createSampleList() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    return head;
}

function createCycleList() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = head.next.next;
    return head;
}

let list1 = createSampleList();
let list2 = createCycleList();

console.log(detectCycle(list1));
console.log(detectCycle(list2));