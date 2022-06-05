import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({item}) => {
      const {_id, name, img, description, price, Quantity, supplier_name} = item;
        const navigate = useNavigate();

        const navigateToItemDetail = id =>{
            navigate(`/item/${id}`);
        }
   
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-3/4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>order quantity: {Quantity}</p>
          <p>supplier name: {supplier_name}</p>
          <h4>price: $ {price}</h4>
          <h4>description: {description}</h4>
          <div className="card-actions">
            <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary">update</button>
          </div>
        </div>
      </div>
    );
};

export default Item;