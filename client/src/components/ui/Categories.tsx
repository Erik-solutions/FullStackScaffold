import { IsFavourate } from "./Star";
import React, { useState } from 'react';



export type businessdirectory={
    name:string,
            image: string,
            category: string,
            description: string,
}
export type categoriesItem=string;

export interface CategoryRenderProps{
    categoriesItems: categoriesItem[];
}

export interface  BusinessRenderprops{
    businessDirectoryItems:businessdirectory[];
}


export const BusinessRender:React.FC<BusinessRenderprops> = ({ businessDirectoryItems })=> {
    return (
        <div className="business__container grid grid-cols-3 gap-4 py-4 ">
            {businessDirectoryItems.map((item, index) => (
                <div key={index} className="  rounded bg-white flex flex-col  justify-center bg-red-400
                border border-gray-200 p-6  ">
                    <div className="image_holder  flex items-center justify-center bg-red-300">
<img
className="w-[100%] h-full object-contain rounded"
src={item.image}
alt={item.category}/>  </div>
                    
                    <h2 className='name__holder flex items-center justify-between py-4'>{item.name} <IsFavourate/></h2>
                    <a className=" text-lg text-[#4D55CC]"><h4 >{item.category}</h4></a>
                    <p className=" text-sm text-gray-600 my-2">{item.description}</p>
                    <button className="bg-transparent text-black border text-sm
                border-gray-200 my-2 px-4 py-2 rounded w-[96%] h-[2.4rem] font-bold">View Profile</button>
                </div>
            ))}
           
        </div>
    );
}





export const CategoryRender: React.FC<CategoryRenderProps> = ({ categoriesItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="categories bg-gray-200 p-1 my-8 rounded-lg w-fit">
      {categoriesItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`mr-2 h-[2.4rem] px-4 text-center rounded border transition-colors duration-300
            ${
              activeIndex === index
                ? 'bg-white text-black border-gray-200'
                : 'bg-transparent text-gray-600 shadow-lg'
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
