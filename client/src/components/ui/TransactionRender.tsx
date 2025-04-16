import {Transaction,transactionItem} from './Transaction'
import {ListFilter }  from 'lucide-react';


const transactionList: transactionItem[] = [
    {
      date: '2025-04-01',
      description: 'Office Rent',
      amount: '1500.00',
      category: 'Expense',
      Attachment: ''
    },
    {
      date: '2025-04-03',
      description: 'Client Payment - Project Alpha',
      amount: '5000.00',
      category: 'Income',
      Attachment: 'payment_receipt_alpha.pdf'
    },
    {
      date: '2025-04-05',
      description: 'Laptop Purchase',
      amount: '1200.00',
      category: 'Asset',
      Attachment: 'laptop_invoice.pdf'
    },
    {
      date: '2025-04-07',
      description: 'Bank Loan',
      amount: '10000.00',
      category: 'Liability',
      Attachment: 'loan_agreement.pdf'
    },
    {
      date: '2025-04-10',
      description: 'Owner Investment',
      amount: '3000.00',
      category: 'Equity',
      Attachment: 'investment_receipt.pdf'
    },
  ];
  
   const TransactionRender=()=>{
  return(<>
  <div className='transaction__header flex justify-between items-center m-4'>
  <div>
    <h1 className='' >Transactions</h1>
    <h3 className='text-base pl-3'>Manage your financial transactions</h3>
    </div>

    <div className='w-[30%] flex justify-between'> 
    <button className='flex  w-[36%] mx-3 h-10 items-center rounded-lg bg-[#EFEFEF]'> 
    <ListFilter className='mx-2' />   Filter</button> 
    <button className='flex  w-[48%] h-10 
     items-center px-2 bg-[#AFDDFF] rounded-lg'>+ Transaction</button> </div>
  </div>

  <Transaction transactionList={transactionList} />
  
  </>)
  }

  export default TransactionRender