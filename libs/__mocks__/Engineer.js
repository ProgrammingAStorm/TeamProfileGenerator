const Employee = require('./Employee');

jest.mock('./Employee');

module.exports = class Engineer extends Employee {
    constructor(name = 'John Smith', id = 1, email = 'johnsmith@email.com', github = 'github') {
        super(name, id, email);

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};