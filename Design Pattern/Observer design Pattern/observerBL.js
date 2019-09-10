/*
Observer pattern allows a Subject to publish updates to a group of Observers. 
The Subject maintains a list of Observers and provides an interface for objects to register as Observers
*/


function subject() {
    this.list = [];                                        // observer List
    this.subscribe = function (observer) {
        this.list.push(observer);                        // adding the observer to the list
    }
    this.unsubscribe = function (observer) {
        let index = this.list.indexOf(observer);
        this.list.splice(index, 1);                       // removing the observer from the list
    }
    this.notify = function (observer) {
        let index = this.list.indexOf(observer);
        console.log(`${this.list[index].name} is notified`);  // notifying a particular observer
    }
    this.notifyAll = function (list) {
        for (let i in this.list) {
            console.log(`${this.list[i].name} is notified`)  // notifying all observer
        }

    }
}
function observer(name) {
    this.name = name;

}

var subject1 = new subject();
var observer1 = new observer("a");
var observer2 = new observer("b");
//console.log(observer1);
subject1.subscribe(observer1);
subject1.subscribe(observer2);
console.log(subject1.list)
subject1.notify(observer2);
subject1.notifyAll();

module.exports = { subject, observer }