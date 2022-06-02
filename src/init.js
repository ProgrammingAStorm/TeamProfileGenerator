const inquirer = require('inquirer');

async function init(oldEmployees) {
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
                    console.log("What's the name of the employee? (Required)");
                    return false;
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
    ])

    employees.push(answers);

    if (answers.moreEmployees) {
        return await init(employees);
    } else {
        return employees;
    }
}

module.exports = init;