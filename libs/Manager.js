const Employee = require('./Employee');

class Manager {
    constructor(name = 'John Smith', id = 1, email = 'johnsmith@email.com', officeNumber = 1) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;