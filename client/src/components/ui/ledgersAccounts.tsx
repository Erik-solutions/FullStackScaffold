import { useState } from "react";
import { Search } from "lucide-react";


export type ledgerEntry ={
    date:string;
    reference:string;
    description:string;
    debit:string;
    credit:string;
    businessName:string;
    Terms:string;
    dueDate:string;
    Status:string; 
} 

interface ledgerProps {
    ledgerEntryList:ledgerEntry[];
    selected:string;
};

export  const LedgerEntryRender: React.FC <ledgerProps> = ({ledgerEntryList,selected})=>
{ 
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index)};


 return(

<div>
<div className="my-4 flex justify-between">  <div>
    
<h1 className="text-lg text-gray-700">{selected ? selected : 'Accounts recievable'} </h1> 
    <h3 className="text-[12px] text-gray-700">  Current Balance: $45000.00 (Debit)</h3>
    </div>
    
     <div>
     <form action="" className="flex items-center gap-2">
  <div className="relative w-full max-w-md">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
      <Search className="w-5 h-5" />
    </span>
    <input
      type="text"
      placeholder="Search entries"
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</form>
        
     </div>
    
    </div>

    <div className="space-y-3 w-full">
    {ledgerEntryList.map((item,index)=> (
<div key={index} onClick={()=>toggleAccordion(index)}>
<div className="flex justify-between  border border-[#80CBC4] h-[4rem] items-center pl-2 rounded-lg">
<div className="flex flex-col justify-start w-[18%] "> <span className="text-sm text-gray-600">date</span> <span>{item.date}</span> </div>
<div className="flex flex-col justify-start w-[18%]"> <span className="text-sm text-gray-600">reference</span> <span>{item.reference}</span> </div>
<div className="flex flex-col justify-start w-[18%]"> <span className="text-sm text-gray-600">description</span> <span>{item.description}</span> </div>
<div className="flex flex-col justify-start w-[18%]"> <span className="text-sm text-gray-600">debit</span> <span>{item.debit}  </span> </div>
<div className="flex flex-col justify-start w-[18%]"> <span className="text-sm text-gray-600">credit</span> <span> {item.credit}</span> </div>
</div>  
{ openIndex  === index && (
         <div className="w-full border-y border-gray-200 mt-2">

        <div className="flex  justify-between w-[100%] "> 

           <div className="flex flex-col justify-start w-[40%] mt-2"> 
         <span className="text-sm text-gray-600 mt-2">Customer</span> 
         <span>{item.businessName}</span> </div>

         <div className="flex flex-col justify-start w-[40%] mt-4"> 
         <span className="text-sm text-gray-600 mt-2">Payment Terms</span> 
         <span>{item.Terms}</span> </div>
         </div>

         <div className="flex  justify-between w-[100%]"> 

        <div className="flex flex-col justify-start w-[40%] mt-4"> 
         <span className="text-sm text-gray-600 mt-2">Due Date</span> 
         <span className="my-2">{item.dueDate}</span> </div>

        <div className="flex flex-col justify-start w-[40%] mt-4"> 
         <span className="text-sm text-gray-600 mt-2">Status</span> 
         <span className="my-2">{item.Status}</span> </div>
         </div>

         </div>

 )}
</div>

    ))}
    


    </div>
</div>

)}