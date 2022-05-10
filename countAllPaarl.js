function countAllPaarl(regNumbers)
{
    let regNum = regNumbers.split(',');
    var counter = [];
    for(var i = 0; i < regNum.length; i++)
    {
        let countRegNum = regNum[i].trim();
        if(countRegNum.startsWith('CJ'))
        {
            counter.push(countRegNum);
        }
    }
    return counter.length;
}