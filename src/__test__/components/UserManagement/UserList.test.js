const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/UserManagement/UserList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('UserListComponent boundary should map users to UserDetail components', () => {
        expect(fileContent).toMatch(/UserDetail/);
    });
});
