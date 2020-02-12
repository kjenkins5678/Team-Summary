const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, title, id, email){
        super(name, title, id, email);
    }
}

module.exports = Engineer;