// import React from 'react';
// import ReviewList from '../ReviewManagement/ReviewList';

// const ProductDetail = ({ product, reviews }) => {
//     return (
//         <div>
//             <div>
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//                 <p>Price: {product.price}</p>
//                 <p>Category: {product.category}</p>
//             </div>
//             <div>
//                 <h2>Reviews</h2>
//                 <ReviewList reviews={reviews} />
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;




import React, { useState } from 'react';
import ReviewList from '../ReviewManagement/ReviewList';
import ReviewForm from '../ReviewManagement/ReviewForm';

const ProductDetail = ({ product, reviews, orders, user, onSubmitReview }) => {
    console.log(orders);
    console.log(reviews);
    console.log(user);
    
    const [showReviewForm, setShowReviewForm] = useState(false);

    // Check if the user has purchased the product
    const userHasPurchasedProduct = orders.some(order => order.userId === user.id && order.productId === product.id && order.status === 'Delivered');
    console.log(userHasPurchasedProduct);

    // Check if the user has already reviewed the product
    const userHasReviewedProduct = reviews.some(review => review.userId === user.id && review.productId === product.id);
    console.log(userHasReviewedProduct);

    // Determine if the user can add a review
    const canAddReview = userHasPurchasedProduct && !userHasReviewedProduct;

    const handleAddReviewClick = () => {
        setShowReviewForm(true);
    };

    return (
        <div>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
            </div>
            <div>
                <h2>Reviews</h2>
                <ReviewList reviews={reviews} />
            </div>
            {canAddReview && (
                <div>
                    <button onClick={handleAddReviewClick}>Add Review</button>
                    {showReviewForm && (
                        <ReviewForm
                            review={{
                                productId: product.id,
                                userId: user.id,
                                rating: '',
                                comment: '',
                                date: new Date().toISOString().split('T')[0]
                            }}
                            onSubmit={onSubmitReview}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
