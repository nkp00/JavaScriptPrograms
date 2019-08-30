var replace1=(items) =>{

   var items1;
   var items2;
   var items3;
    items1=items.replace(/<<name>>/,'Neeraj');
    items2=items1.replace(/<<full name>>/g,'Neeraj Kumar Prajapati');
    items3=items2.replace(/x{10}/g,'9454909090');
    items4=items3.replace(/\d{2}\/\d{2}\/\d{4}/,'30/08/2019');
    return items4;

}

module.exports={replace1}




