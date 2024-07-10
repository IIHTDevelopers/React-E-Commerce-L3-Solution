const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/common/Header.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('HeaderComponent boundary should contain "E-commerce Platform" heading', () => {
        expect(fileContent).toMatch(/E-commerce Platform/);
    });

    test('HeaderComponent boundary should contain "Navigation" component', () => {
        expect(fileContent).toMatch(/Navigation/);
    });
});
