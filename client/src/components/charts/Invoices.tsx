import { Download } from "lucide-react";
import React  from "react";

export type invoiceItem={
    InvoiceNumber?:string;
    dueDate:string;
    amount: string;
    companyName:string
    status: 'Paid' | 'Overdue' | 'Pending'
}

interface InvoiceProp{
    invoiceList:invoiceItem[];

}




export  const InvoiceRender: React.FC <InvoiceProp> = ({invoiceList})=>(

    <div className="invoices__container mt-4">
            {invoiceList.map((item,index) => (
                <div className="invoice w-[95%] border border-blue-300 my-2 p-4 rounded-lg" key={index}> 
                <div className="flex justify-between w-full items-center"> <span><h1 className="text-[24px]">{item.companyName}</h1>
                        <h3 className="text-base text-gray-700">{item.InvoiceNumber}</h3> </span>  
                        <span className="flex justify-between w-[20%] items-center ">
                            <h2 className={` h-10 text-lg w-[34%] rounded-lg flex items-center justify-center
                            ${item.status === 'Paid'? 'bg-green-700' : 
                            item.status === 'Pending'? 'bg-[#FFF2AF]' : 'bg-[#FF6363]' }`}> {item.status}</h2>  
                        <button className="w-[58%] h-12 rounded-lg flex  items-center pl-2"> <Download className="mr-2" /><span>Download</span></button>   </span> 
                    </div>

                <div  className="flex justify-between w-full items-center">
                
                <span><h1 className="text-base text-gray-700 mb-2"  >Due Date</h1>
                <h3 className="font-semibold text-[14px]"> {item.dueDate} </h3>
                </span>
                <span> <h2 className="text-[18px] text-gray-700 mb-2">Amount</h2><h3 className="font-semibold text-[18px]"> {item.amount}</h3> </span>
                
                </div> </div>
            )
            
            )}



    </div>


)