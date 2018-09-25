#!/usr/bin/env node
var shell = require('shelljs');
var path = require('path');

const newApp = process.argv.slice(2);
const gen3Dir = path.join(__dirname);

console.log('Creating a new Gen3 app using create-react-app...');
console.log();

shell.exec(`npm init react-app ${newApp}`);
shell.cd(`${newApp}`);

console.log();
console.log('Installing Gen3 dependencies...')
console.log();

shell.exec("npm install --save '@gen3/ui-component'");
shell.exec('npm install');
shell.exec('rm -rf src');
shell.exec(`cp -fR ${gen3Dir}/src src`);

console.log();
console.log('Gen3 app successfully created!');
console.log();
console.log('Run the following commands to get started:');
console.log(`cd ${newApp}`);
console.log('npm start');
console.log();
