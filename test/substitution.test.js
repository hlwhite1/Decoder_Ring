// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {

  it("Encoding: should maintain spaces in the message and special characters", () => {
        const expected = "elp xhm xf mbymwwmfj dne!";
        const actual = substitution("You are an excellent spy!","xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
        const expected = false;
        const actual = substitution("");
    expect(actual).to.equal(expected);
    });

    it("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
        const expected = false; 
        const actual = substitution(" ");
        expect(actual).to.equal(expected);
    });


    it("Should treat capital letters as lower case letters", () => {
    const upperCase = substitution("Hello WORLD");
    const lowerCase = substitution("hello world");
    expect(upperCase).to.equal(lowerCase);
    }); 
}); 
