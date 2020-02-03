var inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
    }
    ]).then(function(data) {

        if(data.title === "Manager"){
            console.log("Manager");
        } else if (data.title === "Engineer"){
            console.log("Engineer")
        } else {
            console.log("Intern")
        }

    // theManager = new Manager(data.name, data.title, data.id);
    // console.log(theManager);
    // console.log(theManager.getRole());

});

