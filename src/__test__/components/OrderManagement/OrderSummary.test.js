const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/OrderManagement/OrderSummary.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderSummaryComponent boundary should display "Order ID"', () => {
        expect(fileContent).toMatch(/Order ID/);
    });

    test('OrderSummaryComponent boundary should display "Total Price"', () => {
        expect(fileContent).toMatch(/Total Price/);
    });

    test('OrderSummaryComponent boundary should display "Status"', () => {
        expect(fileContent).toMatch(/Status/);
    });
});
