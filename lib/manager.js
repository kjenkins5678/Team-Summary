const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, id, email, officeNum){
        super(name, title, id, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;