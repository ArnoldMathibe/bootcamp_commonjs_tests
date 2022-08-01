var assert = require("assert");
var findItemsOver20 = require("../findItemsOver20.js");

describe("Expensive Items", function(){
    it("Should Return Quantity That Has Over 20 Values", function(){
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
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it("Should Return Quantity That Has Over 20 Values", function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 29},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        var results2 = [
            {name : 'pears', qty : 29}
        ];
        
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it("Should Return Empty Array if There Is No Quantity Over 20", function(){
        var itemList3 = [
            {name : 'apples', qty : 20},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 13},
            {name : 'apples', qty : 17}
        ];
        
        assert.deepEqual([], findItemsOver20(itemList3));
    });
});