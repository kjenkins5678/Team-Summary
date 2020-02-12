const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHtml = require('./generateHTML')

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
    },
    {
      type: "input",
      name: "email",
      message: "Enter their Email Address"
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
          
          let boss = new Manager(answers.name, answers.title, answers.id, answers.email, answers.office);
          
          output.push(boss);

          console.log(output);

          if (answers.keepAsking) {
            promptUser();
          } else {
            //Build HTML
            generateHtml.buildHtml(output);
          }
        })

      } else if (generalAnswers.title == 'Engineer'){

        inquirer.prompt(engineerQuestions).then(roleAnswers => {
          
          answers = {...generalAnswers, ...roleAnswers}
          
          let engin = new Engineer(answers.name, answers.title, answers.id, answers.email, answers.github);
          
          output.push(engin);

          console.log(output);


          if (answers.keepAsking) {
            console.log("asking again");
            promptUser();
          }
        })
        
      } else if (generalAnswers.title == 'Intern') {

        inquirer.prompt(internQuestions).then(roleAnswers => {
          
          answers = {...generalAnswers, ...roleAnswers}
          
          let intern = new Intern(answers.name, answers.title, answers.id, answers.email, answers.school);
          
          output.push(intern);

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

