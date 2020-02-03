const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var output = [];

var questions = [
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
    },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another employee? (just hit enter for YES)?',
    default: true
  }
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    if (answers.title == "Manager") {
        console.log("Manager");
    }
    if (answers.askAgain) {
      ask();
    } else {
    //   console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();