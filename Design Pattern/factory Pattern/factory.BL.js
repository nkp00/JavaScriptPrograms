function person(name, age, gender) {     // factory function

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.print=function(){
        return (`my name is ${this.name} and I am ${this.age} years old`);
    }

}
var person1 = new person("ram", 18, "male");       // creating new objects
console.log(person1.print());

//var person2 = new person("Gary", 25, "female")
//console.log(person2);

module.exports = { person }