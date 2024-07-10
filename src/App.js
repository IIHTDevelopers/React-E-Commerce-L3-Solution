import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/Home';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import OrderPage from './pages/OrderPage';
import ReviewPage from './pages/ReviewPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import PrivateRoute from './components/common/PrivateRoute';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/products/:productId" component={ProductPage} />
                <Route path="/users/:userId" component={UserPage} />
                <PrivateRoute path="/orders" component={OrderPage} />
                <PrivateRoute path="/cart" component={CartPage} />
                <Route path="/reviews/:productId" component={ReviewPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
