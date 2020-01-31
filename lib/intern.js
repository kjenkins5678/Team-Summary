const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, title, id){
        super(name, title, id);
    }
    getRole() {
        return 'Intern';
      }
}

module.exports = Intern;