// const fs=require('fs');
// const linkedlist=require("../unorderedList/list")
// var text=fs.readFileSync("../unorderedList/input.txt", "utf-8");
// var dataArray=text.split('\n');
ar = [];
ar1 = [];
ar2 = [];
ar3 = [];
ar5 = [];
ar6=[];
let a = 0;
let y = 100;
let z = 2;
let n = 0;

l=new Stack();
var prime = () => {
    for (let i = 0; i < 10; i++) {
        ar[i] = []
        ar[i][0] = (`${a}-${y} :`);
        a = y;
        y = y + 100;

    }
    let max = 100;                       // defining a range
    let k = 1;
    for (let j = 2; j < 1000; j++) {
        let s = 0;
        for (i = 2; i < j; i++) {
            if (j % i == 0)
                s++;
        }
        if (s == 0) {
            if (j <= max) {
                ar[n][k] = j;
               // l.push(j);
               ar5.push(j);
                k++;
            }
            else {
                max = max + 100;
                n = n + 1;
                k = 1;
                ar[n][k] = j;
                //l.push(j);
                ar5.push(j);
                k++;
            }

        }
    }
   
    for (var i = 0; i < 10; i++) {
        ar2 = anagram(ar[i]);
        ar3 = anagram(ar[i]);
       // ar3 = ar2;
        //console.log(ar2);            // printing prime anagrams in a range
        //ar2.splice(0,ar2.length)
    }
        //console.log(ar5);
        ar6=anagram(ar5);
    for(let i=0;i<ar6.length;i++)
            l.push(ar6[i]);
    console.log(l.print());                   // printing all prime anagrams
    return "";
}

newarray = [];
ar4 = [];
newarray1 = [];
finalarray = [];

function anagram(arr) {
    for (let i = 0; i < arr.length; i++) {
        var flag = 0;
       ar4.push(arr[i]);
       //l.push(arr[i]);

        var num = arr[i].toString();
        newarray = num.split("");
        for (let j = i + 1; j < arr.length; j++) {

            var num1 = String(arr[j]);
            newarray1 = num1.split("");
            if ((JSON.stringify(newarray.sort()) == JSON.stringify(newarray1.sort())) && (ar4.includes(arr[j]) == false)) {
                ar4.push(arr[j]);
               //l.push(arr[j]);
                flag++;
            }

        }
        if (flag == 0)
            ar4.pop();
            //l.pop();
    }
    return (ar4);
}






function Stack() {
    let head = null;
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    this.push = function (element) {
        let node = new Node(element)
        if (head == null)
            head = node;
        else {
            let currentnode = head;
            head = node;
            head.next = currentnode;
        }
    }
    this.print = function () {
        var str = "";
        let currentnode = head;
        while (currentnode != null) {
            //console.log(currentnode.element);
            str = str + currentnode.element + " ";
            currentnode = currentnode.next;
        }
        return str;

    }
    this.pop= function()
    {
        let currentnode = head;
        x = currentnode.element
        head = currentnode.next;

    }
    this.remove = function (x) {

        while (currentnode != null) {
            if (x == currentnode.element) {
                if (head.element == x)
                    head = currentnode.next;
                // console.log("2nd element");
                else
                    previous.next = currentnode.next;
                return "";
            }
            previous = currentnode;
            currentnode = currentnode.next;
        }

    }

}

module.exports = { prime }