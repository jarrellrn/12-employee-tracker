const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1",
  database: "homework12DB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

function main(){
    inquirer
  .prompt([
    {
      name: 'title',
      message: 'What would you like to do?',
      type: 'list',
      choices: []
    }
  ])
  .then(function(answers){
    if (answers.license === "ISC"){
        licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
  });
}