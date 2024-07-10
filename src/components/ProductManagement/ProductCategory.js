import React from 'react';

const ProductCategory = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="product-category">
            <select
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductCategory;
