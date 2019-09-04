/************************************************************************
 * @purpose :Mentaining a clinique
 * @file: cliniqueBL.js
 * @overview:  This programme is used to manage a list of Doctors associated with the Clinique.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 04/09/2019
 */
const input = require("readline-sync");
const cliniqueobject = require('../CliniqueManagement/cliniqueBL');
const fs = require('fs')
var items = fs.readFileSync("../CliniqueManagement/doctor.json");  // reading the input JSON file
var doctor = JSON.parse(items);
for (let i in doctor) {
    doctor[i].patientQueue = new Array();
}
var items1 = fs.readFileSync("../CliniqueManagement/patient.json");
var patient = JSON.parse(items1)
while (1) {
    let choice = input.questionInt("1.Search doctor:\n2.Search patient:\n3.Book an appointment:\n4.Check the popular doctor:\n5.check doctors:\n")
    switch (choice) {
        case 1:
            cliniqueobject.searchDoctor(doctor);
            break;
        case 2:
            cliniqueobject.searchPatient(patient);
            break;
        case 3:
            cliniqueobject.appointment(doctor, patient);
            break;
        case 4:
            cliniqueobject.popular(doctor);
        case 5:
            console.log(doctor);
            break;

        default:
            console.log("You have entered wrong key:");
            break;
    }
}
//console.log(doctor);
//console.log(patient[0]);