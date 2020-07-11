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
                return add();
            case "View departments, roles, employees":
                return view();
            case "Update employee roles":
                return update();
        }
    });
}
main();
////////////////////////////////////////////////////////////////
function add(){

};
/////////////////////////////////




////////////////////////////////////////////////////////////////
function view(){
    inquirer.prompt({
        name: 'view',
        message: 'What would you like to view?',
        type: 'list',
        choices: ["Departments", "Roles", "Employees"]
    }).then(function(answers){
        switch(answers.view){
            case "Departments":
                return viewDepartments();
            case "Roles":
                return viewRoles();
            case "Employees":
                return viewEmployees();
        }
    });
};

function viewDepartments(){
    connection.query("SELECT * FROM department", function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        return main();
      });
}

function viewRoles(){
    connection.query("SELECT * FROM role", function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        return main();
      });
}

function viewEmployees(){
    connection.query("SELECT * FROM employee", function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        return main();
      });
}

/////////////////////////////////




////////////////////////////////////////////////////////////////
function update(){

};
/////////////////////////////////
