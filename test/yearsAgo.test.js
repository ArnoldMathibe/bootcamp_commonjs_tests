var assert = require("assert");
var yearsAgo = require("../yearsAgo.js");

describe('How Many Years Ago', function(){
    it('Should Take In A Year, And Determine How Long Ago It Was', function(){
        assert.equal(23, yearsAgo(1999))
    });
    it('Should Take In A Year, And Determine How Long Ago It Was', function(){
        assert.equal(22, yearsAgo(2000));
    });
    it('Should Return Same Year If Zero Is Passed', function(){
        assert.equal(0, yearsAgo(2022));
    });

});