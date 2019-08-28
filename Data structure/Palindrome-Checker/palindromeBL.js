function Dqueue()
{
    var ar=[];
    front=ar.length;
    rear=0
    var x;

    this.addRear = function (x)    // addign an element to the stack
    {  
        if(rear==0)
        {
            ar[rear]=x;
            rear=rear+1;
        }
        else
        {
            ar[rear]=ar[rear-1];
            ar[rear]=x;
            rear=rear+1;
        }

    }
    this.removeRear=function ()       // removing an element from the stack
    {   
        if(front==-1)
        return "underflow";
        else
        {
            var x=ar[front];
            front=front+1; 
            return x;
        }
    }
    this.Isempty=function()     // checkign if stack is empty
    {
        if(front==rear)
        return true;
        else
        return false;
    }

}
module.exports={Dqueue}