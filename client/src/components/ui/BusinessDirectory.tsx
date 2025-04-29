import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { BusinessRender, CategoryRender,categoriesItem,businessdirectory } from "./Categories";
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
<section className='business__section'> 
<div className='business__nav'>  <h1> Business Directory</h1> 
<form className='business__section__form' action="">

    <input type="search" placeholder='Search business...'/> <SearchIcon/> 

    <button> <span className="material-symbols-outlined">
filter_alt </span> <span>Filter</span> </button>
 </form>

 </div>

<CategoryRender categoriesItems={categoryList}/>

<BusinessRender businessDirectoryItems={businessItems} />
</section>

</>
    );
}