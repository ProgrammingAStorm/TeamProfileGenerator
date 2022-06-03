const inquirer = require('inquirer');



module.exports = async function init(oldEmployees) {
    let employees

    if(!oldEmployees) {
        employees = [];
    } else {
        employees = oldEmployees;
    }      

    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee? (Required)",
            validate: nameInput  => {
                if (nameInput) {
                    return true;
                } else {
                    return "What's the name of the employee? (Required)";
                }
            }
        },
        {
            type: 'number',
            name: 'ID',
            message: "What's the ID of the employee? (Required)",
            validate: IDInput => {
                if (IDInput) {
                    return true;
                } else {
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
                    return "What's the email of the employee? (Required)";
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
            type: 'number',
            name: 'extra',
            message: "What's the office number of the manager? (Required)",
            when: ({ role }) => {
                if(role === 'Manager') {
                    return true;
                }
                return false;
            },
            validate: extraInput => {
                if(!extraInput) {
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'extra',
            message: "What's the GitHub of the engineer? (Required)",
            when: ({ role }) => {
                if(role === 'Engineer') {
                    return true;
                }
                return false;
            },
            validate: extraInput => {
                if(!extraInput) {
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'extra',
            message: "What's the school of the intern? (Required)",
            when: ({ role }) => {
                if(role === 'Intern') {
                    return true;
                }
                return false;
            },
            validate: extraInput => {
                if(!extraInput) {
                    return false;
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'moreEmployees',
            message: 'Would you like to add more employees?',
            default: false
        }
    ])

    employees.push(answers);

    if (answers.moreEmployees) {
        return await init(employees);
    } else {
        return employees;
    }
}