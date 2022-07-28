module.exports = function yearsAgo(howManyYearsAgo)
{
    var ago;
    var thisYear = new Date().getFullYear();
    return ago = thisYear - howManyYearsAgo;
}