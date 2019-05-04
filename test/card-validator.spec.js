let chai = require("chai");
let expect = chai.expect;

let cardValidator = require("../index");

describe("card lib", () => {

    describe("cardValidator", () => {
        it("card length is valid to check", () => {
            expect(cardValidator.cardValidator("4539983237489397")).to.equal(true);
        });
        it("card length is valid to check", () => {
            expect(cardValidator.cardValidator("145872")).to.equal(false);
        });
        it("card length is valid to check", () => {
            expect(cardValidator.cardValidator("14514587965412358872")).to.equal(false);
        });
        it("card different numbers is valid to check", () => {
            expect(cardValidator.cardValidator("1111111111111111")).to.equal(false);
        });
        it("card codes validate is valid", () => {
            expect(cardValidator.cardValidator("4539983237489397")).to.equal(true);
        });
        it("card codes validate is valid", () => {
            expect(cardValidator.cardValidator("4539983237489395")).to.equal(false);
        });
    });
});
