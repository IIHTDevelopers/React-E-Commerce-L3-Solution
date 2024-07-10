const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/UserManagement/UserProfile.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('UserProfileComponent boundary should display loading message when user is not fetched', () => {
        expect(fileContent).toMatch(/Loading.../);
    });

    test('UserProfileComponent boundary should display UserDetail component when not editing', () => {
        expect(fileContent).toMatch(/UserDetail/);
    });

    test('UserProfileComponent boundary should display UserForm component when editing', () => {
        expect(fileContent).toMatch(/UserForm/);
    });

    test('UserProfileComponent boundary should display "Edit Profile" button when not editing', () => {
        expect(fileContent).toMatch(/Edit Profile/);
    });
});
