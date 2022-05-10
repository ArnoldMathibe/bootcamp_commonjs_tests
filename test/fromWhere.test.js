describe('From Where Exactly', function(){
    it('Should Take In A Car Registration and Return Bellville', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('Should Take In A Car Registration and Return Paarl', function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('Should Take In A Car Registration and Return Cape Town', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('Should Take In A Car Registration and Return Some Other Place', function(){
        assert.equal(fromWhere('CF'), 'Some other place!');
    });
});