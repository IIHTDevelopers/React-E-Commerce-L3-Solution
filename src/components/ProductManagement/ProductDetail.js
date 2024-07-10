import React from 'react';
import ReviewList from '../ReviewManagement/ReviewList';

const ProductDetail = ({ product, reviews }) => {
    return (
        <div>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
            </div>
            <div>
                <h4>Reviews</h4>
                <ReviewList reviews={reviews} />
            </div>
        </div>
    );
};

export default ProductDetail;
