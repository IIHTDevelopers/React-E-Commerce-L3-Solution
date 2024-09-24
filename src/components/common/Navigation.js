import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Navigation = () => {
    const { user, logout } = useContext(UserContext);
    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.push('/');
    };

    const handleOrdersClick = (e) => {
        if (!user) {
            e.preventDefault();
            history.push('/login');
        }
    };

    const handleCartClick = (e) => {
        if (!user) {
            e.preventDefault();
            history.push('/login');
        }
    };

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/orders" activeClassName="active" onClick={handleOrdersClick}>Orders</NavLink>
                </li>
                {user ? (
                    <>
                        <li>
                            <NavLink to="/cart" activeClassName="active" onClick={handleCartClick}>Cart</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <li>
                        <NavLink to="/login" activeClassName="active">Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
