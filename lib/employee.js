class Employee {
    constructor(name, title, id) {
      this.name = name;
      this.title = title;
      this.id = id;
    }

    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    getRole() {
      return 'Employee';
    }
}


module.exports = Employee;