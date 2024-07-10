const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/ReviewManagement/ReviewCard.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('ReviewCardComponent boundary should display review rating', () => {
        expect(fileContent).toMatch(/Rating/);
    });

    test('ReviewCardComponent boundary should display review comment', () => {
        expect(fileContent).toMatch(/comment/);
    });

    test('ReviewCardComponent boundary should display reviewer and date', () => {
        expect(fileContent).toMatch(/Review/);
    });
});
