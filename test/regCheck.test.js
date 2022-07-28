var assert = require("assert");
var regCheck = require("../regCheck.js");

describe("One Function That Checks Many", function(){
    it("Check If The Registration Number Is From Gauteng", function(){
        assert.equal(regCheck("17 ZZ 77 GP", "GP"), true);
    });
    it("Should Check if The Registration Number Is Not From Gauteng", function(){
        assert.equal(regCheck("003 DRM MP", "GP"), false);
    });
    it("Check If The Registration Number Is From Gauteng", function(){
        assert.equal(regCheck("45 AK 77 GP", "GP"), true);
    });
});