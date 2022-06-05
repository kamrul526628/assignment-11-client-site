import React from 'react';
import useItmes from '../../hooks/useItems';

const ManageItems = () => {
    const [items, setItems] = useItmes();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://tranquil-sea-54098.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto text-center'>
            <h2 className='text-2xl mb-5'>Manage your items</h2>
            {
                items.map(item => <div key={item._id}>
                    <h5 className='text-xl mb-3'>{item.name} <button className="btn " onClick={() => handleDelete(item._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageItems;