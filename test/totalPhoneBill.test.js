import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe("Total Phone Bill", function(){
    it("Take String OF Calls & SMS's Made and Calculate Total", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("Take String OF Calls & SMS's Made and Calculate Total", function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("Take String Of SMS's Made and Calculate Total", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});