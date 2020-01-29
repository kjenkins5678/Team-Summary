const Employee = require("../lib/employee");
// const inquirer = require('inquirer');

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

      // describe('test user input', () => {

      //   // stub inquirer
      //   let backup;
      //   before(() => {
      //     backup = inquirer.prompt;
      //     inquirer.prompt = (questions) => Promise.resolve({email: 'test'})
      //   })
      
      //   it('should equal test', () => {
      //     module(...).then(answers => answers.email.should.equal('test'))
      //   })
      
      //   // restore
      //   after(() => {
      //     inquirer.prompt = backup
      //   })
      
      // })

});