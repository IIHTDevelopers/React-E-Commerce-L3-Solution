import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from '../components/ProductManagement/ProductDetail';
import { UserContext } from '../contexts/UserContext';

const ProductPage = () => {
    const { productId } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/reviews?productId=${productId}`);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchProduct();
        fetchReviews();
    }, [productId]);

    const handleAddToCart = async () => {
        if (!user) {
            history.push('/login');
            return;
        }

        try {
            const cartItem = {
                userId: user.id,
                productId: product.id,
                quantity: 1 // Default quantity
            };
            await axios.post('http://localhost:4000/cart', cartItem);
            alert('Product added to cart successfully!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add product to cart.');
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ProductDetail product={product} reviews={reviews} />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
