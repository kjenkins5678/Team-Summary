var inquirer = require("inquirer");

class Employee {
    constructor(name, title, id) {
      this.name = name;
      this.title = title;
      this.id = id;
    }

    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    // getEmail() {
    //   inquirer
    //     .prompt([
    //       {
    //         type: "input",
    //         message: "What is the employees email?",
    //         name: "email"
    //       }])
    //     .then(function(response) {
    //         // console.log(response.email)
    //         Employee.prototype.email = response.email;
    //       })
  // }

    getRole() {
      return 'Employee';
    }
}

var empl = new Employee("Bob", "Builder", "2");
console.log(empl);
// empl.getEmail();


module.exports = Employee;