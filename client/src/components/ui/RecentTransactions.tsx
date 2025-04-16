import { DollarSign } from "lucide-react";
import React from "react";


export type Transaction = {
  title: string;
  date: string;
  indicator: 'payment' | 'receipt'
  description:string;
  amount: number;
};

interface TransactionItemRenderProps {
  TransactionList: Transaction[];
  openIndex: number | null;
  toggle: (index: number) => void;

}



export const TransactionItemRender: React.FC<TransactionItemRenderProps> = ({
  TransactionList,
  openIndex,
  toggle,
}) => 

  

 (

 

  

  <div className="w-full h-full p-4 bg-white rounded-md shadow">
    <h1 className="text-xl font-semibold mb-4">Transactions</h1>

    <div className="space-y-3 w-full">
      {TransactionList.map((item, index) => (
        <div
          key={index}
          className="w-full p-4 bg-green-100 rounded-md shadow-sm flex flex-col"
          onClick={() => toggle(index)}
        >
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign  className={`text-sm mb-3 ${
                    item.indicator === 'receipt' ? 'text-green-600' : 'text-red-600'
                  }`} />
            <div>
              <h1 className="text-lg">{item.title}</h1>
              <h4 className="text-sm">{item.date}</h4>
            </div>
          </div>
          <span className={`text-[#7A1CAC]  px-3 py-1 rounded
            ${item.indicator=== 'receipt' ? 'text-green-600' : 'text-red-600'}`}>
              {item.indicator === 'receipt' ? '+' : '-'}
            {item.amount}
          </span> </div>

          {openIndex === index && (
  <div className="w-full px-4 pb-4 text-sm text-gray-700 transition-all duration-300 bg-green-200">
    {item.description} </div> )}


        </div> ))}
       

    </div>
  </div>
);
