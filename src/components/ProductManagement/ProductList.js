import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductCategory from './ProductCategory';

const ProductList = ({ products }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
                const uniqueCategories = [
                    ...new Set(response.data.map((product) => product.category))
                ];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const filteredProducts = products.filter((product) =>
        selectedCategory ? product.category === selectedCategory : true
    );

    return (
        <div className="product-list">
            <ProductCategory
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
