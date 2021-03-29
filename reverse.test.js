const reverse = require("./reverse")

test("reverses string", () => {
    expect(reverse("word")).toBe("drow")
});