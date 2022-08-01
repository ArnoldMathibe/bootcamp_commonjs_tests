var assert = require("assert");
var countAllPaarl = require("../countAllPaarl.js");

describe('How Many From Paarl', function(){
    it('Should Take In Registration Numbers, And Count All From Paarl', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('Should Take In Registration Numbers, And Count All From Paarl', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
    it('Should Take In Registration Numbers, and Return Zero If There Is No Paarl Registration', function(){
        assert.equal(0, countAllPaarl('CC 345 123, CK 345, CL 345, CK 123, CF 7483'));
    });
});