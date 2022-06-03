const Manager = require('../libs/Manager');
const Engineer = require('../libs/Engineer');
const Intern = require('../libs/Intern');

module.exports = async function parse(employees = []) {
    if(!employees) {
        return false;
    } else if (employees.length === 0) {
        return false;
    }

    const length = employees.length;
    for(let x = 0; x < length; x++) {
        const employee = employees.splice(0, 1)[0];

        switch(employee.role) {
            case 'Manager':
                employees.push(new Manager(employee.name, employee.ID, employee.email, employee.extra));
            break;
            case 'Engineer':
                employees.push(new Engineer(employee.name, employee.ID, employee.email, employee.extra));
            break;
            case 'Intern':
                employees.push(new Intern(employee.name, employee.ID, employee.email, employee.extra));
            break;
        }
    }

    return employees;
}