const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should return an object when called with the 'new' keyword", () => {
        const boss = new Manager("Bob", "Builder", 1, 100);
  
        expect(typeof(boss) ==='object').toEqual(true);
      });
    });

    describe("GetOfficeNumber", () => {
        it("returns the Manager's office number", () => {
          const boss = new Manager("Bob", "Builder", 1, 100);
    
          expect(boss.officeNumber).toEqual(100);
        });
      });

      describe("GetRole", () => {
        it("returns Manager", () => {
          const boss = new Manager("Bob", "Builder", 1, 100);
    
          expect(boss.getRole()).toEqual("Manager");
        });
      });
});