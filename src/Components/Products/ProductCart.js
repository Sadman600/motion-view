import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const ProductCart = ({ cartProduct }) => {
    const navigate = useNavigate();
    let total = 0;
    for(const product of cartProduct){
        total = total + parseInt(product.regular_price)
    }
    
    return (
        <div>
            <div>
                <h1 className='text-2xl text-center font-semibold text-secondary p-5'>Product Summery</h1>
            </div>
            {
                cartProduct.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            <div>
                <hr></hr>
                <h5 className='mb-5 text-2xl text-center font-semibold text-secondary p-5'>Total Price: {total}</h5>
                <button onClick={() => navigate('/checkout')} className="btn btn-primary btn-wide text-white">Checkout</button>
            </div>
        </div>
    );
};

export default ProductCart;