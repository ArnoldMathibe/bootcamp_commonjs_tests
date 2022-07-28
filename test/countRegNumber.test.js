var assert = require("assert");
var countRegNumber = require("../countRegNumber.js");

describe("From a String To a List", function(){
    it("Count Total Of Registrations In Inserted", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it("Count Total Of Registrations In A Inserted", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328'), 9);
    });
    it("Should Write: No Registrations Provided, If There Are No Registrations Inserted", function(){
        assert.equal(countRegNumber(""), 'No Registrations Provided');
    });
});