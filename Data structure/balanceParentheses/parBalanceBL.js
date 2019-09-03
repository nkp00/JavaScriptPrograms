function Stack() {
    var ar = [];
    top = 0;
    var x;

    this.push = function (x)    // addign an element to the stack
    {
        ar[top] = x;
        top = top + 1;
    }
    this.pop = function ()       // removing an element from the stack
    {
        if (top == -1)
            return "underflow";
        else {
            //var x=ar[top];
            top = top - 1;
        }
    }
    this.Isempty = function ()     // checkign if stack is empty
    {
        if (top == 0)
            return true;
        else
            return false;
    }

}
module.exports = { Stack }