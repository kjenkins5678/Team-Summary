const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object when called with the 'new' keyword", () => {
        const test = new Engineer("Bob", "Builder", 1, "octocat");
  
        expect(typeof(test) ==='object').toEqual(true);
      });
    });

    describe("GetName", () => {
        it("returns the employee name", () => {
          const test = new Engineer("Bob", "Builder", 1, "octocat");
    
          expect(test.getName()).toEqual(test.name);
        });
      });

      describe("GetRole", () => {
        it("returns employee", () => {
          const test = new Engineer("Bob", "Builder", 1, "octocat");
    
          expect(test.getRole()).toEqual("Engineer");
        });
      });
});