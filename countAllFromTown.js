function countAllFromTown(regNumbers,townReg)
{
    let regNum = regNumbers.split(',');
    var counter = [];
    for(var i = 0; i<regNum.length; i++)
    {
        var myReg = regNum[i].trim();
        if(myReg.includes(townReg))
        {
            counter.push(myReg)
        }
    }
    return counter.length;
}