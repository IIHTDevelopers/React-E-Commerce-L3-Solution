import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const CartPage = () => {
    const { user } = useContext(UserContext);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState({});

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!user) {
                return;
            }

            try {
                const response = await axios.get(`http://localhost:4000/cart?userId=${user.id}`);
                setCartItems(response.data);
                fetchProductDetails(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        const fetchProductDetails = async (items) => {
            const productIds = items.map(item => item.productId);
            try {
                const response = await axios.get(`http://localhost:4000/products?id=${productIds.join('&id=')}`);
                const productsMap = response.data.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {});
                setProducts(productsMap);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchCartItems();
    }, [user]);

    const handleQuantityChange = async (item, change) => {
        const newQuantity = item.quantity + change;
        if (newQuantity < 1) return;

        try {
            await axios.patch(`http://localhost:4000/cart/${item.id}`, { quantity: newQuantity });
            setCartItems(cartItems.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem));
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:4000/cart/${itemId}`);
            setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    const handlePlaceOrder = async () => {
        try {
            const orderPromises = cartItems.map(async item => {
                const product = products[item.productId];
                const order = {
                    userId: user.id,
                    productId: product.id,
                    quantity: item.quantity,
                    totalPrice: product.price * item.quantity,
                    status: "Processing",
                    orderDate: new Date().toISOString().split('T')[0],
                    shippingDate: null
                };
                await axios.post('http://localhost:4000/orders', order);
            });

            await Promise.all(orderPromises);

            // Fetch the cart items again to get their IDs
            const response = await axios.get(`http://localhost:4000/cart?userId=${user.id}`);
            const userCartItems = response.data;

            // Delete each cart item individually
            const deletePromises = userCartItems.map(item => axios.delete(`http://localhost:4000/cart/${item.id}`));
            await Promise.all(deletePromises);

            setCartItems([]);
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    if (!user) {
        return <div>Please log in to view your cart.</div>;
    }

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <div>
                            <strong>{products[item.productId]?.name}</strong>
                            <p>{products[item.productId]?.description}</p>
                            <p>Price: {products[item.productId]?.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                            <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            {cartItems.length > 0 && <button onClick={handlePlaceOrder}>Place Order</button>}
        </div>
    );
};

export default CartPage;
