const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/OrderManagement/OrderDetail.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderDetailComponent boundary should contain "Order ID"', () => {
        expect(fileContent).toMatch(/Order ID/);
    });

    test('OrderDetailComponent boundary should contain "User ID"', () => {
        expect(fileContent).toMatch(/User ID/);
    });

    test('OrderDetailComponent boundary should contain "Product ID"', () => {
        expect(fileContent).toMatch(/Product ID/);
    });

    test('OrderDetailComponent boundary should contain "Quantity"', () => {
        expect(fileContent).toMatch(/Quantity/);
    });

    test('OrderDetailComponent boundary should contain "Total Price"', () => {
        expect(fileContent).toMatch(/Total Price/);
    });

    test('OrderDetailComponent boundary should contain "Status"', () => {
        expect(fileContent).toMatch(/Status/);
    });

    test('OrderDetailComponent boundary should contain "Order Date"', () => {
        expect(fileContent).toMatch(/Order Date/);
    });

    test('OrderDetailComponent boundary should contain "Shipping Date" with conditional rendering', () => {
        expect(fileContent).toMatch(/Shipping Date/);
    });
});
