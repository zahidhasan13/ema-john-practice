import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    const {addToCartHandler} = props;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <h6 className='product-price'>Price: ${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className="add-button" onClick={() => addToCartHandler(props.poduct)}>Add to Cart <span><FontAwesomeIcon icon={faCartPlus} /></span> </button>
        </div>
    );
};

export default Product;