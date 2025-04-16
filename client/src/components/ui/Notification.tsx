import { BellDot } from "lucide-react";

export  type NotificationItem = {
    title: string;
    message: string;
    date: string; // you could also use Date if it's a real Date object
  };
 
interface NotificationItemRenderProps{ 
    notificationList:NotificationItem[];
    openIndex: number | null;
  toggle: (index: number) => void;
};




export  const NotificationRender: React.FC <NotificationItemRenderProps> = ({ notificationList,
  openIndex,
  toggle, }) => (
    <div className="w-full h-full p-4 bg-white rounded-md shadow">
      <h1 className="text-xl font-semibold mb-4">Notifications</h1>
  
      <div className="space-y-3 w-full">
        {notificationList.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm" onClick={() => toggle(index)}>
           <div className="flex  items-center "> <span className="text-sm text-gray-500 mr-4">{item.date}  </span>
           <div className="w-full flex justify-between"> <h2 className="text-lg font-medium text-gray-900 ">{item.title}</h2>  <BellDot /> </div>
            </div>
            {openIndex === index && (
            <h4 className="text-base text-gray-700">{item.message}</h4>)}
          </div>
        ))}
      </div>
    </div>
  );