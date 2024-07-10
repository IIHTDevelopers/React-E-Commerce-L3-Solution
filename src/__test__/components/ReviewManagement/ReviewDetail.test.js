const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ReviewManagement/ReviewDetail.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ReviewDetailComponent boundary should contain "ReviewCard" component with review prop', () => {
        expect(fileContent).toMatch(/ReviewCard/);
    });
});
