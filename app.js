const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function ThePrompt (){
    inquirer.prompt([
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
            type: "confirm",
            name: "continue",
            message: "Do you want to enter more employees?"
        }
        ]).then(function(data) {
    
            if(data.title === "Manager"){
                // console.log("Manager");
            } else if (data.title === "Engineer"){
                // console.log("Engineer")
            } else {
                // console.log("Intern")
            }

            console.log(data.continue);
            keepGoing = data.continue;
            
    });
};

ThePrompt();

// if (keepGoing == true){
//     ThePrompt();
// } else {
//     console.log("Done");
// }




