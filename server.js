const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log('connected to the employee_db database.')
)

connection,connect((err) => {
    if (err) throw err;
    console.log("Connected to the database :D");
    start();
});

const questions = [
    {
        type: 'list',
        name: 'startmenu',
        message: "select view",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    }
]

async function init() {
const answers = await inquirer.prompt(questions);    
let startmenu = "";

}
init()

// GIVEN a command-line application that accepts user input

// WHEN I start the application (Complete)
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// WHEN I choose to view all departments ()
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles ()
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees ()
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department ()
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role ()
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee ()
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role ()
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 