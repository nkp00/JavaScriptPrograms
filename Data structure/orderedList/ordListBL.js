function Linklist1()
{
    let head=null;
    let Node=function(element)
    {
        this.element=element;
        this.next=null;
    };
    this.add=function(element)
    {
        let node=new Node(element)
        if(head==null)
        {
            head=node;
            head.element=element;
        }
        
        else
        {
            let currentnode=head;
            previous=head;
            while(currentnode.next!=null )
            {   
                if(currentnode.element>element)
                {
                    temp=currentnode;
                    currentnode=node;
                    currentnode.next=temp;
                    return "";
                }
                else
                currentnode=currentnode.next;
            }
            //let temp=currentnode;
            head=node;
            head.next=currentnode;
            //currentnode.next=node;
        }
    } 
    this.print=function()  
    {
        var str=[];
        let currentnode=head;
        while(currentnode!=null)
        {
            //console.log(currentnode.element);
            //str=str+currentnode.element+" ";
            str.push(currentnode.element);
            currentnode=currentnode.next;
        }
        return str;

    }
    this.search=function(x)
    {
        let currentnode=head;
        while(currentnode!=null)
        {
            if(x==currentnode.element)
            {
                this.remove(x)
               //console.log("found");

                return "";
            } 
            currentnode=currentnode.next;       
        }
        this.add(x);
    }
    this.remove=function(x)
    {
        let currentnode=head;
        let previous=currentnode;
        while(currentnode!=null)
        {
            if(x==currentnode.element)
            {   
                if(head.element==x) 
               head=currentnode.next;
               // console.log("2nd element");
                else
                previous.next=currentnode.next;
                return "";
            }
            previous=currentnode;
            currentnode=currentnode.next;
        }

    }

}
 
module.exports={Linklist1}
