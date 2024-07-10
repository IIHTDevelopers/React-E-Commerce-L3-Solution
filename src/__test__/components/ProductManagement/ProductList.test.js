const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ProductManagement/ProductList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ProductListComponent boundary should contain "ProductCategory" component', () => {
        expect(fileContent).toMatch(/ProductCategory/);
    });
});
