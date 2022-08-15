import React, { useState } from 'react';

const Cart = ({cart}) => {
    const [count, setCount] = useState(1);
    const {name, image, regular_price} = cart;
    return (
        <div>
            <div className='flex justify-between items-center  mb-2 p-2 border border-primary'>
                <div className='flex flex-col mx-2'>
                    <button onClick={() => setCount((count) => count + 1)} className="btn" disabled={count === 10}>+</button>
                    <input type="text" value={count} className="input input-bordered w-16 max-w-xs" readOnly />
                    <button onClick={() => setCount((count) => count - 1)} className="btn" disabled={count === 1}>-</button>
                </div>
                <div className="avatar mx-2">
                    <div className="w-24 rounded-xl">
                        <img src={`https://idbdev.com/motion2/public/images/${image}`} alt='product' />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mx-2'>{name}</h1>
                    <p>Price: ${regular_price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;