describe('Vehicle Registration Numbers', function(){
    it("Should Return True If Registration Is From Bellville", function(){
        assert.equal(isFromBellville("CY 456"), true);
    });
    it("Should Return False iF Registration Is Not From Bellville", function(){
        assert.equal(isFromBellville("CJ 876"), false);
    });
});