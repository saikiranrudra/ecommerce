const expect = require('chai').expect;

describe("Progress Bar Scripts Test", function () {
    before(function() {
        user = {
            email: "email@gmail.com",
            username: "username",
            password: "some password",
            street: "some street",
            landmark: "some landmark",
            city: "some city",
            state: "some state",
            mobileNo: "some mobile number"
        }
    })
    it("Define a function progressCalculate in src/scripts/progress", function() {
        const { progressCalculate } = require("./../src/scripts/progress");
        expect(progressCalculate).to.be.ok;
    })

    it("Return percentage % of properties of object filled", function() {
        const { progressCalculate } = require("./../src/scripts/progress");
        const percent = progressCalculate(user);
        expect(percent).to.be.a('number').gte(0).lte(100)
    })


    beforeEach(function() {
        user.landmark = "";
        user.city = "";
        user.mobileNo = "";
    })

    it("Testing with some values", function() {
        const { progressCalculate } = require("./../src/scripts/progress");
        expect(progressCalculate(user)).to.be.equal(63)
    })
})