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
      return this.title;
    }
}

module.exports = Employee;