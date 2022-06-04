const init = require('./src/init');
const parse = require('./src/parse');
const template = require('./src/template');
const fs = require('fs');

//init() is called to get the answers about the employees from the user.
init()
//The returned answers are parsed into an array of employee objects.
.then(parse)
//The parsed objects are then inserted into the html template.
.then(template)
//And finally the template is written to './dist/index.html'.
//If index.html already exists, it is removed before writing the new file.
.then(output => {
    try {
        fs.unlinkSync('./dist/index.html');
    } catch (error) {}

    fs.appendFile('./dist/index.html', output, () => {
        console.log('Your team data has been formatted to ./dist/index.html');
    });
});