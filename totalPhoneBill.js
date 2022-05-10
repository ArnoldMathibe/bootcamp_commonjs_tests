var totalPhoneBill = function(bills)
{
    var call = 0;
    var sms = 0;
  
    var myBills = bills.split(', ');
  
    for(var i=0; i<myBills.length;i++)
    {
        var cs = myBills[i];
        if(cs === 'call')
        {
            call += 2.75
        }else
        {
            sms += 0.65
        }
    }
    var totalBill = call + sms;
    return 'R' + totalBill.toFixed(2);
}