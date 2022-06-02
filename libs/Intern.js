const Employee = require('../libs/Employee');

jest.mock('./Employee');

class Intern extends Employee {
    constructor(name = 'John Smith', id = 1, email = 'johnsmith@email.com', school = 'school') {
        super(name, id, email);

        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;