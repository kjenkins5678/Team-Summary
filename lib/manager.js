const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, id, officeNumber){
        super(name, title, id);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
      }
}

var boss = new Manager("elizabeth", "queen", 1, 99);

console.log(boss);
console.log(boss.getRole());

module.exports = Manager;