var assert = require("assert");
var findItemsOver = require("../findItemsOver.js");

describe("Expensive Items", function(){
    it("Should Return Products With Quantity Over Threshold", function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });
    it("Should Return No Product Has Quantity Over Threshold", function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        var results2 = [];
        
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
    it("Should Return Products With Quantity Over Threshold", function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});