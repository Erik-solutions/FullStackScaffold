
import { SearchIcon,Filter } from "lucide-react";
import { BusinessRender, CategoryRender,categoriesItem,businessdirectory } from "./Categories";
import books from '@/assets/pictures/books-2463779_1280.jpg'
import reading from '@/assets/pictures/reading-4330761_1280.jpg'
import bigdata from '@/assets/pictures/message-with-abstract-background.jpg'


export default function FavourateBusinesses() {

    const businessItems = [
        {name:'Nononono',
            image: books,
            category: 'Technology',
            description: 'A business in the technology and finance landing aspects',
        },
        {name:'Nononono',
            image: reading,
            category: 'Finance',
            description: 'A business in the financial consulting sector',
        },
        {name:'Nononono',
            image: bigdata,
            category: 'Healthcare',
            description: 'A business in the healthcare and medical industry',
        }
       /*, {
            name:'Nononono',
            image: reading,
            category: 'E-commerce',
            description: 'An online marketplace for various products',
        }*/
    ];

    const categoryList= [
        'All','Technology', 'Retail', 'Services'
    ]
    
   


    //return(<BusinessRender/>
     return (
                 <>
                 <section className='business__section p-[3rem]'> 
                 <div className='business__nav flex justify-between '> 
                  <h1 className="font-bold text-[28px]"> Business Directory</h1> 
                 <form className='business__section__form  px-4 justify-between
                  flex items-center w-[24%] ' action="">

                     <input type="search" placeholder='Search business...' className="w-[54%] h-[2.4rem] rounded bg-transparent border
                     border-gray-200 p-2"/> 

                     <button className="flex items-center w-[40%] h-[2.4rem] rounded bg-transparent border
                     border-gray-200 p-2">  <Filter  className="mr-2"/>
                   Filter </button>
                  </form>

                  </div>

                 <CategoryRender categoriesItems={categoryList}/>

                 <BusinessRender businessDirectoryItems={businessItems} />
                 </section>

                 </>
                     );
                 }