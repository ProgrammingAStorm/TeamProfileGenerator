const Engineer = require('../libs/Engineer');

test('Engineer instatiates with defualt data.', () => {
    const employee = new Engineer();

    expect(employee.getName()).toBe('John Smith');
    expect(employee.getID()).toBe(1);
    expect(employee.getEmail()).toBe('johnsmith@email.com');
    expect(employee.getRole()).toBe('Engineer');
    expect(employee.getRole()).toBe('Engineer');
});

test('Engineer returns data passed into constructor.', () => {
    const employee = new Engineer('Smith John', 25, 'email@johnsmith.com');

    expect(employee.getName()).toBe('Smith John');
    expect(employee.getID()).toBe(25);
    expect(employee.getEmail()).toBe('email@johnsmith.com');
    expect(employee.getRole()).toBe('Engineer');
    expect(employee.getRole()).toBe('Engineer');
});