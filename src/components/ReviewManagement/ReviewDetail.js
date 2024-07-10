import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewDetail = ({ review }) => {
    return (
        <div className="review-detail">
            <ReviewCard review={review} />
        </div>
    );
};

export default ReviewDetail;
