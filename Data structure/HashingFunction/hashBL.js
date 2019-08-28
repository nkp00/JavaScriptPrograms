// const fs=require('fs');
// const linkedlist=require("../unorderedList/list")
// var text=fs.readFileSync("../unorderedList/input.txt", "utf-8");
// var dataArray=text.split('\n');






function Linkedlist ()
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
        head=node;
        else
        {
            let currentnode=head;
            while(currentnode.next!=null)
            {
                currentnode=currentnode.next;
            }
            currentnode.next=node;
        }
    } 
    this.print=function()  
    {
        var str="";
        let currentnode=head;
        while(currentnode!=null)
        {
            //console.log(currentnode.element);
            str=str+currentnode.element+" ";
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

module.exports={Linkedlist}