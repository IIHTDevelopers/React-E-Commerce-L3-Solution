import React from 'react';
import ReviewDetail from './ReviewDetail';

const ReviewList = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map(review => (
                <ReviewDetail key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
