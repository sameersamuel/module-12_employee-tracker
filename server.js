const inquirer = require('inquirer');
const logo = require("asciiart-logo");
const dba = require("./db/dbAccess.js");

require("console.table");

const logotext = logo({name: "employee tracker"}).render();