describe('How Many Years Ago', function(){
    it('Should Take In A Year, And Determine How Long Ago It Was', function(){
        assert.equal((new Date().getFullYear() - 1999), yearsAgo(1999))
    });
    it('Should Take In A Year, And Determine How Long Ago It Was', function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
    it('Should Take In A Year, And Determine How Long Ago It Was', function(){
        assert.equal((new Date().getFullYear() - 1983), yearsAgo(1983));
    });
});