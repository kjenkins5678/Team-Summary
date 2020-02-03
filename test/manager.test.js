const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should return an object when called with the 'new' keyword", () => {
        const boss = new Manager("Bob", "Manager", 1);
  
        expect(typeof(boss) ==='object').toEqual(true);
      });
    });

      describe("GetRole", () => {
        it("returns Manager", () => {
          const boss = new Manager("Bob", "Manager", 1);
    
          expect(boss.getRole()).toEqual("Manager");
        });
      });
});