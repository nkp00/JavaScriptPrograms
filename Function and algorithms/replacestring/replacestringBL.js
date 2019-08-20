var replaceName= (name) =>{
    if(name.length<3){
        return "wrong input";

    }
    return "Hello "+name+ ", how are you?";

}
module.exports ={replaceName}