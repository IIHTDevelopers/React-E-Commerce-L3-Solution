import React from 'react';

const OrderSummary = ({ order }) => {
    return (
        <div className="order-summary">
            <h3>Order ID: {order.id}</h3>
            <p>Total Price: {order.totalPrice}</p>
            <p>Status: {order.status}</p>
        </div>
    );
};

export default OrderSummary;
