const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/UserManagement/UserForm.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('UserFormComponent boundary should contain "Name" input field', () => {
        expect(fileContent).toMatch(/name/);
    });

    test('UserFormComponent boundary should contain "Email" input field', () => {
        expect(fileContent).toMatch(/email/);
    });

    test('UserFormComponent boundary should contain "Password" input field', () => {
        expect(fileContent).toMatch(/password/);
    });

    test('UserFormComponent boundary should contain "Submit" button', () => {
        expect(fileContent).toMatch(/Submit/);
    });
});
