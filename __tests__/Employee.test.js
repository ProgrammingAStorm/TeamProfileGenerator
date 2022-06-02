const Employee = require('../libs/Employee');

test('Employee instatiates with defualt data.', () => {
    const employee = new Employee();

    expect(employee.getName()).toBe('John Smith');
    expect(employee.getID()).toBe(1);
    expect(employee.getEmail()).toBe('johnsmith@email.com');
    expect(employee.getRole()).toBe('Employee');
});

test('Employee returns data passed into constructor.', () => {
    const employee = new Employee('Smith John', 25, 'email@johnsmith.com');

    expect(employee.getName()).toBe('Smith John');
    expect(employee.getID()).toBe(25);
    expect(employee.getEmail()).toBe('email@johnsmith.com');
    expect(employee.getRole()).toBe('Employee');
});