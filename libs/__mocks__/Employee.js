class Employee {
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

 module.exports = Employee;