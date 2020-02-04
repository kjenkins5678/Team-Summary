const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var generalQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the Employee's Name"
    },
    {
        type: "list",
        message: "What is their Title?",
        name: "title",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "id",
        message: "Enter their unique id"
    }
];

var managerQuestions = [
  {
      type: "input",
      name: "office",
      message: "Enter the Manager's Office Number"
  }
];

function ask(generalQuestions) {
  inquirer.prompt(generalQuestions).then(answers => {
      if (answers.title == 'Manager'){
        ask(managerQuestions);
      }
  });
}

ask(generalQuestions);