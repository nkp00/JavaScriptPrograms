
/*
Suffle is a function which arrange the cards and stores in array(array1);
deckSuffle is a function which suffle the deck of cards
print is a fucntion which distribute and print the cards.
*/
var suffle = () => {
    deck = {
        suit: ["♣", "♦", "♥", "♠ "],
        rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    }
    var array1 = [];
    var queue = new Linkedlist();          // storing 52 cards in a array
    for (let i in deck.suit) {
        for (let j in deck.rank)
            queue.push(` ${deck.rank[j]} of ${deck.suit[i]} `);
    }
    //queue.pop();

    // print(deckSuffle(array1));
    // console.log(queue);
    suffleDeck(queue);
    //console.log(queue);

    return "";
}

var suffleDeck = (queue) => {

    currentnode = queue.head;
    //console.log(currentnode.next);
    while (currentnode.next) {
        let temp = queue.head;
        let n = Math.floor(Math.random() * 10);
        for (let i = 0; i <= n; i++) {
            temp = temp.next;
        }
        let tempElement = currentnode.value;
        currentnode.value = temp.value;
        temp.value = tempElement;
        currentnode = currentnode.next;
    }
    console.log(queue);
}
player = {

    player1={
        deck: data
    },

    player2={
        deck: data
    },

    player3={
        deck: data
    },

    player4={
        deck: data
    }
}
var element = 0;
function Linkedlist() {
    this.head = null;
}
var front = null;
var rear = null;

Linkedlist.prototype.push = function (element) {
    var node = {
        value: element,
        next: null
    }
    if (!this.head) {
        this.head = node;
        front = node;
        rear = node;

    }
    else {
        currentnode = this.head;
        while (currentnode.next) {
            currentnode = currentnode.next;
        }
        currentnode.next = node;
        rear = rear.next;
    }
}

Linkedlist.prototype.pop = function () {
    if ((this.head == null) || (front == rear && front.next != null)) {
        console.log("List is empty");
        return "";
    }
    else {
        var x = front.value
        //  console.log(front.value);
        this.head = front.next;
        front = this.head;
    }
    return x;
}

var queue = new Linkedlist();


module.exports = { suffle }