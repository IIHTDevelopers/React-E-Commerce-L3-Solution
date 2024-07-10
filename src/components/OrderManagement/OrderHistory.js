import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from './OrderList';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/orders?userId=${userId}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };
        fetchOrders();
    }, [userId]);

    return (
        <div>
            <h1>Your Order History</h1>
            <OrderList orders={orders} />
        </div>
    );
};

export default OrderHistory;
