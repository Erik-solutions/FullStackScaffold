import React from 'react';
import { FileText } from 'lucide-react';

export type transactionItem = {
  date: string;
  description: string;
  amount: string;
  category: 'Expense' | 'Income' | 'Asset' | 'Liability' | 'Equity';
  Attachment?: string; // no quotes needed for string type
};

interface transactionProps {
  transactionList: transactionItem[];
}

export const Transaction: React.FC<transactionProps> = ({ transactionList }) => (
  <div className="table__container w-full rounded-lg">

<table className='w-[98%] rounded-lg border-collapse shadow-md'>
      <thead>
        <tr className='bg-[#AFDDFF] border-b border-white hover:bg-gray-100'>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left ">Amount</th>
            <th className="p-4 text-left">Attachment</th>
        </tr>
      </thead>
      <tbody>

    {transactionList.map((item, index) => (
        <tr key={index} className='bg-[#AFDDFF] border-b border-white hover:bg-gray-100'>
          
            
        
        <td className='py-3 px-4'>Date: {item.date}</td>
        <td className='py-3 px-4'>{item.description}</td>
        <td className='py-3 px-4'>{item.category}</td>
        <td className={`py-3 px-4 ${item.category==='Expense' || item.category === 'Liability' ?
         'text-red-500' : 'text-green-500'}`}>{item.category==='Expense' || item.category === 'Liability' ?
         '-' : '+'}
            {item.amount}</td>
        <td className="py-3 px-4 ">
  <FileText  color={item.Attachment ? 'green' : 'gray'}/>
</td>

      </tr>
    ))}
      
    
          </tbody>
        </table>
      
   
  </div>
);
