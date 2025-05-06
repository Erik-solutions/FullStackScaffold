

export type testimonialItem={
    logo:string;
    message:string;
    username:string;
    position:string;
}

export interface testimonialprops{
    testimonialItems:testimonialItem[];
}


export const TestimonialRender:React.FC<testimonialprops>=({testimonialItems})=>(
    <div className="my-8">
        <div className="my-8">
    <h1 className="text-center mb-4 font-bold">Success Stories</h1>
    <h3 className="text-center text-[24px] text-gray-700"> See how businesses are transforming with our platform</h3></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4"> 
{ testimonialItems.map((item,index) =>(
    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer
    transition-colors duration-1000  ease-in-out "> 
    <div className="my-4"> <img src={item.logo}  className="w-16 h-16 rounded-full object-cover"/>   </div>
    <h3 className="text-[18px] text-gray-600 h-[5rem] "> {item.message}</h3>
    <h1 className="text-[24px] font-bold"> {item.username}</h1>
    <h3 className="text-[18px] text-gray-600">{item.position}</h3>

    </div>
))}


    </div>
    </div>
)