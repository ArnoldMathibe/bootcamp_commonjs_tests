import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('Count How Many From Town', function(){
    it('Take In Registration Numbers, And Count All From That Town', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contain
        assert.equal(fromStellies, 3);
    });
    it('Take In Registration Numbers, And Count All From That Town', function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromKuilsriver should contain
        assert.equal(fromKuilsriver, 1);
    });
});
