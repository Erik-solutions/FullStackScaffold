import {BalanceSheetProps,IncomeStatementProps,MarketOverviewProps,SalesReportProps,
    CustomerInsightsProps,ProductLaunchProps,reportRenderProps} from "./ReportTypes"

    import { useState } from "react";
    import { ArrowBigDown } from "lucide-react";






  

export const SalesReport:React.FC<SalesReportProps>=({ SalesReportItems}) =>(

    <div className="p-8">
  {SalesReportItems.map((item, index) => (
    <div key={index} className="relative flex justify-center rounded-lg
     items-center my-4 border-y  border-gray-200 h-[6rem] px-4">
      {/* Left-aligned */}
      <span className="absolute left-0">
        <h1 className="text-[24px] font-bold">{item.date}</h1>
        <h1 className="text-[12px] text-gray-700">{item.segment}</h1>
      </span>

      {/* Center-aligned */}
      <span className="text-center">
        <h1 className="text-[24px] font-bold">{item.productName}</h1>
        <h1 className="text-[12px] text-gray-700">{item.units}</h1>
      </span>

      {/* Right-aligned */}
      <span className="absolute right-0 text-right">
        <h1 className="text-[24px] font-bold">{item.unitPrice}</h1>
        <h1 className="text-[12px] text-gray-700">{item.total}</h1>
      </span>
    </div>
  ))}
</div>

)



export const MartketOverviewReport:React.FC<MarketOverviewProps>=({ MarketOverviewItems}) =>(

    <div className="p-8">
  {MarketOverviewItems.map((item, index) => (
    <div key={index} className="relative flex justify-center rounded-lg
     items-center my-4 border-y  border-gray-200 h-[6rem] px-4">
      {/* Left-aligned */}
      <span className="absolute left-0">
        <h1 className="text-[24px] font-bold">{item.market}</h1>
        <h1 className="text-[12px] text-gray-700">{item.region}</h1>
      </span>

      {/* Center-aligned */}
      <span className="text-center">
        <h1 className="text-[24px] font-bold">{item.sizeGrowth}</h1>
        <h1 className="text-[12px] text-gray-700">{item.growthRate}</h1>
      </span>

      {/* Right-aligned */}
      <span className="absolute right-0 text-right">
        <h1 className="text-[24px] font-bold">Top Competitors</h1>
        <h1 className="text-[12px] text-gray-700">{item.topCompetitors}</h1>
      </span>
    </div>
  ))}
</div>

)



export const CustomerInsightsReport:React.FC<CustomerInsightsProps>=({ CustomerInsightsItems}) =>(

    <div className="p-8">
  {CustomerInsightsItems.map((item, index) => (
    <div key={index} className="relative flex justify-center rounded-lg
     items-center my-4 border-y  border-gray-200 h-[6rem] px-4">
      {/* Left-aligned */}
      <span className="absolute left-0">
        <h1 className="text-[24px] font-bold">Customer Segment</h1>
        <h1 className="text-[12px] text-gray-700">{item.customerSegment}</h1>
      </span>

      {/* Center-aligned */}
      <span className="text-center">
        <h1 className="text-[24px] font-bold">Satisfaction Rating</h1>
        <h1 className="text-[12px] text-gray-700">{item.satisfactionRating}</h1>
      </span>

      {/* Right-aligned */}
      <span className="absolute right-0 text-right">
        <h1 className=" text-[24px] bg-green-500 font-bold flex items-center justify-between" > 
        <h1 className="text-[22px] bg-red-500 text-gray-700 mr-2">Purchase Frequency :</h1>{item.purchaseFrequency}</h1>
        <h1 className="text-[12px] text-gray-700 flex items-center">
            <h1 className="text-[12px] text-gray-700 mr-2">Satisfaction Rating :</h1>{item.satisfactionRating}</h1>
      </span>
    </div>
  ))}
</div>

)


export const ProductLaunchReport:React.FC<ProductLaunchProps>=({ ProductLaunchItems}) =>(

    <div className="p-8">
  {ProductLaunchItems.map((item, index) => (
    <div key={index} className="relative flex justify-center rounded-lg
     items-center my-4 border-y  border-gray-200 h-[6rem] px-4">
      {/* Left-aligned */}
      <span className="absolute left-0">
        <h1 className="text-[24px] font-bold">{item.launchDate}</h1>
        <h1 className="text-[12px] text-gray-700">{item.product}</h1>
      </span>

      {/* Center-aligned */}
      <span className="text-center">
        <h1 className="text-[24px] font-bold flex items-center">  <h1 className="text-[24px] font-bold mr-2"> 
        Units Sold :</h1>
            {item.unitsSold}</h1>
        <h1 className="text-[12px] text-gray-700 flex items-center">
            <h1 className="text-[12px] text-gray-700 mr-2 ">Customer Feedback : </h1>{item.customerFeedback}</h1>
      </span>

      {/* Right-aligned */}
      <span className="absolute right-0 text-right">
        <h1 className="text-[24px] font-bold"> challenges</h1>
        <h1 className="text-[12px] text-gray-700">{item.challenges}</h1>
      </span>
    </div>
  ))}
</div>

)


export  const ReportRender:React.FC<reportRenderProps>=({reportItems ,renderChild})=>{
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (
  <div className="px-6 ">
  {reportItems.map((item,index)=>(
   
    <div key={index}  >
<div className=" transition-colors delay-150 duration-300 bg-gray-90
 border cursor-pointer hover:bg-gray-100
border-gray-300 p-4 rounded-lg my-2 flex justify-between items-center">
 <span><h1 className="text-[22px] font-semibold">{item.name}</h1>
 <span className="text-[18px] text-gray-600"> {item.period} | {item.updated} 
 </span> </span>

 <ArrowBigDown  onClick={() => toggleItem}/> </div>
 {openIndex === index && (
            <div className="p-4">{renderChild(item)}</div>
          )}
</div>
 

)) } </div>
)
}