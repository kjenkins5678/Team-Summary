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

function promptUser() {
  inquirer.prompt(generalQuestions).then(generalAnswers => {

    if (generalAnswers.title == 'Manager'){

        inquirer.prompt(managerQuestions).then(roleAnswers => {
          
          answers = {...generalAnswers, ...roleAnswers}
          //create classes and push here
          console.log(answers);

          if (answers.keepAsking) {
            console.log("asking again");
            promptUser();
          }
        })

      } else if (generalAnswers.title == 'Engineer'){

        inquirer.prompt(engineerQuestions).then(roleAnswers => {
          
          answers = {...generalAnswers, ...roleAnswers}
          //create classes and push here
          console.log(answers);

          if (answers.keepAsking) {
            console.log("asking again");
            promptUser();
          }
        })
        
      } else if (generalAnswers.title == 'Intern') {

        inquirer.prompt(internQuestions).then(roleAnswers => {
          
          answers = {...generalAnswers, ...roleAnswers}
          //create classes and push here
          console.log(answers);

          if (answers.keepAsking) {
            console.log("asking again");
            promptUser();
          }
        })

      } else {
        console.log("final else statement");
      }
  });
}

promptUser();