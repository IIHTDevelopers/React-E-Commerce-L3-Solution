const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/common/PrivateRoute.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('PrivateRouteComponent boundary should contain "Route" component', () => {
        expect(fileContent).toMatch(/<Route/);
    });

    test('PrivateRouteComponent boundary should contain "Redirect" to "/login" when not authenticated', () => {
        expect(fileContent).toMatch(/login/);
    });
});
