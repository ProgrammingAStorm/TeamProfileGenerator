const parse = require('../src/parse');
const init = require('../src/init');
const Manager = require('../libs/Manager');
const Engineer = require('../libs/Engineer');
const Intern = require('../libs/Intern');

jest.mock('../src/init');
jest.mock('../libs/Manager');
jest.mock('../libs/Engineer');
jest.mock('../libs/Intern');

test('Returns appropriately when passed a bad data.', async () => {
    let employees = await parse();
    expect(employees).toBe(false);
    
    employees = await parse(undefined);
    expect(employees).toBe(false);

    employees = await parse(null);
    expect(employees).toBe(false);

    employees = await parse([]);
    expect(employees).toBe(false);

    employees = await parse(false);
    expect(employees).toBe(false);
});

test('Returns employees in appropriate classes. (Single)', async () => {
    let input = await init();
    let employees = await parse(input);

    expect(employees[0]).toEqual(expect.any(Manager));
});

test('Returns employees in appropriate classes. (Multiple)', async () => {
    let input = await init();
    let employees = await parse(input);

    expect(employees[0]).toEqual(expect.any(Manager));
    expect(employees[1]).toEqual(expect.any(Engineer));
    expect(employees[2]).toEqual(expect.any(Intern));
});