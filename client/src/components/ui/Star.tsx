import { useState } from "react";

export function IsFavourate(){
    const [ratings, setRatings] = useState(0); // Initialize the ratings state
    const [starFill, setStarFill]=useState('star')

    function increaseRatings() {
        setRatings(prevRatings => {
            const newRating = prevRatings + 1; // Increment the previous rating by 1

            // Now that we have the new rating, update the starFill state
            if (newRating > 0) {
                setStarFill('star_rate_half'); // Half star for rating 1
            } 

            return newRating; // Return the updated rating value
        });
    }
  // Apply gold color when the star is a half or full star
  const starStyle = starFill === 'star_rate_half' || starFill === 'star_rate' 
  ? { color: '#2DAA9E' } // Set color to gold for half and full stars
  : {};


    return(
        <div className='ratings__container'>
        <h4> {ratings}</h4>
<span className="material-symbols-outlined" onClick={increaseRatings} style={starStyle}>
{starFill}
</span> </div>
    )
}