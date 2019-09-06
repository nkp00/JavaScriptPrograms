/************************************************************************
 * @purpose :Mainting an addressBokk
 * @file: addressBookBL.js
 * @overview: It is a program that can be used to maintain an address book.
 *  An address book holds a collection of entries, each recording a person's first
 *  and last names, address, city, state, zip, and mobile number
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 03/09/2019
 */

const input = require("readline-sync");
const addressBookobject = require("../AddressBook/addressBookBL");
const fs = require('fs');
var originalRecord = JSON.parse(fs.readFileSync("../AddressBook/record.json"));

//console.log(record);

var choice1 = input.questionInt("1.create a new address Book\n2.open\n3.save\n4.save as:\n");

switch (choice1) {
    case 1:
        var book = ddressBookobject.create();
        fs.writeFileSync("../AddressBook/NewBook.json", JSON.stringify(book));
        break;
    case 2:
        addressBookobject.open(originalRecord, book);
        break;
    case 3:
        addressBookobject.save(originalRecord);
        break;
    case 4:
        addressBookobject.saveAs();
        break;
    default:
        console.log("You have entered a wrong choice")
        break;

}