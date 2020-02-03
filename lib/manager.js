const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, id){
        super(name, title, id);
    }
}

module.exports = Manager;