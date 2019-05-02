let chai = require("chai");
let expect = chai.expect;

let cardValidator = require("../index");

describe("card lib", () => {

    // describe("cardValidator", () => {
    //     it("card length is valid to check", () => {
    //         expect(cardValidator.cardValidator("57097570806")).to.equal(true);
    //     });
    //     it("card length is valid to check", () => {
    //         expect(cardValidator.cardValidator("145872")).to.equal(false);
    //     });
    //     it("card different numbers is valid to check", () => {
    //         expect(cardValidator.cardValidator("11111111111")).to.equal(false);
    //     });
    //     it("card codes validate is valid", () => {
    //         expect(cardValidator.cardValidator("57097570806")).to.equal(true);
    //     });
    //     it("card codes validate is valid", () => {
    //         expect(cardValidator.cardValidator("75489632145")).to.equal(false);
    //     });
    // });

    describe("checkLength", () => {
        it("it has 16 numbers", () => {
            expect(cardValidator.checkLength("7894561239876541")).to.equal(true);
        });
        it("it has 16 numbers", () => {
            expect(cardValidator.checkLength("145872")).to.equal(false);
        });
        it("it has 16 numbers", () => {
            expect(cardValidator.checkLength("145123465798652314")).to.equal(false);
        });
    });

    describe("checkIfSameNumber", () => {
        it("it has different numbers", () => {
            expect(cardValidator.checkIfSameNumber("1111111111111111")).to.equal(false);
        });
        it("it has different numbers", () => {
            expect(cardValidator.checkIfSameNumber("2543875466851247")).to.equal(true);
        });
    });

    // describe("checkCodesValidate", () => {
    //     it("the first number is equal to module", () => {
    //         expect(cardValidator.checkCodesValidate("57097570806")).to.equal(true);
    //     });
    //     it("the first number is equal to module", () => {
    //         expect(cardValidator.checkCodesValidate("73516511834")).to.equal(true);
    //     });
    //     it("the first number is equal to module", () => {
    //         expect(cardValidator.checkCodesValidate("75489632145")).to.equal(false);
    //     });
    // });
    
});
