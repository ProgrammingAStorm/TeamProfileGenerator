const Manager = require('../../libs/Manager');
const Engineer = require('../../libs/Engineer');
const Intern = require('../../libs/Intern');

jest.mock('../../libs/Manager');
jest.mock('../../libs/Engineer');
jest.mock('../../libs/Intern');

module.exports = function parse() {
    return [
        new Manager('Smith John', 4, 'smithjohn@email.com', 20),
        new Engineer('John Doe', 5, 'johndoe@email.com', 'hubgit'),
        new Intern('Doe John', 6, 'doejohn@email.com', 'loohcs')
    ];
};