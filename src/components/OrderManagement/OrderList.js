import React from 'react';
import OrderDetail from './OrderDetail';

const OrderList = ({ orders }) => {
    return (
        <div className="order-list">
            {orders.map(order => (
                <OrderDetail key={order.id} order={order} />
            ))}
        </div>
    );
};

export default OrderList;
