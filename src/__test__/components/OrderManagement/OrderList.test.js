const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/OrderManagement/OrderList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderListComponent boundary should contain "order-list" class', () => {
        expect(fileContent).toMatch(/className="order-list"/);
    });

    test('OrderListComponent boundary should map orders to OrderDetail components', () => {
        expect(fileContent).toMatch(/OrderDetail/);
    });

    test('OrderListComponent boundary should use "order.id" as key for OrderDetail components', () => {
        expect(fileContent).toMatch(/order.id/);
    });
});
