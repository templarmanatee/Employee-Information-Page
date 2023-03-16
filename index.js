const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

const generateHtml = require('./src/generateHtml');

const inquirer = require("inquirer");
const fs = require("fs");

const employeeArray = [];

const generateManager = async () => {
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager of this team?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Please enter the manager's ID!");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email.",
      validate: (email) => {
        valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "Please enter the manager's office number",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Please enter an office number!");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);

  let { name, id, email, office } = input;
  let manager = new Manager(name, id, email, office);

  employeeArray.push(manager);
};

const generateEmployees = async () => {
  const input = await inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "Type of employee:",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter a valid name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
      validate: (idInput) => {
        if (isNaN(idInput)) {
          console.log("Enter a valid ID.");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the employee's email.",
      validate: (email) => {
        valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub?",
      when: (input) => input.employeeType === "Engineer",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter a GitHub username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
      when: (input) => input.employeeType === "Intern",
      validate: (valid) => {
        if (valid) {
          return true;
        } else {
          console.log("Please enter a school.");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Would you like to add more team members?",
      default: false
    },
  ]);

  let { name, id, email, employeeType, github, school, confirm } = input;
  let employee; 

  if (employeeType === 'Engineer') {
    const engineer = new Engineer(name, id, email, github);

    employee = engineer; 
  } else if (employeeType === 'Intern') {
    const intern = new Intern(name, id, email, school);

    employee = intern; 
  }
  employeeArray.push(employee);

  if(confirm) {
    await generateEmployees(); 
  }
};

const generateFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team view has been created in /dist/index.html");
    }
  });
};

const promptUser = async () => {
  await generateManager(); 
  await generateEmployees();

  const htmlData = generateHtml(employeeArray); 
  generateFile(htmlData); 
};

promptUser();
