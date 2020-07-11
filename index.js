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
    inquirer.prompt({
        name: 'main',
        message: 'What would you like to do?',
        type: 'list',
        choices: ["Add departments, roles, employees", "View departments, roles, employees", "Update employee roles"]
    }).then(function(answers){
        switch(answers.main){
            case "Add departments, roles, employees":
                console.log("You have chosen to add.");
                break;
            case "View departments, roles, employees":
                console.log("You have chosen to view.");
                break;
            case "Update employee roles":
                console.log("You have chosen to update.");
                break;
        }
    });
}

main();