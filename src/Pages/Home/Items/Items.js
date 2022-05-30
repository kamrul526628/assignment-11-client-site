import React, { useEffect, useState } from 'react';
import Item from './Item';




const Items = () => {

    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
   
    return (
       <div className='my-28'>
           <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Items</h3>
                <h2 className='text-4xl text-accent'>The tools that are available</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    items.map(item=><Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
       </div>
    );
};

export default Items;