var assert = require("assert");
var countAllFromTown = require("../countAllFromTown.js");

describe('Count How Many From Town', function(){
    it('Should Take In Registration Numbers, And Count All Registrations From Stellies', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contain
        assert.equal(fromStellies, 3);
    });
    it('Should Take In Registration Numbers, And Count All Registrations From KuilsRiver', function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CC 456, CL 341','CF');
        //fromKuilsriver should contain
        assert.equal(fromKuilsriver, 0);
    });
    it('Should Take In Registration Numbers, And Count All Registrations From KuilsRiver', function(){
        var fromKuilsriver = countAllFromTown('CF 124,CY 567,CF 345, CF 456, CL 341','CF');
        //fromKuilsriver should contain
        assert.equal(fromKuilsriver, 3);
    });
});
