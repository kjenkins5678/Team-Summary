const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should return an object when called with the 'new' keyword", () => {
        const boss = new Intern("Bob", "Intern", 1);
  
        expect(typeof(boss) ==='object').toEqual(true);
      });
    });

      describe("GetRole", () => {
        it("returns Intern", () => {
          const boss = new Intern("Bob", "Intern", 1);
    
          expect(boss.getRole()).toEqual("Intern");
        });
      });
});