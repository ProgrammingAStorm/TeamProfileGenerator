const Employee = require('./Employee');

jest.mock('./Employee');

module.exports = class Manager extends Employee{
    constructor(name = 'John Smith', id = 1, email = 'johnsmith@email.com', officeNumber = 1) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};