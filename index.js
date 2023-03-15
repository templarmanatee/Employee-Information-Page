const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

const inquirer = require("inquirer");
const fs = require("fs");

const addManager = async () => {
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
      message: "Please enter the manager's ID.",
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
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
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
      name: "officeNumber",
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

  const { name, id, email, office } = input;
  const manager = new Manager(name, id, email, office);

  return manager;
};

const addEmployee = async () => {
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      // Employee Type
    },
    {
      // Manager's ID
    },
    {
      // Manager's email
    },
    {
      // Manager's office number
    },
  ]);
};

const createHtmlFile = (employeeData) => {};

addManager();
