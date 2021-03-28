const subtract = require("./subtract")

test("subtracts two numbers", () => {
    expect(subtract(3, 1)).toBe(2)
});