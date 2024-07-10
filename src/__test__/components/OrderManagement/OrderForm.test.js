const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/OrderManagement/OrderForm.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderFormComponent boundary should contain "User ID" input field', () => {
        expect(fileContent).toMatch(/user/);
    });

    test('OrderFormComponent boundary should contain "Quantity" input field', () => {
        expect(fileContent).toMatch(/quantity/);
    });

    test('OrderFormComponent boundary should contain "Total Price" input field', () => {
        expect(fileContent).toMatch(/totalPrice/);
    });

    test('OrderFormComponent boundary should contain "Order Date" input field', () => {
        expect(fileContent).toMatch(/orderDate/);
    });

    test('OrderFormComponent boundary should contain "Shipping Date" input field', () => {
        expect(fileContent).toMatch(/shippingDate/);
    });

    test('OrderFormComponent boundary should contain "Submit" button', () => {
        expect(fileContent).toMatch(/Submit/);
    });
});
