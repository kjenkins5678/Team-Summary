const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, title, id){
        super(name, title, id);
    }
    getRole() {
        return 'Intern';
      }

    sayHello() {
        return "Hello"
    }
}

var newbie = new Intern("bob", "builder", 1);

var test = newbie.sayHello();

console.log(test);

module.exports = Intern;