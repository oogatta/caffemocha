#!/usr/bin/env node

var spawn = require('child_process').spawn;
spawn('mocha', ['--compilers', 'coffee:coffee-script/register'].concat(process.argv.slice(2)), { stdio: 'inherit' });
