const palindrome = require("./palindrome")

test("checks if palindrome is true/false", () => {
    expect(palindrome("Taco cat")).toBe(true)
    expect(palindrome("word")).toBe(false)
});