const init = require('./src/init');
const parse = require('./src/parse');
const template = require('./src/template');
const fs = require('fs');

init()
.then(parse)
.then(template)
.then(output => {
    try {
        fs.unlinkSync('./dist/index.html');
    } catch (error) {}

    fs.appendFile('./dist/index.html', output, () => {
        console.log('Your team data has been formatted to ./dist/index.html');
    });
});