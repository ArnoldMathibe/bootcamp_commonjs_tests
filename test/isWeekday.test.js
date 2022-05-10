describe('Is Week Day?', function(){
    it('Should Check The Day And Tell If Its A Weekend', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('Should Check The Day And Tell If Its A Week Day', function(){
        assert.equal(isWeekday('Friday'), true);
    });
});