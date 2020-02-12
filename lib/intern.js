const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, title, id, email){
        super(name, title, id, email);
    }
}

module.exports = Intern;