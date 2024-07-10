import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <h3>Rating: {review.rating} / 5</h3>
            <p>{review.comment}</p>
            <small>Reviewed by User {review.userId} on {review.date}</small>
        </div>
    );
};

export default ReviewCard;
