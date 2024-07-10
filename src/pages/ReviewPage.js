import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewList from '../components/ReviewManagement/ReviewList';

const ReviewPage = () => {
    const { productId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/reviews?productId=${productId}`);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [productId]);

    return (
        <div>
            <h1>Product Reviews</h1>
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default ReviewPage;
