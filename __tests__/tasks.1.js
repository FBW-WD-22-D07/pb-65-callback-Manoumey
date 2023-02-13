const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ ()/g, "");
const solution = rewire("../solution");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("Callbacks", () => {
  test("the function 'greetMessage' must be defined and tested with 'John', the phrase 'Good Morning, John' must be printed into the terminal", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("Good Morning, John")
  });

  test("the function 'greetUsers' must be defined and tested with the given array, the phrases 'Good Morning, John','Good Morning, Peter','Good Morning, Mark' must be printed into the terminal", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("Good Morning, John")
    expect(consoleSpy).toHaveBeenCalledWith("Good Morning, Peter")
    expect(consoleSpy).toHaveBeenCalledWith("Good Morning, Mark")
  });


});
