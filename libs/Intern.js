const Employee = require('./Employee');

//Extends Employee and adds the property school and the method getSchool().
//getRole() returns 'Intern'.
module.exports = class Intern extends Employee {
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
};