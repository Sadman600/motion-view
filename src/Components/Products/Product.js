import React from 'react';

const Product = ({ product, addToCart }) => {
    const { name, image, regular_price } = product;
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={`https://idbdev.com/motion2/public/images/${image}`} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>Price ${regular_price}</p>
                    <div className="card-actions justify-end">
                        {/* <label onClick={() => addToCart(product)} for="product-drawer" className="drawer-button btn btn-primary">Buy Now</label> */}
                        <button onClick={()=> addToCart(product)} className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;