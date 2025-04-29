import { DollarSign } from "lucide-react";


export type Business = {
    icon: string;
    businessSolution: string;
    description: string;
    topFeatures: string[]; // Assuming top features are strings
  };


  interface BusinessCardProps {
    businessList: Business[];
  }


export const BusinessCard: React.FC<BusinessCardProps> = ({ businessList}) => {



    return (
        <div className="business bg-gray-80 p-[2rem]">
            <div className='solutions__motive_solutions text-center mb-4 '>
                <h1>Comprehensive Management Suite</h1>
                <p>Everything you need to manage and grow your business</p>
            </div>

                <div className="business__solutions__list justify-items-center
                 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-[2rem]">

            {businessList.map((business, index) => (
                <div key={index} 
                className=" business__solution__container bg-white   p-4   w-[88%] rounded-[5%] shadow-xl ">
                    <div className='heading__content '>
                    <span className="flex justify-left  my-4 items-center">  
                     <DollarSign className="mr-2 w-[3rem] h-[3rem] text-[#4D55CC] "/> 
                        <h1 className="text-[2rem] font-bold">{business.businessSolution}</h1>  </span>
                        </div>
                    <h4 className="h-[3rem] text-gray-800 mt-2 text-[16px]">{business.description}</h4>
                    
                    <ul className="list-disc pl-5 marker:text-[#4D55CC]"> 
                        {business.topFeatures.map((feature, idx) => (
                        <li key={idx} className=" text-gray-500 mt-1 text-[16px]">{feature}</li> 
                        ))
                        }
                       
                    </ul> 
                <button 
                className="bg-transparent text-black border text-sm
                border-gray-200 my-2 px-4 py-2 rounded w-[96%] h-[15%] font-bold  ">Access Module</button>
                </div>
            ))}
        </div></div>
    );
}