const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var output = [];

//The Questions

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
  },
  {
      type: "confirm",
      name: "keepAsking",
      message: "Add More Employees?"
  }
];

var engineerQuestions = [
  {
      type: "input",
      name: "github",
      message: "Enter the Engineer's Github Username"
  },
  {
      type: "confirm",
      name: "keepAsking",
      message: "Add More Employees?"
  }
];

var internQuestions = [
  {
      type: "input",
      name: "school",
      message: "Enter the Intern's School"
  },
  {
      type: "confirm",
      name: "keepAsking",
      message: "Add More Employees?"
  }
];

function ask(generalQuestions) {

  inquirer.prompt(generalQuestions).then(answers => {

    console.log("first propmt: " + JSON.stringify(answers));

      if (answers.title == 'Manager'){
        ask(managerQuestions);

      } else if (answers.title == 'Engineer'){
        ask(engineerQuestions);

      } else if (answers.title == 'Intern') {
        ask(internQuestions);

      } else {
        console.log("second prompt: " + JSON.stringify(answers));
      }

  });

}

ask(generalQuestions);