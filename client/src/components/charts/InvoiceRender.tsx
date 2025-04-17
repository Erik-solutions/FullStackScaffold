import { invoiceItem,InvoiceRender } from "./Invoices";

const invoiceList: invoiceItem[] = [
    {
      InvoiceNumber: 'INV-1001',
      dueDate: '2025-04-01',
      amount: '1500.00',
      companyName: 'Acme Corp',
      status: 'Paid',
    },
    {
      InvoiceNumber: 'INV-1002',
      dueDate: '2025-04-10',
      amount: '2500.00',
      companyName: 'Beta Ltd',
      status: 'Pending',
    },
    {
      InvoiceNumber: 'INV-1003',
      dueDate: '2025-03-15',
      amount: '3200.00',
      companyName: 'Gamma Inc',
      status: 'Overdue',
    },
    {
      dueDate: '2025-04-20',
      amount: '1800.00',
      companyName: 'Delta LLC',
      status: 'Pending',
    },
  ];

  export const Invoices = () => {
    return (<> <div className="flex justify-between items-center w-[95%] p-4">
       <span><h1 className="m-0 text-[36px]">Invoices </h1> <h3 className="text-[18px]">Manage your invoices and payments</h3></span>
    <button className="w-[12%] h-12 rounded-lg flex  items-center pl-2 bg-black text-white">+ New Invoice</button></div>
    <InvoiceRender invoiceList={invoiceList} /></>
     
    );
  };
    
  