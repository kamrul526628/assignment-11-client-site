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
        <div className='flex h-screen justify-center items-center'>
            
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className='text-center text-2xl font-bold mb-3'>Please add a Item</h2>
                <form className='form-control w-full max-w-xs' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered w-full max-w-xs mb-4' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='input input-bordered w-full max-w-xs mb-4' placeholder='Description' {...register("description")} />
                    <input className='input input-bordered w-full max-w-xs mb-4' placeholder='Price' type="number" {...register("price")} />
                    <input className='input input-bordered w-full max-w-xs mb-4' placeholder='Quantity' type="number" {...register("Quantity")} />
                    <input className='input input-bordered w-full max-w-xs mb-4' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='input input-bordered w-full max-w-xs mb-4' placeholder='Supplier Name' {...register("supplier_name", { required: true, maxLength: 20 })} />
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add Item" />
                </form>
                </div>
                
            </div>
            
        </div>
    );
};

export default AddItem;