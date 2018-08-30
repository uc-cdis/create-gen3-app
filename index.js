#!/usr/bin/env node
var shell = require('shelljs');

const newApp = process.argv.slice(2);
const currentDir = process.cwd();
shell.exec(`npm init react-app ${newApp}`);
shell.cd(`${newApp}`);
shell.exec("npm install --save '@gen3/ui-component'");
shell.exec('npm install');
shell.cp(`${currentDir}/src/App.js`, 'src/App.js');
shell.cp(`${currentDir}/src/App.css`, 'src/App.css');
