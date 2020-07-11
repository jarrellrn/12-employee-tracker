INSERT INTO department (name) VALUES ("Production");
INSERT INTO department (name) VALUES ("R&D");
INSERT INTO department (name) VALUES ("Management");
INSERT INTO department (name) VALUES ("Finance");

INSERT INTO role (title, salary, department_id) VALUES ("Developer", 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Joseph", "Marquez", 1, NULL);

SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM role;