const countries = require("./countries");

const { find } = countries;

test("passing an empty string into find returns an empty array", () => {
    const result = find("");
    expect(result).toEqual([]);
});

test("the array that is returned contains no more than four matches", () => {
    const result = find("a");
    expect(result.length).toBeLessThanOrEqual(4);
});

test("the search is case insensitive", () => {
    expect(find("AfgHAN")).toEqual(["Afghanistan"]);
});

test("if there are no matching countries, an empty array is returned", () => {
    expect(find("gjgyft")).toEqual([]);
});
