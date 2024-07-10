const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ProductManagement/ProductCard.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ProductCardComponent boundary should display product name', () => {
        expect(fileContent).toMatch(/product.name/);
    });

    test('ProductCardComponent boundary should display product description', () => {
        expect(fileContent).toMatch(/product.description/);
    });
});
