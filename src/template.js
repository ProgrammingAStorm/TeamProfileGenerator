// const fs = require('fs');
// const Manager = require('../libs/Manager');
// const Engineer = require('../libs/Engineer');
// const Intern = require('../libs/Intern');
// const { resolve } = require('path');

module.exports = function template(employees = []) {
    if(!employees) {
        return false;
    } else if (employees.length === 0) {
        return false;
    }

    let output = '            <div class="columns is-multiline is-centered is-variable">';

    employees.forEach(employee => {
        switch(employee.getRole()) {
            case 'Manager':
                output.concat(`                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title m-0">
                                ${employee.getName()}
                            </p>

                            <p class="card-header-title">
                                ${employee.getRole()}
                            </p>
                        </div>

                        <div class="card-content is-flex is-flex-direction-column has-background-grey-lighter">
                            <div class="content is-flex is-flex-direction-column has-background-white-ter p-4">
                                <div class="is-flex has-background-white-bis">
                                    <p class="m-0">
                                        ID:
                                    </p>
    
                                    <p class="mx-4">
                                        ${employee.getID()}
                                    </p>
                                </div>
    
                                <div class="is-flex has-background-white-bis my-2">
                                    <p class="m-0">
                                        Email:
                                    </p>
    
                                    <a class="ml-4" href="">
                                        ${employee.getEmail()}
                                    </a>
                                </div>
    
                                <div class="is-flex has-background-white-bis">
                                    <p class="m-0">
                                        Office number:
                                    </p>
    
                                    <p class="mx-4">
                                        ${employee.getOfficeNumber()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            break;
            case 'Engineer':
                output.concat(`                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title m-0">
                                ${employee.getName()}
                            </p>

                            <p class="card-header-title">
                                ${employee.getRole()}
                            </p>
                        </div>

                        <div class="card-content is-flex is-flex-direction-column has-background-grey-lighter">
                            <div class="content is-flex is-flex-direction-column has-background-white-ter p-4">
                                <div class="is-flex has-background-white-bis">
                                    <p class="m-0">
                                        ID:
                                    </p>
    
                                    <p class="mx-4">
                                        ${employee.getID()}
                                    </p>
                                </div>
    
                                <div class="is-flex has-background-white-bis my-2">
                                    <p class="m-0">
                                        Email:
                                    </p>
    
                                    <a class="ml-4" href="">
                                        ${employee.getEmail()}
                                    </a>
                                </div>
    
                                <div class="is-flex has-background-white-bis">
                                    <p class="m-0">
                                        GitHub:
                                    </p>
    
                                    <p class="mx-4">
                                        ${employee.getGitHub()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            break;
            case 'Intern':
                output.concat(`                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title m-0">
                                ${employee.getName()}
                            </p>

                            <p class="card-header-title">
                                ${employee.getRole()}
                            </p>
                        </div>

                        <div class="card-content is-flex is-flex-direction-column has-background-grey-lighter">
                            <div class="content is-flex is-flex-direction-column has-background-white-ter p-4">
                                <div class="is-flex has-background-white-bis">
                                    <p class="m-0">
                                        ID:
                                    </p>
    
                                    <p class="mx-4">
                                        ${employee.getID()}
                                    </p>
                                </div>
    
                                <div class="is-flex has-background-white-bis my-2">
                                    <p class="m-0">
                                        Email:
                                    </p>
    
                                    <a class="ml-4" href="">
                                        ${employee.getEmail()}
                                    </a>
                                </div>
    
                                <div class="is-flex has-background-white-bis">
                                    <p class="m-0">
                                        School:
                                    </p>
    
                                    <p class="mx-4">
                                        ${employee.getSchool()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            break;
        }
    });

    output.concat('            </div>');

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <header class="hero">
            <div class="hero-body has-background-danger-dark">
                <p class="is-size-2 has-text-primary has-text-centered has-text-weight-semibold">
                    My Team!
                </p>
            </div>
        </header>
        
        <main class="section">
            <div class="content">
${output}
            </div>
        </main>
    </body>
    </html>`;
}