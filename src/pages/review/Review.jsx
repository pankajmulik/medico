import React, { useState } from 'react'

const Review = () => {
const [color,setcolor]=useState(null)
    const handleclick = () => {



    }

    return (
        <div>

            <div className="reviews">
                <h3>Write a Review</h3>

                <div className="stars">
                    <span >
                        <i class="fa-solid fa-star" onClick={handleclick}>
                        </i>
                        <i class="fa-solid fa-star" onClick={handleclick}></i>
                        <i class="fa-solid fa-star" onClick={handleclick}></i>
                        <i class="fa-solid fa-star" onClick={handleclick}></i>
                        <i class="fa-solid fa-star" onClick={handleclick}></i>
                    </span>
                </div>

                <textarea name="reviewm" id="mreview" cols="30" rows="10" placeholder='Write your feedback'></textarea>

            </div>

        </div>
    )
}

export default Review