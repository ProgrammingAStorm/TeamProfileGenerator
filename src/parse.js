const Manager = require('../libs/Manager');
const Engineer = require('../libs/Engineer');
const Intern = require('../libs/Intern');

//Parses the array of input and returns an array of objects of the class corresponding to each employee inputted.
module.exports = async function parse(employees = []) {
    if(!employees) {
        return false;
    } else if (employees.length === 0) {
        return false;
    }

    //Get the initial length of employees to use in a for loop.
    //.splice() is used to get the next employee while removing it from the list so that when the answer object is spliced, an employee object takes its place.
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