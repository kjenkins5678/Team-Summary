const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, title, id){
        super(name, title, id);
    }
}

module.exports = Engineer;