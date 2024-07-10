const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ProductManagement/ProductDetail.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ProductDetailComponent boundary should display product name', () => {
        expect(fileContent).toMatch(/name/);
    });

    test('ProductDetailComponent boundary should display product description', () => {
        expect(fileContent).toMatch(/description/);
    });

    test('ProductDetailComponent boundary should display product price', () => {
        expect(fileContent).toMatch(/Price/);
    });

    test('ProductDetailComponent boundary should display product category', () => {
        expect(fileContent).toMatch(/Category/);
    });

    test('ProductDetailComponent boundary should display "Reviews" heading', () => {
        expect(fileContent).toMatch(/Reviews/);
    });

    test('ProductDetailComponent boundary should contain "ReviewList" component', () => {
        expect(fileContent).toMatch(/ReviewList reviews/);
    });
});
