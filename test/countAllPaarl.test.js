import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('How Many From Paarl', function(){
    it('Take In Registration Numbers, And Count All From Paarl', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('Take In Registration Numbers, And Count All From Paarl', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});