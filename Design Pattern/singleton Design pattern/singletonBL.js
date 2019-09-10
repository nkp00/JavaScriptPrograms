/* singleton is a fucntion which takes name as argument and returns a instant of object laptop.
*/
var instance;
var flag = false;                               
function singleton(name) {
    function createInstance() {
        var laptop = {};                        // taking an empty object
        laptop.name = name;                     // setting property of that object
        laptop.status = "running"
        return laptop;
    }    
    if (!flag) {
        instance = createInstance();
        flag=true;
        return instance;
    }
    else
        return instance;
}
var laptop1 = singleton("Hp");             // creating an object from the function
var laptop2 = singleton("Dell");
// console.log(laptop1);
// console.log(laptop2);
if(laptop1===laptop2)                   // checking if both the instances pointing to the same object
    console.log("laptop 1 and laptop 2 are pointing to the same object");

module.exports = { singleton }