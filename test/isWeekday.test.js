var assert = require("assert");
var isWeekday = require("../isWeekday.js");

describe('Is Week Day?', function(){
    it('Should Check The Day And Tell If Its A Weekend', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('Should Check The Day And Tell If Its A Week Day', function(){
        assert.equal(isWeekday('Friday'), true);
    });
    it('Should Check The Day And Tell If Its A Week Day', function(){
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('Should Check The Day And Tell If Its A Week Day', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('Should Check The Day And Tell If Its A Weekend', function(){
        assert.equal(isWeekday('Sunday'), false);
    });
});