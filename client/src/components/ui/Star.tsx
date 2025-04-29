import { useState } from "react";
import { Star } from "lucide-react";

export function IsFavourate(){
    const [ratings, setRatings] = useState(0); // Initialize the ratings state
    const [starFill, setStarFill]=useState(false)

    function increaseRatings() {
        setRatings(prevRatings => {
            const newRating = Math.round((prevRatings + 0.1) * 100) / 100;
            // Increment the previous rating by 1

            // Now that we have the new rating, update the starFill state
            if (newRating > 0) {
                setStarFill(true); // Half star for rating 1
            } 

            return newRating; // Return the updated rating value
        });
    }
  // Apply gold color when the star is a half or full star
  const starStyle = starFill === true || starFill === false 
  ? { color: '#2DAA9E' } // Set color to gold for half and full stars
  : {};


    return(
        <div className='ratings__container flex items-center'>
        
<span className="" onClick={increaseRatings} style={starStyle}> <Star  className="mr-1  "/>

</span>  <h4 className="text-[24px]  self-end text-end"> {ratings}</h4> </div>
    )
}


