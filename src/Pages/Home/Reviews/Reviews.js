import React, { useEffect, useState } from 'react';
import Review from './Review';




const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    // const reviews = [
    //     {
    //         _id: 1,
    //         "name": "M. Kamruzzaman",
    //         "star": 5,
            
    //         "review": "7 Inch Electric Circular Saw Household Aluminum Body Portable Woodworking Electric Saw",
    //         "img": "https://i.ibb.co/H7HRDwz/kamruzzaman.jpg"
    //     },
    //     {
    //         _id: 2,
    //         "name":  "Sourov Talukder",
    //         "star": 5,
            
    //         "review": "Circular Saw, with Electric Brake - Power Circular Saws",
    //         "img": "https://i.ibb.co/H7HRDwz/kamruzzaman.jpg"
    //     },
    //     {
    //         _id: 3,
    //         "name": "Ar Arman",
    //         "star": 5,
            
    //         "review": "Table Saw Electric Saw Machine Flip Power Disk Saws",
    //         "img": "https://i.ibb.co/H7HRDwz/kamruzzaman.jpg"
    //     },
        
    // ];
   
    return (
       <div className='my-28'>
           <div className='text-center'>
                
                <h2 className='text-4xl text-accent'>Our Reviews</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review=><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
       </div>
    );
};

export default Reviews;