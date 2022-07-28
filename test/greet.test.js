import assert from "assert";
import greet from "../greet.js";

describe('String Parameters and Concatenation', function()
{
    it("Should Greet Bob", function()
    {
        assert.equal(greet('Bob'), "Hello, Bob");
    });
    it("If An Empty String Is Passed, It Should Write Hello, My Friend", function()
    {
        assert.equal(greet(''), "Hello, My Friend");
    });
    it("Should Greet Arnold", function()
    {
        assert.equal(greet('Arnold'), "Hello,Arnold");
    });
})