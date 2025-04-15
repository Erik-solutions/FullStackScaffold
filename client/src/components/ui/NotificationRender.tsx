import { NotificationRender,NotificationItem } from "./Notification";
import { Transaction,TransactionItemRender } from "./RecentTransactions";

const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const notificationList: NotificationItem[] = [
  {
    title: 'You have an unread message',
    message: 'You have received a payment from a customer',
    date: now,
  },
  {
    title: 'New order received',
    message: 'Order #12345 has been placed successfully',
    date: '11:45',
  },
  {
    title: 'Subscription renewed',
    message: 'Your monthly subscription has been renewed',
    date: '10:15',
  },
  {
    title: 'Low inventory alert',
    message: 'Product XYZ is running low on stock',
    date: '09:30',
  },
];





const TransactionList: Transaction[] = [
  {
    title: 'Payment to Vendor',
    indicator: 'payment',
    discription : 'Paid for office supplies',
    amount: 120.5,
    date: '2025-04-15',
  },
  {
    title: 'Client Receipt',
    indicator: 'receipt',
    discription: 'Received payment from client',
    amount: 300.0,
    date: '2025-04-14',
  },
  {
    title: 'Monthly Subscription',
    indicator: 'payment',
    discription: 'Streaming service subscription fee',
    amount: 15.99,
    date: '2025-04-13',
  },
  {
    title: 'Freelance Income',
    indicator: 'receipt',
    discription: 'Design project for freelance client',
    amount: 500.0,
    date: '2025-04-12',
  },
];




export default function Notifications(){
    return(<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <TransactionItemRender TransactionList={TransactionList }/>
      <NotificationRender notificationList ={notificationList }/> 
      </div>
    )
}