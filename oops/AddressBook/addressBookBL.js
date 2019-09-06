/* add is a function which will add a new person to the address book.
*  remove is a function which takes the address book as argument and deletes the desired person's information
*  update is function which takes an address book as argument update the information of
   a particular person.
*  Display is fucntion which print the addess book
*  create is function which creates a new address book
*  saveAs is fucntion which allows you to change the filename of an existing file


*/
const input = require("readline-sync");
const fs = require('fs');
var savedBook = [];                            // defining an array to save the content of new created book
var add = () => {
    var object3 = { FirstName: "", LastName: "", Address: "", City: "", State: "", Zip: "", PhoneNumber: "" }
    object3.FirstName = input.question("Enter your first name:");
    object3.LastName = input.question("Enter your LastName:");
    object3.Address = input.question("Enter your Address:");
    object3.City = input.question("Enter city:");
    object3.State = input.question("Enter State name:");
    object3.Zip = input.questionInt("Enter your Zip number:");
    object3.PhoneNumber = input.questionInt("Enter your Mobile Number:")

    return object3;

}
var remove = (record) => {
    var name = input.question("Enter the name you want to delete");
    for (let i in record) {
        if (record[i].FirstName == name) {
            record.splice(i, 1);
        }
    }
    console.log(record);
    return "";
}
var update = (record) => {

    var person = input.question("Enter the first name of the person to update his information:");
    for (let i in record) {
        if (person == record[i].FirstName) {

            console.log("Enter what do you want to update:");
            var item = input.questionInt("1.LastName\n2.Address\n3.City\n4.State\n5.Zip\n6.PhoneNumber:\n");
            switch (item) {
                case 1:
                    record[i].LastName = input.question("Enter the new last name:");
                    break;
                case 2:
                    record[i].Address = input.question("Enter the new Address:");
                    break;
                case 3:
                    record[i].City = input.question("Enter the new City:");
                    break;
                case 4:
                    record[i].State = input.question("Enter the new State:");
                    break;
                case 5:
                    record[i].Zip = input.questionInt("Enter the new Zip:");
                    break;
                case 6:
                    record[i].PhoneNumber = input.questionInt("Enter the new PhoneNumber:");
                    break;
                default:
                    return "You have entered a wrong choice";

            }
        }
    }
    return record;
}

var display = (record) => {

    record.sort(function (x, y) {         // x and y are just two temporary variables used to define comparision function
        var nameA = x.LastName.toLowerCase(), nameB = y.LastName.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    })
    console.log(record);
}

var create = () => {

    var object3 = [];
    var number = input.questionInt("Enter the number of person in the new address book:")
    while (number) {
        var object4 = { FirstName: "", LastName: "", Address: "", City: "", State: "", Zip: "", PhoneNumber: "" }
        object4.FirstName = input.question("Enter your first name:");
        object4.LastName = input.question("Enter your LastName:");
        object4.Address = input.question("Enter your Address:");
        object4.City = input.question("Enter city:");
        object4.State = input.question("Enter State name:");
        object4.Zip = input.questionInt("Enter your Zip number:");
        object4.PhoneNumber = input.questionInt("Enter your Mobile Number:")
        console.log("......................................");
        object3.push(object4);

        number--;
    }
    return object3;
}

var open = (record, book) => {

    let choice = input.question("Enter the file name:");
    let item1 = JSON.parse(fs.readFileSync(`../AddressBook/${choice}.json`));
    console.log(item1);
    return "";
}

var save = (record) => {

    savedBook = record;

    let choice = input.questionInt("1.Add a person\n2.Delete\n3.Update\n4.Display:\n");
    switch (choice) {
        case 1:
            var newdetails = add()
            record.push(newdetails)
            fs.writeFileSync("../AddressBook/savedBook.json", JSON.stringify(savedBook));
            break;
        case 2:
            fs.writeFileSync("../AddressBook/savedBook.json", JSON.stringify(remove(savedBook)));
            break;
        case 3:
            fs.writeFileSync("../AddressBook/savedBook.json", JSON.stringify(update(savedBook)));
            break;
        case 4:
            display(savedBook);
            break;
        case 5:
        default:
            console.log("You have entered a wrong choice");
    }
}

var saveAs = () => {

    let name = input.question("enter the file name:")
    let name1 = input.question("enter the new name")
    fs.writeFileSync(`../AddressBook/${name1}.json`, (fs.readFileSync(`../AddressBook/${name}.json`)))
    return "";
}

module.exports = { add, remove, update, display, create, open, save, saveAs }










/*   simple code to add a new address book.

var object1=[{},{},{},{},{},{},{}];
var details=["FirstName","LastName","Address","City","State","Zip","PhoneNumber"]
var add=()=>{
    for(i in details)
    {
        object1[i][details[i]]=input.question(`Enter your ${details[i]}:`);
    }
    return object1;
}

*/