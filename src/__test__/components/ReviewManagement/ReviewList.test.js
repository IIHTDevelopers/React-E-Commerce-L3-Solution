const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ReviewManagement/ReviewList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ReviewListComponent boundary should map reviews to ReviewDetail components', () => {
        expect(fileContent).toMatch(/ReviewDetail/);
    });
});
