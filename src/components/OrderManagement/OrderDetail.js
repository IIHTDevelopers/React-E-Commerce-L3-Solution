import React from 'react';

const OrderDetail = ({ order }) => {
    return (
        <div className="order-detail">
            <h3>Order ID: {order.id}</h3>
            <p>User ID: {order.userId}</p>
            <p>Product ID: {order.productId}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Total Price: {order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <p>Order Date: {order.orderDate}</p>
            <p>Shipping Date: {order.shippingDate ? order.shippingDate : 'Not shipped yet'}</p>
        </div>
    );
};

export default OrderDetail;
