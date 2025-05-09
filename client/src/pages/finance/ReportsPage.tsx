import { ListFilter,Download } from "lucide-react"
import { Reports } from "@/components/ui/ReportsData";
import { ReportsContent } from "@/components/ui/ReportsData";
export default function ReportPage()
{
    return (<>
        <div className="flex justify-between items-center p-6">
<div>  <span> <h1 className="text-[34px] font-bold">Reports</h1>
 <h3 className="text-gray-600 text-[18px]">View and analyze financial reports</h3>
 </span></div>


            <div className='w-[30%] flex justify-between'> 
    <button className='flex  w-[36%] mx-3 h-10 items-center rounded-lg bg-white text-black border border-gray-200'> 
    <ListFilter className='mx-2' />   Filter</button> 
    <button className='flex  w-[48%] h-10 text-white bg-black justify-center 
     items-center px-2 bg-[#AFDDFF] rounded-lg'><Download className="mr-4 w-5 h-5"/>Extract All</button> </div>
  
        </div>
< Reports/>

        </>
    );
}