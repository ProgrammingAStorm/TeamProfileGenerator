const Intern = require('../libs/Intern');

test('Intern instatiates with defualt data.', () => {
    const employee = new Intern();

    expect(employee.getName()).toBe('John Smith');
    expect(employee.getID()).toBe(1);
    expect(employee.getEmail()).toBe('johnsmith@email.com');
    expect(employee.getSchool()).toBe('school');
    expect(employee.getRole()).toBe('Intern');
});

test('Intern returns data passed into constructor.', () => {
    const employee = new Intern('Smith John', 25, 'email@johnsmith.com', 'cshool');

    expect(employee.getName()).toBe('Smith John');
    expect(employee.getID()).toBe(25);
    expect(employee.getEmail()).toBe('email@johnsmith.com');
    expect(employee.getSchool()).toBe('cshool');
    expect(employee.getRole()).toBe('Intern');
});