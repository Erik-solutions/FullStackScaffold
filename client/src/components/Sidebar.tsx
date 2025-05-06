import { Search } from "lucide-react";
import { AlignJustify, Receipt,LayoutDashboard,ScrollText,Book,FileDigit,File,Settings } from 'lucide-react';
import "@/css/finance/Sidebar.css"


export default function Sidebar() {
  return (
<nav>
<div className="nav__logos">
  <a href="/"><AlignJustify className="icon"/> <span>Finance Sync</span> </a>

</div>

    <div className="nav__links">
    <a href="/Dashboard"><LayoutDashboard className="icon" /> <span>Dashboard</span></a>
    <a href="Transactions"><Receipt className="icon"/><span>Transactions</span></a>
    <a href="Ledgers"> <ScrollText className="icon"/><span>Ledgers</span></a>
    <a href="DayBooks"><Book className="icon"/><span>DayBooks</span></a>
    <a href="Invoices"> <FileDigit className="icon" /><span>Invoices</span></a>
    <a href="Reports"><File className="icon"/> <span>Reports</span></a>
    <a href="Settings"><Settings className="icon"/><span>Settings</span></a>
  </div>
  
  </nav>
  );


}

