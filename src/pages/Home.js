import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductManagement/ProductList';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Welcome to the E-commerce Platform</h1>
            <ProductList products={products} />
        </div>
    );
};

export default HomePage;
