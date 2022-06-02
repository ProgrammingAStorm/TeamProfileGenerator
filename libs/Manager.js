const Employee = require('./Employee');

class Manager extends Employee{
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
}

module.exports = Manager;