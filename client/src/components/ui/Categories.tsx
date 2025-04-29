import { IsFavourate } from "./Star";

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
        <div className="business__container">
            {businessDirectoryItems.map((item, index) => (
                <div key={index} className="image_holder">
                    <img src={item.image} alt={item.category} />
                    <h2 className='name__holder'>{item.name} <IsFavourate/></h2>
                    <a><h4>{item.category}</h4></a>
                    <p>{item.description}</p>
                    <button>Learn more</button>
                </div>
            ))}
        </div>
    );
}



export const CategoryRender:React.FC<CategoryRenderProps>=({categoriesItems}) =>{
    return( <div className='categories'>
        { categoriesItems.map((item,index) => (
            <button key={index} className="category"> {item}</button>
            ))
        }
        </div>
    )
 }