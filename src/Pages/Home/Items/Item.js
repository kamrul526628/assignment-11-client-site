import React from 'react';



const Item = ({item}) => {
   
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={item.img} alt="Shoes" className="rounded-xl w-3/4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p>order quantity: {item.Quantity}</p>
          <p>supplier name: {item.supplier_name}</p>
          <h4>price: $ {item.price}</h4>
          <h4>description: {item.description}</h4>
          <div className="card-actions">
            <button className="btn btn-primary">update</button>
          </div>
        </div>
      </div>
    );
};

export default Item;