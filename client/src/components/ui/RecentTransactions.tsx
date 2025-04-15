import { DollarSign } from "lucide-react";



export type Transaction = {
  title: string;
  date: string;
  indicator: 'payment' | 'receipt'
  discription:string;
  amount: number;
};

interface TransactionItemRenderProps {
  TransactionList: Transaction[];
}

export const TransactionItemRender: React.FC<TransactionItemRenderProps> = ({
  TransactionList,
}) => (
  <div className="w-full h-full p-4 bg-white rounded-md shadow">
    <h1 className="text-xl font-semibold mb-4">Transactions</h1>

    <div className="space-y-3 w-full">
      {TransactionList.map((item, index) => (
        <div
          key={index}
          className="w-full p-4 bg-green-100 rounded-md shadow-sm flex items-center justify-between"
        >
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
          </span>
        </div>
      ))}
    </div>
  </div>
);
