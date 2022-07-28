module.exports = function isWeekday(weekDay)
{
    if(weekDay.startsWith("S"))
    {
      return false;
    }else if(weekDay.endsWith('day'))
    {
      return true;
    } 
}