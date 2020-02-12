const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, id, email){
        super(name, title, id, email);
    }
}

module.exports = Manager;