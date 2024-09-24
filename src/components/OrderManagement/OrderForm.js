import React, { useState, useEffect } from 'react';

const OrderForm = ({ order, onSubmit }) => {
    const [formData, setFormData] = useState({
        userId: '',
        productId: '',
        quantity: 1,
        totalPrice: '',
        status: 'Processing',
        orderDate: new Date().toISOString().split('T')[0],
        shippingDate: ''
    });

    useEffect(() => {
        if (order) {
            setFormData(order);
        }
    }, [order]);

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
                User ID:
                <input
                    type="text"
                    name="userId"
                    value={formData.userId}
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
                Quantity:
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    required
                />
            </label>
            <label>
                Total Price:
                <input
                    type="number"
                    name="totalPrice"
                    value={formData.totalPrice}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Status:
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </label>
            <label>
                Order Date:
                <input
                    type="date"
                    name="orderDate"
                    value={formData.orderDate}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Shipping Date:
                <input
                    type="date"
                    name="shippingDate"
                    value={formData.shippingDate}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default OrderForm;
