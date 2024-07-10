import React, { useState, useEffect } from 'react';

const ReviewForm = ({ review, onSubmit }) => {
    const [formData, setFormData] = useState({
        rating: '',
        comment: '',
        productId: '',
        userId: '',
        date: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        if (review) {
            setFormData(review);
        }
    }, [review]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rating:
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    min="1"
                    max="5"
                />
            </label>
            <label>
                Comment:
                <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Product ID:
                <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                User ID:
                <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;
