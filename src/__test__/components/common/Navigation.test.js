const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/common/Navigation.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('NavComponent boundary should contain "Home" link', () => {
        expect(fileContent).toMatch(/Home/);
    });

    test('NavComponent boundary should contain "Orders" link', () => {
        expect(fileContent).toMatch(/Orders/);
    });

    test('NavComponent boundary should contain "Cart" link when user is logged in', () => {
        expect(fileContent).toMatch(/Cart/);
    });

    test('NavComponent boundary should contain "Logout" button when user is logged in', () => {
        expect(fileContent).toMatch(/Logout/);
    });

    test('NavComponent boundary should contain "Login" link when user is not logged in', () => {
        expect(fileContent).toMatch(/Login/);
    });
});
