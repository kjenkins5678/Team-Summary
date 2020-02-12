const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, title, id, email, githubName){
        super(name, title, id, email);
        this.githubName = githubName;
    }
}

module.exports = Engineer;