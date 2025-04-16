import { ListFilter,Download } from "lucide-react"
import { Ledger } from "@/components/ui/LedgerAccountsRender"
import { useState } from "react";

export default function Ledgers() {
    const [selectedValue, setSelectedValue] = useState<string>("");
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(event.target.value);
    };

    return(<>
    
    <div className="ledgers__container bg-[#EEEEEE] w-full h-full flex justify-between pl-4 pb-4">  
    <div>
<h1>Ledgers</h1>
<h3 className="text-base">View and manage account ledgers</h3>
    </div>
    <div className="w-[45%] flex justify-between items-center" >
    <select aria-label="Default select example" className='flex  w-[40%] mx-3 h-10 items-center rounded-lg bg-[#FFFFFF] p-2 '
    onChange={handleChange}>
  <option value="Accounts Payable" selected>Accounts Recievable</option>
  <option value="Accounts Recievable">Accounts  Payable</option>
  <option value="Cash Account">Cash Account</option>
  <option value="Revenue">Revenue</option>
  <option value="Expenses">Expenses</option>
</select>
<button className='flex  w-[36%] mx-3 h-10 items-center rounded-lg bg-[#FFFFFF]'> 
    <ListFilter className='mx-2' />   Filter</button> 

    <button className='flex  w-[36%] mx-3 h-10 items-center rounded-lg bg-[#FFFFFF]'> 
     <Download className='mx-2'/> Export </button> 

    </div>
   
      </div>
      <Ledger selected={selectedValue}/>
    </>) 
}