const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object when called with the 'new' keyword", () => {
        const test = new Engineer("Bob", "Engineer", 1);
  
        expect(typeof(test) ==='object').toEqual(true);
      });
    });

    describe("GetName", () => {
        it("returns the employee name", () => {
          const test = new Engineer("Bob", "Engineer", 1);
    
          expect(test.getName()).toEqual(test.name);
        });
      });

      describe("GetRole", () => {
        it("returns employee", () => {
          const test = new Engineer("Bob", "Engineer", 1);
    
          expect(test.getRole()).toEqual("Engineer");
        });
      });
});