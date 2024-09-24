const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ReviewManagement/ReviewForm.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ReviewFormComponent boundary should contain "Rating" input field', () => {
        expect(fileContent).toMatch(/rating/);
    });

    test('ReviewFormComponent boundary should contain "Comment" textarea field', () => {
        expect(fileContent).toMatch(/comment/);
    });

    test('ReviewFormComponent boundary should contain "Product ID" input field', () => {
        expect(fileContent).toMatch(/productId/);
    });

    test('ReviewFormComponent boundary should contain "User ID" input field', () => {
        expect(fileContent).toMatch(/userId/);
    });

    test('ReviewFormComponent boundary should contain "Submit" button', () => {
        expect(fileContent).toMatch(/submit/);
    });
});
