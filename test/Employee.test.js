const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object when called with the 'new' keyword", () => {
        const test = new Employee("Bob", "Builder", 1);
  
        expect(typeof(test) ==='object').toEqual(true);
      });
    });

    describe("GetName", () => {
        it("returns the employee name", () => {
          const test = new Employee("Bob", "Builder", 1);
    
          expect(test.getName()).toEqual(test.name);
        });
      });

      describe("GetRole", () => {
        it("returns employee", () => {
          const test = new Employee("Bob", "Builder", 1);
    
          expect(test.getRole()).toEqual("Employee");
        });
      });
});