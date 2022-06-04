//Base class with the properties name, id, and email with the functions getName(), getID(), getEmail() and getRole().
//getRole() returns 'Employee'.
module.exports = class Employee {
    constructor(name = 'John Smith', id = 1, email = 'johnsmith@email.com') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}