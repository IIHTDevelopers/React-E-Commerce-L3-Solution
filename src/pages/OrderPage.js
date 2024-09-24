import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderManagement/OrderList';
import { UserContext } from '../contexts/UserContext';

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user) {
                return;
            }

            try {
                const response = await axios.get(`http://localhost:4000/orders?userId=${user.id}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, [user]);

    if (!user) {
        return <div>Please log in to view your orders.</div>;
    }

    return (
        <div>
            <h1>Your Orders</h1>
            <OrderList orders={orders} />
        </div>
    );
};

export default OrderPage;
