const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../src/App.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AppComponent boundary should contain "HomePage" route for /', () => {
        expect(fileContent).toMatch(/HomePage/);
    });

    test('AppComponent boundary should contain "ProductPage" route for /products/:productId', () => {
        expect(fileContent).toMatch(/ProductPage/);
    });

    test('AppComponent boundary should contain "UserPage" route for /users/:userId', () => {
        expect(fileContent).toMatch(/UserPage/);
    });

    test('AppComponent boundary should contain "OrderPage" route for /orders', () => {
        expect(fileContent).toMatch(/OrderPage/);
    });

    test('AppComponent boundary should contain "CartPage" route for /cart', () => {
        expect(fileContent).toMatch(/CartPage/);
    });

    test('AppComponent boundary should contain "ReviewPage" route for /reviews/:productId', () => {
        expect(fileContent).toMatch(/ReviewPage/);
    });

    test('AppComponent boundary should contain "LoginPage" route for /login', () => {
        expect(fileContent).toMatch(/LoginPage/);
    });

    test('AppComponent boundary should contain "NotFoundPage" route for unmatched paths', () => {
        expect(fileContent).toMatch(/NotFoundPage/);
    });

    test('AppComponent boundary should contain "Header" component', () => {
        expect(fileContent).toMatch(/Header/);
    });
});

const navFilePath = path.resolve(__dirname, '../../src/components/common/Navigation.js');
const navFileContent = fs.readFileSync(navFilePath, 'utf8');

describe('NavComponent boundary', () => {
    test('NavComponent boundary should contain "Home" link', () => {
        expect(navFileContent).toMatch(/<NavLink exact to="\/" activeClassName="active">Home<\/NavLink>/);
    });

    test('NavComponent boundary should contain "Orders" link', () => {
        expect(navFileContent).toMatch(/<NavLink to="\/orders" activeClassName="active" onClick=\{handleOrdersClick\}>Orders<\/NavLink>/);
    });

    test('NavComponent boundary should contain "Cart" link when user is logged in', () => {
        expect(navFileContent).toMatch(/<NavLink to="\/cart" activeClassName="active" onClick=\{handleCartClick\}>Cart<\/NavLink>/);
    });

    test('NavComponent boundary should contain "Profile" link when user is logged in', () => {
        expect(navFileContent).toMatch(/<NavLink to="\/profile" activeClassName="active">Profile<\/NavLink>/);
    });

    test('NavComponent boundary should contain "Logout" button when user is logged in', () => {
        expect(navFileContent).toMatch(/<button onClick=\{handleLogout\}>Logout<\/button>/);
    });

    test('NavComponent boundary should contain "Login" link when user is not logged in', () => {
        expect(navFileContent).toMatch(/<NavLink to="\/login" activeClassName="active">Login<\/NavLink>/);
    });
});
