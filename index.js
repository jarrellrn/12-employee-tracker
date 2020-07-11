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
////////////////////////////////////////////////////////////////
function add(){
    inquirer.prompt({
        name: 'add',
        message: 'What would you like to add?',
        type: 'list',
        choices: ["Department", "Role", "Employee"]
    }).then(function(answers){
        switch(answers.add){
            case "Department":
                return addDepartment();
            case "Role":
                return addRole();
            case "Employee":
                return addEmployee();
        }
    });
};

function addDepartment(){
    inquirer.prompt({
        name: 'departmentType',
        message: 'What department would you like to add?',
        type: 'input'
    }).then(function(answers){
        connection.query("INSERT INTO department (name) VALUES (?)", [answers.departmentType], function(err, result) {
            if (err) {
              throw err;
            }
            console.log("Added department.");
            return main();
          });
    });
}

function addRole(){
    inquirer.prompt([
        {
            name: 'roleTitle',
            message: 'What role would you like to add?',
            type: 'input'
        },
        {
            name: "roleSalary",
            message: "What is the role's salary?",
            type: "input"
        },
        {
            name: "roleDepartmentID",
            message: "Department ID?",
            type: "input"
        }
    ]).then(function(answers){
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answers.roleTitle, answers.roleSalary, answers.roleDepartmentID], function(err, result) {
            if (err) {
              throw err;
            }
            console.log("Added role.");
            return main();
          });
    });
}

function addEmployee(){
    inquirer.prompt([
        {
            name: 'employeeFN',
            message: "What is the employee's first name?",
            type: 'input'
        },
        {
            name: "employeeLN",
            message: "What is the employee's last name?",
            type: "input"
        },
        {
            name: "employeeRoleID",
            message: "What is the employee's role ID?",
            type: "input"
        },
        {
            name: "employeeManagerID",
            message: "What is the employee's manager's ID? (Please input null if no manager)",
            type: "input"
        }
    ]).then(function(answers){
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answers.employeeFN, answers.employeeLN, answers.employeeRoleID, answers.employeeManagerID], function(err, result) {
            if (err) {
              throw err;
            }
            console.log("Added employee.");
            return main();
          });
    });
}
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
main();