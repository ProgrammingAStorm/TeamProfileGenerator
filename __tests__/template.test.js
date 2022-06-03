const parse = require('../src/parse');
const template = require('../src/template')

jest.mock('../src/parse');

test('Returns appropriately when passed a bad data.', () => {
    let employees = template();
    expect(employees).toBe(false);
    
    employees = template(undefined);
    expect(employees).toBe(false);

    employees = template(null);
    expect(employees).toBe(false);

    employees = template([]);
    expect(employees).toBe(false);

    employees = template(false);
    expect(employees).toBe(false);
});

test('Returns string to be written to index.html.', () => {
    const employees = parse();
    const output = template(employees);

    expect(output).toEqual(expect.any(String));
})

test('Returns string contatining certain html keywords', () => {
    const employees = parse();
    const output = template(employees);

    expect(output).toEqual(expect.stringContaining('<!DOCTYPE html>'));
    expect(output).toEqual(expect.stringContaining('<html lang="en">'));
    expect(output).toEqual(expect.stringContaining('</html>'));
    expect(output).toEqual(expect.stringContaining('<head>'));
    expect(output).toEqual(expect.stringContaining('</head>'));
    expect(output).toEqual(expect.stringContaining('<body>'));
    expect(output).toEqual(expect.stringContaining('</body>'));
}) 