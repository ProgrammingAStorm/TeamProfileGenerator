const Manager = require('../libs/Manager');

test('Manager instatiates with defualt data.', () => {
    const employee = new Manager();

    expect(employee.getName()).toBe('John Smith');
    expect(employee.getID()).toBe(1);
    expect(employee.getEmail()).toBe('johnsmith@email.com');
    expect(employee.getRole()).toBe('Manager');
    expect(employee.getOfficeNumber()).toBe(1);
});

test('Manager returns data passed into constructor.', () => {
    const employee = new Manager('Smith John', 25, 'email@johnsmith.com', 64);

    expect(employee.getName()).toBe('Smith John');
    expect(employee.getID()).toBe(25);
    expect(employee.getEmail()).toBe('email@johnsmith.com');
    expect(employee.getRole()).toBe('Manager');
    expect(employee.getOfficeNumber()).toBe(64);
});