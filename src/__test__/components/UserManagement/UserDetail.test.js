const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/UserManagement/UserDetail.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('UserDetailComponent boundary should display user name', () => {
        expect(fileContent).toMatch(/name/);
    });

    test('UserDetailComponent boundary should display user email', () => {
        expect(fileContent).toMatch(/Email/);
    });
});
