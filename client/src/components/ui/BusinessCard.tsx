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
        <div className="business bg-gray-200 py-[2rem]">
            <div className='solutions__motive_solutions text-center mb-4 '>
                <h1>Comprehensive Management Suite</h1>
                <p>Everything you need to manage and grow your business</p>
            </div>

                <div className="business__solutions__list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 ">

            {businessList.map((business, index) => (
                <div key={index} 
                className=" business__solution__container bg-white  bg-red-500 p-4 ">
                    <div className='heading__content'>
                    <span className="material-symbols-outlined">  <DollarSign/>
</span>
                        <h1>{business.businessSolution}</h1></div>
                    <h4 className="h-[4rem]">{business.description}</h4>
                    
                    <ul> 
                        {business.topFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li> 
                        ))
                        }
                       
                    </ul> 
                <button>Access Module</button>
                </div>
            ))}
        </div></div>
    );
}