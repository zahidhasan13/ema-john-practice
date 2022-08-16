import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    });

    const addToCartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(product => <Product product={product} key = {product.id} addToCartHandler = {addToCartHandler}></Product>)
                }
            </div>
            <div className="cart-container">
                <p>Order Summary</p>
                <div className="calculate-product-price">
                    <h5>Selected Item: {cart.length}</h5>
                    <h5>Total Price:</h5>
                    <h5>Total Shipping Charge:</h5>
                    <h5>Tax:</h5>
                    <h3>Grand Total:</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;