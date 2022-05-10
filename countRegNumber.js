function countRegNumber(regCount)
{
    var countReg = regCount.split(',');
    if (regCount == "") {
        return "No Registrations Provided";
    }else{
        return countReg.length;
    }
}