const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ProductManagement/ProductForm.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ProductFormComponent boundary should contain "Name" input field', () => {
        expect(fileContent).toMatch(/name/);
    });

    test('ProductFormComponent boundary should contain "Description" textarea field', () => {
        expect(fileContent).toMatch(/description/);
    });

    test('ProductFormComponent boundary should contain "Price" input field', () => {
        expect(fileContent).toMatch(/price/);
    });

    test('ProductFormComponent boundary should contain "Category" input field', () => {
        expect(fileContent).toMatch(/category/);
    });

    test('ProductFormComponent boundary should contain "Submit" button', () => {
        expect(fileContent).toMatch(/Submit/);
    });
});
