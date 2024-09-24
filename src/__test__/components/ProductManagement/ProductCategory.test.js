const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ProductManagement/ProductCategory.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ProductCategoryComponent boundary should contain a select element', () => {
        expect(fileContent).toMatch(/select/);
    });

    test('ProductCategoryComponent boundary should contain "All Categories" option', () => {
        expect(fileContent).toMatch(/All Categories/);
    });

    test('ProductCategoryComponent boundary should map categories to options', () => {
        expect(fileContent).toMatch(/category/);
    });
});
