import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Item</h2>
            <form className='form-control w-full max-w-xs' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered w-full max-w-xs' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='input input-bordered w-full max-w-xs' placeholder='Description' {...register("description")} />
                <input className='input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("price")} />
                <input className='input input-bordered w-full max-w-xs' placeholder='Quantity' type="number" {...register("Quantity")} />
                <input className='input input-bordered w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='input input-bordered w-full max-w-xs' placeholder='Supplier Name' {...register("supplier_name", { required: true, maxLength: 20 })} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;