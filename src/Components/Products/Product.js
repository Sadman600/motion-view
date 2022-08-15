import React from 'react';

const Product = ({ product, addToCart }) => {
    const { name, image } = product;
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={`https://idbdev.com/motion2/public/images/${image}`} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        {/* <label onClick={() => addToCart(product)} for="product-drawer" class="drawer-button btn btn-primary">Buy Now</label> */}
                        <button onClick={()=> addToCart(product)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;