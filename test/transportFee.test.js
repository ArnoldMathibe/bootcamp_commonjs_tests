var assert = require("assert");
var transportFee = require("../transportFee.js");

describe("Which Shift", function(){
    it("Should Return R20 For Morning Shift", function(){
        assert.equal(transportFee('Morning'), 'R20');
    });
    it("Should Return R10 For Afternoon Shift", function(){
        assert.equal(transportFee('Afternoon'), 'R10');
    });
    it("Should Return Free For Night Shift", function(){
        assert.equal(transportFee('Nightshift'), 'free', 'for night shift return free');
    });
});