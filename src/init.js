const inquirer = require('inquirer');

function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee? (Required)",
            validate: nameInput  => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("What's the name of the employee? (Required)");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "What's the ID of the employee? (Required)",
            validate: IDInput => {
                if (IDInput) {
                    return true;
                } else {
                    console.log("What's the ID of the employee? (Required)");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the email of the employee? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("What's the email of the employee? (Required)");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What's the role of the employee?",
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'confirm',
            name: 'moreEmployees',
            message: 'Would you like to add more employees?',
            default: false
        }
    ]);
}

module.exports = init;