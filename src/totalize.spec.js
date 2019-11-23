const totalize = require("./totalize");

describe("Totalize tests", () => {
  describe("Kids Easy Mode", () => {
    it("First test", () => {
      const result = totalize();
      expect(result).toBeUndefined();
    });
  });
});
