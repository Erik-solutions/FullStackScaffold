import { ledgerEntry, LedgerEntryRender } from "./ledgersAccounts";
import { useState, useEffect } from "react";
import {
  AccountsReceivablesList,
  AccountsPayablesList,
  CashAccountsList,
  RevenueList,
  ExpensesList,
} from "./lists";

const ledgerMap: Record<string, ledgerEntry[]> = {
  "Accounts Receivable": AccountsReceivablesList,
  "Accounts Payable": AccountsPayablesList,
  "Cash Accounts": CashAccountsList,
  "Revenue": RevenueList,
  "Expenses": ExpensesList,
};

export const Ledger = ({ selected }: { selected: string }) => {
  const [ledgerEntries2, setLedgerEntries2] = useState<ledgerEntry[]>(AccountsReceivablesList);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before data change
    const list = ledgerMap[selected] || AccountsReceivablesList;

    setLedgerEntries2(list);
    
    // Simulate a slight delay to handle data change (in case of network latency, etc.)
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is set
    }, 800); // You can adjust the timeout here for a more snappy experience

  }, [selected]);

  // Show a loading spinner or text while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return <LedgerEntryRender ledgerEntryList={ledgerEntries2} selected={selected} />;
};





   /*
function ledgerSorter({ selected }: { selected: string }){
    let ledgerEntries2=[]
    const listFoAccounts=['AccountsReceivablesList','AccountsPayablesList','CashAccountsList','RevenueList','ExpensesList']
if (selected==='Accounts Recievable'){
     ledgerEntries2=AccountsReceivablesList
}
else if (selected==='Accounts Payable'){
    ledgerEntries2=AccountsPayablesList
}

else if (selected==='Cash Accounts'){
    ledgerEntries2= CashAccountsList
}

else if (selected==='Revenue'){
    ledgerEntries2=RevenueList
}

else if (selected==='Expenses'){
    ledgerEntries2=ExpensesList
}
}*/

