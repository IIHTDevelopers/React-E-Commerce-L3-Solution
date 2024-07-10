const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/OrderManagement/OrderHistory.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderHistoryComponent boundary should contain "Your Order History" heading', () => {
        expect(fileContent).toMatch(/<h1>Your Order History<\/h1>/);
    });

    test('OrderHistoryComponent boundary should contain "OrderList" component', () => {
        expect(fileContent).toMatch(/OrderList/);
    });
});
