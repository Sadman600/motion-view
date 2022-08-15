import React, { useEffect, useState } from 'react';
import Product from './Product';
import ProductCart from './ProductCart';

const Products = () => {
    
    const [cartProduct, setCartProduct] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, []);

    const addToCart = (product) => {
        setCartProduct([...cartProduct, product])
    }

    return (

        <div className="hero min-h-screen 0">

            <div className="hero-content flex-col lg:flex-row">

                <div className="grid lg:grid-cols-3 gap-5">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart} />)
                    }

                </div>

                <div className=''>
                    <ProductCart cartProduct={cartProduct}></ProductCart>
                </div>

            </div>
        </div>

    );
};

export default Products;