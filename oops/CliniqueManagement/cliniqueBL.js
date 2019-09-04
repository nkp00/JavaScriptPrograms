/* searchDoctor is a fucntion which takes argument the list of doctor and 
search the doctor by by Name, Id, Specialization and Availability

* searchPatient is a fucntion which takes argument the list of doctor and 
search the doctor by by Name, Id, Specialization and Availability


*/
const input = require("readline-sync");
var searchDoctor = (doctor) => {
    var n = input.questionInt("1.Search by name:\n2.search by Id:\n3.Search by speciality;\n4.Search by Availbility:\n")
    switch (n) {
        case 1:
            let doc = input.question("enter the doctor name:");
            for (let i in doctor) {
                if (doc == doctor[i].name) {
                    console.log(doctor[i]);
                }
            }
            break;
        case 2:
            let docId = input.questionInt("enter the Id of the doctor:");
            for (let i in doctor) {
                if (docId == doctor[i].Id) {
                    console.log(doctor[i]);
                }

            }
            break;
        case 3:
            var docspec = input.question("enter the specialization:");
            for (let i in doctor) {
                if (docspec == doctor[i].Specialization) {
                    console.log(doctor[i]);
                }
            }
            break;
        case 4:
            var docavl = input.question("enter the availibility:");
            for (let i in doctor) {
                if (docavl == doctor[i].Availability) {
                    console.log(doctor[i]);
                }
            }
            break;
        default:
            console.log("You have entered a wrong choice");
    }
}

var searchPatient=(patient)=>{
    var n = input.questionInt("1.Search by name:\n2.search by Id:\n3.Search by Mobile number;\n4.Search by Age:\n")
    switch (n) {
        case 1:
            let name = input.question("enter the name of the patient:");
            for (let i in patient) {
                if (name == patient[i].name) {
                    console.log(patient[i]);
                }
            }
            break;
        case 2:
            let Id = input.questionInt("enter the Id of the patient:");
            for (let i in patient) {
                if (Id == patient[i].Id) {
                    console.log(patient[i]);
                }

            }
            break;
        case 3:
            var number = input.question("enter the MobileNumber of patient:");
            for (let i in patient) {
                if (number == patient[i].MobileNumber) {
                    console.log(patient[i]);
                }
            }
            break;
        case 4:
            var age = input.question("enter the age of patient:");
            for (let i in patient) {
                if (age == patient[i].age) {
                    console.log(patient[i]);
                }
            }
            break;
        default:
            console.log("You have entered a wrong choice");
    }
}

var appointment=(doctor,patient)=>{

    let name=input.question("Enter the patient name:");
    for(let i in patient){
        if(name==patient[i].name)
        var c=patient[i].name;
    }
    let doc= input.question("Enter the name of the docotor: ");
    for(let i in doctor )
        {
            if((doc==doctor[i].name)&&doctor[i].patientQueue .length<5)
            {
                console.log(`your appointment is booked with Dr.${doc}`);
                doctor[i].patientQueue .push(c)
                console.log(doctor[i]);

            }
        }
    } 

var popular=(doctor)=>{

    var c=0;
    var name;
    for (let i in doctor)
    {
        //c=doctor[i].patientQueue.length;
        if(c<=doctor[i].patientQueue.length){
            c=doctor[i].patientQueue.length;
            name=doctor[i].name;
        }
    }
    console.log(`Most popular doctor is Dr.${name}`);
}



module.exports = { searchDoctor,searchPatient,appointment,popular}